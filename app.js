const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extanded: true
}));
app.use(bodyParser.json());
app.use(cors())

//import routes
const postRoutes = require('./routes/post')

require('dotenv/config')

app.use('/post', postRoutes)


app.get('/', (req, res) => {
    res.send('sup fellas')
})


mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection

//handle error
db.on('error', console.error.bind(console, 'Error Establishing a Database Connection'))

//handle success
db.once('open', () => {
    console.log('Database is connected')
})

app.listen(process.env.PORT, () => {
    console.log(`Server Running on Port! ${process.env.PORT}`)
})