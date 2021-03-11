const express = require('express');
const mongoose = require('mongoose');
const Product = require('../DBConnection/Product');
const route = express.Router();

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