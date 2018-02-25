const express = require('express')
const port = 3000
const app = express()
const config = require('./config/config')

let environment = process.env.NODE_ENV || 'development'

require('./config/database.config')(config[environment])
require('./config/express')(app, config[environment])
require('./config/routes')(app)

app.listen(port, () => console.log('yes'))