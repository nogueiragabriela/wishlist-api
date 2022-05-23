
class ClientService  {
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
        return await this.clientRepository.create(data)
    }

    update(id, data) {
        if (!id) {
            throw new Error("id is required")
        }
        if (data.email) {
            const emailExists = this.clientRepository.getByEmail(data.email)
            if (emailExists) {
                return ("Email already exists")
            }
        }
        return this.clientRepository.update(id, data)
    }

    delete(id) {
        if (!id) {
            throw new Error("id is required")
        }

        // chamar o serviço de wishList para deletar todas as wishsList do cliente

        return this.clientRepository.delete(id)
    }

    // testar se está funcionando
    getAll(page, limit, params) {
        if (params.name) {
            params = { name: { $regex: params.name, $options: 'i' } }
        }
        const startIndex = (page - 1) * limit;
        return this.clientRepository.getAll(startIndex, limit, params)
    }


    get(idOrEmail) {
        return this.clientRepository.get(idOrEmail)
    }



}

export default ClientService






