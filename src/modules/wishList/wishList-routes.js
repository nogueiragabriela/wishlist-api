import * as express from 'express';
import wishListController from './wishList-controller';

const wishListRouter = express();

const wishListController = new WishListController();

wishListRouter.get('/:id', wishListController.listWishListById);