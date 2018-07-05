const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


//import User Schema
const User = require('../models/user.model');


router.get('/', (req, res) => {
    User.find()
        .then( (user) => res.json(user))
});

router.post('/login', (req, res) => {
    
    const loginEmail = req.body.email;
    const loginPassword = req.body.password;

});

router.post('/signup', (req, res, next) => {

    const FIRST_NAME = req.body.first_name;
    const LAST_NAME = req.body.last_name;
    const EMAIL_P = req.body.email;
    let PASSWORD_P = req.body.password;

        let newUser = new User({
            first_name: FIRST_NAME,
            last_name: LAST_NAME,
            email: EMAIL_P,
            password: PASSWORD_P
        });

        if(!FIRST_NAME){
            return res.status(204).send({
                message: "Please enter a first name field"
            });
        }

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
});


router.delete('/delete/:id', (req, res, next) => {
    User.findById(req.params.id)
    .then( (user) => user.remove().then( () => res.json({success: true, message: "User Deleted"})))
    .catch( (err) => res.status(404).json({success: false}))

});

module.exports = router;