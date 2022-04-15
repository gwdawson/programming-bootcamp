const express = require('express');
const { getCategories, postCategory } = require('../controllers/categories');
const { withErrorHandling } = require('../controllers/errors');
const categoriesRouter = express.Router();

categoriesRouter
  .route('/')
  .get(withErrorHandling(getCategories))
  .post(withErrorHandling(postCategory));

module.exports = categoriesRouter;
