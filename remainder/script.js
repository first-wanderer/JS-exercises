'use strict';

var remainder = function(div, den) {
  return (div < 0) ? -(-div - Math.floor(-div / den) * den) : div - Math.floor(div/den) * den;
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
  remainder(12, 2),
  remainder(17, 12),
  remainder(11, 4),
  remainder(5, 3),
  remainder(5, 0),
  remainder(-10, 3),
  remainder(-1, 10),
  remainder(-1, 0)
]);
