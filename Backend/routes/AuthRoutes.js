const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UsersModel } = require("../Model/UsersModel");
const { FundsModel } = require("../Model/FundsModel");

const sendEmail = require("../Utils/sendEmail");


// ------------------------ SIGNUP Route --------------------------

router.post("/signup", async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await UsersModel.create({ name, email, password: hashedPass });

        await FundsModel.create({
            userId: newUser._id,
            totalBalance: 100000,
            availableBalance: 100000,
            usedMargin: 0,
            transactions: [],
        });

        const token = jwt.sign(
            { id: newUser._id, email: newUser.email, },
            process.env.JWT_SECRET,
            { expiresIn: "3d" }
        );

        res.json({
            message: "SignUp sucessful",
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });


    } catch (err) {
        res.status(500).json({ message: "SignUp failed", Error: err.message });
    }
});

// ------------------------ LOGIN Route --------------------------

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UsersModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Incorrect password" });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
            },
        });

        user.lastActive = new Date();
        user.reminderSent = false; // reset reminder
        await user.save();

    } catch (err) {
        res.status(400).json({
            message: "Login failed",
            Error: err.message
        });
    }
});

// ------------------------ Send OTP Route --------------------------

let otpStore = {};

router.post("/sendotp", async (req, res) => {
    try {

        const { email } = req.body;


        if (!email) {
            return res.status(400).json({ message: "Email required" });
        }

        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);

        otpStore[email] = otp;

        await sendEmail(email,
            "Your OTP Code",
            `Your OTP is ${otp}. It is valid for 5 minutes.`);
        res.json({ message: "OTP sent sucessfully" });
    } catch (err) {
        res.status(500).json({ message: "Failed to send OTP" })
    }
});

// ------------------------ verify OTP Route --------------------------

router.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;

    if (otpStore[email] == otp) {
        delete otpStore[email];
        return res.json({ verified: true, message: "Email verified" });
    }
    res.status(400).json({ verified: false, message: "Invalid OTP" });
})

module.exports = router;