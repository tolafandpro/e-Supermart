const User  = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

const createUser = async (req, res, next) => {
    let newUser = await User.findOne({email: req.body.email});
    res.status(400).send('Email has been registered by another User');
    
    try{
          //Creating a new user with hashing the password with cryptoJS 
        newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });
    // Saving the user to the MongoDB once all details are completed
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }catch (err) {
        next();
    }
};


const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) res.status(401).json("Invalid User");

        const hashedpassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC);
        const inputPassword = hashedpassword.toString(CryptoJs.enc.Utf8);

        // Checking if user password is valid 
        inputPassword !== req.body.password &&
         res.status(401).json("Invalid password!");

            //Using JWT to sign the user ID, Admin, JWT secret key and adding token expiration day 
         const accessToken = jwt.sign({id: user._id,isAdmin: user.isAdmin}, process.env.JWT_SEC, {expiresIn:"3d"});

        const { password, ...others} = user._doc;

        res.status(200).json({...others, accessToken});
    }catch(err) {
        res.status(500).json(err)
    }
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;