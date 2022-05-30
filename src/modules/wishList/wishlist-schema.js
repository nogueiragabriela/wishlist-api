import Joi from "joi";

const createwishListSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      "string.title": "title is not valid",
      "string.empty": "title is required",
    }),
  client: Joi.string().required(),
  products: Joi.array().default([]).required(),
  description: Joi.string(),
});

const updatewishListSchema = Joi.object({
  title: Joi.string(),
  products: Joi.array().default([]).required(),
  description: Joi.string(),
});

export { createwishListSchema, updatewishListSchema };
