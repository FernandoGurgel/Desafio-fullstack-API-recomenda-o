import Mongoose, { Schema, Document } from 'mongoose'

interface IProduct extends Document {
  imagesSsl: []
  skus: [
    {
      sku: string
      specs: []
      properties: {
        name: string
        installment: {
          count: string
          price: string
        }
        images: {
          imagem1: string
          default: string
        }
        price: string
        url: string
        details: {
          precoavista: string
        }
        status: string
        oldPrice: string
      }
      customBusiness: []
    },
  ]
  apiKey: string
  description: string
  type: string
  auditInfo: {
    updatedBy: string
    updatedThrough: string
  }
  specs: []
  eanCode: []
  price: string
  details: {
    name: string
    brand: string
    rating: string
    cod_venda: string
    precoavista: string
  }
  remoteUrl: []
  categories: [
    {
      id: string
      name: string
      parents: []
    },
  ]
  id: {
    type: string
    unique: true
    required: true
  }
  stock: []
  brand: string
  customBusiness: []
  basePrice: []
  images: {
    imagem1: string
    default: string
  }
  kitProducts: []
  created: string
  oldPrice: string
  published: []
  version: string
  url: string
  tags: []
  unit: []
  installment: {
    count: number
    price: number
  }
  name: string
  clientLastUpdated: string
  extraInfo: {
    hash: string
  }
  status: string
  ungroupedId: string
}

const ProductSchemas = new Schema({
  imagesSsl: Object,
  skus: [
    {
      sku: String,
      specs: Object,
      properties: {
        name: String,
        installment: {
          count: String,
          price: String,
        },
        images: {
          imagem1: String,
          default: String,
        },
        price: String,
        url: String,
        details: {
          precoavista: String,
        },
        status: String,
        oldPrice: String,
      },
      customBusiness: Object,
    },
  ],
  apiKey: String,
  description: String,
  type: String,
  auditInfo: {
    updatedBy: String,
    updatedThrough: String,
  },
  specs: Object,
  eanCode: Object,
  price: String,
  details: {
    name: String,
    brand: String,
    rating: String,
    cod_venda: String,
    precoavista: String,
  },
  remoteUrl: Object,
  categories: [
    {
      id: String,
      name: String,
      parents: [Object],
    },
  ],
  id: {
    type: String,
    unique: true,
    required: true,
  },
  stock: Object,
  brand: String,
  customBusiness: Object,
  basePrice: Object,
  images: {
    imagem1: String,
    default: String,
  },
  kitProducts: [Object],
  created: String,
  oldPrice: String,
  published: Object,
  version: String,
  url: String,
  tags: [Object],
  unit: Object,
  installment: {
    count: Number,
    price: Number,
  },
  name: String,
  clientLastUpdated: String,
  extraInfo: {
    hash: String,
  },
  status: String,
  ungroupedId: String,
})

export default Mongoose.model<IProduct>('product', ProductSchemas)
