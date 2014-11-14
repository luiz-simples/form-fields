'use strict';

var visibleItem = function(selector) {
  return expect(element(by.css(selector)).isDisplayed()).toBeTruthy();
};

module.exports = {
  verifyZoneToDrop: function() {
    visibleItem('div.dropzone.my_zone>h3');
  },

  verifyItemsToDrag: function() {
    visibleItem('button.item_drag_container');
    visibleItem('button.item_drag_input_text');
    visibleItem('button.item_drag_input_area');
    visibleItem('button.item_drag_input_email');
    visibleItem('button.item_drag_input_decimal');
    visibleItem('button.item_drag_input_percent');
    visibleItem('button.item_drag_input_boolean');
    visibleItem('button.item_drag_input_currency');
  },

  verifyDragAndDropItems: function() {

  }
};
