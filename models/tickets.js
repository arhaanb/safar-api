var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TicketSchema = new Schema({

	username: String,
	from: String,
	to: String,
	price: Number

});

module.exports = mongoose.model('Ticket', TicketSchema);