'use strict';

var isEven = function(num) {
  return +num % 2 === 0;
};

//очень странное решение, которое никто не видел
var dashes = function(num) {
  var arr = String(num).split(''),
      i = 0,
      n = arr.length - 1;

  while (n--) {
    if (isEven(arr[i]) && isEven(arr[i+1])) {
      arr.splice(i+1, 0, "-");
      n++;
      i++;
    }
    i++;
  }

  return arr.join('');
};

//лаконичное от наставника
var dashes2 = function(num) {
  var arr = (num + '').split(''),
      resultStr = '';

  for (var i = 0, n = arr.length; i < n; i++) {
    resultStr += arr[i];
    if (isEven(arr[i]) && isEven(arr[i+1])) {
      resultStr += '-';
    }
  };

  return resultStr;
};

//с использованием перебирающего метода
var dashes3 = function(num) {
  return (num + '').split('').reduce(function(sum, current, i, arr) {
    return (isEven(arr[i-1]) && isEven(current)) ? sum + '-' + current : sum + current;
  }, '');
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
  dashes2(254684564654),
  dashes2(2255554544),
  dashes3(254684564654),
  dashes3(2255554544)
]);
