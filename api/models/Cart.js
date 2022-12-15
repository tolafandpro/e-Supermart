const mongoose = require("mongoose");

/**
 * This is the model for the Cart Schema.
 */

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1,
            }
        }
    ]
},
{timestamps: true}
)

const cart = mongoose.model("Cart", CartSchema );

module.exports.cart = cart