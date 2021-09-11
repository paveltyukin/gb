// ES5
// var user = {
//     name: 'Vasya',
//     yearOfBirth: 1990,
// };

// function Person(name, yearOfBirth) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     // So bad
//     // this.calcAge = function () {
//     //     return new Date().getFullYear() - this.yearOfBirth;
//     // }
// }
//
// Person.prototype.calcAge = function () {
//     return new Date().getFullYear() - this.yearOfBirth;
// }
//
// function Teacher(name, yearOfBirth, subject) {
//     Person.call(this, name, yearOfBirth);
//     this.subject = subject;
// }
//
// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
//
// var john = new Person('John', 1990);
// var ann = new Teacher('Ann', 1995, 'Math');

// ES6
class Person {
    constructor(name, yearOfBirth) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
    }

    calcAge() {
        return new Date().getFullYear() - this.yearOfBirth;
    }
}

class Teacher extends Person {
    constructor(name, yearOfBirth, subject) {
        super(name, yearOfBirth);
        this.subject = subject;
    }

    static triple(x = 1) {
        return x * 3;
    }
}

const john = new Person('John', 1990);
const ann = new Teacher('Ann', 1995, 'Math');
