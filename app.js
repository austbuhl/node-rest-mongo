const express = require('express')
const mongoose = require('mongoose')
const postsRouter = require('./routes/posts')
require('dotenv').config()

// Setup
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use('/posts', postsRouter)

// DB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
