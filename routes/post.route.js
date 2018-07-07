const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');
const User = require('../models/user.model');


router.get('/getposts',(req, res) => {
    Post.find()
    .then(post => res.json(post))
});

router.get('/getposts/:id',(req, res) => {
    Post.findById(req.params.id)
    .then(post => res.send({
        posts: post
    }))
    .catch(err => res.send({
        error: err
    }))
});

router.post('/newpost', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        author: req.body.id,
        info: req.body.info,
        location: { 
            name: req.body.name
        },
        votes: {
            upVotes: req.body.upvotes,
            downVotes: req.body.downvotes 
        }
    });

    newPost.save((err, post) => {
        if(err){
            return res.status(500).send({
                error: err
            });
        }
        else{
            return res.status(200).send({
                success: "New Post Created",
                details: post
            });
        }
    });
});

module.exports = router;