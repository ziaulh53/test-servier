const express = require('express');
const user = require('../model/user');
const User = require('../model/user')
const router = express.Router()

router.get('/', async(req,res)=>{
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        res.send('Error' + error )
    }
})

router.get('/:id', async(req,res)=>{
    try {
        const users = await User.findById(req.params.id);
        res.json(users)
    } catch (error) {
        res.send('Error' + error )
    }
})

router.delete('/:id', async(req,res)=>{
    try {
        const users = await User.findById(req.params.id);
        const data = await users.remove();
    } catch (error) {
        res.send('Error' + error )
    }
})

router.post('/register', async(req,res)=>{
    console.log(req.params)
    const user = new User({
        ...req.body
    })
    try {
        const data = await user.save();
        res.json(data)
    } catch (error) {
        res.send('Error' + error )
    }
})

module.exports = router