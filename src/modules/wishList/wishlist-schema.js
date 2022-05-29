import Joi from "joi"

const createwishListSchema = Joi.object({
  name: Joi.string().required().messages({'string.name': 'name is not valid', 'string.empty': 'name is required'}),
  client_id: Joi.string().required(),
  products_ids: Joi.array().default([]).required(),
  createdAt: Joi.string().alphanum().required()
})

const updatewishListSchema = Joi.object({
  name: Joi.string(),
  createdAt: Joi.string().alphanum()
})

export { createwishListSchema, updatewishListSchema }

