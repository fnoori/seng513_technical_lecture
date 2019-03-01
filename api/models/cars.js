const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    'Make': {type: String, required: true, max: 15},
    'Model': {type: String, required: true, max: 15},
    'Trim': {type: String, required: true, max: 10},
    'Price': {type: String, required: true, max: 20},
    'Year': {type: String, required: true, max: 4},
    'Doors': {type: Number, required: true}
});

module.exports = mongoose.model('Car', vehicleSchema);
