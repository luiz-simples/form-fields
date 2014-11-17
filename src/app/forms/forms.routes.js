'use strict';

this.mySystem.config(function FormsRoute($stateProvider) {
  $stateProvider.state('forms-list', {
    url: '/forms/list',
    controller: 'FormsListCtrl',
    templateUrl: 'app/forms/forms.list.html'
  });

  $stateProvider.state('forms-add', {
    url: '/forms/add',
    controller: 'FormsFieldsCtrl',
    templateUrl: 'app/forms/forms.fields.html'
  });

  $stateProvider.state('formsUpdate', {
    url: '/forms/:code/update',
    controller: 'FormsFieldsCtrl',
    templateUrl: 'app/forms/forms.fields.html'
  });
  //
  // $stateProvider.state('forms.delete', {
  //   url: '/forms/:code/delete',
  //   controller: 'FormsFieldsCtrl',
  //   templateUrl: 'app/forms/forms.view.html'
  // });
  //
  // $stateProvider.state('forms.view', {
  //   url: '/forms/:code/view',
  //   controller: 'FormsFieldsCtrl',
  //   templateUrl: 'app/forms/forms.view.html'
  // });
});
