const db = require('../db/connection');

exports.selectCategories = async () => {
  return db('categories').select('*');
};

exports.selectCategoryByName = async (category_name) => {
  const category = await db('categories')
    .select('*')
    .where('category_name', category_name)
    .first();
  if (!category)
    return Promise.reject({ status: 404, msg: 'category not found' });
  return category;
};

exports.insertCategory = async (newCategory) => {
  const [insertedCategory] = await db('categories')
    .insert(newCategory)
    .returning('*');
  return insertedCategory;
};
