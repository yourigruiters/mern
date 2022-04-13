const errorHandler = (err, req, res, next) => {
  // Server error
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'producten' ? null : err.stack,
  });
};

export default errorHandler;
