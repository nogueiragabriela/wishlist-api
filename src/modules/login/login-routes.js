import express from 'express';
import LoginController from './login-controller.js';
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { createLoginSchema, updateLoginSchema} from './login-schema.js';

const LoginRouter = express();

const loginController = new LoginController();

LoginRouter.post('/', InputValidation(createLoginSchema), async (req, res) =>  loginController.login(req, res));

LoginRouter.put('/:id', InputValidation(updateLoginSchema), async (req, res) =>  loginController.update(req, res));

export { LoginRouter }
