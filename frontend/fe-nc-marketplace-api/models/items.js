const db = require('../db/connection');

exports.selectItems = async ({
  sort_by = 'item_name',
  order = 'asc',
  category_name,
  limit,
  p,
  search,
  min_price,
  max_price,
}) => {
  return (
    db('items')
      .select('*')
      // removes ordered items from the list of available items
      // .where('item_id', 'NOT IN', db('orders').select('item_id'))
      .orderBy(sort_by, order)
      .modify((query) => {
        if (category_name) query.where({ category_name });
        if (limit && p) {
          query.limit(limit);
          query.offset(+limit * (p - 1));
        }
        if (search) {
          query.where('item_name', 'ILIKE', `%${search}%`);
        }
        if (min_price) query.where('price', '>=', min_price);
        if (max_price) query.where('price', '<=', max_price);
      })
  );
};

exports.selectItemById = async (item_id) => {
  const item = await db('items').select('*').where('item_id', item_id).first();
  if (!item) return Promise.reject({ status: 404, msg: 'item not found' });
  return item;
};

exports.insertItem = async (newItem) => {
  const [insertedItem] = await db('items').insert(newItem).returning('*');
  return insertedItem;
};

exports.deleteItemById = async (item_id) => {
  const delCount = await db('items').where('item_id', item_id).del();
  if (!delCount) return Promise.reject({ status: 404, msg: 'item not found' });
  return true;
};
