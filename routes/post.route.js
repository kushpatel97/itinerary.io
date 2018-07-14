const express = require('express');
const router = express.Router();

const Post = require('../models/post.model');
const User = require('../models/user.model');


router.get('/getposts',(req, res) => {
    Post.find()
    .then(post => res.send(post))
});

router.get('/getposts/:id',(req, res) => {
    Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.send({
        error: err
    }))
});

router.post('/newpost', (req, res) => {
    User.findById(req.body.id)
    .then((user) => {
        
        const newPost = new Post({
            title: req.body.title,
            author: user._id,
            content: req.body.content,
            location: { 
                name: req.body.name
            },
            votes: {
                upVotes: req.body.upvotes,
                downVotes: req.body.downvotes 
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

// router.post('/newpost', (req, res) => {

//     User.findById(req.body.id, (user) => {

        // const newPost = new Post({
        //     title: req.body.title,
        //     author: user._id,
        //     info: req.body.info,
        //     location: { 
        //         name: req.body.name
        //     },
        //     votes: {
        //         upVotes: req.body.upvotes,
        //         downVotes: req.body.downvotes 
        //     }
        // });
        
//         newPost.save((err, post) => {
//             if(err){
                // return res.status(500).send({
                //     error: err
                // });
//             }
//             else{
//                 user.posts.push(newPost);
//                 user.save(err => {

//                 });
//                 return res.status(200).send({
//                     success: "New Post Created",
//                     details: post
//                 });
//             }
//         });
//     }); 
// });

module.exports = router;