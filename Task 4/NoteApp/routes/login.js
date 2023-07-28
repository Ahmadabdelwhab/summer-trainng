const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const User = require('../models/userModel')
const jwt = require("jsonwebtoken")
require("dotenv").config()
const authUser = (async (req , res , next)=>{
    const {email  , password} = req.body
    try{
        const user = await User.findOne({email: email})
        if(!user)
            return res.status(401).json({err :"credential mismatch 1"})
        const matched = bcrypt.compare(password , user.password);
        if(!matched)
            return res.status(401).json({err : "credentials mismatch"})
        req.body.user = user
    } catch (err) {
        res.status(500).json({err : "error during login"});
    }
    next(); 
})
const verifyToken = (req, res, next)=> {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Extract the token from the "Bearer <token>" format
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
        return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = user; // Attach the user information to the request for further processing
    next(); // Call the next middleware or route handler
    });
}
const genToken = (user)=> {
    // Replace "your-secret-key" with your actual secret key used for signing the token
    const secretKey = process.env.SECRET_KEY;
    // Customize the payload as per your requirements
    const payload = {
        userId: user._id,
        email: user.email,
      // Add more data as needed
    };
    // Set token expiration (optional). In this example, the token will expire in 1 hour.
    const expiresIn = "1h";
    // Create the token
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
}
router.post("/" , authUser , (req , res) => {
    const user = req.body.user;
    // return res.json(user);
    const token = genToken(user)
    res.status(200).json({token:token});
})


module.exports = router;