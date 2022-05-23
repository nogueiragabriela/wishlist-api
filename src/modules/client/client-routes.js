import express from 'express';
import ClientController from './client-controller.js';

const ClientRouter = express();

const clientController = new ClientController();

ClientRouter.post('/', async (req, res) =>{
    const client = await clientController.create(req.body)
     res.status(200).send(client)
});


//  ClientRouter.update('/:id', clientController.update);
//  ClientRouter.delete('/:id', clientController.delete);
//  ClientRouter.get('/:idOrEmail', clientController.get);
//  ClientRouter.get('/', clientController.getAll);

export  {ClientRouter}