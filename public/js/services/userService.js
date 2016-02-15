'use strict';


var app = angular.module('finalExam');

app.service('UserService', function($http, ENV, $location, $rootScope){
	this.register = function(user){
		return $http.post(`${ENV.API_URL}/user/register`, user);
	};
	this.login = function(user){
		return $http.post(`${ENV.API_URL}/user/login`, user);
	};
	this.isAuthed = function(token){
		return $http.post(`${ENV.API_URL}/user/isAuthed`, {token:token})
	};
})
