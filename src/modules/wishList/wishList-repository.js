import wishListModel from "./wishList-model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.CONNECTION_STRING);
class WishListRepository {
  async get(id) {
    return await wishListModel
      .findById(id)
      .populate("products")
      .populate("client");
  }

  async getById(id) {
    return await wishListModel.findById(id);
  }

  async getByClient(client) {
    return await wishListModel
      .find({ client: client })
      .populate("products")
      .populate("client");
  }

  async getByTitle(title) {
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return await wishListModel.findOne({ title: title });
  }

  async getAllProducts(id) {
    return await wishListModel.findOne(id);
  }

  async getProducts(id) {
    return await wishListModel.findOne(id);
  }

  async create(data) {
    return await wishListModel.create(data);
  }

  async updateAddProducts(id, data) {
    return await wishListModel
      .findByIdAndUpdate(id, data, { new: true })
      .populate("products");
  }

  async updateDeleteProducts(id, data) {
    return await wishListModel.findByIdAndUpdate(id, data, { new: true }).populate('products');
  }

  async delete(id) {
    return await wishListModel.findByIdAndDelete(id);
  }

  async getAll(page, limit, params) {
    return await wishListModel.find(params).skip(page).limit(limit);
  }
}

export default WishListRepository;
