const express = require("express");
const axios = require("axios");
const router = express.Router();

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY;

router.get("/news", async (req, res) => {
    try {
        const url = `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_API_KEY}`;

        const response = await axios.get(url);

        res.json(response.data.slice(0, 20)); // only 20 news articles
    } catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ message: "Failed to fetch news" });
    }
});

module.exports = router;