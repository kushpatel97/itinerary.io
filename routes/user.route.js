const express = require('express');
const router = express.Router();

//import User Schema
const User = require('../models/user.model');


router.get('/', (req, res) => {
    User.find()
        .then( (user) => res.json(user))
});

router.post('/login', (req, res) => {

});

router.post('/signup', (req, res, next) => {

    if (req.body.password !== req.body.passwordConf) {
        return res.status(400).send({
            message : "Passwords do not match!"
        });
    }

    if (req.body.email && req.body.username && req.body.password && req.body.passwordConf && req.body.name) {
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
            email: req.body.email
        });
        newUser.save((err, user) => {
            if(err){
                return res.status(400).send({
                    message : "Failed to add user."
                });
            }
            else{
                return res.status(201).send({
                    message : "User added succesfully."
                });
            }
        });
    }
    else {
        return res.status(404).send({
            message : "Please fill in all fields"
        });
    }

    

});


router.delete('/delete/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then( (user) => user.remove().then( () => res.json({success: true})))
    .catch( (err) => res.status(404).json({success: false}))

});

module.exports = router;