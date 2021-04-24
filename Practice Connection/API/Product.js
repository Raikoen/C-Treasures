const { response, Router } = require('express');
const express = require('express');
const Product = require('../DBConnection/Product');
const route = express.Router();
const path = require('path');
var assert = require('assert');
const { exit } = require('process');



route.get('/get', async (req,res)=>{
       // var resultArray = [];
        const product = await Product.find();
        //var length = product.length();

        
        res.render('Shop', {productObject : product});
        
        //res.sendFile(path.join(__dirname + '/Shop.html'));
        //res.sendFile('./Shop',);

       /*
        product.forEach(function(doc){
            if(doc.equals(!null)){
                console.log(doc.productName);
                resultArray.push(doc);
                
            } else {
                return 1;
                console.log('Could not find result');
            }
        }, function(){
            
        });
        */
        //res.render('Shop', {product: product});
        //res.sendFile('Shop.html', {
        //    root: path.join('../', './')
        //})
        
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