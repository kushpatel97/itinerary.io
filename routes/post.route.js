const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');
const User = require('../models/user.model');

//Gets all posts
router.get('/getposts',(req, res) => {
    Post.find()
    .then(post => res.send(post))
});

//Gets a post by a postID
router.get('/getpost/:post_id',(req, res) => {
    Post.findById(req.params.post_id)
    .then(post => res.json(post))
    .catch(err => res.send({
        error: err
    }))
});

//Gets all posts by a user
router.get('/getpostsby/:user_id',(req, res) => {
    Post.find({author: req.params.user_id}, (err, posts) => {
        if(err){
            return res.status(500).send({
                success: false,
                err: err
            });
        }
        else{
            return res.status(200).send({
                success: true,
                posts: posts
            });
        }
    });
});


//Creates a new post
router.post('/newpost', (req, res) => {
    User.findById(req.body.id)
    .then((user) => {
        
        const newPost = new Post({
            title: req.body.title,
            author: user._id,
            content: req.body.content,
            location: { 
                name: req.body.name
            }
        });

        newPost.save((err,post) => {
            if(err){
                return res.status(500).send({
                    location: "New Post Saving Error",
                    error: err
                });
            }
            else{
                return res.status(200).send({
                    success: true,
                    message: "New Post Created",
                    user_data: user,
                    post_desc: post
                });
            }
        });

        user.posts.push(newPost);
        user.save((err,user) => {
            if(err){
                return res.status(500).send({
                    location: "Adding User post Error",
                    error: err
                });
            }
            // console.log(user);
        });

        User.findById(req.body.id)
        .populate('posts')
        .exec((err, post) => {
            if(err){
                return res.status(500).send({
                    location: "Population Error",
                    error: err
                });
            }
            // console.log(post);
        });
    })
    .catch(err => {
        return res.status(500).send({
            error: err
        });
    });
});


module.exports = router;