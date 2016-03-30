var $ = (function(selector) {
  'use strict';
  var jQuery = function(selector) {
    return document.querySelectorAll(selector);
  };

  jQuery.prototype.each = function() {
    console.log('Hello World');
  };

  var $$ = function(selector) {
    return new jQuery(selector);
  };

  return $$;
})();

console.log ($('.add'));
