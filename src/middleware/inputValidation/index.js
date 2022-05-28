import httpStatus from "http-status";

const InputValidation = schema => (req, res, next) => {
  let { error } = schema.validate(req.body);
  if (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      message: error.message,
    })
  } else {
    next()
  }
}

export { InputValidation }