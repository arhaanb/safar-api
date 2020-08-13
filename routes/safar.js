const express = require('express');
const router = express.Router();
// Load models
const User = require('../models/user');
const Hospital = require('../models/metros');

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
router.post('/hospitals', (req, res) => {
	Hospital.find().then(hospitals => {

		var hospitalData = {
			name: req.body.name,
			description: req.body.description,
			vaccines: req.body.vaccines,
			location: req.body.location
		}

		Hospital.create(hospitalData, (error, hospital) => {
			if (error) {
				console.log(error);
				return res.send('error occured');
			}
		});
		return res.redirect('/cura/hospitals')
	})

});

// Register Post
router.post('/users', (req, res) => {

	var userData = {
		username: req.body.username,
		name: req.body.name,
		money: req.body.money
	}

	User.create(userData, (error, user) => {
		if (error) {
			console.log(error);
			return res.send('error occured');
		}
	});

	return res.redirect('/safar/users')

});

router.post('/user', (req, res) => {

	User.findOne({ username: req.body.username }).then(user => {
		return res.send(user)
	})

});

module.exports = router;