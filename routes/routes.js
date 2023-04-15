const express = require("express")
const Model = require('../model/model')
const router = express.Router()

router.get('/users', async (req, res) => {
    try{
        const data = await Model.find();
        res.status(200).json(data)
    }catch(error){
        res.status(401).json({message: error.message})
    }
})

router.get('/users/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.status(200).json(data)
    }catch(error){
        res.status(401).json({message: error.message})
    } 
})

router.post('/users', async (req, res) => {
    const data = new Model({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email
    })
    try{
        const savedData = await data.save();
        res.status(201).json(savedData)
    }catch(error){
        res.status(400).json({
            error: error.message,
            message: "user save NOT successful"
        })
    }
})

router.put('/users/:id', async (req, res) => {
    try{
        const data = await Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(data)
    }catch(error) {
        res.status(400).json({message : error.message})
    }
})

router.delete('/users/:id', async (req, res) => {
    try{
        const data = await Model.findByIdAndDelete(req.params.id)
        res.status(200).json({message: `Document for ${data.name} with id ${req.params.id} deleted successfully!`})
    }catch(error){
        res.status(401).json({message: error.message})
    } 
})

module.exports = router