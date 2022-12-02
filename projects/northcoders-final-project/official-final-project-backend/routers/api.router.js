const apiRouter = require('express').Router();

const usersRouter = require('./users.router');
apiRouter.use('/users', usersRouter);

const prescriptionsRouter = require('./prescriptions.router');
apiRouter.use('/prescriptions', prescriptionsRouter);

module.exports = apiRouter;
