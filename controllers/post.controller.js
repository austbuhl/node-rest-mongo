const Post = require('../models/Post')

exports.create = (req, res) => {
  const post = req.body
  Post.create(post, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).json(data)
    }
  })
}

exports.findAll = (req, res) => {
  Post.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(data)
    }
  })
}

exports.find = (req, res) => {
  const postId = req.params.postId
  Post.findById(postId, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(data)
    }
  })
}

exports.update = (req, res) => {
  const postId = req.params.postId
  const post = req.body

  Post.findByIdAndUpdate(postId, post, { new: true }, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).json(data)
    }
  })
}

exports.delete = (req, res) => {
  const postId = req.params.postId

  Post.findByIdAndDelete(postId, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send({ message: `Succesfully deleted post ${postId}` })
    }
  })
}
