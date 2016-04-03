var $ = (function(selector) {
  'use strict';

  var jQuery = function(selector) {
    var elements = document.querySelectorAll(selector);

    for (var i = 0, n = elements.length; i < n; i++) {
      this[i] = elements[i];
    }

    this.length = elements.length;
  };

  jQuery.prototype.each = function(fn) {
    for (var i = 0, n = this.length; i < n; i++) {
      fn.call(this, this[i], i, this);
    }

    return this;
  };

  var $$ = function(selector) {
    return new jQuery(selector);
  };

  $$.fn = jQuery.prototype;

  return $$;
})();

console.log ($('.add'));

$('.add').each(function(element, index, collection) {
  console.log(index);
  element.textContent = 'This is element #' + index;
});
