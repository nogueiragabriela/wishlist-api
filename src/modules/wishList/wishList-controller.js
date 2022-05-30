import WishListService from './wishList-service.js'
import WishListRepository from './wishList-repository.js'
import httpStatus from 'http-status'

class WishListController {
    wishListRepository = new WishListRepository();
    async create(req, res) {
        try {
            const wishListService = new WishListService(this.wishListRepository)
            const wishList = await wishListService.create(req.body)
            res.status(httpStatus.CREATED).json({
                wishListId: wishList._id,
                title: wishList.title,
                clientId: wishList.client,
                products: wishList.products,
                description: wishList.description
            })
        }
        catch (err) {
            if (err.message.includes('already exists')) {
                res.status(httpStatus.CONFLICT).json({
                    message: err.message
                })
            }
            else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    message: err.message
                })
            }
        }
    }

    async updateAddProducts(req, res) {
        try {
            const wishListService = new WishListService(this.wishListRepository)
            const wishList = await wishListService.updateAddProducts(req.params.id, req.body)
            res.status(httpStatus.OK).json({
                wishList
            })

        } catch (err) {
            if (err.message.includes('already exists')) {
                res.status(httpStatus.CONFLICT).json({
                    message: err.message
                })
            }
            else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    message: err.message
                })
            }
        }
    }
    async updateDeleteProducts(req, res) {
        try {
            const wishListService = new WishListService(this.wishListRepository)
            const wishList = await wishListService.updateDeleteProducts(req.params.id, req.body)
            res.status(httpStatus.OK).json({
                wishList
            })

        } catch (err) {
            if (err.message.includes('already exists')) {
                res.status(httpStatus.CONFLICT).json({
                    message: err.message
                })
            }
            else {
                res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                    message: err.message
                })
            }
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id
            const wishListRepository = new WishListRepository()
            const wishListService = new WishListService(wishListRepository)
            const wishList = await wishListService.delete(id)
            res.status(200).json(wishList)
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            })
         }
    }

    async getAll(req,res) {
        try {
            const wishListService = new WishListService(this.wishListRepository)
            const wishLists = await wishListService.getAll(req.query.page, req.query.limit, req.query)
            if (!wishLists) {
                res.status(httpStatus.NOT_FOUND).send()
            }
            else {
                res.status(httpStatus.OK).json({
                    wishLists
                })
            }
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            })
        }
    }

    async getWishLists(req, res){
        try {
            const id = req.params.id
            const wishListService = new WishListService(this.wishListRepository)
            const wishList = await wishListService.get(id)
            res.status(200).json(wishList)
        } catch (err) {
            console.log(err)
         }
    }

    async getByClient(req, res) {
        try {
            const wishListService = new WishListService(this.wishListRepository)
            
            const wishList = await wishListService.getByClient(req.params.client)
            if (!wishList) {
                res.status(httpStatus.NOT_FOUND).send()
            }
            else {
                res.status(httpStatus.OK).json({
                    wishList: wishList
                })
            }
        } catch (err) {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                message: err.message
            })
        }
    }
}


export default WishListController