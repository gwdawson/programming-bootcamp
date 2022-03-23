const {
  getAllRestaurants,
  addNewRestaurant,
  deleteRestaurantWithId,
  patchRestaurantAreaId,
  getDetailsByArea,
  getQueriedRestaurants,
} = require('../models/app.models');

exports.apiTest = (req, res) => {
  res.send({ message: 'all ok' });
};

exports.getRestaurants = (req, res) => {
  getAllRestaurants().then((response) => {
    res.status(200).send({ restaurants: response });
  });
};

exports.addRestaurant = (req, res, next) => {
  const { body } = req;
  addNewRestaurant(body)
    .then((data) => {
      res.status(201).send({ restaurant: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteRestaurant = (req, res) => {
  const { restaurant_id } = req.params;
  deleteRestaurantWithId(restaurant_id)
    .then((response) => {
      res.status(204).send();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateRestaurantAreaId = (req, res) => {
  const { restaurant_id } = req.params;
  const { area_id } = req.body;
  patchRestaurantAreaId(restaurant_id, area_id).then((response) => {
    if (area_id === undefined) {
      res.status(400).send();
    } else {
      res.status(201).send({ restaurant: response });
    }
  });
};

exports.getRestaurantsByArea = (req, res) => {
  const { area_id } = req.params;
  getDetailsByArea(area_id).then((data) => {
    res.status(200).send({ area: data });
  });
};
