const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://arnolddominggo8:mardaup19@cluster0.jhueo.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.on('connected',()=>{
	console.log('Connection has been made');
});

connection.on('error',(err)=>{
	console.log('Connection error ');
});