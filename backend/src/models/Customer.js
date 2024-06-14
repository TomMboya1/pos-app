const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactInfo: { type: String },
});

module.exports = mongoose.model('Customer', CustomerSchema);
