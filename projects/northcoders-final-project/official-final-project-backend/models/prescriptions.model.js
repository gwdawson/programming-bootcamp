const mongoose = require('mongoose');
const User = require('../models/users.model');

const prescriptionSchema = mongoose.Schema({
  name: { required: [true, 'Please input medication name'], type: String },
  dosage: { required: [true, 'Please input dosage'], type: String },
  frequency: { required: [true, 'Please input frequency'], type: Number },
  firstPromptTime: {
    required: [true, 'Please input first reminder time'],
    type: Number,
  },
  notes: { type: String, default: '' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  amount: { required: [true, 'Please input amount supplied'], type: Number },
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
