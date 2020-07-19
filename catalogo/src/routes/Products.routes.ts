import { Router } from 'express'

import ProductServices from '../services/productServices'

const productsRoutes = Router()

productsRoutes.get('/:id/:format', async (request, response) => {
  const { id, format } = request.params
  const productServices = new ProductServices()
  const products = await productServices.exceute({
    id,
    format: format || 'compact',
  })
  return response.json(products)
})

export default productsRoutes
