import Joi from "joi"

const createProductSchema = Joi.object({
  title: Joi.string().required().messages({'string.type': 'type is not valid', 'string.empty': 'type is required'}),
  description: Joi.string().required().messages({'string.description': 'description is not valid', 'string.empty': 'description is required'}),
  brand: Joi.string().alphanum().required().messages({'string.brand': 'brand is not valid', 'string.empty': 'brand is required'}),
  price: Joi.number().required().messages({'string.price': 'price is not valid', 'string.empty': 'price is required'}),
})

const updateProductSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  brand: Joi.string().alphanum(),
  price: Joi.number(),
})

export { createProductSchema, updateProductSchema }
