import mongoose from "mongoose"
import bcrypt from "bcrypt"
class ClientService {
    constructor(
        clientRepository
    ) {
        this.clientRepository = clientRepository
    }

    async create(data) {
        const email = data.email
        if (!email) {
            throw new Error("Email is required")
        }
        const emailExists = await this.clientRepository.getByEmail(email)
        if (emailExists) {
            throw new Error("Email already exists")
        }
       
        let hashPassword = await bcrypt.hash(data.password, 10)
        data.password = hashPassword

        return await this.clientRepository.create(data)
    }



    async update(id, data) {
        if (!id) {
            throw new Error("id is required")
        }
        if (data.email) {
            const emailExists = await this.clientRepository.getByEmail(data.email)
            if (emailExists) {
                return ("Email already exists")
            }
        }

        if(data.password){
            let hashPassword = await bcrypt.hash(data.password, 10)
            data.password = hashPassword
        }
        
        return await this.clientRepository.update(id, data)
    }


    async delete(id) {
        if (!id) {
            throw new Error("id is required")
        }
        return await this.clientRepository.delete(id)
    }


    async get(idOrEmail) {
        if (mongoose.Types.ObjectId.isValid(idOrEmail)) {
            return await this.clientRepository.get(idOrEmail)
        }
        return await this.clientRepository.getByEmail(idOrEmail)
    }


    async getAll(page, limit, params) {
        if (params.name) {
            params.name = { $regex: params.name, $options: 'i' }
        }
        delete params.page
        delete params.limit
        const startIndex = (page - 1) * limit;
        return await this.clientRepository.getAll(startIndex, limit, params)
    }

    getClientLists(id) {
        //chamar serviço do wishist
    }



}

export default ClientService






