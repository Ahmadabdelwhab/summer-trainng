const express = require('express');
const bcrypt = require("bcrypt")
const User = require("../models/userModel")
// import Note from "../models/noteModel";

const router = express.Router(); 

//add new user
router.post('/createuser' , (req , res)=>{

    //encrypting the password
    (async () => {
        try {
            if (!req.body.password) {
                return res.status(400).json({ message: "Password is required" });
            }
            const hash = await bcrypt.hash(req.body.password, 10);
            req.body.password = hash
            // Store the 'hash' in the database for this user
            await User.create(req.body);
            res.json({message:"success"})
            console.log('Hashed pass    ', hash);
            
        } catch (err) {
            res.json({error: err.message})
            console.error('Error :', err.message);
        }
    })();

})
router.get("/" , (req , res)=>{
    res.status(200).json({msg:"hello world"})
})
module.exports= router;


