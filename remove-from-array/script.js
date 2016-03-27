'use strict';

var remove = function(arr) {
  var args = [];
  for (var i = 1, n = arguments.length; i < n; i++) {
    args[i-1] = arguments[i];
  }
  //не верю что пишу такое, но далее три вложенных return-а!!!
  return arr.filter(function(item, index) {
    return args.every(function(current) {
      return index !== current;
    });
  });
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

var numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4];
var strings = ['JS', 'is', 'not', 'awesome'];
var data = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}];
var random = [undefined, 'str', null, 42, {data: data}];

test(document.getElementById('results'), [
  remove(strings, 2),
  remove(numbers, 0, 2, 4),
  remove(data, 1, 3, 4),
  remove(random, 1, 3)
]);
