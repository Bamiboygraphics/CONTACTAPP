//IMPORT MONGOOSE
const mongoose = require('mongoose');

// CREATE SCHEMA
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name required'],
  },
  email: {
    type: String,
    required: [true, 'email address required'],
  },
  phone: {
    type: String,
    maxLength: 11,
  },
  country: {
    type: String,
    required: [true, 'Country required']
  },
  relationship: {
    type: String,
    enum: ['friend', 'family', 'worker', 'classmate', 'others'],
    default : "others"
  },
});

//MODELS
const Contact = mongoose.model('Contact', contactSchema);


// EXPORTS
module.exports = Contact;
