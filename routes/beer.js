'use strict'

var express = require('express')
var router = express.Router();

var isAuthorized = require('../config/auth')
var Beer = require('../models/Beer');


// router.post('/register', function(req, res){
//   User.register(req.body, function(err, user){
//     res.send(user)
//   })
// })
// router.get('/', function(req,res){
//   User.find({}, function(err, users){
//     res.send(users);
//   })
// })
// router.post('/login', function(req, res){
//   User.authenticate(req.body, function(err, user){
//     if(user){
//       var token = jwt.encode(user, process.env.JWT_SECRET);
//       res.cookie('token', token).send('login succesfull')
//     } else{
//       res.send('Incorrect Username or Password!')
//     }
//   })
// })
// router.post('/isAuthed', isAuthorized ,function(req, res){
//   console.log('is logged in')
//   console.log(req.body.token)
//   res.send('is logged in')
// })

module.exports = router;
