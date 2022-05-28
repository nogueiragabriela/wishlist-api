import clientModel from "./client-model.js";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://jessycipriano:ukWx1LFDTT75LGSZ@apisdatabase.udwbb.mongodb.net/wishlist-api?retryWrites=true&w=majority')

 class ClientRepository {
 
    async create(data) {
        return await clientModel.create(data);
    }

    async update(id, client) {
        return await clientModel.findByIdAndUpdate(id, client, {new: true}).select('-password -__v');
    }

    async delete(id) {
        return await clientModel.findByIdAndDelete(id).select('-password -__v');
    }

    async get(id) {
       return await clientModel.findById(id).select('-password -__v');
    }

    async getByEmail(email) {
        return await clientModel.findOne({'email':email}).select('-password -__v');
    }

    async getAll(page, limit, params) {
        return await clientModel.find(params).skip(page).limit(limit).select('-password -__v');
    }
    
}

export default ClientRepository;