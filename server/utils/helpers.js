module.exports = {
  errorHandler(err, req, res, next, statusCode) {
    res.status(statusCode).json(err);
  },
};
