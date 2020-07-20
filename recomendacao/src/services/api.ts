import axios from 'axios'

import '../utils/env'

const catalogAPI = axios.create({
  baseURL: process.env.CATALOG_API_URL
})

const rackingAPI = axios.create({
  baseURL: process.env.RANKING_API_URL
})

export {catalogAPI, rackingAPI}