import productModel from './product-model.js';
import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://jessycipriano:ukWx1LFDTT75LGSZ@apisdatabase.udwbb.mongodb.net/wishlist-api?retryWrites=true&w=majority',
);

class ProductRepository {
  async get(id) {
    return await productModel.findById(id).select('-password -__v');
  }

  async getAll() {
    return await productModel.find().select('-password -__v');
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
}

export default ProductRepository;
