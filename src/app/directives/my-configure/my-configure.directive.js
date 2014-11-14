'use strict';

this.mySystem.directive('myConfigure', function MyItemDirective(itemTypes) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/my-configure/my-configure.html',
    link: function MyConfigureLink(scope, element) {
      scope.itemTypes = itemTypes;

      scope.$on('scanner-started', function(event, args) {
        scope.myItemObj = _.cloneDeep(args.item);
        element.modal('show');
      });
    }
  };
});
