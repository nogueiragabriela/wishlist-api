import express from 'express'
import {ClientRouter} from '../modules/client/client-routes.js'


const router = express.Router()

router.use('/clients', ClientRouter)


export default router
