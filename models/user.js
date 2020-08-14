var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

	username: String,
	name: String,
	money: {
		type: Number,
		default: 0
	}

});

module.exports = mongoose.model('User', UserSchema);