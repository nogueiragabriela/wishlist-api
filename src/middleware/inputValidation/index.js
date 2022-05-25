const InputValidation = schema => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(422).send({
      message: error.message,
    })
  } else {
    next()
  }
}

export { InputValidation }