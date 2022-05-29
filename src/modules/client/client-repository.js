import clientModel from "./client-model.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.CONNECTION_STRING)

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

    async getByEmail(email, selectFields) {
        return await clientModel.findOne({'email':email}).select(selectFields);
    }

    async getAll(page, limit, params) {
        return await clientModel.find(params).skip(page).limit(limit).select('-password -__v');
    }
    
}

export default ClientRepository;