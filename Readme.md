# Решение задач на JavaScript

_Практика - наше все!_

---

## Удаление гласных из строки

Напишите функцию removeLetters, которая удаляет все гласные буквы из переданной ей строки.
```javascript
removeLetters('This is string'); // вернет "Ths s strng"
removeLetters('THIS IS STRING'); // вернет "THS S STRNG"
```
Дополнительно: в функцию передается необязательный аргумент - строка, содержащая символы, которые необходимо удалить. По умолчанию из строки удаляются все гласные:
```javascript
removeLetters('This is string'); // вернет "Ths s strng"
removeLetters('This is string', 'is'); // вернет "Th  trng"
```
[Решение](/remove-vowel)

---

##  Тире между двумя четными

Напишите функцию `dashes`, которая вставляет тире ('-') между каждыми двумя четными числами. Например, если было получено число `223467988` функция вернет строку `'2-234-6798-8'`. Ноль считайте четным числом.
```javascript
dashes(3551267); // '35512-67'
dashes(2256472); // '2-256-472'
dashes(2226988); // '2-2-2-698-8'
```
[Решение](/dash-between-even)

---

##  Землетрясение

О нет! Вы узнали, что совсем скоро будет землетрясение. Взглянув на свой старенький дом, построенный еще несколько десятков лет назад, вы решаете не мучить себя ожиданиями плохого и выяснить разрушится ли ваш дом в ходе катастрофы.

Про будущее землетрясение от правительства поступили следующие данные: "Всего будет 3 волны, каждая волна может содержать от одного до трех толчков. Землетрясение не сильное - сила каждого толчка не превышает 5 единиц. О силе и количество толчков будет сообщено за несколько дней до землетрясения".

Ваш дом был построен еще в 1973 году. Каждый год ваш дом теряет 2% своей прочности (подобно правилу полураспада - http://vk.cc/3tWMea).

Как настоящий программист вы решаете написать программу, которая позволит рассчитать выстоит ли ваш дом или нет. Проанализировав данные вы пришли к следующим выводам:

- силу толчков нужно хранить в двухмерном массиве: пример - `[[2], [2, 4, 2], [3, 4], [1, 2, 1]]`. Для каждой волны есть отдельный массив, в котором находятся все значения силы толчков.

- общую силу землетрясения можно рассчитать перемножив суммы силы толчков каждой волны. Пример - `(1+2+1)*(2+4+2)*(3+5+4)*(1+2+1) = 448`.

- изначально любой дом облает прочностью в `1000` единиц.

- если общая сила землетрясения превысит прочность дома больше, чем на `10` единиц - дом рухнет.

Напишите функцию earthquake, которая скажет вам есть ли необходимость укреплять ваш дом, основываясь на силе землетрясения и возрасте вашего дома:
```javascript
earthquake([[2], [2,4,2], [1,4], [1,2,1]], 1973); // Укреплять не нужно
earthquake([[2,5,3], [4,4,5], [3], [5,2]], 1973); // Нужно укрепить
```

[Решение](/earthquake)

---

## Удаление элементов из массива по индексу

Напишите функцию, которая первым аргументом будет принимать массив, а все последующие аргументы — индексы элементов, которые следует удалить из массива. Индексов может быть несколько. В конце работы функция должна возвращать новый, отредактированный массив:

```javascript
var numbers = [2, 7, 1, 5, 7, 2, 5, 6, 3, 4];
var strings = ['JS', 'is', 'not', 'awesome'];
var data = [{i: 1}, {i: 2}, {i: 3}, {i: 4}, {i: 5}];
var random = [undefined, 'str', null, 42, {data: data}];

remove(strings, 2); // ['JS', 'is', 'awesome']
remove(numbers, 0, 2, 4); // [7, 5, 2, 5, 6, 3, 4]
remove(data, 1, 3, 4); // [{i: 1}, {i: 3}]
remove(random, 1, 3); // [undefined, null, {data: [...]}]
```

[Решение](/remove-from-array)

---

## Аккумуляция символов

Напишите функцию `accumulate`, которая принимает произвольную строку, состоящую из буквенных символов. Функция обрабатывает строку по следующим правилам:

- на первое место ставится обрабатываемый символ в верхнем регистре
- после обрабатываемого символа в строке стоит обрабатываемый символ в нижнем регистре такое количество раз, какой номер символа в строке
- после завершения обработки символа в строку добавляется тире ('-')

```javascript
accumulate('aNktRb'); // A-Nn-Kkk-Tttt-Rrrrr-Bbbbbb
accumulate('RywWpx'); // R-Yy-Www-Wwww-Ppppp-Xxxxxx
accumulate('Cmrera'); // C-Mm-Rrr-Eeee-Rrrrr-Aaaaaa
```

[Решение](/accumulate-letters)

---

## Вычисление остатка при делении

Напишите функцию `remainder`, которая вычисляет остаток при делении одного числа на другое. Использовать оператор `%` нельзя.
```javascript
remainder(12, 2);  // 0
remainder(17, 12); // 5
remainder(11, 4);  // 3
remainder(5, 3);   // 2
remainder(5, 0);   // NaN
remainder(-10, 3); // -1
remainder(-1, 10); // -1
remainder(-1, 0); // NaN
```

[Решение](/remainder)

---
