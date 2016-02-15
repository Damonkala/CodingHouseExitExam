'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BEER_SECRET = process.env.BEER_SECRET;

var Beer;

var beerSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: {type: Number},
  review: {type: String}
});


Beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;
