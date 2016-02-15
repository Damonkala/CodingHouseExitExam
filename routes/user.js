'use strict'

var express = require('express')
var router = express.Router();

var User = require('../models/User');

var jwt = require('jwt-simple');


router.post('/register', function(req, res){
  User.register(req.body, function(err, user){
    res.send(user)
  })
})

router.post('/login', function(req, res){
    console.log("AUTHENTICATING ", req.body);
  User.authenticate(req.body, function(err, user){
    if(user){
      var token = jwt.encode(user, process.env.JWT_SECRET);
      res.cookie('token', token).send('login succesfull')
    } else{
      res.send('Incorrect Username or Password!')
    }
  })
})



module.exports = router;
