import mongoose from "mongoose"
import bcrypt from "bcrypt"
class ClientService {
    constructor(
        clientRepository,
        wishListRepository
    ) {
        this.clientRepository = clientRepository
        this.wishListRepository = wishListRepository
    }



    async create(data) {
        const email = data.email
        const emailExists = await this.clientRepository.getByEmail(email)
        if (emailExists) {
            throw new Error("Email already exists")
        }
        let hashPassword = await bcrypt.hash(data.password, 10)
        data.password = hashPassword
        const client = await this.clientRepository.create(data)
        return client
    }

    async get(idOrEmail) {
        if (mongoose.Types.ObjectId.isValid(idOrEmail)) {
            return await this.clientRepository.get(idOrEmail)
        }
        const selectFields = '-password -__v'
        return await this.clientRepository.getByEmail(idOrEmail, selectFields)
    }

    async update(id, data) {
        if (data.email) {
            const emailExists = await this.clientRepository.getByEmail(data.email)
            if (emailExists) {
                throw new Error("Email already exists")
            }
        }
        if (data.password) {
            let hashPassword = await bcrypt.hash(data.password, 10)
            data.password = hashPassword
        }
        return await this.clientRepository.update(id, data)
    }


    async delete(id) {
        const wishLists = await this.wishListRepository.getByClient(id);
        if (wishLists.length > 0) {
            throw new Error("Client has wishlists, can't delete!")
        }
        return await this.clientRepository.delete(id)
    }


    async getAll(page, limit, filter) {
        if (filter.name) {
            filter.name = { $regex: filter.name, $options: 'i' }
        }
        delete filter.page
        delete filter.limit
        const startIndex = (page - 1) * limit;
        return await this.clientRepository.getAll(startIndex, limit, filter)
    }

    async getClientWishlistsIds(id) {
        const wishLists = await this.wishListRepository.getByClient(id);
        const wishlistsIds = wishLists.map(wishlist => wishlist._id);
        return wishlistsIds;
    }



}

export default ClientService






