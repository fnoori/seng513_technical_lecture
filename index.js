const express = require('express');
const app = express();


// install " npm install --save mongoose "
// import mongoose
const mongoose = require('mongoose');


const bodyParser = require('body-parser');
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const carRoutes = require('./api/routes/cars');
const userRoutes = require('./api/routes/users');


// connect to mongodb
// if using newer versions of mongodb, must add { useNewUrlParser: true }
mongoose.connect('mongodb://localhost:27017/tech_demo_lecture', { useNewUrlParser: true })
.then().catch(err => {
	console.log('Mongo Connection Error', err);
});


// enable bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/cars', carRoutes);
app.use('/users', userRoutes);

// error handling
app.use((req, res, next) => {
	const error = new Error('Route Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message
		}
	});
});

server.listen(port);
console.log(`Listening on port: ${port}`);
