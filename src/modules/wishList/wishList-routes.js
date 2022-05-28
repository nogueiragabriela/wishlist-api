import express from 'express';
import wishListController from './wishList-controller';
import { InputValidation } from '../../middleware/inputValidation/index.js';
import { createwishListSchema, updatewishListSchema } from './wishList-schema.js';

const WishListRouter = express();

const wishListController = new WishListController();

wishListRouter.post('/', InputValidation(createwishListSchema), async (req, res) => wishListController.create(req, res));

wishListRouter.put('/:id', InputValidation(updatewishListSchema), async (req, res) =>  wishListController.update(req, res));

wishListRouter.get('/:id', wishListController.listWishListById);

export default wishListRouter;
