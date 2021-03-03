const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', (req, res) => {
  Post.find((err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send(err)
    } else {
      console.log(data)
      res.status(200).json(data)
    }
  })
})

router.post('/', (req, res) => {
  const post = req.body
  Post.create(post, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).json(data)
    }
  })
})

router.get('/:postId', (req, res) => {
  const postId = req.params.postId
  Post.findById(postId, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(data)
    }
  })
})

router.put('/:postId', (req, res) => {
  const postId = req.params.postId
  const post = req.body

  Post.findByIdAndUpdate(postId, post, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(data)
    }
  })
})

module.exports = router
