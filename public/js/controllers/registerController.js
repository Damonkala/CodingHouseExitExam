'use strict';

var app = angular.module('finalExam');

app.controller('registerCtrl', function($scope, $state, UserService) {
	$scope.submit = function(user){
		if(user.password !== user.password2){
			alert("The passwords don't match");
			return;
		}
		if(!user.email){
			alert("Put in a valid email address")
			return;
		}
		UserService.register(user)
		.then(function(data){
			alert("You have registered as a user")
			$state.go('login');
		}, function(err){
			console.log(err);
		})
	}
});
