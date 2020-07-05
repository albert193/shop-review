const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    required: [true, 'Please add a name']
  },
  review: {
    type: String,
    trim: true,
    required: [true, 'Please add a review']
  },
  rating: {
    type: Number,
    required: [true, 'Please add a rating between 1 and 5'],
    min: [1, 'Please add a rating between 1 and 5'],
    max: [5, 'Please add a rating between 1 and 5']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', ReviewSchema);