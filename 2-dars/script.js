// class Animal {
//     constructor(name, ovoz) {
//         this.name = name
//         this.ovoz = ovoz
//     }
//     speak() {
//         console.log(`${this.name} ovozi.`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} vovullaydi.`);
//     }
// }

// class Cat extends Animal {
//     speak() {
//         console.log(`${this.name} miyovlaydi.`);
//     }
// }

// class Lion extends Animal {
//     speak() {
//         console.log(`${this.name} g‘urillaydi.`);
//     }
// }       

// const dog = new Dog("Rex", "It")
// dog.speak();
// const cat = new Cat("Cati", "Mushuk")
// cat.speak();
// const lion = new Lion("Simbacha", "Sher")
// lion.speak();


// class User {
//     constructor(username, password) {
//         this.username = username;
//         this.password = password;
//         this.logged = false;
//     }
//     login(username, password) {
//         if (this.username === username && this.password === password) {
//             this.logged = true;
//             console.log('Tizimga muvaffaqiyatli kirdingiz.');
//         } else {
//             console.log('Xato login yoki parol.');
//         }
//     }
//     logout() {
//         this.logged = false;
//         console.log('Tizimdan chiqdingiz.');
//     }
// }

// const yahyo = new User('Yahyobek', '12344321')
// yahyo.login()



// class Flight {
//     constructor(raqam, kelish, masofa, joy = 100) {
//         this.raqam = raqam
//         this.kelish = kelish
//         this.masofa = masofa
//         this.joy = joy
//     }
//     booked() {
//         if (this.joy > 0) {
//             this.joy--
//             console.log('Joy band qilindi.');
//         } else {
//             console.log('Bo‘sh joy yo‘q.');
//         }
//     }
//     bekorQilingan() {
//         this.joy++
//         console.log('Joy bekor qilindi.');
//     }
//     borJoy() {
//         console.log(`Bo‘sh joylar: ${this.joy}`);
//     }
// }

// const smbd = new Flight(174, 5, 100, 54)
// smbd.booked(); 
// smbd.borJoy();  



// class Course {
//     constructor(courseName, courseKod) {
//         this.courseName = courseName
//         this.courseCode = courseKod
//         this.students = [];
//     }
//     addStudent(student) {
//         this.students.push(student)
//         console.log(`${student} kursga qo‘shildi.`);
//     }
//     removeStudent(student) {
//         this.students = this.students.filter(s => s !== student)
//         console.log(`${student} kursdan olib tashlandi.`);
//     }
// }
// const course = new Course('Matematika', 'MATH101');
// course.addStudent('Ali');
// course.removeStudent('Ali');


// class Wallet {
//     constructor(balance = 0) {
//         this.balance = balance
//     }
//     addFunds(amount) {
//         this.balance += amount
//         console.log(`Balansga ${amount} so‘m qo‘shildi. Hozirgi balans: ${this.balance}`);
//     }
//     spendFunds(amount) {
//         if (amount > this.balance) {
//             console.log('Yetarli mablag‘ yo‘q.');
//         } else {
//             this.balance -= amount
//             console.log(`Siz ${amount} so‘m sarfladingiz. Yangi balans: ${this.balance}`);
//         }
//     }
// }

// const wallet = new Wallet()
// wallet.addFunds(1000)
// wallet.spendFunds(500)
// wallet.spendFunds(600)



// class Notification {
//     constructor(message, date) {
//         this.message = message
//         this.date = date
//     }
//     sendNotification() {
//         console.log(`Xabar yuborildi: ${this.message}`);
//     }
//     clearNotification() {
//         this.message = ''
//         console.log('Xabar o‘chirildi.');
//     }
// }
// const notification = new Notification('Yangi xabar kelgan!', '2025-02-04')
// notification.sendNotification()
// notification.clearNotification()







// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet() {
//         console.log(`Salom, mening ismim ${this.name}, yoshim ${this.age}.`);
//     }
// }
// const person = new Person('Yahyo', 18)
// person.greet()





// class BankAccount {
//     constructor(balance = 0) {
//         this.balance = balance
//     }
//     deposit(amount) {
//         this.balance += amount
//         console.log(`Hisobingizga ${amount} qo‘shildi. Hozirgi balans: ${this.balance}`);
//     }
//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log('Yetarli mablag‘ yo‘q.')
//         } else {
//             this.balance -= amount
//             console.log(`Siz ${amount} yechib oldingiz. Hozirgi balans: ${this.balance}`);
//         }
//     }
// }

// const bankAccount = new BankAccount(1000)
// bankAccount.deposit(500)
// bankAccount.withdraw(300)
// bankAccount.withdraw(1500)





// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     area() {
//         console.log(`Maydon: ${this.width * this.height}`);
//     }
//     perimeter() {
//         console.log(`Perimetr: ${2 * (this.width + this.height)}`);
//     }
// }


// const rectangle = new Rectangle(10, 5)
// rectangle.area()
// rectangle.perimeter()



// class Calculator {
//     add(a, b) { console.log(a + b); }
//     subtract(a, b) { console.log(a - b); }
//     multiply(a, b) { console.log(a * b); }
//     divide(a, b) { console.log(a / b ); }
// }

// const calculator = new Calculator();
// calculator.add(10, 5);
// calculator.subtract(10, 5);
// calculator.multiply(10, 5);
// calculator.divide(10, 5);




// class Stack {
//     constructor() {
//         this.items = [];
//     }
//     push(item) {
//         this.items.push(item)
//         console.log(`${item} stackga qo‘shildi.`);
//     }
//     pop() {
//         console.log(`Stackdan o‘chirildi: ${this.items.pop()}`);
//     }
//     empty() {
//         console.log(`Stack bo‘shmi: ${this.items.length === 0}`);
//     }
// }

// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.pop()
// stack.empty()