const homePageHandler = require('./home-page')
const staticPageHandler = require('./static-file')

const handlers = [
    homePageHandler,
    staticPageHandler
]

module.exports = handlers