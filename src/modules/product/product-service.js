import mongoose from 'mongoose';
import ProductRepository from './product-repository.js';

class ProductService {
  constructor(productRepository = ProductRepository) {
    this.productRepository = productRepository;
  }

  async create(data) {
    const product = await this.productRepository.create(data);
    return product;
  }

  async listById(id) {
    return await this.productRepository.get(id);
  }

  async listAllProducts() {
    return await this.productRepository.getAll();
  }

  async update(id, data) {
    return await this.productRepository.update(id, data);
  }

  async delete(id) {
    return await this.productRepository.delete(id);
  }
}

export default ProductService;
