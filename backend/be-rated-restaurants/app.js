const {
  apiTest,
  getRestaurants,
  addRestaurant,
  deleteRestaurant,
  updateRestaurantAreaId,
  getRestaurantsByArea,
} = require('./controllers/app.controllers');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api', apiTest);

app.get('/api/restaurants', getRestaurants);

app.post('/api/restaurants', addRestaurant);

app.delete('/api/restaurants/:restaurant_id', deleteRestaurant);

app.patch('/api/restaurants/:restaurant_id', updateRestaurantAreaId);

app.get('/api/areas/:area_id/restaurants', getRestaurantsByArea);

app.use((err, req, res, next) => {
  if (err.status && err.message) {
    res.status(err.status).send({ error: err.message });
    return;
  }
  next(err);
});

app.use((err, req, res, next) => {
  console.log('YOU GET 500');
  res.status(500).send({ error: 'Internal server error' });
});

module.exports = app;
