  const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    'Email': {
      type: String,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    'Password': {
      type: String,
      required: true,
      match: [/^(?=.*\d)(?=.*[a-zA-Z])(?!.*\s).{6,12}$/, 'Password must contain between 6 and 12 characters and contains at least one number']
    }
});

module.exports = mongoose.model('User', UserSchema);
