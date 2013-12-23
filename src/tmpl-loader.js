/*
 * tmpl-loader
 *
 *
 * Copyright (c) 2013 Peter Hastie
 * Licensed under the MIT license.
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  $.fn.compileTemplates = function(ns){
    return this.each(function(){
      var t = $(this),
        id = t.attr('id');
      ns[id.toUpperCase()] = id;
      $.template(id, t.remove().html());
    });
  }; // Would be called as $('[type="x-jQuery-tmpl"]').compileTemplates(namespace);
}));
