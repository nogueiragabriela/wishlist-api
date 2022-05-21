import * as express from 'express';
import ClientController from './client-controller';

const clienteRouter = express();

const clientController = new ClientController();

clienteRouter.get('/:id', clientController.listClientById);