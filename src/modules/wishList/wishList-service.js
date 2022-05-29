import mongoose from "mongoose";
//import { getRawInput } from "readline-sync";
import WishListRepository from "./wishList-repository.js";

class WishListService {
  constructor(wishListRepository = WishListRepository) {
    this.wishListRepository = wishListRepository;
  }
  async create(data) {
    const { title, products, client } = data;
    const titleExists = await this.wishListRepository.getByTitle(title);
    if (titleExists) {
      throw new Error("You already have a wishlist with this title!");
    }
    if (products.length === 0) {
      throw new Error(
        "You can't create a wishlist without at least one product!"
      );
    }
    for (let i = 0; i < products.length; i++) {
      for (let j = i + 1; j < products.length; j++) {
        if (products[i] === products[j]) {
          throw new Error(
            "You are trying to add a product that already exists in your wishlist!"
          );
        }
      }
    }
    return await this.wishListRepository.create(data);
  }

  async updateAddProducts(id, data) {
    if (data.products) {
      const { products } = data;
      const wishList = await this.wishListRepository.getById(id);
      for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
          if (products[i] === products[j]) {
            throw new Error(
              "You are trying to add a product twice in your wishlist!"
            );
          }
        }
      }

      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < wishList.products.length; j++) {
          if (products[i] === wishList.products[j].valueOf()) {
            throw new Error(
              "You are trying to add a product that already exists in your wishlist!"
            );
          }
        }
      }
      data.products = wishList.products.concat(data.products);
    }
    return await this.wishListRepository.updateAddProducts(id, data);
  }

  async updateDeleteProducts(id, data) {
    let wishList = await this.wishListRepository.getById(id);
    if (data.products) {
      const { products } = data;

      for (let i = 0; i < products.length; i++) {
        for (let j = i + 1; j < products.length; j++) {
          if (products[i] === products[j]) {
            throw new Error(
              "You are trying to delete a product twice in your wishlist!"
            );
          }
        }
      }
      for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < wishList.products.length; j++) {
          if (products[i] === wishList.products[j].valueOf()) {
            wishList.products = wishList.products.splice(j);
          }
        }
      }
      data.products = wishList.products;
    }
    return await this.wishListRepository.updateDeleteProducts(id, data);
  }

  async delete(id) {
    return await this.wishListRepository.delete(id);
  }

  async get(id) {
    return await this.wishListRepository.get(id);
  }

  async getAll(page, limit, params) {
    if (params.name) {
      params.name = { $regex: params.name, $options: "i" };
    }
    delete params.page;
    delete params.limit;
    const startIndex = (page - 1) * limit;
    return await this.wishListRepository.getAll(startIndex, limit, params);
  }

  async getByClient(client) {
    return await this.wishListRepository.getByClient(client);
  }
}

export default WishListService;
