import express from "express";
import WishListController from './wishList-controller.js';

const WishListRouter = express();

const wishListController = new WishListController();

WishListRouter.post("/", async (req, res) => {
  const wishList = await wishListController.create(req.body);
  res.status(200).send(wishList);
});

//wishListRouter.get('/:id', wishListController.listWishListById);

export default WishListRouter;
