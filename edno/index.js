const storage = require('./storage');

let val1 = storage.put('k', 'one');
console.log(val1)

let val2 = storage.get('k')
console.log(val2)

let val3 = storage.update('k', 'two')
console.log(val3)

// storage.delete('k');
// console.log(storage.get('k'))

// storage.clear()
// console.log(storage.get('k'))

storage.save().then((da) => {
    storage.clear();
    let val6 = storage.load().then((data) => {
        console.log(da)
        console.log(data)
    })
})


