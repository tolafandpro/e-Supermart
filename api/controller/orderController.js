const Order = require("../models/Order");
const router = require('express').Router();


//CREATE new Order
const createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder)
    }catch (err) {
        res.status(500).send(err);
    }
} ;


//Updating a Order
const updateOrd = async (req, res) => {
    
    try{
       const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
       res.status(200).json(updatedOrder);
    } catch (err) {
       res.status(500).json(err);
    }
};

module.exports.createOrder = createOrder;
module.exports.updateOrd = updateOrd;