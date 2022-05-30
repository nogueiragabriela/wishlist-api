import express from 'express';
import { ClientRouter } from '../modules/client/client-routes.js';
import { LoginRouter } from '../modules/login/login-routes.js';
import { ProductRouter } from '../modules/product/product-routes.js';


const router = express.Router();

router.use('/products', ProductRouter);
router.use('/clients', ClientRouter);
router.use('/login', LoginRouter);

export default router;
