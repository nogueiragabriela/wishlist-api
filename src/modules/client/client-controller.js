import ClientService from './client-service.js'
import ClientRepository from './client-repository.js'

class ClientController {

    clientRepository = new ClientRepository()


    //TODO: implementar a resposta de erro no catch
    async create(data) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.create(data)
        }
        catch (err) {
            throw new Error(err)
        }
    }

    async get(idOrEmail) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.get(idOrEmail)
        } catch {
            throw new Error(err)
        }
    }

    async update(id, data) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.update(id, data)
        } catch (err) {
            throw new Error(err)
        }
    }

    async delete(id) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.delete(id)
        } catch (err) {
            throw new Error(err)
        }
    }

    async getAll(page, limit, params) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.getAll(page, limit, params)
        } catch (err) {
            throw new Error(err)
        }
    }

    async getWishLists(id) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.getWishLists(id)
        } catch {
            throw new Error(err)
        }
    }

}


export default ClientController