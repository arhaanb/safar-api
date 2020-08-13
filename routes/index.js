const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

// // Routes
// app.post('/api/reqs', (req, res, next) => {
// 	var transporter = nodemailer.createTransport({
// 		service: 'Gmail',
// 		auth: {
// 			user: 'arhaanb@gmail.com', // Your email id
// 			pass: 'no' // Your password
// 		}
// 	});


// 	var text = req.body.school + ' has confirmed their attendance for MINET X 2020.\n'
// 		+ '\n Name of institution: ' + req.body.school
// 		+ '\n Incharge name: ' + req.body.name
// 		+ '\n Incharge email: ' + req.body.email
// 		+ '\n Website and other links: ' + req.body.website;

// 	var mailOptions = {
// 		from: 'arhaanb@gmail.com', // sender address
// 		to: 'arhaanb+responses@gmail.com', // list of receivers
// 		subject: 'Confirmation by ' + req.body.school, // Subject line
// 		text: text //, // plaintext body
// 	};

// 	transporter.sendMail(mailOptions, function (error, info) {
// 		if (error) {
// 			console.log(error);
// 			return res.json({ msg: "An error ocurred." });
// 		} else {
// 			return res.json({ msg: "Your request has been sent." });
// 		};
// 	});

// });

module.exports = router;