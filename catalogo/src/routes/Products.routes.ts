import { Router } from 'express'

import ProductServices from '../services/productServices'

const productsRoutes = Router()

productsRoutes.get('/:id', async (request, response) => {
  const { id } = request.params
  const format = request.query.format
  const productServices = new ProductServices()
  const products = await productServices.exceute({
    id,
    format: format?.toString() || 'compact',
  })
  if (products) {
    const result = JSON.parse(products)
    return response.json(result)
  }
})

export default productsRoutes
