var $ = (function(selector) {
  'use strict';

  var jQuery = function(selector) {
    if (typeof selector !== 'string') {
      throw new Error('Expected string appropriate CSS selector');
    }

    var elements = document.querySelectorAll(selector);

    if (elements.length === 0) {
      throw new Error('No elements appropriate CSS selector');
    }

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
    var typeRule = typeof cssRule;
    var typeValue = typeof cssValue;

    if (typeRule !== 'string' && typeRule !== 'object') {
      throw new Error('Invalid data. For method "css" first argument expected string or object');
    }

    if (typeRule === 'string' && typeValue  !== 'string') {
      throw new Error('Invalid data. For method "css" second argument expected string');
    }

    if (typeRule === 'string') {
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
    if (typeof event !== 'string' || typeof handler  !== 'function') {
      throw new Error('Invalid data. For method "on" first argument expected type of event, second argument expected function');
    }

    this.each(function(element) {
      element.addEventListener(event, handler);
    });

    return this;
  };

  jQuery.prototype.off = function(event, handler) {
    if (typeof event !== 'string' || typeof handler  !== 'function') {
      throw new Error('Invalid data. For method "off" first argument expected type of event, second argument expected function');
    }

    this.each(function(element) {
      element.removeEventListener(event, handler);
    });

    return this;
  };

  var argToArr = function(arg) {
    var arrClass = [];

    [].forEach.call(arg, function(item, i, arr) {
      if (item.indexOf(' ') === -1) {
        arrClass.push(item);
      } else {
        item.split(' ').forEach(function(partItem) {
          arrClass.push(partItem);
        });
      }
    });

    return arrClass;
  };

  jQuery.prototype.addClass = function() {
    if (arguments.length === 0) {
      throw new Error('Not passed arguments. For method "addClass" argument expected classes as string');
    }

    var classItems = argToArr(arguments);

    this.each(function(element) {
      classItems.forEach(function(classItem) {
        element.classList.add(classItem);
      });
    });

    return this;
  };

  jQuery.prototype.removeClass = function() {
    if (arguments.length === 0) {
      throw new Error('Not passed arguments. For method "removeClass" argument expected classes as string');
    }

    var classItems = argToArr(arguments);

    this.each(function(element) {
      classItems.forEach(function(classItem) {
        element.classList.remove(classItem);
      });
    });

    return this;
  };

  jQuery.prototype.toggleClass = function() {
    if (arguments.length === 0) {
      throw new Error('Not passed arguments. For method "toggleClass" argument expected classes as string');
    }

    var classItems = argToArr(arguments);

    this.each(function(element) {
      classItems.forEach(function(classItem) {
        element.classList.toggle(classItem);
      });
    });

    return this;
  };

  jQuery.prototype.hasClass = function(classItem) {
    if (arguments.length === 0) {
      throw new Error('Not passed arguments. For method "hasClass" argument expected classes as string');
    }

    return this[0].classList.contains(classItem) ? true : false;
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

$('.second').addClass('error', 'start middle finish', 'succes');

$('.error').removeClass('start middle finish', 'succes');

$('.error').toggleClass('second', 'start middle finish', 'succes');

console.log($('li').hasClass('add'));
console.log($('.error').hasClass('start'));


