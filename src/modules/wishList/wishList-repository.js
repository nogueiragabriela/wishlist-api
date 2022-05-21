import wishListModel from "./wishListModel";

export class WishListRepository {

    async getById(id) {
        return await wishListModel.findById(id);
    }

    async create(data) {
        return await wishListModel.create(data);
    }

    async update(id, client) {
        return await wishListModel.findByIdAndUpdate(id, client);
    }

    async delete(id) {
        return await wishListModel.findByIdAndDelete(id);
    }

    async getByEmail(email) {
        return await wishListModel.findOne({ email: email });
    }

    async getAll(page, limit, params) {
        return await wishListModel.find(params).skip(page).limit(limit);
    }
    
}
