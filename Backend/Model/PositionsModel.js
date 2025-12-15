const { model } = require("mongoose");

const { PositionsSchema } = require("../Schemas/PositionsSchema");


const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };