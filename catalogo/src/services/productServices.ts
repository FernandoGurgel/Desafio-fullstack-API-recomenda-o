import redisClient from '../database/redis'
import ProductModel from '../models/products'

interface ProductDTO {
  id: string
  format: string
}

class ProductServices {
  public async exceute({ id, format }: ProductDTO): Promise<void> {
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
        if (format === 'complete') {
          return (
            id:resultMongo[0]._id
            name: resultMongo[0].name,
            price: resultMongo[0].price,
            status: resultMongo[0].status,
            categories: resultMongo[0].categories)
        }
      } else {
        throw new Error('There is no product with the given id')
      }

      console.log(resultMongo)
      //   function (err, product) {
      //   console.log('Querying MongoDB instead')
      //   if (err) res.end(JSON.stringify(err))
      //   else if (product.length > 0) {
      //     redisClient.set(product[0].id, JSON.stringify(product[0]), 'EX', 60)

      //     if (req.query.searchType === 'compact')
      //       res.end(
      //         JSON.stringify({
      //           name: product[0].name,
      //           price: product[0].price,
      //           status: product[0].status,
      //           categories: product[0].categories,
      //         }),
      //       )
      //     else if (req.query.searchType === 'complete')
      //       res.end(JSON.stringify(product[0]))
      //   } else
      //     res.end(
      //       JSON.stringify({
      //         status: 400,
      //         message: 'There is no product with the given id',
      //       }),
      //     )
      // })
    } else {
    }

    // console.log(id)
  }
}
export default ProductServices
