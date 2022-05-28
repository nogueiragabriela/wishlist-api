import Joi from "joi"

const createLoginSchema = Joi.object({
    email: Joi.string().email().required().messages({'string.email': 'Email is not valid', 'string.empty': 'Email is required'}),
    password: Joi.string().alphanum().required()  
})

const updateLoginSchema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().alphanum()
})


export { createLoginSchema, updateLoginSchema }
