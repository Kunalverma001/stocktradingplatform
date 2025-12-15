const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth.js");

const { FundsModel } = require("../Model/FundsModel");

router.get("/funds", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        
        let funds = await FundsModel.findOne({ userId });

        if (!funds) {
            funds = await FundsModel.create({
                userId,
                totalBalance: 100000,
                availableBalance: 100000,
                usedMargin: 0,
                transactions: [],
            });
        }
        res.json(funds);
    } catch (err) {
        console.log("Error fetching funds", err);
        res.status(500).json({
            message: "Error fetching funds",
            error: err.message,
        })
    }
});

module.exports = router;
