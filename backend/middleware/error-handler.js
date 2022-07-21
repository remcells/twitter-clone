const errorHandler = (err, req, res, next) => {
  // IF error is present
  // RESPONSE a message with STATUS CODE
  // IF NO Status code is present, just use 400/500
  // IF NO error
  // DO next
  if (err) {
    // You can use nullish coalesing if statusCode is present
    res.status(err.statusCode ?? 400).json({
      error: err.message,
      // You can add more info if needed
    });
  }

  next(err);
  // We passed the err, so next middleware can process it
  // Doesn't matter if err is undefined or not
};

export default errorHandler;
