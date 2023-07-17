const express = require("express")
require("dotenv").config
const app  =  express();
const sports = require("./routes/sports")
const users = require("./routes/users")
const animals = require("./routes/animals")
const port = process.env.PORT || 3000
app.use("/sports" , sports) 
app.use("/animals" , animals) 
app.use("/users" , users) 
app.get("/" , (req ,res )=>{
    
    res.send({name:"ahmad"});
})
app.listen(port , ()=>console.log(`server is up and running on ${port}`));
