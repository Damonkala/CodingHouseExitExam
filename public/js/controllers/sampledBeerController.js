'use strict';

var app = angular.module('finalExam');

app.controller('sampledBeerCtrl', function($scope, $state, $rootScope, UserService, $cookies, jwtHelper, $location, BeerService) {
	var cookies = $cookies.get('token');
	if(cookies){
		$scope.userInfo = (jwtHelper.decodeToken(cookies))
	}
	UserService.isAuthed(cookies)
	.then(function(res , err){
		 if (res.data === "authRequired"){$location.path('/login')}
		 else{$scope.isLoggedIn = true;}
	})
	BeerService.getAllBeer()
	.then(function(res){
		$scope.beers = res.data
		console.log("BEAR", $scope.beers);
	}, function(err){
		console.log(err);
	})
	$scope.unsample = function(beer){
		BeerService.unsampleBeer(beer)
		.then(function(res){
			console.log("REASDSDA", res);
		}, function(err){
			console.log(err);
		})
	}
});
