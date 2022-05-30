import productModel from './product-model.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.connect(
  process.env.CONNECTION_STRING
);

class ProductRepository {
  async get(id) {
    return await productModel.findById(id).select('-password -__v');
  }

  async getAll(startIndex, limit, filter) {
    const products = await productModel.find(filter).skip(startIndex).limit(limit).select('-password -__v');
    return products
  }

  async create(data) {
    return await productModel.create(data);
  }

  async update(id, data) {
    return await productModel.findByIdAndUpdate(id, data, {
      new: true,
    });
  }

  async delete(id) {
    return await productModel.findByIdAndDelete(id).select('-password -__v');
  }

  async getByTitle(title) {
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    return await productModel.findOne({
      title: {
        $regex: title,
        $options: 'i',
      },
    });
  }
}

export default ProductRepository;
