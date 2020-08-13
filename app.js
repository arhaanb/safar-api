const express = require('express');
const mongoose = require('mongoose');
// var MongoStore = require('connect-mongo')(session);
var cors = require('cors')
const app = express();
app.use(cors())
// Express body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DB Config
const db = 'mongodb+srv://arhaanb:mujhseshaadikarogi@passport-qsvlu.mongodb.net/safar?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
	.connect(
		db,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

// Routes
app.use('/', require('./routes/index.js'));
app.use('/safar', require('./routes/safar.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));