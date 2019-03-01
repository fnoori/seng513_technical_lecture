const mongoose = require('mongoose');
const Cars = require('../models/cars');

exports.get_all_cars = (req, res, next) => {
  Cars.find().exec()
  .then(cars => {
    res.status(201).json(cars);
  }).catch(findErr => {
    return res.status(500).json({'error': findErr});
  });
}
