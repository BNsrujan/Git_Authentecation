const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    sub: { type: String, required: true, unique: true },
})


const userid = new mongoose.model('User', userSchema)


module.exports = userid;