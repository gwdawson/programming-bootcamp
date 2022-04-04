const data = require('./data/dev-data');
const seed = require('./seed');

const db = require('./');

seed(data).then(() => db.end());
