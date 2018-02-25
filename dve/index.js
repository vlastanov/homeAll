const http = require('http')
const url = require('url')
const fs = require('fs')
const handlers = require('./handlers')

const port = 9876

http
    .createServer((req, res) => {
        req.path = url.parse(req.url).pathname

        for (handler of handlers) {
            let next = handler(req, res)
            if (!next) {
                break
            }
        }
    })
    .listen(port)

console.log(`Server on ${port}`)