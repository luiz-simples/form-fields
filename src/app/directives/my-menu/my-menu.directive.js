'use strict';

this.mySystem.directive('myMenu', function MyMenuDirective() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/my-menu/my-menu.html'
  };
});
