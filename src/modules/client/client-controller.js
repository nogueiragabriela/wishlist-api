import ClientService from './client-service.js'
import ClientRepository from './client-repository.js'
import WishListRepository from '../wishList/wishList-repository.js'
import httpStatus from 'http-status'

class ClientController {
    clientRepository = new ClientRepository()
    wishListRepository = new WishListRepository()

    async create(req, res) {
        try {
            const clientService = new ClientService(this.clientRepository)
            const client = await clientService.create(req.body)
            res.status(httpStatus.CREATED).json({
                clientId: client._id,
                name: client.name,
                email: client.email
            })
        }
        catch (err) {
            if (err.message.includes('already exists')) {
                res.status(httpStatus.CONFLICT).json({
                    message: err.message
                })
            }
            else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    message: err.message
                })
            }
        }
    }

    async get(req, res) {
        try {
            const clientService = new ClientService(this.clientRepository)
            const client = await clientService.get(req.params.idOrEmail)
            if (client == null || client.length == 0) {
                res.status(httpStatus.NOT_FOUND).send()
            }
            else {
                res.status(httpStatus.OK).json({
                    client
                })
            }
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            })
        }
    }

    async update(req, res) {
        try {
            const clientService = new ClientService(this.clientRepository)
            const client = await clientService.update(req.params.id, req.body)
            res.status(httpStatus.OK).json({
                client: client
            })

        } catch (err) {
            if (err.message.includes('already exists')) {
                res.status(httpStatus.CONFLICT).json({
                    message: err.message
                })
            }
            else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    message: err.message
                })
            }
        }
    }

    async delete(req, res) {
        try {
            const clientService = new ClientService(this.clientRepository, this.wishListRepository)
            const client = await clientService.delete(req.params.id)
            if (client == null || client.length == 0) {
                res.status(httpStatus.NOT_FOUND).send()
            }
            else {
                res.status(httpStatus.OK).json({
                    client: client
                })
            }
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            })
        }
    }

    async getAll(req, res) {
        try {
            const clientService = new ClientService(this.clientRepository)
            const clients = await clientService.getAll(req.query.page, req.query.limit, req.query)
            if (clients == null || clients.length == 0) {
                res.status(httpStatus.NOT_FOUND).send()
            }
            else {
                res.status(httpStatus.OK).json({
                    clients: clients
                })
            }
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            })
        }
    }

    async getWishLists(req, res) {
        try {
            const clientService = new ClientService(this.clientRepository, this.wishListRepository)
            const wishListsIds = await clientService.getClientWishlistsIds(req.params.id)
            res.status(httpStatus.OK).json({
                wishListsIds
            })
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            })
        }
    }

}


export default ClientController