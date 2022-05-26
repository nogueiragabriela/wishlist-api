import * as express from 'express';
import ProductController from './product-controller'; 
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { createProductSchema, updateProductSchema } from './product-schema.js';

const productRouter = express();

const productController = new ProductController();

productRouter.post('/', InputValidation(createProductSchema), async (req, res) => productController.create(req, res));

productRouter.put('/:id', InputValidation(updateProductSchema), async (req, res) =>  productController.update(req, res));

productRouter.get('/:id', productController.listProductById);