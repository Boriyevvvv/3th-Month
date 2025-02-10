// Array.prototype.myFirst = function () {
//   return this[0]
// };

// console.log([1, 2, 3, 4, 5, 6].myFirst());






// Array.prototype.myLast = function () {
//   return this[this.length - 1];
// };

// console.log([1, 2, 3, 4, 5, 6, 7].myLast());







// const MyMath = {
//   pow: function (x, y) {
//     return x ** y
//   },
//   sqrt: function (x) {
//     return x ** 0.5
//   },
//   abs: function (x) {
//     return x < 0 ? -x : x
//   }
// };
// console.log(MyMath.pow(2, 4));
// console.log(MyMath.sqrt(25));
// console.log(MyMath.abs(-5));







// Array.prototype.double = function () {
//   return this.map((x) => x * 2)
// }
// console.log([1, 2, 3, 4, 5, 6, 7, 8].double());








// String.prototype.reverse = function () {
//   return this.split("").reverse().join("")
// }
// console.log("hello world".reverse()); 








// function Person(name) {
//     this.name = name
//   }
//   Person.prototype.sayHello = function () {
//     return `Hello, my name is ${this.name}`
//   }

//   const human = new Person('Jonatan')
//   const person = new Person('Yahyobek')
//   console.log(person.sayHello());
//   console.log(human.sayHello());

  






// Array.prototype.myConcat = function (arr) {
//   return [...this, ...arr]
// }
// console.log(['Guruhda', '5'].myConcat(['kishi', 'qoldik!'])); 








// Object.prototype.myKeys = function () {
//   return Object.keys(this)
// }

// console.log({ kod1: 1, code1: 2 }.myKeys()); 







// Object.prototype.sayHi = function () {
//   return "Hi buddy!"
// }
// console.log(sayHi())
// delete Object.prototype.sayHi







// Array.prototype.maxValue = function () {
//   return Math.max(...this)
// }
// console.log([5, 10, 3].maxValue());






// Object.prototype.sum = function () {
//   return Object.values(this).reduce((sum, val) => sum + val, 0)
// }
// console.log({ kod: 5, code: 10, код: 25 }.sum()); 

