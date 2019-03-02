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
  console.log(`make length: ${req.body.make.length}`);

  let newCar = new CarsModel({
    '_id': new mongoose.Types.ObjectId(),
    'Make': req.body.make,
    'Model': req.body.model,
    'Price': req.body.price,
    'Trim': req.body.trim,
    'Year': req.body.year,
    'Doors': req.body.doors
  });

  newCar.save()
  .then(carSaved => {
    res.status(201).json(carSaved);
  }).catch(saveErr => {
    return res.status(500).json({'Error': saveErr});
  });
}
