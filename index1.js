const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const router = require('./routes/router')
const app = express()
app.use(cors())
app.use(bodyparser.json())
mongoose.connect("mongodb://localhost:27017/User")
.then(()=>console.log("db connected"))
.catch((err)=>console.log(err))


app.use(router)
app.listen(4000,()=>{
    console.log("listening to 8000")
})