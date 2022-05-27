import ProductService from './product-service.js';
import ProductRepository from './product-repository.js';
// import httpStatus from 'http-status'

class ProductController {
  productRepository = new ProductRepository();

  async create(req, res) {
    try {
      const productService = new ProductService(this.productRepository);
      const product = await productService.create(req.body);
      return res.status(201).json({ product });
    } catch (err) {}
  }

  /*
  update(id, data) {
    try {
      const productService = new ProductService();
      return productService.update(id, client);
    } catch (err) {}
  }

  delete(id) {
    try {
      const productService = new ProductService();
      return productService.delete(id);
    } catch (err) {}
  }

  listById(id) {
    try {
      const productService = new ProductService();
      return productService.listById(id);
    } catch {}
  }
 */
}

export default ProductController;
