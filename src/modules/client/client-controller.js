import ClientService from './client-service'


class ClientController {

    create(data) {
        try {
            const clientService = new ClientService()
            return clientService.create(data)
        }
        catch (err) { }
    }

    update(id, data) {
        try {
            const clientService = new ClientService()
            return clientService.update(id, client)
        } catch (err) { }
    }

    delete(id) {
        try {
            const clientService = new ClientService()
            return clientService.delete(id)
        } catch (err) { }
    }

    getAll(page, limit, params) {
        try {
            const clientService = new ClientService()
            return clientService.getAll(page, limit, params)
        } catch (err) { }
    }

    getById(id) {
        try{
            const clientService = new ClientService()
            return clientService.getById(id)
        } catch {}
    }

    getByEmail(email) {
        try {
            const clientService = new ClientService()
            return clientService.getByEmail(email)
        } catch (err) { }
    }
        
}


export default ClientController