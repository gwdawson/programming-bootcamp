const { NODE_ENV = 'dev' } = process.env;
const testData = require('./test');
const devData = require('./dev');

const data = {
  test: testData,
  dev: devData,
  production: devData,
};

module.exports = data[NODE_ENV];
