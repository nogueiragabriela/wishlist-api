import mongoose from 'mongoose';
import ProductRepository from './product-repository.js';

class ProductService {
  constructor(productRepository = ProductRepository) {
    this.productRepository = productRepository;
  }

  async create(data) {
    const { title, description, brand, price } = data;
    //veirfy if title is unique
    const productTitleExists = await this.productRepository.getByTitle( title );
    if (productTitleExists) {
      throw new Error('Product title already exists');
    }
    const sku = Math.random().toString(36).slice(2, 10).toUpperCase();
    const product = await this.productRepository.create({
      title,
      description,
      brand,
      sku,
      price,
    });
    return product;
  }

  async getById(id) {
    return await this.productRepository.get(id);
  }

  async getAll(page, limit, filter) {
    if (filter.title) {
      filter.title = { $regex: filter.title, $options: 'i' }
    }
    delete filter.page
    delete filter.limit
    if (!page) page = 1
    const startIndex = (page - 1) * limit;

    return await this.productRepository.getAll(startIndex, limit, filter);
  }

  async update(id, data) {
    return await this.productRepository.update(id, data);
  }

  async delete(id) {
    return await this.productRepository.delete(id);
  }
}

export default ProductService;
