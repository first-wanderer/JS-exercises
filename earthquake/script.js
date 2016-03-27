'use strict';

var earthquake = function(waves, year) {
  //вычисление силы землетрясения
  var powerEarth = 1,
      powerWave;

  for (var i = 0, n = waves.length; i < n; i++) {
    powerWave = 0;
    for (var j = 0, k = waves[i].length; j < k; j++) {
      powerWave += waves[i][j];
    }
    powerEarth *= powerWave;
  }

  //вычисление прочности дома с годами
  var houseDurability = 1000;
  var houseAge = new Date().getFullYear() - year;

  for (var i = 1; i <= houseAge; i++) {
    houseDurability -= 0.02 * houseDurability;
  }

  //оценка необходимости укрепления
  return (houseDurability - powerEarth < -10) ? 'Нужно укрепить' : 'Укреплять не нужно';
};

//c перебирающими методами
var earthquake2 = function(waves, year) {
  var houseDurability = 1000;
  var houseAge = new Date().getFullYear() - year;

  for (var i = 1; i <= houseAge; i++) {
    houseDurability -= 0.02 * houseDurability;
  };

  var powerEarth = waves.reduce(function(mul, current) {
        return mul * current.reduce(function(sum, item) {
          return sum + item;
        });
      }, 1);

  return (houseDurability - powerEarth < -10) ? 'Нужно укрепить' : 'Укреплять не нужно';
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
  earthquake([[2,5,3], [4,4,5], [3], [5,2]], 1973),
  earthquake([[2], [2,4,2], [1,4], [1,2,1]], 1973),
  earthquake2([[2,5,3], [4,4,5], [3], [5,2]], 1973),
  earthquake2([[2], [2,4,2], [1,4], [1,2,1]], 1973)
]);
