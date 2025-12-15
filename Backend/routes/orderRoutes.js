const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth.js");

const { OrdersModel } = require("../Model/OrdersModel");

router.get("/orders", auth, async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await OrdersModel.find({ userId: userId }).sort({ date: -1 });
        res.json(orders);
    } catch (err) {
        console.log("Error fetching orders:", err);
        res.status(500).json({
            message: "Error fetching Orders",
            Error: err.message,
        });
    }
});

module.exports = router;