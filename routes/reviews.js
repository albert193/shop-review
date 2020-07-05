const express = require('express');
const router = express.Router();
const { getReviews, addReview } = require('../controllers/reviews');

router
  .route('/')
  .get(getReviews)
  .post(addReview);

module.exports = router;