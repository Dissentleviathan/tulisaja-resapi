const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const { route } = require('express/lib/application')

router.get('/', async(req, res) => {
    try {
        const post = await Post.find()
        res.json(post)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

router.post('/', async (req, res) => {
    const inputPost = new Post ({
        content: req.body.content,
        user_id: req.body.user_id,
        username: req.body.username
    })
    
    try {
        const post = await inputPost.save()
        res.json(post) 
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router