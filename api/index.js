const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const usersRoute = require('./routes/user');
const ordersRoute = require('./routes/order');
const cartRoute = require('./routes/cart');
const productsRoute = require('./routes/product');
const authRoute = require('./routes/auth');
const cors = require('cors');

const app = express();
dotenv.config();

async function dbConnection() {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
    }
    catch(err){
        console.log(err, "An error occoured while connecting to db");
        throw err;
    }

}

//Middleware Section
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/products', productsRoute);
app.use('/api/orders', ordersRoute);
app.use('/api/carts', cartRoute);

const port = process.env.PORT || 5000;
app.listen( port, () => {
    dbConnection()
    console.log("app listen to Port 5000")});