const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'A client must have a First Name'],
  },
  lastName: {
    type: String,
    required: [true, 'A client must have a Last Name'],
  },
  email: {
    type: String,
    required: [true, 'A client must have an email address'],
  },
  phone: {
    type: Number,
    },
  country: {
    type: String,
  },
  timeZone: {
    type: String,
  },
  addedOn: {
    type: Date,
  },
  paymentApp: {
    type: String,
  },
  imageCover: {
    type: String,
  },
});


const Client = mongoose.model('Client', clientSchema);

module.exports = Client;