const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const osRoute = require('./routes/api');

const cors = require('cors')
const dotenv = require('dotenv')


app.use(express.json())
app.use(cors())
dotenv.config()

const connectToMongo = require('./db')
connectToMongo()

app.use('/api/os', osRoute);

app.listen(3000, () => {
    console.log('server is running on port 3000')
})