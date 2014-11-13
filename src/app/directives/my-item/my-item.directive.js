'use strict';

this.mySystem.directive('myItem', function MyItemDirective($http, $templateCache, $compile) {
  return {
    restrict: 'E',
    replace: true,
    link: function MyItemLink(scope, element) {
      var template = 'my-item';

      if (scope.item.type === 'container')
        template = 'my-container';

      return $http.get('app/directives/my-item/' + template + '.html', {
        cache: $templateCache
      }).then(function LoadItemElement(response) {
        return angular.element(response.data);
      }).then(function(newElement) {
        return $compile(newElement)(scope, function(clone) {
          return element.append(clone);
        });
      });
    }
  };
});
