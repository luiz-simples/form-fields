'use strict';

this.mySystem.directive('myDelete', function MyDeleteDirective($rootScope) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/my-delete/my-delete.html',
    link: function MyConfigureLink(scope, element) {
      scope.record = {};

      scope.deleteAnswer = function(answer) {
        $rootScope.$broadcast('delete-answer', { answer: answer, record: scope.record });
      };

      scope.$on('scanner-my-delete', function(event, args) {
        scope.record = args.record;
        element.modal('show');
      });
    }
  };
});
