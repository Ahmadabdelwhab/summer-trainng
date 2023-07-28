const express = require("express")
require("./connection/connectToDb.js")
require("dotenv").config() 
const signUpRouter = require("./routes/signup.js")
const logInRouter = require("./routes/login.js")
const app = express()
app.use(express.json())
app.use('/signup', signUpRouter)
app.use('/login' , logInRouter)
app.listen(3000 , ()=>{
    console.log("serever connected .... ");
    console.log(`secret key = ${process.env.SECRET_KEY}`)
}) 




app.get("/" , (req , res)=>
{
    res.json({ahmad:"ahmad" , name:"sayed"})
})
