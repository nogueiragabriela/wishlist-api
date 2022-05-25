import express from 'express';
// import ProductController from './product-controller';

const ProductRouter = express();

// const productController = new ProductController();

ProductRouter.get('/', (_req, res) => {
  console.log('Funcionou!');
  res.end();
});

/*
ProductRouter.get('/', productController.listAll);
ProductRouter.get('/:id', productController.listById);
ProductRouter.post('/:id', productController.create);
ProductRouter.put('/:id', productController.update);
ProductRouter.delete('/:id', productController.delete);
*/

export { ProductRouter };
