import express from 'express';
import ClientController from './client-controller.js';

const ClientRouter = express();

const clientController = new ClientController();

ClientRouter.post('/', async (req, res) => {
    const client = await clientController.create(req.body)
    res.status(200).send(client)
});

ClientRouter.put('/:id', async (req, res) => {
    const client = await clientController.update(req.params.id, req.body)
    res.status(200).send(client)
});

ClientRouter.delete('/:id', async (req, res) => {
    const client = await clientController.delete(req.params.id)
    res.status(200).send(client)
});

ClientRouter.get('/:idOrEmail', async (req, res) => {
    const client = await clientController.get(req.params.idOrEmail)
    res.status(200).send(client)
});

ClientRouter.get('/', async (req, res) => {
    const clients = await clientController.getAll(req.query.page, req.query.limit, req.query)
    res.status(200).send(clients)
 });

 ClientRouter.get('/wishlist/:id', async (req, res) => {
    const clientWishLists = await clientController.getClientLists(req.params.id)
    res.status(200).send(clientWishLists)
 });

export { ClientRouter }