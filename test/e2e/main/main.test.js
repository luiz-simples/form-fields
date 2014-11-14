'use strict';

var mainExpect = require('./main.expect');

describe('The main view', function TheMainView() {
  beforeEach(function () {
    browser.get('#');
  });

  it('should visible drop zone', mainExpect.verifyZoneToDrop);
  it('should visible drag items', mainExpect.verifyItemsToDrag);

  // it('should drag and drop items', function() {
  //   var vStage1 = element(by.css('button.item_drag_input_text'));
  //   var vStage2 = element(by.css('ul.stage'));
  //   browser.actions().dragAndDrop(vStage1, vStage2).perform();
  //   browser.sleep(5000);
  //   expect(element(by.css('li>div.item>span.glyphicon')).isDisplayed()).toBeTruthy();
  // });
});
