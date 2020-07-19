import { Router } from 'express'
import ProductsRoute from './Products.routes'

const routes = Router()

routes.use('/', ProductsRoute)

export default routes
