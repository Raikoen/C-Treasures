const { response, Router } = require('express');
const express = require('express');
const Product = require('../DBConnection/Product');
const route = express.Router();
const path = require('path');

route.get('/item/:productSKU', (req, res, next)=>{

    const productId = req.params.productSKU.substr(1,req.params.productSKU.length);
    console.log(productId);
    if(productId){
        Product.findOne({ productName : productId}, function(err, product){
            if(err){
                next(new Error("Couldn't find product: " + err));
                return;
            }
                
            req.product = product;
            next();
        })
    } else {
        next();
    }
    
}, function(req, res, next){
   // if(req.product == null){
    //    next();
    //    return;
    //}
    res.render("ProductPage", {productObject : req.product});
});

route.get('/get', async (req,res)=>{

    const product = await Product.find();
    res.render('Shop', {productObject : product});   
        
});

route.get('/about', async (req,res)=>{

    res.render('About');
    
});

route.get('/events', async (req,res)=>{

    res.render('events');
    
});

route.get('/cart', async (req,res)=>{

    res.render('cart');
    
});

route.get('/contact', async (req,res)=>{

    res.render('contact');
    
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