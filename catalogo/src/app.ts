import express from 'express'
import routes from './routes'
import cors from 'cors'
import MongoConfig from './database/mongodb'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

const mongodb = new MongoConfig()
mongodb.exec()
export default app
