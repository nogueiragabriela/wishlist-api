import wishListModel from "./wishList-model.js";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config()

mongoose.connect(process.env.CONNECTION_STRING)
class WishListRepository {

    async getById(id) {
        return await wishListModel.findById(id);
    }

    async getByName(name) {
        return await wishListModel.findOne(name);
    }

    async create(data) {
        return await wishListModel.create(data);
        //Usar o populate
    }

    async update(id) {
        return await wishListModel.findByIdAndUpdate(id, client);
        //Usar o populate
    }

    async deleteWishList(id) {
        return await wishListModel.findByIdAndDelete(id);
    }

    async deleteProduct(id) {
        return await wishListModel.findByIdAndDelete(id);
    }

    async getAll(page, limit, params) {
        return await wishListModel.find(params).skip(page).limit(limit);
    }
    
}

export default WishListRepository