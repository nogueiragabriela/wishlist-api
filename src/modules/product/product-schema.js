import Joi from "joi"

const createProductSchema = Joi.object({
  type: Joi.string().alphanum().required().messages({'string.type': 'type is not valid', 'string.empty': 'type is required'}),
  description: Joi.string().required().messages({'string.description': 'description is not valid', 'string.empty': 'description is required'}),
  brand: Joi.string().alphanum().required().messages({'string.brand': 'brand is not valid', 'string.empty': 'brand is required'}),
  price: Joi.string().alphanum().required().messages({'string.price': 'price is not valid', 'string.empty': 'price is required'}),
  createdAt: Joi.string().alphanum().required()
})

const updateProductSchema = Joi.object({
  type: Joi.string().alphanum(),
  description: Joi.string(),
  brand: Joi.string().alphanum(),
  price: Joi.string().alphanum(),
  createdAt: Joi.string().alphanum()
})

export { createProductSchema, updateProductSchema }
