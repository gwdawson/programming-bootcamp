const devData = require('../data/development-data/index.js');
const seed = require('./seed.js');
const connectDB = require('../connection.js');
const { default: mongoose } = require('mongoose');

connectDB();

const runSeed = () => {
  return seed(devData).then(() => mongoose.connection.close());
};

runSeed();
