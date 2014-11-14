'use strict';

this.mySystem.controller('MainCtrl', function MainCtrl($scope, itemTypes) {
  $scope.dataTypes = itemTypes;
  $scope.mdl = { structure: [] };
});
