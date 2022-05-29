import WishListService from './wishList-service.js'
import WishListRepository from './wishList-repository.js'

class WishListController {
    async create(data) {
        try {
            const wishListRepository = new wishListRepository()
            const wishListService = new wishListService(wishListRepository)
            return await wishListService.create(data)
        }
        catch (err) { 
            console.log(err)
        }
    }

    update(id, data) {
        try {
            const wishListRepository = new WishListRepository()
            const wishListService = new WishListService(wishListRepository)
            return wishListService.update(id, data)
        } catch (err) { }
    }

    delete(id) {
        try {
            const wishListRepository = new WishListRepository()
            const wishListService = new WishListService(wishListRepository)
            return wishListService.delete(id)
        } catch (err) { }
    }

    getAll(page, limit, params) {
        try {
            const wishListRepository = new WishListRepository()
            const wishListService = new WishListService(wishListRepository)
            return wishListService.getAll(page, limit, params)
        } catch (err) { }
    }

    getWishLists(id){
        try {
            const wishListRepository = new WishListRepository()
            const wishListService = new WishListService(wishListRepository)
            return wishListService.getWishLists(id)
        } catch { }
    }

}


export default WishListController