const express = require('express');
const router = express.Router();
// Load models
const User = require('../models/user');
const Metro = require('../models/metros');
const Ticket = require('../models/tickets');

// Dashboard
router.get('/', (req, res) => {
	return res.send("Welcome to the Cura API. Visit '/users' to view some data.")
});

// router.get('/hospitals', (req, res) => {
// 	Hospital.find({}, { __v: 0 }).then(hospital => {
// 		return res.send(hospital)
// 	})
// });

router.get('/users', (req, res) => {
	User.find({}, { _id: 0, __v: 0 }).then(users => {
		return res.send(users)
	})
});

// Register Post
// router.post('/hospitals', (req, res) => {
// 	Hospital.find().then(hospitals => {

// 		var hospitalData = {
// 			name: req.body.name,
// 			description: req.body.description,
// 			vaccines: req.body.vaccines,
// 			location: req.body.location
// 		}

// 		Hospital.create(hospitalData, (error, hospital) => {
// 			if (error) {
// 				console.log(error);
// 				return res.send('error occured');
// 			}
// 		});
// 		return res.redirect('/cura/hospitals')
// 	})

// });

// Register Post
router.post('/users', (req, res) => {

	var userData = {
		username: req.body.username,
		name: req.body.name
	}

	User.create(userData, (error, user) => {
		if (error) {
			console.log(error);
			return res.send('error occured');
		}
	});

	return res.redirect('/safar/users')

});

//get specific user

router.post('/user', (req, res) => {

	User.findOne({ username: req.body.username }).then(user => {
		return res.send(user)
	})

});

//update money
router.post('/money', (req, res) => {

	User.findOne({ username: req.body.username }).exec(function (err, user) {
		if (err) {
			console.log(err)
			res.send('error')
		} else {
			console.log(user)
			var initmoney = user.money
			user.money = initmoney + parseInt(req.body.money)
			user.save()
		}
	})

	return res.send({ msg: "Money added to account succesfully." })

});

//create ticket
router.post('/tickets', (req, res) => {

	var ticketData = {
		username: req.body.username,
		from: req.body.from,
		to: req.body.to
	}

	User.findOne({ username: req.body.username }).exec(function (err, user) {
		if (err) {
			console.log(err)
			res.send('error')
		} else {
			console.log(user)
			var initmoney = user.money
			user.money = initmoney + 50
			user.save()
		}
	})

	Ticket.create(ticketData, (error, ticket) => {
		if (error) {
			console.log(error);
			return res.send('error occured');
		}
	});

	return res.send({ msg: "Ticket booked succesfully" })

});


//get all tickets
router.get('/tickets', (req, res) => {
	Ticket.find({}, { _id: 0, __v: 0 }).then(users => {
		return res.send(users)
	})
});

//get specific tickets
router.post('/ticket', (req, res) => {

	Ticket.find({ username: req.body.username }, { __v: 0 }).then(tickets => {
		return res.send(tickets)
	})

});



// Metro stations
router.get('/metro', (req, res) => {
	var stations = [
		"AIIMS", "Airport", "Barakhambha Road", "Chandni Chowk", "Chawri Bazar", "Chhatarpur", "Delhi Aerocity", "Delhi Cantonment", "Dhaula Kuan", "Dwarka", "Ghitorni", "Greater Kailash", "Green Park", "HUDA City Centre", "Hauz Khas",
		"IFFCO Chowk", "IIT Delhi", "INA", "Jama Masjid", "Jor Bagh", "Kalindi Kunj", "Kalkaji Mandir", "Karol Bagh", "Kashmere Gate", "Khan Market", "Lajpat Nagar",
		"Lal Qila", "Malviya Nagar", "Mandi House", "Mayur Vihar", "Munirka", "Nehru Place", "New Delhi", "Noida City Centre", "Noida Sector 18", "Okhla Vihar",
		"Panchsheel Park", "Patel Chowk", "Pitam Pura", "Punjabi Bagh", "Qutub Minar", "R.K.Puram", "Rajiv Chowk", "Saket", "Sarojini Nagar",
		"Shalimar Bagh", "South Extension", "Terminal 1-IGI Airport", "Vasant Vihar", "Yamuna Bank"
	]
	return res.send(stations)
});

module.exports = router;