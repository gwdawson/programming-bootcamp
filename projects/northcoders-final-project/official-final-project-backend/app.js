const express = require('express');
const errorHandlers = require('./error-handlers/errorHandlers');
const cors = require('cors');
const connectDB = require('./db/connection');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const apiRouter = require('./routers/api.router');
app.use('/api', apiRouter);

// Error Handlers

app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));

app.use((req, res) => {
  res.status(404).send({ msg: 'Not Found' });
});

app.use(errorHandlers.handleCustomErrors);
app.use(errorHandlers.handleValidationErrors);
app.use(errorHandlers.handleAssertionErrors);
app.use(errorHandlers.handleServerErrors);

module.exports = app;
