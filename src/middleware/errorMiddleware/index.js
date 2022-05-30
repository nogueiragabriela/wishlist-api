import httpStatus from 'http-status';

const errorMiddleware = (err, req, res, next) => {

  if (err.message.includes('already exists')) {
    res.status(httpStatus.CONFLICT).json({
      message: err.message
    })
  }

  else {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      message: err.message,
    });
  };
}

export { errorMiddleware };
