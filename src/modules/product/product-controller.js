import ProductService from './product-service.js';
import ProductRepository from './product-repository.js';
import WishListRepository from '../wishList/wishList-repository.js'

class ProductController {
  productRepository = new ProductRepository();
  wishListRepository = new WishListRepository()

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
      const products = await productService.getAll(req.query.page, req.query.limit, req.query);
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


  async getwishLists(req, res, next) {
    try {
      const productService = new ProductService(this.productRepository, this.wishListRepository);
      const wishLists = await productService.getwishListswithProduct(req.params.id);
      return res.status(200).json({ wishLists });
    } catch (err) {
      next(err);
    }
  }



  async delete(req, res, next) {
    try {
      const productService = new ProductService(this.productRepository, this.wishListRepository);
      const product = await productService.delete(req.params.id);
      return res.status(200).json({ product });
    } catch (err) {
      next(err);
    }
  }
}

export default ProductController;

// get array length
