import express from 'express';
import LoginController from './login-controller.js';
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { loginSchema } from './login-schema.js';

const LoginRouter = express();

const loginController = new LoginController();

LoginRouter.post('/', InputValidation(loginSchema), async (req, res) =>  loginController.login(req, res));

export { LoginRouter }