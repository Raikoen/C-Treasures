const mongoose = require('mongoose');

const URI = "mongodb+srv://scarpenter5:Clayton1@cluster0.bby5d.mongodb.net/Products?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true
    });
    console.log('db connected...');
}

module.exports = connectDB;