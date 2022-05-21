import wishListService from './wishList-service'

class WishListController {

    listwishListById(wishListId) {
        const wishListService = new wishListService()
        return wishListService.listwishList(wishListId)
    }
}

export default WishListController