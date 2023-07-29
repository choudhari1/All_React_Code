const express = require('express');
const router = express.Router()
const modelUser = require('../Schema/modelUser')
router.get('/',async (req,res)=>{
    try {
        const data = await modelUser.find()
        res.json(data)
    } catch (error) {
        console.log(error)
    }
})

router.post('/create-data',async(req,res)=>{
    const userData = new modelUser({
        id:req.body.id,
        name:req.body.name,
        lname:req.body.lname
    })
    try {
        const savedata = userData.save()
        res.json(savedata)
    } catch (error) {
        console.log(error)
    }
})

router.put('/update/:id',async(req,res)=>{
    try {
        const updateData =  await modelUser.findByIdAndUpdate(req.params.id,req.body)
        res.json(updateData)
    } catch (error) {
        
    }
})

router.delete('/delete/:id',async(req,res)=>{
    const deleteData = await modelUser.findByIdAndDelete(req.params.id, req.body)
    res.json(deleteData)
})

module.exports = router