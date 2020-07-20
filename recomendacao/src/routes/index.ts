import { Router } from 'express'
import ProductsRoute from './recommendations.routes'

const routes = Router()

routes.use('/recommendations', ProductsRoute)

export default routes
