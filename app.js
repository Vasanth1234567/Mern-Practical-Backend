require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const music = require('./routes/music')
const PORT = 3500
app.use(cors())

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log(`Connected successfully to the database.`))

app.use('/api/v1/music', music)


app.listen(PORT, console.log(`Server started running at http://localhost:${PORT}/api/v1/music`))