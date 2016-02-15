'use strict';


var app = angular.module('finalExam');
// var BEER_SECRET = process.env.BEER_SECRET;

app.service('BeerService', function($http, ENV, $location, $rootScope){
	this.randomBeer = function(){
		return $http.get(`${ENV.API_URL}/beer/randomBeer`);
	};
})
