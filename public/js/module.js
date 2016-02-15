'use strict';

var app = angular.module('finalExam', ['ui.router']);

app.constant('ENV', {
	API_URL: 'http://localhost:3000'
});

app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
	// $locationProvider.html5Mode(true);
	// $urlRouterProvider.otherwise('/');
	$stateProvider
	// .state('home', {url: '/', templateUrl: 'views/home/home.html', controller: 'homeCtrl'})
	.state('login', {url: '/login', templateUrl: 'html/login.html', controller: 'loginCtrl'})
	.state('register', {url: '/register', templateUrl: 'html/register.html', controller: 'registerCtrl'})
})
