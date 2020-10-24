const mongoose = require('mongoose')


const URI = 'mongodb+srv://test:practice@cluster0.cloau.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async()=>{
 await mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology:true});
 console.log('db connected...')
}


module.exports = connectDB;