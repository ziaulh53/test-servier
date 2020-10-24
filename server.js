const express = require('express')
const connectDB = require('./DB/connection')

const app = express();

connectDB();
const port = process.env.PORT || 5000;

app.listen(port, ()=> {console.log('server started')})
