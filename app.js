const express = require('express')
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/ping', (req, res) => {
  res.send('pong')
})

// DB Config
const connectionUrl =
  'mongodb+srv://admin:admin@cluster0.m7ejy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(connectionUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
console.log(db)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
