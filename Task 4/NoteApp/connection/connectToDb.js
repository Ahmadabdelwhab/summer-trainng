const mongoose = require('mongoose')

try{
    mongoose.connect("mongodb://localhost:27017/noteApp")
    console.log("connected to database ...")
}catch(err){
    console.log(err.message)
}