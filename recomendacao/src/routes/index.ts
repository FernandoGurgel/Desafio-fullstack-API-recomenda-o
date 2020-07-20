import { Router } from 'express'
import ProductsRoute from './commendations.routes'

const routes = Router()

routes.use('/commendations', ProductsRoute)

export default routes
