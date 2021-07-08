//Route not found handler
const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.statusCode = 404;
  next(error);
};

//All routes error handler

// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? 500 : res.statusCode;
  res.statusCode = statusCode;
  res.json({
    error: error.message,
    // eslint-disable-next-line no-undef
    stack: process.env.NODE_ENV == 'production' ? '' : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
