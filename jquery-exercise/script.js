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

  jQuery.prototype.css = function(cssRule, cssValue) {
    if (typeof cssRule === 'string') {
      this.each(function(element) {
        element.style[cssRule] = cssValue;
      });
    }

    if (typeof cssRule === 'object') {
      this.each(function(element) {
        for (var key in cssRule) {
          element.style[key] = cssRule[key];
        }
      });
    }

    return this;
  };

  jQuery.prototype.on = function(event, handler) {
    this.each(function(element) {
      element.addEventListener(event, handler);
    });

    return this;
  };

  jQuery.prototype.off = function(event, handler) {
    this.each(function(element) {
      element.removeEventListener(event, handler);
    });

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
  element.textContent = 'This is element #' + index + ' Click me!';
});

$('.add').css('background', 'red');

$('.second').css({
  'marginTop': '10px',
  'border': '1px solid #ccc'
});

$('.add').on('click', function(e) {
  e.preventDefault();
  console.log('Element was clicked');
});

var fn = function() {
  console.log('this event will be removed');
};

$('#dec').on('change', fn);

$('#dec').off('change', fn);
