const mongoose = require('mongoose')

let ownerSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
})

ownerSchema.virtual('fullname').get(function () {
    return this.firstname + ' ' + this.lastname
})

let Owner = mongoose.model('Owner', ownerSchema)

module.exports = Owner