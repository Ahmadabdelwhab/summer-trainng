const express = require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
require("dotenv").config()
const authUser = ('/' , async (req , res , next)=>{
    const email = req.body.email;
    const password = req.body.password;
    try {
        const matched = await bcrypt.compare(password , req.body.password);
        if(!matched)
            return res.status(401).json({err : "credentials mismatch"})

    } catch (err) {
        
    }
    
})
// router.post()


module.exports = router;