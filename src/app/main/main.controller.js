'use strict';

var id = 0;

var createType = function CreateType(type, label, icon, attrs) {
  var ret = {
    type: type,
    label: label,
    id: ++id,
    icon: icon
  };

  if (attrs)
    for (var attr in attrs)
      ret[attr] = attrs[attr];

  return ret;
};

this.mySystem.controller('MainCtrl', function MainCtrl($scope) {
  $scope.models = {
    selected: null,
    templates: [
      createType('container',      'Container',        'inbox', {columns: [[], []]}),
      createType('input_text',     'Campo livre',      'font', {attr: {}}),
      createType('input_area',     'Texto Livre',      'text-width', {attr: {}}),
      createType('input_email',    'Email',            'envelope', {attr: {}}),
      createType('input_currency', 'Monetário',        'usd', {attr: {}}),
      createType('input_decimal',  'Decimal',          'sound-7-1', {attr: {}}),
      createType('input_percent',  'Percentual',       'sound-5-1', {attr: {}}),
      createType('input_boolean',  'Verdadeiro/Falso', 'ok-circle', {attr: {}})
    ],

    dropzones: {
      'A': [],
      'B': []
    }
  };

  // $scope.$watch('models.dropzones', function(model) {
  //   $scope.modelAsJson = angular.toJson(model, true);
  // }, true);
});
