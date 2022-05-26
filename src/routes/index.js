import express from 'express'
import {ClientRouter} from '../modules/client/client-routes.js'
import WishListRouter from '../modules/wishList/wishList-routes.js'


const router = express.Router()

router.use('/clients', ClientRouter)
router.use('/wishList', WishListRouter)


export default router
