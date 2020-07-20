let Redis = require('ioredis')

let options = {
    port: 6380, 
    host: 'localhost',
    password: 'suasenha',
    db: 0
}

console.log(JSON.stringify(options))
let client = new Redis(options)

module.exports = client