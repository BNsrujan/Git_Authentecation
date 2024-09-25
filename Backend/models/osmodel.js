const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: { type: String, require: true }
})

const model = new mongoose.model('model', userSchema)


module.exports = model;