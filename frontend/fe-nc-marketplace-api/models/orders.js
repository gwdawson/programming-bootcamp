const db = require('../db/connection');

exports.selectOrdersByUsername = async (username) => {
  return db
    .select('items.*')
    .from('orders')
    .leftJoin('items', 'items.item_id', '=', 'orders.item_id')
    .where('orders.username', username);
};

exports.postItemToOrders = async (username, item_id) => {
  return db.insert({ item_id, username }).into('orders').returning('*');
};

// exports.deleteItemFromBasket = async (username, item_id) => {
//   const deleteCount = await db('baskets')
//     .where('username', username)
//     .where('item_id', item_id)
//     .del();
//   if (!deleteCount)
//     return Promise.reject({ status: 404, msg: 'item not found in basket' });
//   return true;
// };
