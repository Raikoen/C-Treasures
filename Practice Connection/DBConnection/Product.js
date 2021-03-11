const mongoose = require('mongoose');

const product = new mongoose.Schema({

    productName:{
        type:String
    },
    productPrice:{
        type:Number
    },
    productColor:{
        type:String
    },
    procutType:{
        type:String
    },
    productSKU:{
        type:Number
    },
    productPicture:{
        type:String
    },
    productDescription:{
        type:String
    },
    productDetails:{
        type:String
    }

});

module.exports = Product = mongoose.model('product', product)
