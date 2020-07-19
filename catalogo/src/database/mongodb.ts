import mongoose from 'mongoose'

import ImportScrpit from '../utils/script'
import '../utils/env'

class MongoConfig {
  public exec(): void {
    const url =
      'mongodb://' +
        process.env.MONGODB_HOST +
        '/' +
        process.env.MONGODB_DBNAME || 'mongodb://mongo/catalog'

    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        authSource: 'admin',
        user: process.env.MONGODB_USER,
        pass: process.env.MONGODB_PASSWORD,
      })
      .then(async () => {
        console.log('☘️Connected to MongoDB.')
        const response = new ImportScrpit()
        await response.execute()
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export default MongoConfig
