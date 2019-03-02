const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');

router.get('/get_all_cars', carsController.get_all_cars);

router.post('/add_new_car', carsController.add_new_car);
router.post('/add_new_car_user', )

module.exports = router;
