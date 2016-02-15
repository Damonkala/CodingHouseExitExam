'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BEER_SECRET = process.env.BEER_SECRET;

var Beer;

var beerSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  rating: {type: Number},
  isOrganic: {type: String},
  review: {type: String}
});

beerSchema.statics.save = function(beer, cb) {
  var name = beer.name;
  var id = beer.id;
  var description = beer.description;
  var isOrganic = beer.isOrganic;

  Beer.findOne({id: id}, function(err, beer){
    if(err || user) return cb(err || 'Beer already sampled');
    var newBeer = new Beer();
    newBeer.name = name;
    newBeer.description = description;
    newBeer.isOrganic = isOrganic;
    newBeer.save(function(err, savedBeer){
      cb(err, savedBeer);
    });
  });
};

Beer = mongoose.model('Beer', beerSchema);
module.exports = Beer;
