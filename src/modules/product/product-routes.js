import express from 'express';
import ProductController from './product-controller.js'; 
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { createProductSchema, updateProductSchema } from './product-schema.js';

const ProductRouter = express();

const productController = new ProductController();

ProductRouter.post(
  '/',
  // InputValidation(createProductSchema),
  async (req, res) => productController.create(req, res),
);

ProductRouter.put(
  '/:id',
  InputValidation(updateProductSchema),
  async (req, res) => productController.update(req, res),
);

ProductRouter.get('/:id', async (req, res) =>
  productController.listProductById(req, res),
);

export { ProductRouter };
