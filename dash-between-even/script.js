'use strict';

var numOrigin = 2226988;

var dashes = function(num) {
  var arr = String(num).split(''),
      i = 0,
      n = arr.length - 1;
  while (i < n) {
    if ((arr[i] % 2 === 0) && (arr[i+1] % 2 === 0)) {
      arr.splice(i+1, 0, "-");
      n++;
      i++;
    };
    i++;
  };
  return arr.join('');
};

console.log(dashes(numOrigin));
