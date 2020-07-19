import redisClient from '../database/redis'
import ProductModel from '../models/products'

interface ProductDTO {
  id: string
  format: string
}

class ProductServices {
  public async exceute({ id, format }: ProductDTO): Promise<string | null> {
    const resultRedis = await redisClient.get(id)
    if (!resultRedis) {
      console.log('Not found on redis')
      const resultMongo = await ProductModel.find({ _id: id })
      if (resultMongo) {
        redisClient.set(
          resultMongo[0]._id,
          JSON.stringify(resultMongo[0]),
          'EX',
          60,
        )
        if (format === 'compact') {
          const result = JSON.stringify({
            id: resultMongo[0]._id,
            name: resultMongo[0].name,
            price: resultMongo[0].price,
            status: resultMongo[0].status,
            categories: resultMongo[0].categories,
          })
          return result
        } else {
          const result = JSON.stringify(resultMongo[0])
          return result
        }
      } else {
        throw new Error('There is no product with the given id')
      }
    } else {
      console.log('Product found on Redis of Catalog API')
      const product = JSON.parse(resultRedis)
      if (format === 'compact') {
        const result = JSON.stringify({
          name: product.name,
          price: product.price,
          status: product.status,
          categories: product.categories,
        })
        return result
      } else {
        const result = JSON.stringify(product)
        return result
      }
    }
  }
}
export default ProductServices
