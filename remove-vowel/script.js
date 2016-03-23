'use strict';

var strOrigin = 'This is string';

//первое что пришло в голову (да и короче с регулярными выражениями как то)
var removeLetters = function(str, letter) {
  var regexp;

  if (letter) {
    regexp = new RegExp('['+letter+']', 'ig');
  } else {
    regexp = /[aoeiyu]/ig;
  };

  return str.replace(regexp, '');
}

console.log(removeLetters(strOrigin, 'is'));

//демонстрация понимания циклов
var removeLetters2 = function(str, letter) {
  var letterArr,
      strArr = str.split('');

  if (letter) {
    letterArr = letter.toLowerCase().split('');
  } else {
    letterArr = ['a', 'o', 'e', 'i', 'y', 'u'];
  };

  for (var i = 0, n = letterArr.length; i < n; i++) {
    letterArr.push(letterArr[i].toUpperCase());
  };

  for (var i = 0; i < strArr.length; i++) {
    for (var j = 0; j < letterArr.length; j++) {
      if (strArr[i] === letterArr[j]) {
        strArr[i] = '';
        break;
      };
    };
  };

  return strArr.join('');
}

console.log(removeLetters2(strOrigin, 'is'));
