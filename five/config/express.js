const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

module.exports = (app, config) => {
    app.set('view engine', 'pug')
    app.set('views', path.normalize(path.join(config.rootPath, './views')))

    app.use('/publicServerPath', express.static(path.normalize(path.join(config.rootPath, './public'))))
    app.use(bodyParser.urlencoded({ extended: true }))
}