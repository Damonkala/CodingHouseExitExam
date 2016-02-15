'use strict';

var app = angular.module('finalExam', ['ui.router', 'ngCookies', 'angular-jwt']);

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
	.state('randomBeer', {url: '/randomBeer', templateUrl: 'html/randomBeer.html', controller: 'randomBeerCtrl'})
	.state('sampledBeer', {url: '/sampledBeer', templateUrl: 'html/sampledBeer.html', controller: 'sampledBeerCtrl'})
})

app.controller('MasterController', function(UserService, $cookies, jwtHelper, $scope, $state, $rootScope){
  var cookies = $cookies.get('token');
  var username;
  if(cookies){
    $scope.userInfo = (jwtHelper.decodeToken(cookies))
  }
  UserService.isAuthed(cookies)
  .then(function(res , err){
    console.log(res.data)
    if (res.data !== "authRequired"){
    $scope.isLoggedIn = true;
    console.log("LOGGED IN!")
  } else {
    $scope.isLoggedIn = false;
    $state.go('login');
  }
  })
  $scope.$on('loggedIn', function(){
    $scope.isLoggedIn = true;
    var cookies = $cookies.get('token');
    if(cookies){
      console.log("in cookis if")
      $scope.userInfo = (jwtHelper.decodeToken(cookies))
    }
    username = $scope.userInfo.username
  })
  $scope.logout = function(){
    $cookies.remove('token');
    $state.go('login')
    $scope.isLoggedIn = false;
  }
})
