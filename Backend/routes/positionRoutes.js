const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth.js");

const { PositionsModel } = require("../Model/PositionsModel");

router.get("/positions", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const allPositions = await PositionsModel.find({ userId: userId });
        res.json(allPositions);
    } catch (err) {
        console.log("Error fetching position:", err);
        res.status(500).json({
            message: "Error fetching position",
            Error: err.message,
        });
    }

});

module.exports = router;