import clientModel from "./client-model.js";
import mongoose from "mongoose";


mongoose.connect('mongodb+srv://jessycipriano:ukWx1LFDTT75LGSZ@apisdatabase.udwbb.mongodb.net/wishlist-api?retryWrites=true&w=majority')

 class ClientRepository {
 

    async create(data) {
        return await clientModel.create(data);
    }

    async update(id, client) {
        return await clientModel.findByIdAndUpdate(id, client);
    }

    async delete(id) {
        return await clientModel.findByIdAndDelete(id);
    }

    async get(idOrEmail) {
        return await clientModel.findOne({$or : [{'_id':idOrEmail}, {'email':idOrEmail}]});  
    }

    async getAll(page, limit, params) {
        return await clientModel.find(params).skip(page).limit(limit);
    }
    
}


export default ClientRepository;