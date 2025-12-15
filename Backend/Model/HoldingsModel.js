const { model } = require("mongoose");

const { HoldingsSchema } = require("../Schemas/HoldingsSchema");

const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };