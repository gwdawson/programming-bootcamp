/**
 * Create your connection to the DB in this file
 * and remember to export it
 */
const { Pool } = require('pg');
const database = new Pool();

module.exports = database;
