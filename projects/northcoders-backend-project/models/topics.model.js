const db = require('../db/connection');

exports.getAllTopics = async () => {
  const { rows } = await db.query('SELECT * FROM topics;');
  return rows;
};
