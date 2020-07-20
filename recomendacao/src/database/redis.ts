import Redis from 'ioredis'

import '../utils/env'

const client = new Redis({
  port: parseInt(process.env.REDIS_PORT || '6380'),
  host: process.env.REDIS_HOST || 'redis',
  password: process.env.REDIS_PASSWORD || 'suasenha',
  db: 0,
})
export default client
