import { Router } from 'express'
import ProductsRoute from './Products.routes'

const routes = Router()

routes.use('/products', ProductsRoute)

export default routes
