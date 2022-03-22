const { selectRidesByParkId } = require('../models/rides');
const { selectRidesById } = require('../models/rides');
const { insertRides } = require('../models/rides');
const { updateRideVotes } = require('../models/rides');

exports.getRidesByParkId = (req, res) => {
  const { park_id } = req.params;
  selectRidesByParkId(park_id).then((data) => {
    res.status(200).send({ rides: data });
  });
};

exports.getRidesById = (req, res) => {
  const { ride_id } = req.params;
  selectRidesById(ride_id).then((data) => {
    console.log(data);
    res.status(200).send({ ride: data });
  });
};

exports.postRide = (req, res) => {
  const { body } = req;
  insertRides(body).then((data) => {
    res.status(201).send({ ride: data });
  });
};

exports.patchRideVote = (req, res) => {
  const { vote } = req.query;
  const { ride_id } = req.params;

  selectRidesById(ride_id)
    .then((ride) => {
      if (vote === 'yes' || vote === 'no') {
        return updateRideVotes(ride, vote);
      } else {
        res.status(400).send({ ride });
      }
    })
    .then((data) => {
      if (vote === 'yes' || vote === 'no') {
        res.status(202).send({ ride: data });
      }
    });
};
