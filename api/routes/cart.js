const Cart = require("../models/Cart");
const { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } = require("../utils/verifyToken");
const router = require('express').Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
    const newProduct = new Cart(req.body);
    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    }catch (err) {
        res.status(500).send(err);
    }
});

//Updating a user
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    
      try{
         const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
         res.status(200).json(updatedCart);
      } catch (err) {
         res.status(500).json(err);
      }
});

 //Deleting a Product
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
      try{
         await Cart.findByIdAndDelete(req.params.id);
         res.status(200).json("Product in cart has been deleted...");
      }  catch (err) {
         res.status(500).json(err)
      } 
})
//Get single User Cart
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
      try{
        const cart = await Cart.findOne({userId: req.params.userId});
        // const { password, ...others} = user._doc;
        res.status(200).json(cart); 
      }  catch (err) {
         res.status(500).json(err)
      } 
});
//Get all Cart by Admin user
router.get("/", verifyTokenAndAdmin, async (req, res) => {
     try{
        const carts = Cart.find();
        res.status(200).json(carts);
     }catch (err) {
        res.status(500).json(err)
     }   
});



 module.exports = router;