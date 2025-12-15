const { Schema } = require("mongoose");

const TransactionSchema = new Schema({
    type: { type: String, enum: ["credit", "debit"], required: true },
    description: String,
    amount: Number,
    date: { type: Date, default: Date.now },
    balanceAfter: Number,
});

const FundsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true, index: true },
    totalBalance: Number,
    availableBalance: Number,
    usedMargin: Number,
    transactions: { type: [TransactionSchema], default: [] },
    createdAt: { type: Date, default: Date.now },
});

module.exports = { FundsSchema };