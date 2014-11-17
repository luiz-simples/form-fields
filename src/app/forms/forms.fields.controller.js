'use strict';

this.mySystem.controller('FormsFieldsCtrl', function FormsFieldsCtrl($scope, $state, formsFactory, $stateParams, $window, $rootScope) {
  var isNewRecord = $state.includes('forms-add');

  $scope.actualState = isNewRecord ? 'create' : 'update';

  $scope.form = isNewRecord ? formsFactory.getNewForm() : formsFactory.findById($stateParams.code);

  $scope.$on('my-buttons-operations', function(event, buttons) {
    if (buttons.clicked === 'cancel')
      return $window.history.back();

    if (buttons.clicked === 'save') {
      formsFactory[isNewRecord ? 'addForm' : 'updateForm']($scope.form);
      return $window.history.back();
    }
  });

  $scope.editItem = function(item) {
    $rootScope.$broadcast('scanner-started', { item: item });
  };
});
