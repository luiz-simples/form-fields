'use strict';

this.mySystem.factory('formsFactory', function FormsFactory(myStorage) {
  var id = 0;

  return {
    getNewForm: function() {
      return {
        id: ++id,
        name: '',
        updated: new Date(),
        structure: []
      };
    },

    addForm: function(form) {
      var forms = this.getAllForms();
      forms.push(form);
      myStorage.set('forms', forms);
      return this;
    },

    deleteForm: function(form) {
      var forms = this.getAllForms();
      _.remove(forms, function(f) { return f.id === form.id; });
      myStorage.set('forms', forms);
      return forms;
    },

    updateForm: function(form) {
      var forms = this.getAllForms();

      for (var i = 0, c = forms.length; i < c; i++) {
        if (forms[i].id === form.id) {
          forms[i] = form;
          break;
        }
      }

      myStorage.set('forms', forms);
      return this;
    },

    findById: function(id) {
      var forms = this.getAllForms();

      for (var i = 0, c = forms.length; i < c; i++)
        if (forms[i].id === id)
          return forms[i];

      return false;
    },

    getAllForms: function() {
      return myStorage.get('forms') || [];
    }
  };
});
