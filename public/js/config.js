'use strict';

var app = angular.module('finalExam');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html' })

  $urlRouterProvider.otherwise('/');
});
