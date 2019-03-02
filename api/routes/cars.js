const express = require('express');
const router = express.Router();
const carsController = require('../controllers/cars');

router.get('/get_all_cars', carsController.get_all_cars);
router.get('/get_all_cars_by_make_and_year/:make/:year', carsController.get_all_cars_by_make_and_year);
router.get('/get_all_cars_by_make_and_greater_than_doors_less_than_doors/:moreThanDoors/:lessThanDoors', carsController.get_all_cars_by_make_and_greater_than_doors_less_than_doors);

router.post('/add_new_car', carsController.add_new_car);
router.post('/add_new_car_user', )

module.exports = router;
