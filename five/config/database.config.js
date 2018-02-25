const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = (config) => {
    mongoose.connect(config.connectionString)
    let db = mongoose.connection

    db.once('open', (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log('connected yes')
    })

    db.once('err', (err) => {
        console.log(err)
    })

    require('../models/Recipe')
}