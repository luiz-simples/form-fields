'use strict';

this.mySystem.directive('myItem', function MyItemDirective($http, $templateCache, $compile, $rootScope) {
  return {
    restrict: 'AE',
    replace: true,
    scope: { myItem: '=' },
    link: function MyItemLink(scope, element) {
      scope.editItem = function(item) {
        $rootScope.$broadcast('scanner-started', { item: item });
      };

      scope.$watch('myItem.type', function(newType) {
        var template = 'my-item';

        if (newType === 'container')
          template = 'my-container';

        $http.get('app/directives/my-item/'.concat(template, '.html'), {
          cache: $templateCache
        }).then(function LoadItemElement(response) {
          return angular.element(response.data);
        }).then(function(newElement) {
          $compile(newElement)(scope, function(clone) {
            element.html(clone);
          });
        });
      });
    }
  };
});
