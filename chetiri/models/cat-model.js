const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId


let catSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, default: 0 },
    birthday: { type: Date },
    owner: { type: ObjectId }
})

catSchema.methods.sayHello = function () {
    return `Hello from ${this.name}`
}
catSchema.path('age').validate(value => {
    return value >= 0
}, 'trqbva da bade polojitelno')

let Cat = mongoose.model('Cat', catSchema)

module.exports = Cat