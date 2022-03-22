const database = require('../db/index');

exports.selectRidesByParkId = (park_id) => {
  return database.query('SELECT * FROM rides WHERE park_id = $1', [park_id]).then((data) => {
    return data.rows;
  });
};

exports.selectRidesById = (ride_id) => {
  return database.query('SELECT * FROM rides WHERE ride_id = $1', [ride_id]).then((data) => {
    return data.rows[0];
  });
};

exports.insertRides = (data) => {
  const { ride_name, year_opened, votes, park_id, category_id } = data;
  return database
    .query(
      'INSERT INTO rides (ride_name, year_opened, votes, park_id, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [ride_name, year_opened, votes, park_id, category_id]
    )
    .then((data) => {
      return data.rows[0];
    });
};

exports.updateRideVotes = (ride, vote) => {
  const { ride_id } = ride;

  if (vote === 'yes') {
    return database
      .query('UPDATE rides SET votes = votes + 1 WHERE ride_id = $1 RETURNING *', [ride_id])
      .then((data) => {
        return data.rows[0];
      });
  } else {
    return database
      .query('UPDATE rides SET votes = votes - 1 WHERE ride_id = $1 RETURNING *', [ride_id])
      .then((data) => {
        return data.rows[0];
      });
  }
};
