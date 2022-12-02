const db = require('../db/connection');

exports.selectUsers = async () => {
  const { rows } = await db.query('SELECT username FROM users;');
  return rows;
};
