'use strict'

var express = require('express')
var router = express.Router();

var isAuthorized = require('../config/auth')
var Beer = require('../models/Beer');
var BEER_SECRET = process.env.BEER_SECRET;


var unirest = require('unirest');


router.get('/randomBeer', function(req, res){
	console.log("BOY HOWDEy");
	unirest.get(`http://api.brewerydb.com/v2/beer/random?key=${BEER_SECRET}`)
	.header("Accept", "application/json")
	.end(function (result) {
		console.log("send it back:", result.body);
		res.send(result.body);
	});
})
router.get('/getAllBeer', function(req,res){
	Beer.find({}, function(err, beer){
		res.send(beer);
	})
})
router.post('/saveBeer', function(req, res){
  Beer.save(req.body, function(err, user){
    res.send(user)
  })
})


module.exports = router;
