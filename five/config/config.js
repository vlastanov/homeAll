const path = require('path')

module.exports = {
    development: {
        connectionString: 'mongodb://admin:admin@ds135817.mlab.com:35817/baza1',
        rootPath: path.normalize(path.join(__dirname, '../'))
    },
    production:{}
}