var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HospitalSchema = new Schema({

	name: String,
	description: String,
	vaccines: String,
	location: String

});

module.exports = mongoose.model('Hospital', HospitalSchema);