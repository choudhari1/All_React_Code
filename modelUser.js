const mongoose = require('mongoose')

const schemaUser = mongoose.Schema

const Usersch = new schemaUser({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('student',Usersch)