const express = require('express')
const mongoose = require('mongoose')
const postsRouter = require('./routes/posts')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.use('/posts', postsRouter)

// DB Config
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection
console.log(db)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
