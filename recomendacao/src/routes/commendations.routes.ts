import { Router } from 'express'

import ClientRedis from '../database/redis'
import { catalogAPI, rackingAPI } from '../services/api'

const productsRoutes = Router()

interface IrackingAPIDTO {
  weight: number
  recommendedProduct: {
    id: string
  }
}

productsRoutes.get('/', async (request, response) => {
  const { maxProducts, rankingType } = request.query

  const types = rankingType || 'mostpopular'
  const num = maxProducts || 10
  const numProducts = parseInt(num.toString()) < 10 ? 10 : parseInt(num.toString())
  const responseRacking = []

  const rackingAPIIntegartion = await rackingAPI.get<Array<IrackingAPIDTO>>(`/${types}.json`)
  let count = 1
  for (let item of rackingAPIIntegartion.data) {
    if (count <= numProducts) {
      const responseRedis = await ClientRedis.get(item.recommendedProduct.id)
      if (!responseRedis) {
        console.log('Product details not found on Redis')
        console.log(item.recommendedProduct.id)
        try{

          const responseProduct = await catalogAPI.get(`/${item.recommendedProduct.id}?format=complete`)
          if (responseProduct.data && responseProduct.status==200) {
            const product = responseProduct.data
            ClientRedis.set(product.id, JSON.stringify(product), 'EX', 10)
            responseRacking.push(product)
          }
          count++
        }catch(e){
          console.log('Product details not found on API Catalog. ID: ',item.recommendedProduct.id)
        }
      } else {
        console.log(responseRedis)
        responseRacking.push(responseRedis)
      }
    }
  }
  return response.send(responseRacking)

})

export default productsRoutes
