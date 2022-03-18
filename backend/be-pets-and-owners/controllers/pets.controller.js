const { removePet } = require('../models/pets.model');

exports.removePet = (req, res) => {
  const { id } = req.params;
  removePet(id).then((err) => {
    if (!err) {
      res.send(`Successfully removes pet ${id}`);
    } else {
      res.status(400).send(`Pet ${id} does not exist.`);
    }
  });
};
