const { selectCategoryByName } = require('../models/categories');
const {
  selectItems,
  insertItem,
  selectItemById,
  deleteItemById,
} = require('../models/items');
const schemas = require('../schemas');

exports.getItems = async (req, res, next) => {
  const { category_name, limit, p, ...queries } = req.query;
  const isPaginated = limit && p;
  await schemas.getItemQueries.validate(req.query);
  const dbQueries = [selectItems({ ...req.query })];
  if (isPaginated) dbQueries.push(selectItems({ ...queries, category_name }));
  if (category_name) dbQueries.push(selectCategoryByName(category_name));
  const [items, totalItems] = await Promise.all(dbQueries);
  const total_items = isPaginated ? totalItems.length : items.length;
  res.send({ items, total_items });
};

exports.postItem = async (req, res, next) => {
  const newItem = req.body;
  await schemas.newItem.validate(newItem);
  await selectCategoryByName(req.body.category_name);
  const item = await insertItem(newItem);
  res.status(201).send({ item });
};

exports.getItemById = async (req, res, next) => {
  const { item_id } = req.params;
  await schemas.itemId.validate(item_id);
  const item = await selectItemById(item_id);
  res.status(200).send({ item });
};

exports.deleteItemById = async (req, res, next) => {
  const { item_id } = req.params;
  await schemas.itemId.validate(item_id);
  await deleteItemById(item_id);
  res.status(204).send();
};
