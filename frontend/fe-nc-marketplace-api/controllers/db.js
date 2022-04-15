const db = require('../db/connection');

exports.resetDb = async (req, res, next) => {
  await db.seed.run();
  res.status(200).send({ msg: 'db reseeded ok' });
};
