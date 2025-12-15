const express = require("express");
const router = express.Router();
const axios = require("axios");
const auth = require("../middleware/Auth");
const { WatchlistModel } = require("../Model/WatchlistModel");

const FINN_KEY = process.env.FINNHUB_KEY;

// Simple in-memory cache (symbol -> { ts, data })
const quoteCache = new Map();
const CACHE_TTL_MS = 15 * 1000; // 15s - adjust as needed

async function getQuote(symbol) {
    const now = Date.now();
    const cached = quoteCache.get(symbol);
    if (cached && now - cached.ts < CACHE_TTL_MS) return cached.data;

    // Finnhub quote endpoint
    const url = `https://finnhub.io/api/v1/quote?symbol=${encodeURIComponent(symbol)}&token=${FINN_KEY}`;
    const res = await axios.get(url);
    // res.data has {c: current, d: change, dp: percent, h, l, o, pc}
    const data = {
        symbol,
        price: res.data.c ?? 0,
        change: res.data.d ?? 0,
        changePercent: res.data.dp ?? 0,
    };
    quoteCache.set(symbol, { ts: now, data });
    return data;
}

// GET /api/watchlist  (user authenticated)
router.get("/", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        let wl = await WatchlistModel.findOne({ userId });
        if (!wl) {
            // create default watchlist for user (optional)
            wl = await WatchlistModel.create({ userId, symbols: ["AAPL", "TSLA", "RELIANCE.NS"] });
        }

        // Fetch quotes (parallel)
        const symbols = wl.symbols.slice(0, 50); // limit safety
        const quotePromises = symbols.map((s) => getQuote(s));
        const quotes = await Promise.all(quotePromises);

        res.json({ symbols: wl.symbols, quotes });
    } catch (err) {
        console.error("watchlist get error", err);
        res.status(500).json({ message: "Failed to fetch watchlist" });
    }
});

// POST /api/watchlist { symbol: "AAPL" }
router.post("/", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const { symbol } = req.body;
        if (!symbol) return res.status(400).json({ message: "Symbol required" });

        const up = await WatchlistModel.findOneAndUpdate(
            { userId },
            { $addToSet: { symbols: symbol.toUpperCase() }, updatedAt: new Date() },
            { upsert: true, new: true }
        );
        res.json({ message: "Added", watchlist: up });
    } catch (err) {
        console.error("watchlist add error", err);
        res.status(500).json({ message: "Failed to add symbol" });
    }
});

// DELETE /api/watchlist/:symbol
router.delete("/:symbol", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const symbol = req.params.symbol;
        const up = await WatchlistModel.findOneAndUpdate(
            { userId },
            { $pull: { symbols: symbol.toUpperCase() }, updatedAt: new Date() },
            { new: true }
        );
        res.json({ message: "Removed", watchlist: up });
    } catch (err) {
        console.error("watchlist remove error", err);
        res.status(500).json({ message: "Failed to remove symbol" });
    }
});

module.exports = router;