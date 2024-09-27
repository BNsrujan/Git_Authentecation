const mongoose = require('mongoose')


const OsSchema = new mongoose.Schema({
    name: { type: String, require: true }
})


const model = new mongoose.model('model', OsSchema)


module.exports = model;