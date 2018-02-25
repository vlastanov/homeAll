const fs = require('fs')

const getContentType = (url) => {
    let contentType = 'text/plain'
    if (url.endsWith('.css')) {
        contentType = 'text/css'
    } else if (url.endsWith('.js')) {
        contentType = 'application/javascript'
    }

    return contentType;
}

const staticFile = (req, res) => {

    fs.readFile('.' + req.path, (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('Not Found')
            res.end()
        }

        let contentType = getContentType(req.path);

        res.writeHead(200, {
            'content-type': contentType
        })
        res.write(data)
        res.end()
    })
}

module.exports = staticFile