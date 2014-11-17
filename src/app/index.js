'use strict';

var dependencies = ['ngCookies', 'ngSanitize', 'restangular', 'ui.router', 'dndLists', 'smart-table'];

this.mySystem = angular.module('mySystem', dependencies).config(function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});
