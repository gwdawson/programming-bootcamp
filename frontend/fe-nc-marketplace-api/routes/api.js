const express = require('express');
const { resetDb } = require('../controllers/db');
const apiRouter = express.Router();
const categoriesRouter = require('./categories');
const itemsRouter = require('./items');
const usersRouter = require('./users');

apiRouter.use('/categories', categoriesRouter);
apiRouter.use('/users', usersRouter);
apiRouter.use('/items', itemsRouter);

apiRouter.post('/reset', resetDb);

module.exports = apiRouter;
