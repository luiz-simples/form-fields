'use strict';

this.mySystem.directive('myConfigure', function MyConfigureDirective(itemTypes) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'app/directives/my-configure/my-configure.html',
    link: function MyConfigureLink(scope, element) {
      scope.itemTypes = itemTypes;
      var item;

      scope.$on('scanner-started', function(event, args) {
        item = args.item;
        scope.myItemObj = _.cloneDeep(item);

        if (!scope.myItemObj.cols)
          scope.myItemObj.cols = [[]];

        scope.myItemObj.columns = scope.myItemObj.cols.length;
        element.modal('show');
      });

      scope.saveConfigItem = function SaveConfigItem() {
        if (scope.myItemObj.type === 'container') {
          while(scope.myItemObj.cols.length > scope.myItemObj.columns) {
            var col = scope.myItemObj.cols.pop();
            var lastIndex = scope.myItemObj.cols.length-1;
            scope.myItemObj.cols[lastIndex] = scope.myItemObj.cols[lastIndex].concat(col);
          }

          while(scope.myItemObj.cols.length < scope.myItemObj.columns)
            scope.myItemObj.cols.push([]);
            delete scope.myItemObj.columns;
        }

        for (var key in scope.myItemObj)
          item[key] = scope.myItemObj[key];
      };
    }
  };
});
