const fs = require('fs')


const homePage = (req, res) => {

    if (req.path === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHead(200, {
                'content-type': 'text/html'
            })
            res.write(data)
            res.end()
        })
    } else {
        return true
    }
}

module.exports = homePage