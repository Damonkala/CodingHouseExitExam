'use strict';

var app = angular.module('finalExam');

app.controller('loginCtrl', function($scope, $state, $rootScope, UserService, jwtHelper, $cookies) {
	$scope.submit = function(user){
		UserService.login(user)
		.then(function(res){
			if(res.data=="login successfull"){
				UserService.loggedIn = 'true';
				$state.go('randoBeers')
			} else if (res.data === "Incorrect Username or Password!"){
				alert("Incorrect Email or Password")
			}
			var token = $cookies.get('token');
			var decoded = jwtHelper.decodeToken(token);
		}, function(err){
			console.log(err);
		})
	}

});
