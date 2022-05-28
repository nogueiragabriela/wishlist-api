import mongoose from 'mongoose';
import ProductRepository from './product-repository.js';

class ProductService {
  constructor(productRepository = ProductRepository) {
    this.productRepository = productRepository;
  }

  async create(data) {
    const { title, description, brand, price } = data;
    const product = await this.productRepository.create({
      title,
      description,
      brand,
      price,
    });
    return product;
  }

  async getById(id) {
    return await this.productRepository.get(id);
  }

  async getAll() {
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
