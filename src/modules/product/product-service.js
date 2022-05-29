import mongoose from 'mongoose';

class ProductService {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async create(data) {
    const { title, description, brand, price } = data; // title, description, brand, price * falta código
    const product = await this.productRepository.create({
      title,
      description,
      brand,
      price,
    });
    return product;
  }

  async listById(id) {
    /* 
    if (mongoose.Types.ObjectId.isValid(id)) {
      return await this.clientRepository.get(id);
    }
    */
    return await this.productRepository.listById(id);
  }

  async update(id, data) {
    return await this.productRepository.update(id, data);
  }

  async delete(id) {
    return await this.productRepository.delete(id);
  }
}

export default ProductService;
