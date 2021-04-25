const { response, Router } = require('express');
const express = require('express');
const Product = require('../DBConnection/Product');
const route = express.Router();
const path = require('path');


route.get('/get', async (req,res)=>{
        const product = await Product.find();
        res.render('Shop', {productObject : product});
        
        
});



route.get('/:productSKU', async(req, res)=>{
    const productId = req.params.productSKU.substr(1,req.params.productSKU.length);
    console.log(productId);
    const product = await Product.findOne({ productName : productId});
    console.log(product.productName);
    res.render("ProductPage", {productObject : product});
    
    
});

  route.get('/about', (req,res)=>{
    //const product = await Product.find();
    res.sendFile('About');

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
})


module.exports = route;