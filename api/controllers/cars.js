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

exports.get_all_cars_by_make_and_year = (req, res, next) => {
  let make = req.params.make;
  let year = req.params.year;

  CarsModel.find({ 'Make': make })
  .where('Year').equals(year)
  .exec().then(cars => {
    res.status(201).json(cars);
  }).catch(findErr => {
    return res.status(500).json({ 'Error': findErr });
  });
}

exports.get_all_cars_by_make_and_greater_than_doors_less_than_doors = (req, res, next) => {
  let moreThanDoors = req.params.moreThanDoors;
  let lessThanDoors = req.params.lessThanDoors;

  CarsModel.find()
  .where('Doors').gt(moreThanDoors).lt(lessThanDoors)
  .exec().then(cars => {
    res.status(201).json(cars);
  }).catch(findErr => {
    return res.status(500).json({ 'Error': findErr });
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
