import * as express from 'express';
import ProductController from './product-controller';

const productRouter = express();

const productController = new ProductController();

productRouter.get('/', productController.listAll);
productRouter.get('/:id', productController.listById);
productRouter.post('/:id', productController.create);
productRouter.put('/:id', productController.update);
productRouter.delete('/:id', productController.delete);
