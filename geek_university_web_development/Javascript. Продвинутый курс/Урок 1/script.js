'use strict';
// var name = 'Vasya';
// var age = 30;
//
// name = {};
//
// console.log(name);

// const name = 'Vasya';
// let age = 30;
// age = 31;
// console.log(age);
// name = {};
// let a = 123;
// {
//     let a = 1;
//     let b = 2;
//     console.log('a', a);
//     console.log('b', b);
//
//     {
//         const c = 3;
//         console.log('a', a);
//         console.log('b', b);
//         console.log('c', c);
//     }
// }
//
// console.log('a', a);
// console.log('a', b);

// ES5
// function passTest(result) {
//     if (result) {
//         var firstName = 'John';
//         var yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(false);

// ES5
// function passTest(result) {
//     let firstName;
//     let yearOfBirth
//     if (result) {
//         firstName = 'John';
//         yearOfBirth = 1990;
//     }
//
//     console.log(firstName + ' рожденный в ' + yearOfBirth + ' сдал тест');
// }
//
// passTest(false);

// ES5
// var i = 23;
//
// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i);

// ES5
// let i = 23;
//
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i);
// function a() {
//     var b = 5;
//     let c = 10;
//     // d = 20;
//
//     console.log(b, c)
// }
// a();
//
// console.log(b); // b? c? d?

// ES5
// var firstName = 'John';
// var lastName = 'Smith';
// var yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2021 - year;
// }
//
// console.log(firstName + ' ' + lastName + ' рожден в ' + yearOfBirth + '.' + ' Ему сейчас ' + calcAge(yearOfBirth));

// ES6
// const firstName = 'John';
// const lastName = 'Smith';
// const yearOfBirth = 1990;
//
// function calcAge(year) {
//     return 2021 - year;
// }
//
// console.log(`${firstName} ${lastName} рожденный в ${yearOfBirth}. Ему сейчас ${calcAge(yearOfBirth)}`);

// const str = `${firstName} ${lastName}`;
// console.log(str.startsWith('J'));
// console.log(str.endsWith('th'));
// console.log(str.includes('n S'));

// ES6

// const calcAge = () => {
//     return 6;
// };
// const calcAge = (x) => {
//     return 6 + x;
// };
// const calcAge = x => 6 + x;
// const calcAge = (x, y = 10) => {
//     return 6 + x + y;
// };
//
// console.log(calcAge(2, 5));

// ES5
// var box = {
//     color: 'green',
//     position: 1,
//     clickMe: function () {
//         console.log(this);
//         var _this = this;
//         document.getElementById('green').addEventListener('click', function () {
//             console.log(this)
//             console.log('This is a box number ' + _this.position + ' and color ' + _this.color);
//         });
//     }
// }
//
// box.clickMe();

// ES6
// var box = {
//     color: 'green',
//     position: 1,
//     clickMe() {
//         document.getElementById('green').addEventListener('click', () => {
//             console.log(this)
//             console.log('This is a box number ' + this.position + ' and color ' + this.color);
//         });
//     }
// }
//
// box.clickMe();

// ES5
// var arr = ['John', 25];
// var name = arr[0];
// var age = arr[1];
//
// console.log(name, age);

// let arr = ['John', 25, true];
// // let [name, age] = arr;
// let [name,, isAdmin] = arr;
// // console.log(name, age);
// console.log(name, isAdmin);

const obj = {
    firstName: 'John',
    lastName: 'Snow',
    colors: ['white', 'black'],
};

let { firstName: n, lastName: ln, colors: [c, d] } = obj;

console.log(n, ln, c, d);
