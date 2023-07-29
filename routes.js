//const { v4: uuid } = require('uuid');
// const userModel = require('../Schema/userModel')
// const express = require('express')

// const router = express.Router()


// router.get('/', async(req,res)=>{
//     try {
//         const data = await userModel.find()
//         res.send(JSON.stringify(data))
//     } catch (error) {
        
//     }
// })

// router.post('/create-user', async(req,res)=>{
//     const userData = new userModel({
//         fname:req.body.fname,
//         lname:req.body.lname
//     })
//     try {
//         const data = await userData.save()
//         res.json(data)
        
//     } catch (error) {
        
//     }
// })


const express = require('express')
const router = express.Router()
const userModel = require('../Schema/userModel')
router.get('/',async(req,res)=>{
    try {
        const userdata = await userModel.find()
        res.send(JSON.stringify(userdata))
    } catch (error) {
        console.log(error)
    }
})

router.post('/create',async(req,res)=>{
    const userData = new userModel({
        fname:req.body.fname
    })
    const data = await userData.save()
    res.json(data)
})

router.put('/update/:id',async(req,res)=>{
    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id,req.body)
        res.json(updateUser)
    } catch (error) {
        
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id,req.body)
        res.json(deleteUser)
    } catch (error) {
        
    }
})
module.exports = router