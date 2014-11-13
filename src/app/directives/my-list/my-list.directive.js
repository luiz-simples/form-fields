'use strict';

this.mySystem.directive('myList', function MyItemDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/my-list/my-list.html'
  };
});
