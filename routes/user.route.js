const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


//import User Schema
const User = require('../models/user.model');
const UserSession = require('../models/user_session.model');


router.get('/', (req, res) => {
    User.find()
        .then( (user) => res.json(user))
});

router.post('/login', (req, res) => {
    
    const loginEmail = req.body.email;
    const loginPassword = req.body.password;
    
    User.find({
        "email": loginEmail,
        "password": loginPassword
    },(err, user) => {
        if (!user) {
            return res.status(401).send({
                message: "User not found!"
            });
        }
        return res.status(201).send({
            user: user
        })
    }).limit(1);


});

router.post('/signup', (req, res, next) => {

    const FIRST_NAME = req.body.first_name;
    const LAST_NAME = req.body.last_name;
    const EMAIL_P = req.body.email;
    let PASSWORD_P = req.body.password;

    // const newUser = new User();
    // newUser.email = EMAIL_P;
    // newUser.first_name = FIRST_NAME;
    // newUser.last_name = LAST_NAME;
    // newUser.password = PASSWORD_P;
    // // newUser.password = newUser.generateHash(PASSWORD_P);


    // newUser.save((err, user) => {
    //     if(err){
    //         console.log(err);
    //         return res.status(400).send({
    //            message : "Failed to add user.",
    //            log: err
    //         });
    //     }
    //     else{
    //         return res.status(201).send({
    //             message : "User added succesfully."            
    //         });
    //     }
    // }); 

    bcrypt.hash(PASSWORD_P, 10, function(err, hash){
        if(err){
            return res.status(500).send({
                error: err
            });
        }
        else{
            const newUser = new User({
                email: EMAIL_P,
                password: hash,
                first_name: FIRST_NAME,
                last_name: LAST_NAME
            });
            newUser.save((err, user) => {
                if(err){
                    return res.status(500).send({
                        error: err
                    });
                }
                else{
                    return res.status(200).send({
                        success: "New User Created",
                        details: user
                    });
                }
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