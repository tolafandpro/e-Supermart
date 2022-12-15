const mongoose = require("mongoose");

/**
 * This is the model for the Products Schema.
 */

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true,
        uniqued: true,
    },
    img: {
        type: String,
        required: true,
    },
    categories: {
        type: Array,
    },
    size: {
        type: Array,
    },
    color: {
        type: Array,
    },
    price: {
        type: Number,
        required: true
    },
    inStock: { type: Boolean, default: true }
},
{timestamps: true}
);

const product =  mongoose.model("Product", ProductSchema);

module.exports = product;