const router = require("express").Router();
const {createUser, loginUser} = require("../controller/authController");

//REGISTER FUNCTION FOR USER REGISTRATION.
router.post("/register", createUser );

// User login section 
router.post("/login", loginUser );

module.exports = router;