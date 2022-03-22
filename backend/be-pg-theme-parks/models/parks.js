const database = require('../db/index');

exports.selectParks = () => {
  return database.query('SELECT * FROM parks;').then((data) => {
    return data.rows;
  });
};

exports.selectParkById = (park_id) => {
  return database.query('SELECT * FROM parks WHERE park_id = $1', [park_id]).then((data) => {
    return data.rows[0];
  });
};

exports.insertPark = (body) => {
  const { park_name, year_opened, annual_attendance } = body;
  const values = [park_name, year_opened, annual_attendance];
  return database
    .query(`INSERT INTO parks (park_name, year_opened, annual_attendance) VALUES ($1, $2, $3) RETURNING *`, values)
    .then((data) => {
      return data.rows[0];
    });
};

exports.deleteParkById = (park_id) => {
  return database.query('DELETE FROM parks WHERE park_id = $1 RETURNING *', [park_id]);
};

exports.updateParkById = (park_id, body) => {
  const { park_name, annual_attendance } = body;
  const values = [park_name, annual_attendance, park_id];
  return database
    .query('UPDATE parks SET park_name = $1, annual_attendance = $2 WHERE park_id = $3 RETURNING *', values)
    .then((data) => {
      return data.rows[0];
    });
};
