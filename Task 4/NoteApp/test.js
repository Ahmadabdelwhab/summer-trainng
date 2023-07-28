const fetch = require("node-fetch")

const response = fetch("POST", "localhost:3000/signup" ,null  , {
    userName: "ahmad",
    email :"ahmad@gmail.com",
    password:"password",
    role:"admin"
})
response.then((data)=>{
    console.log(datt)
})