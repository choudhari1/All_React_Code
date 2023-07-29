// const mongoose = require('mongoose');

// const userSchema = mongoose.Schema

// const Schema = new userSchema({
//     fname:{
//         type:String,
//         required: true
//     },
//     lname:{
//         type:String,
//         required:true
//     }
// })

// module.exports = mongoose.model('employees',Schema)

const mongoose = require("mongoose");

const userSchema = mongoose.Schema

const schema = new userSchema({
    fname:{
        type:String,
        required: true
    }
})

schema.pre('validate',function(next){
    if(!this.fname){
        next(new Error("the fname cannot be blank"))
    }else{
        next()
    }
})
module.exports = mongoose.model('user',schema)