'use strict';

this.mySystem.controller('FormsListCtrl', function FormsListCtrl($scope, $state, formsFactory, $rootScope) {
  var rebuildRows = function() {
    $scope.forms = formsFactory.getAllForms();
  };

  $scope.deleteForm = function(form) {
    $rootScope.$broadcast('scanner-my-delete', { record: form });
  };

  $scope.$on('delete-answer', function(event, ask) {
    if (!ask.answer) return;
    $scope.forms = formsFactory.deleteForm(ask.record);
  });

  $scope.$on('my-buttons-operations', function(event, buttons) {
    if (buttons.clicked === 'create')
      return $state.go('forms-add');
  });

  rebuildRows();
});
