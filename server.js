// Get database
require('./models/db');

//Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Controller
const userRoute = require('./routes/user.js');

//Init express 
const app = express();

// View Engine
app.set('view engine', 'ejs');

// Body parser
app.use(bodyParser.urlencoded({extended : true}));

// Static file
app.use(express.static(path.join(__dirname,'/public')));

// Start server
app.listen(3000,()=>{
	console.log("App started at port 3000");
})

// Uset the controller
app.use('/',userRoute);
