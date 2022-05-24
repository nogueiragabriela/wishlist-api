import express from 'express';
import LoginController from './login-controller.js';

const LoginRouter = express();

const loginController = new LoginController();

LoginRouter.post('/', async (req, res) => {
    const login = await loginController.create(req.body)
    res.status(200).send(login)
});

export { LoginRouter }