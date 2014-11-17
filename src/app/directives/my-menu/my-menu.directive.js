'use strict';

this.mySystem.directive('myMenu', function MyMenuDirective($rootScope, itemTypes) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/my-menu/my-menu.html',
    link: function MyMenuLink(scope, element, attrs) {
      scope.viewMenuInputs = attrs.viewMenuInputs || false;
      scope.dataTypes = itemTypes;

      if (!attrs.state) return;
      var isChangeState = ['create', 'update', 'delete'].indexOf(attrs.state) > -1;

      if (isChangeState) {
        scope.viewCreateRecord = false;
        scope.viewSaveRecordButton = 'save';
        scope.viewCancelRecordButton = 'cancel';
      } else {
        scope.viewCreateRecord = 'create';
        scope.viewSaveRecordButton = false;
        scope.viewCancelRecordButton = false;
      }

      scope.scannerRecord = function(state) {
        $rootScope.$broadcast('my-buttons-operations', {clicked: state});
      };
    }
  };
});
