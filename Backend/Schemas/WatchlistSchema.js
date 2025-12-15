const { Schema } = require("mongoose");

const WatchlistSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "user", required: true, index: true },
    symbols: { type: [String], default: [] },
    updatedAt:{type: Date, default: Date.now },
})

module.exports = {WatchlistSchema};