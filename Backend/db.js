const mongoose = require('mongoose');
require('dotenv').config()
const dbUrl = process.env.DB_URL || 'mongodb://127.0.0.1:27017/EDS_data';

const connectToMongo = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(dbUrl)
        .then(() => {
            console.log("DATABASE CONNECTED")
        })
        .catch(err => {
            console.log(" ERROR!!!!")
            console.log(err)
        })
}
module.exports = connectToMongo;