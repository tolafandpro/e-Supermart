const jwt = require("jsonwebtoken");

// Verifying User Token in there Header
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(403).json("Token is not valid!");
            req.user = user;
            next();
        })
    } else {
        return res.status(401).json("You are not authenticated!")
    }
}

// Verifying user Header Token and Auth 
const verifyTokenAndAuthorization = (req, res, next) => {
     verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin ) {
                next()
        }else {
            res.status(403).json("You are not allowed to access this site")
        }
     })
}
// Verifying user Header Token and Auth 
const verifyTokenAndAdmin = (req, res, next) => {
     verifyToken(req, res, ()=>{
        if( req.user.isAdmin ) {
                next()
        }else {
            res.status(403).json("You dont have access to this site")
        }
     })
}

// GET USER STATS

// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
// const date = new Date();
// const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try{

//         const data = await User.aggregate([
//             { $match: { createdAt: { $gte: lastYear } } },
//             { $project: { month: { $month: "$createdAt"},}},
//             { $group:{ _id: "$month", total:{ $sum: 1} } }
//         ]);
//         res.status(200).json(data)
//     }catch (err) {
//         res.status(500).json(err)
//     }

// } )

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };