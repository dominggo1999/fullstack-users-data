const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	name : {
		type : String
	},
	email : {
		type : String
	},
	mobile : {
		type : String
	},
	address : {
		type : String
	}
});

const user = mongoose.model('user',userSchema);

module.exports = user;