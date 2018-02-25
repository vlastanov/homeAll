const mongoose = require('mongoose')

const tagSchema = mongoose.Schema({
    name: { type: mongoose.Schema.Types.String, required: true },
    creationDate: { type: mongoose.Schema.Types.Date, default: Date.now() },
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
})

const Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag