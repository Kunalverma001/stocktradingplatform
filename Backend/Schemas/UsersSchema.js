const { Schema } = require("mongoose");

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastActive: {
        type: Date,
        default: Date.now,
    },
    reminderSent: {
        type: Boolean,
        default: false,
    },
});

module.exports = { UsersSchema };