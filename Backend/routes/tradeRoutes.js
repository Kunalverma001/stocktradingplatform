const express = require("express");
const router = express.Router();

const { HoldingsModel } = require("../Model/HoldingsModel");
const { PositionsModel } = require("../Model/PositionsModel")
const { FundsModel } = require("../Model/FundsModel");
const { OrdersModel } = require("../Model/OrdersModel");

const auth = require("../middleware/Auth.js");

// --------------Buy Stock------------------

router.post("/buyStock", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, qty, price } = req.body;

        if (!name || !qty || !price) {
            return res.status(400).json({ message: "Missing stock details" });
        }
        const totalCost = qty * price;

        // ---------------Finding Funds------------

        let funds = await FundsModel.findOne({ userId });

        if (!funds) {
            return res.status(400).json({ message: "Funds not initialized" })
        }

        if (funds.availableBalance < totalCost) {
            return res.status(400).json({ message: "Insufficient funds" })
        }

        // -----------Deducting Money Adding Transaction---------

        funds.availableBalance -= totalCost;
        funds.totalBalance -= totalCost;
        funds.usedMargin += totalCost;

        funds.transactions.push({
            type: "debit",
            description: `Buy ${name} x ${qty}`,
            amount: totalCost,
            date: new Date(),
            balanceAfter: funds.availableBalance,
        })

        await funds.save();

        // -------Update or create holdings------------

        let holding = await HoldingsModel.findOne({ userId, name });

        if (holding) {
            const totalQty = holding.qty + qty;

            holding.avg =
                (holding.avg * holding.qty + price * qty) / totalQty;
            holding.qty = totalQty;
            holding.price = price;
        } else {
            holding = new HoldingsModel({
                userId,
                name,
                qty,
                avg: price,
                price,
            });
        }
        await holding.save();

        // -------Update or create holdings------------

        let position = await PositionsModel.findOne({ userId, name });

        if (position) {
            const totalQty = position.qty + qty;

            position.avg =
                (position.avg * position.qty + price * qty) / totalQty;
            position.qty = totalQty;
            position.price = price;
            await position.save();
        } else {
            position = new PositionsModel({
                userId,
                product: "CNC",
                name,
                qty,
                avg: price,
                price,
            });
            await position.save();
        }

        // ---------Set Orders----------

        await OrdersModel.create({
            userId,
            name,
            qty,
            price,
            mode: "buy",
        })

        res.json({
            message: "Stock purchased successfully",
            funds,
            holding,
            position,
        });
    } catch (err) {
        console.error("Error in buyStock:", err);
        res.status(500).json({
            message: "Buy stock failed",
        });
    }
});


router.post("/sellStock", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const { name, qty, price } = req.body;

        if (!name || !qty || !price) {
            return res.status(400).json({
                message: "Missing stock detail"
            })
        }

        const totalGain = qty * price;

        let holding = await HoldingsModel.findOne({ userId, name });

        if (!holding) {
            return res.status(400).json({ message: "You don't own this stock!" });
        }

        if (holding.qty < qty) {
            return res.status(400).json({ message: "Not enough quantity to sell" });
        }

        holding.qty -= qty;

        if (holding.qty === 0) {
            await HoldingsModel.deleteOne({ _id: holding._id })
        } else {
            await holding.save();
        }

        let funds = await FundsModel.findOne({ userId });
        if (!funds) {
            return res.status(400).json({ message: "Funds not initialized" });
        }

        funds.availableBalance += totalGain;
        funds.totalBalance += totalGain;
        funds.usedMargin = Math.max(0, funds.usedMargin - totalGain);

        if (!funds.transactions) funds.transactions = [];
        funds.transactions.push({
            type: "credit",
            description: `Sell ${name} x ${qty}`,
            amount: totalGain,
            date: new Date(),
            balanceAfter: funds.availableBalance,
        });
        await funds.save();

        let position = await PositionsModel.findOne({ userId, name });

        if (position) {
            position.qty -= qty;
            position.price = price;

            if (position.qty <= 0) {
                await PositionsModel.deleteOne({ _id:position._id });
            } else {
                await position.save();
            }
        }

        await OrdersModel.create({
            userId,
            name,
            qty,
            price,
            mode: "sell",
            date: new Date(),
            status: "completed",
        });
        res.json({
            message: "Stock sold successfully",
            funds,
            holding,
            position,
        })
    } catch (err) {
        console.error("SELL ERROR", err);
        res.status(500).json({
            message: "Sell Failed",
        })
    }
});

module.exports = router;