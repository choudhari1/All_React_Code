const jwt = require("jsonwebtoken")
const secret = "pavan123";

function getUser(){
    return jwt.sign(
        {
            name:"abc",
            email:"abc@gmail.com"
        }
        ,secret)
}

console.log(getUser())