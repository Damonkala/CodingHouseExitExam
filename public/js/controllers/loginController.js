'use strict';

var app = angular.module('finalExam');

app.controller('loginCtrl', function($scope, $state, $rootScope, UserService) {
	$scope.submit = function(user){
		UserService.login(user)
		.then(function(res){
			if(res.data=="login successfull"){
				alert("IT is done")
				UserService.loggedIn = 'true';
				$state.go('randomBeer')
			} else if (res.data === "Incorrect Username or Password!"){
				alert("Incorrect Email or Password")
			}
		}, function(err){
			console.log(err);
		})
	}

});
