const db = require('../db/index');

exports.getAllRestaurants = () => {
  return db
    .query('SELECT * FROM restaurants JOIN ratings ON restaurants.restaurant_id = ratings.restaurant_id;')
    .then((res) => {
      return res.rows;
    });
};

exports.addNewRestaurant = (body) => {
  const { restaurant_name, area_id, cuisine, website } = body;
  const arr = [restaurant_name, area_id, cuisine, website];
  if (
    typeof restaurant_name !== 'string' ||
    typeof area_id !== 'number' ||
    typeof cuisine !== 'string' ||
    typeof website !== 'string'
  ) {
    return Promise.reject({ status: 400, message: 'bad request' });
  }

  if (restaurant_name && area_id && cuisine && website) {
    return db
      .query(
        'INSERT INTO restaurants (restaurant_name, area_id, cuisine, website) VALUES ($1, $2, $3, $4) RETURNING *;',
        arr
      )
      .then((data) => {
        return data.rows[0];
      });
  } else {
    return Promise.reject({ status: 400, message: 'bad request' });
  }
};

exports.deleteRestaurantWithId = (id) => {
  return db.query('DELETE FROM restaurants WHERE restaurant_id=$1', [id]).then((data) => {
    return data;
  });
};

exports.patchRestaurantAreaId = (id, area_id) => {
  return db
    .query('UPDATE restaurants SET area_id=$2 WHERE restaurant_id=$1 RETURNING *;', [id, area_id])
    .then((data) => {
      return data.rows[0];
    });
};

exports.getDetailsByArea = (area_id) => {
  const obj = {};
  return db
    .query(
      'SELECT * FROM restaurants JOIN areas ON restaurants.area_id = areas.area_id WHERE restaurants.area_id = $1',
      [area_id]
    )
    .then(({ rows }) => {
      (obj.area_id = rows[0].area_id), (obj.name = rows[0].area_name);
      obj.total_restaurants = rows.length;
      return db.query('SELECT * FROM restaurants WHERE area_id = $1', [rows[0].area_id]);
    })
    .then(({ rows }) => {
      obj.restaurants = rows;
      return obj;
    });
};

exports.getQueriedRestaurants = (query) => {
  return db.query('SELECT * FROM restaurants WHERE restaurant_name LIKE $1;', [query]).then((response) => {
    console.log(response.rows);
    return response.rows;
  });
};
