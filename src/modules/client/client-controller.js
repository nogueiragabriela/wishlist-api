import ClientService from './client-service.js'
import ClientRepository from './client-repository.js'
import httpStatus from 'http-status'

class ClientController {

    
    async create(req, res) {
        try {
            const clientRepository = new ClientRepository()
            const clientService = new ClientService(clientRepository)

            const client =  await clientService.create(req.body)
            res.status(httpStatus.CREATED).send(client)
        }
        catch (err) {
            console.log(err.message)
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                mensagem: err.message
            })
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