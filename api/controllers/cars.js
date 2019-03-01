const mongoose = require('mongoose');
const CarsModel = require('../models/cars');

exports.get_all_cars = (req, res, next) => {
  CarsModel.find().exec()
  .then(cars => {
    res.status(201).json(cars);
  }).catch(findErr => {
    return res.status(500).json({'error': findErr});
  });
}

exports.add_new_car = (req, res, next) => {
  return res.json(req.body);
}
