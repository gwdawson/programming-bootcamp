const { getOwnerModel, writeData, postOwner, postPetToOwner } = require('../models/owners.model');

exports.getOwner = (req, res) => {
  const { id } = req.params;
  getOwnerModel(id)
    .then((owner) => {
      res.send({ owner });
    })
    .catch((err) => {
      res.status(404).send(`Owner ${id} does not exist.`);
    });
};

exports.patchOwnerById = (req, res) => {
  const { id } = req.params;
  const text = req.body;

  writeData(`./data/owners/o${id}.json`, text, id).then((data) => {
    data = JSON.parse(data); //
    res.send({ owner: data });
  });
};

exports.postNewOwner = (req, res) => {
  const newOwner = req.body;
  if (typeof newOwner.name === 'string' && typeof newOwner.age === 'number') {
    postOwner(newOwner).then((newOwner) => {
      res.send(newOwner);
    });
  } else {
    res.status(400).send('Invalid request, please specify a name (string) and age (number)');
  }
};

exports.addPetToOwner = (req, res) => {
  const newPet = req.body;
  const { id } = req.params;
  if (typeof newPet.name === 'string' && typeof newPet.age === 'number') {
    postPetToOwner(newPet, id)
      .then((newPet) => {
        res.send({ newPet });
      })
      .catch((err) => {
        res.status(404).send(`Owner ${id} does not exist.`);
      });
  } else {
    res.status(400).send('Invalid request, please specify pets fully.');
  }
};
