require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

const { FundsModel } = require("./Model/FundsModel");

const tradeRoutes = require("./routes/tradeRoutes");
const orderRoute = require("./routes/orderRoutes");
const fundsRoute = require("./routes/fundsRoutes");
const newsRoutes = require("./routes/newsRoutes");
const holdingRoute = require("./routes/holdingRoutes");
const positionRoute = require("./routes/positionRoutes")

const authRoutes = require("./routes/AuthRoutes.js");
const watchlistRoutes = require("./routes/watchlistRoutes");


const PORT = process.env.PORT;
const URL = process.env.MONGO_URL;

mongoose.connect(URL)
    .then(async () => {
        console.log("DB connected");
        app.listen(PORT, () => console.log(`App started on ${PORT}`));
        require("./jobs/cleanUpJob");
    })
    .catch((err) => {
        console.error("Failed to connect to DB:", err);
    });

app.use(express.json());
app.use(cors());

app.use("/api", tradeRoutes);
app.use("/api", orderRoute);
app.use("/api", fundsRoute);
app.use("/api", newsRoutes);
app.use("/api", authRoutes);
app.use("/api", holdingRoute);
app.use("/api", positionRoute);
app.use("/api/watchlist", watchlistRoutes);