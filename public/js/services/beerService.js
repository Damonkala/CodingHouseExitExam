'use strict';


var app = angular.module('finalExam');
// var BEER_SECRET = process.env.BEER_SECRET;

app.service('BeerService', function($http, ENV, $location, $rootScope){
	this.randomBeer = function(){
		return $http.get(`${ENV.API_URL}/beer/randomBeer`);
	};
	this.sampleABeer = function(beer){
		return $http.post(`${ENV.API_URL}/beer/saveBeer`, beer);
	}
	this.getAllBeer = function(beer){
		return $http.get(`${ENV.API_URL}/beer/getAllBeer`, beer);
	}
	this.unsampleBeer = function(beer){
		console.log("SDHASDASDASHDBJABDSHGASKFLhsdf");
		return $http.post(`${ENV.API_URL}/beer/unsampleBeer`, beer)
	}

})
