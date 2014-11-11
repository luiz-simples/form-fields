'use strict';

var dependencies = ['ngCookies', 'ngSanitize', 'restangular', 'ui.router'];

this.mySystem = angular.module('mySystem', dependencies).config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'app/main/main.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise('/');
});
