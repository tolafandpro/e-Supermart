const mongoose = require("mongoose");

/**
 * This is the model for the Order Schema.
 */

const OrderSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    products: [ { productId: { type: String}, quantity: {type: Number, default: 1, } } ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: Object, default: "pending" },
},
{timestamps: true}
);

const order = mongoose.model("Order", OrderSchema);

module.exports = order