const mongoose = require('mongoose');
const UsersModel = require('../models/users');

exports.add_new_user = (req, res, next) => {
  let newUser = new UsersModel({
    '_id': new mongoose.Types.ObjectId(),
    'Email': req.body.email,
    'Password': req.body.password
  });

  newUser.save()
  .then(userSaved => {
    res.status(201).json(userSaved);
  }).catch(saveErr => {
    return res.status(500).json({'Error': saveErr});
  });
}
