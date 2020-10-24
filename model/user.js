const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('Users', userSchema)