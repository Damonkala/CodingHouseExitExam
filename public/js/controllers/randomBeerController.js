'use strict';

var app = angular.module('finalExam');

app.controller('randomBeerCtrl', function($scope, $state, $rootScope, UserService, $cookies) {
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

});
