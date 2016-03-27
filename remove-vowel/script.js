'use strict';

//первое что пришло в голову (да и короче с регулярными выражениями как то)
var removeLetters = function(str, letter) {
  var regexp = letter ? new RegExp('['+letter+']', 'ig') : /[aoeiyu]/ig;

  return str.replace(regexp, '');
}

//демонстрация понимания циклов
var removeLetters2 = function(str, letter) {
  var strArr = str.split('');

  var letterArr = letter ? letter.toLowerCase().split('') : ['a', 'o', 'e', 'i', 'y', 'u'];

  for (var i = 0, n = letterArr.length; i < n; i++) {
    letterArr.push(letterArr[i].toUpperCase());
  }

  for (var i = 0, n = strArr.length; i < n; i++) {
    for (var j = 0, k = letterArr.length; j < k; j++) {
      if (strArr[i] === letterArr[j]) {
        strArr[i] = '';
        break;
      }
    }
  }

  return strArr.join('');
}

//с использованием перебирающих методов
var removeLetters3 = function(str, letter) {
  var strArr = str.split('');

  var letterArr = letter ? letter.toLowerCase().split('') : ['a', 'o', 'e', 'i', 'y', 'u'];

  letterArr.forEach(function(item) {
    letterArr.push(item.toUpperCase());
  });

  strArr = strArr.filter(function(item) {
    return letterArr.every(function(letterItem) {
      return item !== letterItem;
    });
  });

  return strArr.join('');
}




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
  removeLetters3('This is string', 'is'),
  removeLetters2('This is string', 'is'),
  removeLetters3('This is string'),
  removeLetters2('This is string')
]);
