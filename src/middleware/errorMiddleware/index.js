import httpStatus from 'http-status';

const errorMiddleware = (err, req, res, next) => {
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    message: err.message,
  });
};

export { errorMiddleware };
