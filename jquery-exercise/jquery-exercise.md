# Реализация некоторого функционала jQuery
Функция `$` принимает один параметр - селектор, с помощью которого необходимо выбрать все элементы из DOM дерева. Функция собирает элементы
и строит из них объект вида:
```js
$('.selector');
// Будет получен объект с DOM элементами
{
  0: div.selector,
  1: div.selector,
  2: li.selector,
  length: 3
}
```
Получаемая структура является именно объектом, а не массивом.

## Метод each
Метод `each` вызывает переданную ему callback функцию один раз для каждого выбранного элемента с тремя параметрами:
1. сам элемент
2. индекс элемента
3. коллекция выбранных элементов

Например:
```js
$('.selector').each(function(element, index, collection) {
  console.log(index); // 0 1 2 3 ...
  element.textContent = 'THis is element #' + index;
});
```

## Метод css
Метод `css` принимает либо две строки, либо объект, содержащий несколько css правил, которые необходимо применить для каждого элемента из коллекции:
```js
// Каждое css правило применяется для каждого элемента из коллекции
$('.selector').css({
  'marginTop': '10px',
  'border': '1px solid #ccc'
});

// Каждый элемент из коллекции получит красный фон
$('.another-selector').css('background', 'red');
```

## Методы on и off
Методы `on` и `off` служат для создания (удаления) событий для каждого элемента из коллекции. Методы принимают два аргумента: тип события и callback функцию
```js
// При клике на каждый элемент строка будет выводиться в консоль
$('.selector').on('click', function(e) {
  e.preventDefault();
  console.log('Element was clicked');
});

var fn = function() {
  console.log('this event will be removed');
};

// Создаём обработчик события для кажого элемента
$('.another-selector').on('change', fn);
// ...
// Удаляем обработчик события для кажого элемента
$('.another-selector').off('change', fn);
```

## Методы hasClass, addClass, removeClass и toggleClass
Метод `hasClass` проверяет есть ли у первого элемента в коллекции переданный класс. Возвращает `true` или `false`. 

```js
$('.selector').hasClass('selector'); // true
$('.selector').hasClass('error'); // false
```

Метод `addClass` добавляет каждому элементу из коллекции переданный класс:
```js
$('.selector').addClass('error');
```
Метод `removeClass` наоброт удаляет переаднный класс добавляет:
```js
$('.selector').removeClass('error'); 
```
Метод `toggleClass` в зависимости от условий либо удаляет, либо добавляет переданный класс:
```js
$('.selector').toggleClass('error'); // теперь у каждого элемента есть класс error
$('.selector').toggleClass('error'); // теперь нет
```