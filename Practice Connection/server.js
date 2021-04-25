const express = require('express');
const connectDB = require('./DBConnection/Connection');
const app = express();
const path = require('path');

connectDB();

app.use(express.json({extended:false}));


//app.set('views', path.join(__dirname, 'views'));
//app.engine('html', engines.mustache);
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));

app.use('/api/productModel', require('./Api/Product'));
const Port = process.env.Port || 3000;

app.listen(Port,()=>console.log('Server started Port:', Port));