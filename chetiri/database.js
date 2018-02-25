const mongoose = require('mongoose')


const connectionString = 'mongodb://admin:admin@ds135817.mlab.com:35817/baza1'

module.exports = () => {
    return new Promise((resolve, reject) => {
        mongoose.Promise = global.Promise
        mongoose.connect(connectionString)
        let database = mongoose.connection

        database.once('open', (err) => {
            if (err) {
                console.log(err)
                return
            }
            console.log("Connected YES")
            resolve()
        })

        database.on('error', (err) => {
            console.log(err)
            reject()
        })

    })
}