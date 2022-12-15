const mongoose = require("mongoose");

/**
 * This is the model for the User Schema.
 */

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        uniqued: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{timestamps: true}
);

const user =  mongoose.model("User", UserSchema);

module.exports = user;