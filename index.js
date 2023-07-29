const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const router = require('./routes/router')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Company",{useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>console.log("connected success"))
.catch((err)=>console.log('err',err))
app.use(cors())
app.use(bodyparser.json())
app.use(router)
// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
 
app.listen(8000,(err)=>{
    if(err){
        console.log('there is error in starting the server',err)
    }
    else{
        console.log('server is listening at 8000')
    }
})

// const express = require('express');
// const cors = require('cors');
// const bodyparser = require('body-parser');
// const mongoose = require('mongoose')
// const router = require('./routes/routes')
// const app = express()
// app.use(cors())
// app.use(bodyparser.json())
// mongoose.connect("mongodb://localhost:27017/student")
// .then(()=>console.log("connected success"))
// .catch((err)=>console.log(err))

// app.use(router)
// app.listen(8000,(err)=>{
//     if(err){
//         console.log("cannot connect");
//     }else{
//         console.log("listning to 8000")
//     }
// })

