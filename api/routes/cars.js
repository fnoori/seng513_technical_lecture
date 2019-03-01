const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');

router.get('/get_all_cars', carsController.get_all_cars);

module.exports = router;
