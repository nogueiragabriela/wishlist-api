import express from 'express';
//import RouterClients from '../client/client-routes'
import RouterProducts from '../modules/product/product-routes.js';

const router = express.Router();

//router.use('/clients', RouterClients)
router.use('/products', RouterProducts);

export default router;
