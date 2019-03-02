const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    'Make': { type: String, required: true, maxlength: 9 },
    'Model': { type: String, required: true, maxlength: 9 },
    'Trim': { type: String, required: true, maxlength: 10 },
    'Price': { type: String, required: true, maxlength: 20 },
    'Year': { type: String, required: true, maxlength: 4},
    'Doors': { type: Number, required: true }
});

module.exports = mongoose.model('Car', vehicleSchema);
