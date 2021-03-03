// --> routes/posts.routes.js

const express = require('express')
const router = express.Router()
const posts = require('../controllers/post.controller')

router.get('/', posts.findAll)
router.post('/', posts.create)
router.get('/:postId', posts.find)
router.put('/:postId', posts.update)
router.delete('/:postId', posts.delete)

module.exports = router
