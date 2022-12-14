import Joi from "joi"

const createClientSchema = Joi.object({
    email: Joi.string().email().required().messages({'string.email': 'Email is not valid', 'string.empty': 'Email is required'}),
    name: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    phone: Joi.string().alphanum().required(),
    address: Joi.object({
        city: Joi.string().alphanum(),
        state: Joi.string().alphanum(),
        zip: Joi.string().alphanum(),
        country: Joi.string().alphanum()
    })
})

const updateClientSchema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    password: Joi.string().alphanum(),
    phone: Joi.string().alphanum(),
    address: Joi.object({
        city: Joi.string().alphanum(),
        state: Joi.string().alphanum(),
        zip: Joi.string().alphanum(),
        country: Joi.string().alphanum()
    })
})

const getClientSchema = Joi.object({
   idOrEmail: Joi.string().required()
})


export { createClientSchema, updateClientSchema, getClientSchema }

