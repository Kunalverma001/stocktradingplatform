const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth.js");

const { HoldingsModel } = require("../Model/HoldingsModel");

router.get("/holdings", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const allHoldings = await HoldingsModel.find({ userId: userId });
        res.json(allHoldings);
    } catch (err) {
        console.log("error fetching holdings");
        res.status(500).json({ message: "Error fetching holdings", Error: err.message });
    }
});

module.exports = router;