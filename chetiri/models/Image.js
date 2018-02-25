const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    url: { type: mongoose.Schema.Types.String, required: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now() },
    description: { type: mongoose.Schema.Types.String },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }]
})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image