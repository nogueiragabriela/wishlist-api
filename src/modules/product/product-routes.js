import * as express from 'express';
import ProductController from './product-controller';

const productRouter = express();

const productController = new ProductController();

productRouter.get('/:id', productController.listProductById);