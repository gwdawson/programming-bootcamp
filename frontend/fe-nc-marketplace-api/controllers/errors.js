exports.withErrorHandling = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (err) {
    if (err.name === 'ValidationError') {
      next({ status: 400, msg: err.errors.join(', ') });
    } else next(err);
  }
};

exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status)
    res.status(err.status).send({ msg: err.msg || 'Bad request' });
  else next(err);
};

exports.handlePsqlErrors = (err, req, res, next) => {
  if (err.code === '23505' && /username/.test(err.detail)) {
    res.status(400).send({ msg: 'Username already in use' });
  } else if (err.code === '22003') {
    res.status(400).send({ msg: 'Max integer size exceeded' });
  } else next(err);
};

exports.handleInternalErrors = (err, req, res, next) => {
  console.log(err, '<< 500 unhandled error');
  res.status(500).send({ msg: 'Internal Server Error' });
};
