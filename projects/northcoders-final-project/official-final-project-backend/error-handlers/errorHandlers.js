exports.handleCustomErrors = (err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
};

exports.handleValidationErrors = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    let errors = {};
    Object.keys(err.errors).forEach((key) => {
      errors[key] = err.errors[key].message;
    });
    res.status(400).send({ errors });
  } else next(err);
};

exports.handleAssertionErrors = (err, req, res, next) => {
  if (err.name === 'CastError') {
    res.status(400).send({ msg: `Invalid ${err.path}: ${err.value}` });
  } else next(err);
};

exports.handleServerErrors = (err, req, res, next) => {
  console.log(err);
  res.status(500).send({ msg: 'Internal Server Error' });
};
