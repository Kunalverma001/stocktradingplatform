const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true, index: true },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    price: { type: Number, required: true },
    mode: { type: String, enum: ["buy", "sell"], required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, default: "completed" },
})

module.exports = { OrdersSchema };