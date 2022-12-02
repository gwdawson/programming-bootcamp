const { getAllTopics } = require('../models/topics.model');

exports.getTopics = async (req, res) => {
  const topics = await getAllTopics();
  res.status(200).send({ topics });
};
