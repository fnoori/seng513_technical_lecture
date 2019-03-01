const express = require('express');
const app = express();
const mongoose = require('mongoose');

const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const carRoutes = require('./api/routes/cars');

mongoose.connect('mongodb://localhost:27017/tech_demo_lecture', { useNewUrlParser: true })
.then().catch(err => {
	console.log('Mongo Connection Error', err);
});

app.use('/cars', carRoutes);

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
