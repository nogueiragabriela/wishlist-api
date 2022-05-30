import express from 'express';
import WishListController from './wishList-controller.js';
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { createwishListSchema, updatewishListSchema } from './wishList-schema.js';

const WishListRouter = express();

const wishListController = new WishListController();

WishListRouter.post('/', InputValidation(createwishListSchema), async (req, res) => wishListController.create(req, res));

WishListRouter.put('/addProducts/:id', InputValidation(updatewishListSchema), async (req, res) =>  wishListController.updateAddProducts(req, res));

WishListRouter.put('/deleteProducts/:id', InputValidation(updatewishListSchema), async (req, res) =>  wishListController.updateDeleteProducts(req, res));

WishListRouter.delete('/:id', async (req, res) =>  wishListController.delete(req, res));

WishListRouter.get('/:id', async (req, res) =>  wishListController.getWishLists(req, res));

WishListRouter.get('/', async (req, res) =>  wishListController.getAll(req, res));

WishListRouter.get('/client/:client', async (req, res) =>  wishListController.getByClient(req, res));



export default WishListRouter;
