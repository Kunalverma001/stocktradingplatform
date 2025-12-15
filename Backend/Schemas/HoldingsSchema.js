const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true, index: true },
    name: { type: String, required: true }, // symbol or instrument name
    qty: { type: Number, required: true, default: 0 },
    avg: { type: Number, required: true, default: 0 }, // avg cost per share
    price: { type: Number, default: 0 }, // ltp
    net: { type: String, default: "+0.00%" },
    day: { type: String, default: "+0.00%" },
    isLoss: { type: Boolean, default: false },
    updatedAt: { type: Date, default: Date.now },
});

HoldingsSchema.index({ userId: 1, name: 1 }, { unique: true });

module.exports = { HoldingsSchema };