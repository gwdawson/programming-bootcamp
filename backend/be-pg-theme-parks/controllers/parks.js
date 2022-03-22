const { selectParks } = require('../models/parks.js');
const { selectParkById } = require('../models/parks.js');
const { insertPark } = require('../models/parks.js');
const { deleteParkById } = require('../models/parks.js');
const { updateParkById } = require('../models/parks.js');

exports.getParks = (req, res) => {
  selectParks().then((data) => {
    res.status(200).send({ parks: data });
  });
};

exports.getParkById = (req, res) => {
  const { park_id } = req.params;
  selectParkById(park_id).then((data) => {
    res.status(200).send({ park: data });
  });
};

exports.postPark = (req, res) => {
  insertPark(req.body).then((data) => {
    res.status(201).send({ park: data });
  });
};

exports.removeParkById = (req, res) => {
  const { park_id } = req.params;
  deleteParkById(park_id).then(() => {
    res.status(204).send('');
  });
};

exports.patchParkById = (req, res) => {
  const { park_id } = req.params;
  const { body } = req;
  updateParkById(park_id, body).then((data) => {
    res.status(200).send({ park: data });
  });
};
