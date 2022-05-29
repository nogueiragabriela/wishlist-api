import express from 'express';
import ProductController from './product-controller.js';
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { createProductSchema, updateProductSchema } from './product-schema.js';

const ProductRouter = express();

const productController = new ProductController();

ProductRouter.post(
  '/',
  InputValidation(createProductSchema),
  async (req, res, next) => productController.create(req, res, next),
);

ProductRouter.delete(
  '/:id',
  async (req, res, next) => productController.delete(req, res, next),
);

ProductRouter.put(
  '/:id',
  InputValidation(updateProductSchema),
  async (req, res, next) => productController.update(req, res, next),
);

ProductRouter.get('/:id', async (req, res, next) =>
  productController.listProductById(req, res, next),
);

ProductRouter.get('/', async (req, res, next) =>
  productController.listAllProducts(req, res, next),
);

export { ProductRouter };
