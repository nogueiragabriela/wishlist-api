import { ClientRepository } from "./client-repository"

class ClientService {

    create(data) {
        const email = data.email
        if (!email) {
            throw new Error("Email is required")
        }
        const emailExists = ClientRepository.emailExists(email)
        if (emailExists) {
            throw new Error("Email already exists")
        }
        return ClientRepository.create(data)
    }

    update(id, data) {
        const id = data.id
        if (!id) {
            throw new Error("id is required")
        }
        if (data.email) {
            const emailExists = ClientRepository.emailExists(data.email)
            if (emailExists) {
                return ("Email already exists")
            }
        }
        return ClientRepository.update(id, data)
    }

    delete(id) {
        if (!id) {
            throw new Error("id is required")
        }

        // chamar o serviço de wishList para deletar todas as wishsList do cliente

        return ClientRepository.delete(id)
    }

    // testar se está funcionando
    getAll(page, limit, params) {
        if (params.name) {
            params = { name: { $regex: params.name, $options: 'i' } }
        }
        const startIndex = (page - 1) * limit;
        return ClientRepository.getAll(startIndex, limit, params)
    }

    getById(id) {
        return ClientRepository.getById(id)
    }

    getByEmail(email) {
        return ClientRepository.getByEmail(email)
    }

}

export default ClientService






