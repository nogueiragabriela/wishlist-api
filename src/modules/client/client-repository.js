import clientModel from "./clientModel";

export class ClientRepository {

    async getById(id) {
        return await clientModel.findById(id);
    }

    async create(data) {
        return await clientModel.create(data);
    }

    async update(id, client) {
        return await clientModel.findByIdAndUpdate(id, client);
    }

    async delete(id) {
        return await clientModel.findByIdAndDelete(id);
    }

    async getByEmail(email) {
        return await clientModel.findOne({ email: email });
    }

    async getAll(page, limit, params) {
        return await clientModel.find(params).skip(page).limit(limit);
    }
    
}

