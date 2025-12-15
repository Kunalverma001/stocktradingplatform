const { model } = require("mongoose");

const { FundsSchema } = require('../Schemas/FundsSchema');

const FundsModel = model("fund", FundsSchema);

module.exports = { FundsModel };