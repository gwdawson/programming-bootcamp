const { selectTreasures } = require("../models/index.model");

exports.getTreasures = (req, res) => {
  const { query } = req;
  selectTreasures(query)
    .then(({ rows }) => {
      res.status(200).send({ data: rows });
    })
    .catch((err) => {
      console.log(err);
    });
};
