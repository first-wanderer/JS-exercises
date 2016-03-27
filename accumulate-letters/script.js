'use strict';

var accumulate = function(str) {
  var arr = str.split('');

  arr = arr.map(function(item, index) {
    return item.toUpperCase() + new Array(index + 1).join(item.toLowerCase()) + '-';
  });

  return arr.join('').slice(0, -1);
};



//вывод результата работы функции
var test = function(element, data) {
  var fragment = document.createDocumentFragment();
  data.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
  });
  element.appendChild(fragment);
};

test(document.getElementById('results'), [
  accumulate('aNktRb'),
  accumulate('RywWpx'),
  accumulate('Cmrera')
]);
