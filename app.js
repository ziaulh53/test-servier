const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())


// mongoose.connect(url,{useNewUrlParser: true})

// const con = mongoose.connection

// con.on('open',()=>{
//     console.log('connected')
// })

const userRouter = require('./routes/user');

app.use('/users', userRouter)
