const { Pool } = require('pg');

const ENV = process.env.NODE_ENV || 'development';
const envPath = `${__dirname}/../.env.${ENV}`;

const db = new Pool();

require('dotenv').config({
  path: envPath,
});

if (!process.env.PGDATABASE) {
  throw new Error('No PGDATABASE configured');
}

module.exports = db;
