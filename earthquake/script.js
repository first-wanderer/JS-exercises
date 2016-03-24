'use strict';

var wavesEarth = [[2,5,3], [4,4,5], [3], [5,2]],
    buildingYear = 1973;

var earthquake = function(waves, year) {
  //вычисление силы землетрясения
  var powerEarth = 1,
      powerWave;

  for (var i = 0; i < waves.length; i++) {
    powerWave = 0;
    for (var j = 0; j < waves[i].length; j++) {
      powerWave += waves[i][j];
    };
    powerEarth *= powerWave;
  }

  //вычисление прочности дома с годами
  var houseDurability = 1000;
  var houseAge = new Date().getFullYear() - year;

  for (var i = 1; i <= houseAge; i++) {
    houseDurability -= 0.02 * houseDurability;
  };

  //оценка необходимости укрепления
  if (houseDurability - powerEarth < -10) {
    return 'Нужно укрепить';
  } else {
    return 'Укреплять не нужно';
  };
};

console.log(earthquake(wavesEarth, buildingYear));
