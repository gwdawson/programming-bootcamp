const { NODE_ENV = 'dev' } = process.env;
require('dotenv').config({ path: `./${NODE_ENV}.env` });
const cors = require('cors');
const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api.js');
const {
  handleCustomErrors,
  handlePsqlErrors,
  handleInternalErrors,
} = require('./controllers/errors');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public', 'build')));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'public', 'index.html'));
});

app.use('/api', apiRouter);

app.all('/*', (req, res, next) => {
  next({ status: 404, msg: 'Route not found' });
});

app.use(handleCustomErrors);
app.use(handlePsqlErrors);
app.use(handleInternalErrors);

module.exports = app;
