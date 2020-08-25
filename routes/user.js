const express = require('express');
const router = express.Router();

// Disini perlu import mongoose lagi
const mongoose = require('mongoose');
const user = require('../models/users.js');

router.get('/',(req,res)=>{
	res.render('addEmployee',{
		data : false
	});
});

router.post('/',(req,res)=>{
	const value = req.body;
	console.log(value);

	if(value._id === ""){
		addNew(req,res,value);
	} else{
		updateUser(req,res,value);
	}
})

const addNew = (req, res, value) =>{
	const newUser = new user({
		name : value.name,
		email : value.email,
		mobile : value.mobile,
		address : value.address
	});

	newUser.save((err,doc)=>{
		if(!err){
			console.log('success');
			res.redirect('/list');
		} else{
			console.log('error bang');
		}
	})
}

const updateUser = (req,res,value) =>{
	user.findByIdAndUpdate(value._id,value,{new:true},(err,doc)=>{
		if(!err){
			res.redirect('/list');
		}else{
			console.log(err);
		}
	})
}


router.get('/list',(req,res)=>{
	const allUser = user.find((err,docs)=>{
		if(!err){
			console.log(docs);
			res.render('list',{
				data : docs
			});
		} else{
			console.log('Error retrieving data');
		}
	})
})


//ADD USER
router.get('/user/:id',(req,res)=>{
	user.findById(req.params.id,(err,doc)=>{
		if(!err){
			res.render('addEmployee',{
				data : doc,
				title : "Update user"
			});
		} else{
			console.log(err);
		}
	})
})


// DELETE USER
router.get('/user/delete/:id',(req,res)=>{
	user.findByIdAndRemove(req.params.id,(err,docs)=>{
		if(!err){
			res.redirect('/list');
		}else{
			console.log(err);
		}
	})
})

module.exports = router;