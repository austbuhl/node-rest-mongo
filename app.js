// --> app.js
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const postsRouter = require('./routes/posts.routes')

// Config
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())

// DB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Routes
app.use('/posts', postsRouter)

// Start Server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
