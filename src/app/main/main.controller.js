'use strict';

this.mySystem.controller('MainCtrl', function MainCtrl($scope, $rootScope, itemTypes) {
  $scope.dataTypes = itemTypes;
  $scope.mdl = { structure: [] };

  $scope.editItem = function(item) {
    $rootScope.$broadcast('scanner-started', { item: item });
  };
});
