'use strict';

var app = angular.module('finalExam');

app.controller('loginCtrl', function($scope, $state, $rootScope, UserService) {
	$scope.submit = function(user){
		console.log("LOGGIIN IN");
		UserService.login(user)
		.then(function(res){
			console.log("DATATATAT", res.data);
			if(res.data=="login succesfull"){
				alert("Welcome to the party")
				console.log("WE LOGGED IN NOW");
				// UserService.loggedIn = 'true';
				$state.go('randomBeer')
			} else if (res.data === "Incorrect Username or Password!"){
				alert("Incorrect Email or Password")
			}
		}, function(err){
			console.log(err);
		})
	}

});
