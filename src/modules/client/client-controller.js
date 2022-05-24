import ClientService from './client-service.js'
import ClientRepository from './client-repository.js'

class ClientController {

    clientRepository = new ClientRepository()

    async create(data) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.create(data)
        }
        catch (err) {
            console.log(err)
        }
    }

    async get(idOrEmail) {
        try {
            const clientService = new ClientService(this.clientRepository)
            const client = await clientService.get(idOrEmail)
            return client
        } catch { }
    }

    async update(id, data) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.update(id, data)
        } catch (err) { }
    }

    async delete(id) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.delete(id)
        } catch (err) { }
    }

    async getAll(page, limit, params) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.getAll(page, limit, params)
        } catch (err) { }
    }

    async getWishLists(id) {
        try {
            const clientService = new ClientService(this.clientRepository)
            return await clientService.getWishLists(id)
        } catch { }
    }

}


export default ClientController