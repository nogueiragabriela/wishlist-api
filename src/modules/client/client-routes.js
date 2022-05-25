import express from 'express';
import ClientController from './client-controller.js';
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { createClientSchema, updateClientSchema } from './client-schema.js';

const ClientRouter = express();

const clientController = new ClientController();

ClientRouter.post('/', InputValidation(createClientSchema), async (req, res) => clientController.create(req, res));

ClientRouter.put('/:id', InputValidation(updateClientSchema), async (req, res) =>  clientController.update(req, res));

ClientRouter.delete('/:id', async (req, res) => clientController.delete(req, res));

ClientRouter.get('/:idOrEmail', async (req, res) => clientController.get(req, res));

ClientRouter.get('/', async (req, res) => clientController.getAll(req, res));

ClientRouter.get('/wishlist/:id', async (req, res) => clientController.getClientLists(req, res));

export { ClientRouter }