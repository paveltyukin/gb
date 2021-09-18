'use strict';
// let regExp = new RegExp('выражение', 'флаги');
// let regExp = /regexp/flags

// i - поиск без учета регистра
// g - множественный поиск
// m - многострочный поиск

let str = 'Язык JavaScript называется так из-за популярности языка Java';
let regExp = new RegExp('java', 'i');
// console.log(regExp);

// search
// -1 - если нет совпадений
// возвращает индекс первого совпадения
// console.log(str.search(regExp));

// match
// без флага g вернет массив-объект с подробной информацией о вхождении
// с флагом g вернет список всех найденных вхождений
// null если совпадений не найдено
// console.log(str.match(/java/ig));

// replace
// console.log('+7 (000)000-00-00'.replace('-', ':'));
// console.log('+7 (000)000-00-00'.replace(/-/g, ':'));

let name = 'Snow, John';

// console.log(name.replace(/([a-z]+), ([a-z]+)/i, '$2 $1'));
// console.log(name.replace(/([a-z]+), ([a-z]+)/i, 'Было: $&\nСтало: $2 $1'));

// Classes
// \d - [0123456789] - [0-9]
// \D - [^0123456789] - [^0-9]
// \w - [a-zA-Z0-9_]
// \W
// \s - space, tab, \n
// \S
// \b - граница слова
// \B - не граница слова
// [а-яА-ЯёЁ]

// квантификаторы
// {n} - строго n раз
// {n,m} - от n до m раз
// {n,} - от n до бесконечности
// {,m} - от 0 до m раз

// сокращения
// + - {1,}
// * - {0,}
// ? - {0,1}

// console.log('+7-(000) 000:00-00'.replace(/\D/g, '')); // 70000000000
// console.log('+7-(000) 000:00-00'.match(/\d+/g).join('')); // 70000000000

// console.log('color colour'.match(/colou?r/g));
// console.log('color colour colotr'.match(/colo[ut]?r/g));

// console.log('Язык JavaScript это не Java вам =)'.match(/\bjava\B/i));

// console.log('JavaScript это не java'.match(/^java/i));
// console.log('JavaScript это не java'.match(/java$/i));
// console.log('JavaScript это не java'.match(/^java$/i));

// console.log('Chapter 7.2 7g2'.match(/\d\.\d/g));

// test (true|false)
// console.log(/java/i.test(str));

// let result;
// let regExp2 = /java/ig;
//
// console.log(`Начальный индекс lastIndex ${regExp2.lastIndex}`);
//
// while(result = regExp2.exec(str)) {
//     console.log(result);
//     console.log(`Текущий lastIndex ${regExp2.lastIndex}`);
// }
//
// console.log(`Конечный lastIndex ${regExp2.lastIndex}`);
