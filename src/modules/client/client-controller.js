import ClientService from './client-service.js'
import ClientRepository from './client-repository.js'

class ClientController {
    async create(data) {
        try {
            const clientRepository = new ClientRepository()
            const clientService = new ClientService(clientRepository)
            return await clientService.create(data)
        }
        catch (err) { 
            console.log(err)
        }
    }

    update(id, data) {
        try {
            const clientRepository = new ClientRepository()
            const clientService = new ClientService(clientRepository)
            return clientService.update(id, data)
        } catch (err) { }
    }

    delete(id) {
        try {
            const clientRepository = new ClientRepository()
            const clientService = new ClientService(clientRepository)
            return clientService.delete(id)
        } catch (err) { }
    }

    getAll(page, limit, params) {
        try {
            const clientRepository = new ClientRepository()
            const clientService = new ClientService(clientRepository)
            return clientService.getAll(page, limit, params)
        } catch (err) { }
    }

    get(idOrEmail) {
        try {
            const clientRepository = new ClientRepository()
            const clientService = new ClientService(clientRepository)
            return clientService.get(idOrEmail)
        } catch { }
    }

    getClientLists(id){
        try {
            const clientRepository = new ClientRepository()
            const clientService = new ClientService(clientRepository)
            return clientService.getClientLists(id)
        } catch { }
    }

}


export default ClientController