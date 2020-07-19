import fs from 'fs'
import path from 'path'
import ProductModel from '../models/products'

class ImportScrpit {
  public async execute() {
    const catalog = this.getCatalog()

    console.log('Registering products to database...')
    ProductModel.insertMany(catalog)
      .then(() => {
        console.log('Products successfully registered to database.')
      })
      .catch((error) => {
        console.log('Error while registering products to database. Details:')
        console.log(error)
      })
  }

  getCatalog(): JSON {
    const jsonArrayString =
      '[' +
      fs
        .readFileSync(path.resolve(__dirname, 'catalog.json'), 'utf-8')
        .split('\n')
        .join(',') +
      ']'
    const catalog = JSON.parse(jsonArrayString)
    return catalog
  }
}

export default ImportScrpit
