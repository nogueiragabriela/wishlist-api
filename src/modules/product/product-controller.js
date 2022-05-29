import ProductService from './product-service.js';
import ProductRepository from './product-repository.js';
// import httpStatus from 'http-status'

class ProductController {
  productRepository = new ProductRepository();

  async create(req, res, next) {
    try {
      const productService = new ProductService(this.productRepository);
      const product = await productService.create(req.body);
      return res.status(201).json({ product });
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const productService = new ProductService(this.productRepository);
      const product = await productService.getById(req.params.id);
      return res.status(200).json({ product });
    } catch (err) {
      next(err);
    }
  }

  async getAll(req, res, next) {
    try {
      const productService = new ProductService(this.productRepository);
      const products = await productService.getAll();
      return res.status(200).json({ products });
    } catch (err) {
      next(err);
    }
  }

  async update(req, res, next) {
    try {
      const data = req.body;
      const { id } = req.params;
      const productService = new ProductService(this.productRepository);
      const product = await productService.update(id, data);
      return res.status(200).json({ product });
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const productService = new ProductService(this.productRepository);
      const product = await productService.delete(req.params.id);
      return res.status(200).json({ product });
    } catch (err) {
      next(err);
    }
  }
}

export default ProductController;
