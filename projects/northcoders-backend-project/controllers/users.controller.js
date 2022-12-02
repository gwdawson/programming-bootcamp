const { selectUsers } = require('../models/users.model');

exports.getUsers = async (req, res) => {
  const users = await selectUsers();
  res.status(200).send({ users });
};
