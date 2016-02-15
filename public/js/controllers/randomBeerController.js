'use strict';

var app = angular.module('finalExam');

app.controller('randomBeerCtrl', function($scope, $state, $rootScope, UserService, $cookies, jwtHelper, $location, $http, BeerService) {
	var cookies = $cookies.get('token');
	if(cookies){
		$scope.userInfo = (jwtHelper.decodeToken(cookies))
	}
	UserService.isAuthed(cookies)
	.then(function(res , err){
		// console.log(res.data)
		 if (res.data === "authRequired"){$location.path('/login')}
		 else{$scope.isLoggedIn = true;}
	})
	$scope.getRandomBeer = function(){
		BeerService.randomBeer()
		.then(function(res){
			$scope.beer = res.data.data;
			console.log("Heres our data", $scope.beer);
		})
	}
	$scope.sample = function(){
		var newBeer = {}
		newBeer.name = $scope.beer.name;
		newBeer.id = $scope.beer.id;
		newBeer.isOrganic = $scope.beer.isOrganic;
		newBeer.description = $scope.beer.style.description;
		BeerService.sampleABeer(newBeer)
		.then(function(res){
			$scope.getRandomBeer();
		})
	}
});
