const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
  res.send('Posts index route')
})

router.post('/', (req, res) => {
  const post = req.body
})

module.exports = router
