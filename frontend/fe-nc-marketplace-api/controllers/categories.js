const { selectCategories, insertCategory } = require('../models/categories');
const schemas = require('../schemas');

exports.getCategories = async (req, res, next) => {
  const categories = await selectCategories();
  res.send({ categories });
};

exports.postCategory = async (req, res, next) => {
  const newCategory = req.body;
  await schemas.newCategory.validate(newCategory);
  const category = await insertCategory(newCategory);
  res.status(201).send({ category });
};
