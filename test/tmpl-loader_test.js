(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery.tmpl.loader', {
    setup: function() {
      var that = this;

      this.templates = {};
      this.templateCalled = 0;  // "spy" for $.template

      // Mock the template plugin
      $.template = function(){
        that.templateCalled++;
      };

      console.log(this.templates);

      // Test our plugin
      $('[type="text/x-jQuery-tmpl"]').compileTemplates(this.templates);
    }
  });

  test('Finds templates and removes them from DOM', function(){
    var keys = Object.keys(this.templates);

    expect(7);

    strictEqual(Object.keys(this.templates).length, 2, 'should be 2 templates');
    ok(keys.indexOf('TEMPLATE_ONE') !== -1, 'should have TEMPLATE_ONE key');
    ok(keys.indexOf('TEMPLATE_TWO') !== -1, 'should have TEMPLATE_TWO key');

    strictEqual(this.templateCalled, 2, 'should call $.template twice');

    strictEqual($('#template_one').length, 0, 'should remove template one from page');
    strictEqual($('#template_two').length, 0, 'should remove template two from page');
    strictEqual($('#template_bad').length, 1, 'should not remove bad template from page');
  });

}(jQuery));
