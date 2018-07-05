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
    
    User.findOne({"email": loginEmail})
    .exec()
    .then((user) => {
        bcrypt.compare(loginPassword, user.password, (err, result) => {
            if(err){
                return res.status(401).send({
                    failed: "Unauthorized Access"
                });
            }
            if(result){
                return res.status(200).send({
                    success: "Ready for JWT Auth"
                });
            }
            return res.status(401).send({
                failed: "Unauthorized Access"
            });
        });
    })
    .catch(error => {
        return res.status(500).send({
            error: error
        });
    });


});

router.post('/signup', (req, res, next) => {

    const FIRST_NAME = req.body.first_name;
    const LAST_NAME = req.body.last_name;
    const EMAIL_P = req.body.email;
    let PASSWORD_P = req.body.password;

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