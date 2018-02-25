const fs = require('fs')

let data = { name: 'Pesho' }

const isItString = (key) => {
    if (typeof key !== 'string') {
        throw new Error('should be string')
    }
}

const isItInTheContainer = (key) => {
    if (data.hasOwnProperty(key)) {
        throw Error('the key has already exists')
    }
}

const itsNotUnike = (key) => {
    if (!data.hasOwnProperty(key)) {
        throw new Error('key is missing')
    }
}

let put = (key, value) => {
    isItString(key);
    isItInTheContainer(key);

    return data[key] = value;

}
let get = (key) => {
    isItString(key)
    itsNotUnike(key)

    return data[key];
}
let update = (key, value) => {
    isItString(key);
    itsNotUnike(key);

    return data[key] = value;
}
let deleteItem = (key) => {
    isItString(key);
    itsNotUnike(key);
    delete data[key]
}
let clear = () => {
    data = {}
}
let save = () => {
    return new Promise((resolve, reject) => {
        let dataAsString = JSON.stringify(data)
        fs.writeFile('storage.dat', dataAsString, (err) => {
            if (err) {
                reject(err)
                return
            }
            resolve(' emil')
        })
    })
}
let load = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('storage.dat', 'utf8', (err, dataRead) => {
            if (err) {
                reject(err)
                return
            }
            data = JSON.parse(dataRead)
            resolve(data)
        })

    })
}


module.exports = {
    put: put,
    get: get,
    update: update,
    clear: clear,
    delete: deleteItem,
    save: save,
    load: load,
}