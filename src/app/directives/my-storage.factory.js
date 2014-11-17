'use strict';

this.mySystem.factory('myStorage', function MyStorageFactory($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },

    get: function(key) {
      var ls = $window.localStorage[key];
      return ls ? JSON.parse(ls) : false;
    }
  };
});
