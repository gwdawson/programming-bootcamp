const { NODE_ENV = 'dev' } = process.env;
require('dotenv').config({ path: `./${NODE_ENV}.env` });

const { DATABASE_URL } = process.env;

const dbConfig = {
  client: 'pg',
  connection: {
    connectionString: DATABASE_URL,
  },
  migrations: {
    directory: './db/migrations',
  },
  seeds: {
    directory: './db/seeds',
  },
};

if (NODE_ENV === 'production') {
  dbConfig.connection.ssl = {
    rejectUnauthorized: false,
  };
}

module.exports = dbConfig;
