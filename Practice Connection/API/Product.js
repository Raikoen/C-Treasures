const { response, Router } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const Product = require('../DBConnection/Product');
const route = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

const URI = "mongodb+srv://scarpenter5:Clayton1@cluster0.bby5d.mongodb.net/Products?retryWrites=true&w=majority";


route.get('/get', async (req,res)=>{

        const product = await Product.find();
        res.json(product);

});

route.post('/', async (req,res)=>{
    const{productName, productPrice, productColor, productType, productSKU, productPicture, productDescription, productDetails} = req.body;
    let product = {};
    product.productName = productName;
    product.productPrice = productPrice;
    product.productColor = productColor;
    product.productType = productType;
    product.productSKU = productSKU;
    product.productPicture = productPicture;
    product.productDescription = productDescription;
    product.productDetails = productDetails
    let productModel = new Product(product);
    await productModel.save();
    res.json(productModel);
});


module.exports = route;