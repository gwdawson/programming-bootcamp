const {
  selectBasketByUsername,
  postItemToBasket,
  deleteItemFromBasket,
} = require('../models/basket');
const { selectItemById } = require('../models/items');
const {
  selectOrdersByUsername,
  postItemToOrders,
} = require('../models/orders');
const {
  selectUsers,
  insertUser,
  selectUserByUsername,
  updateUserByUsername,
} = require('../models/users');
const schemas = require('../schemas');

exports.getUsers = async (req, res, next) => {
  const users = await selectUsers();
  res.send({ users });
};

exports.postUser = async (req, res, next) => {
  const newUser = req.body;
  await schemas.newUser.validate(newUser);
  const user = await insertUser(newUser);
  res.status(201).send({ user });
};

exports.getUserByUsername = async (req, res, next) => {
  const user = await selectUserByUsername(req.params.username);
  res.send({ user });
};

exports.patchUserByUsername = async (req, res, next) => {
  const userUpdates = req.body;
  await schemas.userUpdates.validate(userUpdates);
  const updatedUser = await updateUserByUsername(
    req.params.username,
    userUpdates
  );
  const user = await selectUserByUsername(updatedUser.username);
  res.send({ user });
};

exports.getUsersBasket = async (req, res, next) => {
  const [items] = await Promise.all([
    selectBasketByUsername(req.params.username),
    selectUserByUsername(req.params.username),
  ]);
  res.send({ items });
};

exports.postItemToBasket = async (req, res, next) => {
  await schemas.newBasketItem.validate(req.body);
  const [item] = await Promise.all([
    selectItemById(req.body.item_id),
    selectUserByUsername(req.params.username),
  ]);
  await postItemToBasket(req.params.username, req.body.item_id);
  res.status(201).send({ item });
};

exports.postItemToOrders = async (req, res, next) => {
  await schemas.newOrderItem.validate(req.body);
  const [item] = await Promise.all([
    selectItemById(req.body.item_id),
    selectUserByUsername(req.params.username),
  ]);
  await postItemToOrders(req.params.username, req.body.item_id);
  res.status(201).send({ item });
};

exports.deleteItemFromUsersBasket = async (req, res, next) => {
  const { username, item_id } = req.params;
  await Promise.all([selectItemById(item_id), selectUserByUsername(username)]);
  await deleteItemFromBasket(username, item_id);
  res.status(204).send();
};

exports.getUsersOrders = async (req, res, next) => {
  const [items] = await Promise.all([
    selectOrdersByUsername(req.params.username),
    selectUserByUsername(req.params.username),
  ]);
  res.send({ items });
};
