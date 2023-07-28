const mongoose = require('mongoose')

const ruleChoices = ["admin" , "basic"]
const userSchema = new mongoose.Schema({
    userName :{
        type : String,
        required: true,
    },
    email:{
        type : String,
        lowerCase:true,
        unique: true,
        match:/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
    },
    password:{
        type:String
    },
    role:{
        required:true,
        type : String,
        enum :ruleChoices,
    }
})
const User = mongoose.model("User" , userSchema);
module.exports =  User;
