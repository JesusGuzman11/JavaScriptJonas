'use strict';

// NOTE:
// Constructor functions return an object with the
// new operator also creating methods inside constructors functions
// is a bad practice

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// /*
// Steps to create new object:
// 1.- New {} created
// 2.- Functions is called so this = {}
// 3.- {} linked to prototype
// 4.- Function automatically return {}
// */

// const jesus = new Person('Jesus', 1995);
// console.log(jesus.__proto__);
// // Object.prototype (scope prototype)
// console.log(jesus.__proto__.__proto__);
// console.log(jesus.__proto__.__proto__.__proto__); // null
// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 2, 3, 3, 4, 5, 5, 6];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true
// // Object.prototype (scope prototype)
// console.log(arr.__proto__.__proto__);

// // Experimental feature
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique()); // [1, 2, 3, 4, 5, 6]

// const h1 = document.querySelector('h1');
// // protos:
// // 1- HTMLHeadingElement
// // 2- HTMLElement
// // 3- Element
// // 4- Node
// // 5- EventTarget
// // 6- Object
// // 7- null
// console.dir(h1.__proto__);
// console.dir(x => x + 1);

// const annie = new Person('Annie', 1994);
// const tirsa = new Person('Tirsa', 1995);
// const wendy = 'Wendy';

// console.log(jesus);

// // NOTE:
// // Each function has a property called prototype and all objects
// // created with that constructor will get access to the methods and properties
// // defined on the constructor prototype property

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// jesus.calcAge(); // 26
// annie.calcAge(); // 27

// // checking prototype

// console.log(jesus.__proto__); // property created on step 3
// console.log(jesus.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(jesus)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false
// console.log(Person.prototype.constructor);

// Person.prototype.species = 'Homo Sapiens';

// console.log(jesus.species); // Homo Sapiens

// // Checking if property exist in constructor function or in prototype
// console.log(jesus.hasOwnProperty('firstName')); // true
// console.log(jesus.hasOwnProperty('species')); // false

// // Checking instance
// // console.log(jesus instanceof Person); // true
// // console.log(wendy instanceof Person); // false

/*
Your tasks:
1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the current speed of the car in 
km/h
2. Implement an 'accelerate' method that will increase the car's speed by 10, 
and log the new speed to the console
3. Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
4. Create 2 'Car' objects and experiment with calling 'accelerate' and 
'brake' multiple times on each of them.

- Data car 1: 'BMW' going at 120 km/h
- Data car 2: 'Mercedes' going at 95 km/h
*/

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// Car.prototype.brake = function () {
//   if (this.speed <= 5) {
//     this.speed = 0;
//   } else {
//     this.speed -= 5;
//   }
// };

// const BMW = new Car('BMV', 120);
// const mercedes = new Car('Mercedes', 95);
// BMW.accelerate();
// mercedes.accelerate();
// BMW.brake();
// mercedes.brake();

// console.log(mercedes);
// console.log(BMW);

// NOTE:
// ES6 Classes are just a modern syntaxis to create
// classes but methods are created on constructor prototype property

// Class expression
// const Person = class {};

// NOTE:
// We can use setters adn getters on classes

// NOTE:
// Statics methods are not available on instances

// Class declaration
// class Person {
//   // Instance methods
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   clcAge() {
//     console.log(2021 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2021 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       console.log(`${name} isn't a full name`);
//     }
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static methods
//   static hey() {
//     console.log('Hi there!');
//     console.log(this);
//   }
// }

// const jesus = new Person('Jesús Guzmán', 1995);
// Person.hey(); // Hi there!
// jesus.hey(); // error
// console.log(jesus.age); //26

// const annie = new Person('Annie', 1994); // Annie isn't a full name

// console.log(jesus); // Person {firstName: "Jesús", birthYear: 1995}
// jesus.greet(); // Hey Jesús

// console.log(jesus.__proto__ === Person.prototype); // true

// NOTE:
// Getters and setters are functions and its not mandatory to have a
// setter and getter for the same property

// const account = {
//   fisrtName: 'Jesús',
//   movements: [200, 300, 600, 800],
//   get lastest() {
//     return this.movements.slice(-1).pop();
//   },
//   set lastest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.lastest); // 800
// account.lastest = 50;
// console.log(account.movements); // [200, 300, 600, 800, 50]
// console.log(account.lastest); // 50

// NOTE:
// Object create creates and links an object as prototype
// to the object we want to create

// const Person = {
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
// };

// const jesus = Object.create(Person);
// jesus.init('Jesús', 1995);
// console.log(jesus);
// jesus.calcAge(); // 26
// console.log(jesus.__proto__ === Person); // true

// CODE CHALLENGE

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 5;
//   }
//   brake() {
//     if (this.speed <= 5) {
//       this.speed = 0;
//     } else {
//       this.speed -= 5;
//     }
//   }
//   get speedUS() {
//     return `${this.speed / 1.6} mi/h`;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new Car('Ford', 126);

// console.log(ford.speedUS); // 75
// ford.speedUS = 50;
// console.log(ford); // {make: "Ford", speed: 80}

// NOTE:
// Constructor functions needs to link the prototype with Object.create

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking Prototypes
// // creates a empty object
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name's ${this.firstName} and I study ${this.course}`);
// };

// // Chrome issue but need constructor to be Student and not Person
// Student.prototype.constructor = Student;

// const jesus = new Student('Jesús', 1995, 'Computer Science');
// jesus.introduce(); // My name is Jesús and I study Computer Science
// jesus.calcAge(); // 26
// console.log(jesus instanceof Student); // true
// console.log(jesus instanceof Person); // true
// console.log(jesus instanceof Object); // true

// console.dir(Student.prototype.constructor); // Student constructor

// CODE CHALLENGE 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// Car.prototype.brake = function () {
//   if (this.speed <= 5) {
//     this.speed = 0;
//   } else {
//     this.speed -= 5;
//   }
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} going at ${this.speed} with a charge of ${this.charge}%`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);

// console.log(tesla);
// tesla.accelerate();

// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();

// NOTE:
// Inheritence between classes needs the constructor and super function
// if new arguments for child class especified otherwise just use the extends keyword
// class Person {
//   // Instance methods
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }
//   get age() {
//     return 2021 - this.birthYear;
//   }
//   set fullName(name) {
//     if (name.includes(' ')) {
//       this._fullName = name;
//     } else {
//       console.log(`${name} isn't a full name`);
//     }
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static methods
//   static hey() {
//     console.log('Hi there!');
//     console.log(this);
//   }
// }

// class Student extends Person {
//   constructor(fullName, birthYear, course) {
//     // Super is the constructor of parent and needs
//     // to happend first to can access this keyword on student class
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }
//   // Polymorphism
//   calcAge() {
//     console.log(
//       `I'm ${2021 - this.birthYear} years old but I feel more like ${
//         2021 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const jesus = new Student('Jesús Guzmán', 1995, 'Computer Science');
// jesus.introduce(); // My name is Jesús Guzmán and I study Computer Science
// jesus.calcAge(); // I'm 26 years old but I feel more like 36

// NOTE:
// Object create links prototypes of objects w.o constructor functions

// const PersonProto = {
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
// };

// const jesus = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const annie = Object.create(StudentProto);
// annie.init('Annie', 1994, 'Computer Science');
// annie.introduce(); // My name is Annie and I study Computer Science
// annie.calcAge(); // 27

// NOTE:
// Private methods and properties must be declared with #

// NOTE:
// Chaining methods allow us to call methods one after another

// class Account {
//   // Public fields (instances)
//   locale = navigator.language;
//   // Private fields (instances)
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     console.log(`Thanks for opening an account ${owner}`);
//   }
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(value) {
//     this.#movements.push(value);
//     return this;
//   }
//   withdaw(value) {
//     this.deposit(-value);
//     return this;
//   }
//   // Private method
//   #approveLoan(value) {
//     return true;
//   }
//   requestLoan(value) {
//     if (this.#approveLoan(value)) {
//       this.deposit(value);
//       console.log('Loan approved');
//       return this;
//     }
//   }
// }

// const acc1 = new Account('Jesús', 'MXN', 1111);

// // Chaining
// acc1.deposit(50).withdaw(25).requestLoan(5000).withdaw(2000);
// console.log(acc1.getMovements()); // [50, -25, 5000, -2000]

// acc1.deposit(250);
// acc1.withdaw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());
// // SyntaxError: Private field '#approveLoan' must be declared in an enclosing class
// console.log(acc1.#approveLoan(1));

// CODE CHALLENGE 4

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 5;
  }
  brake() {
    if (this.speed <= 5) {
      this.speed = 0;
      return this;
    } else {
      this.speed -= 5;
      return this;
    }
  }
  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} going at ${this.speed} with a charge of ${this.#charge}%`
    );
    return this;
  }
  get charge() {
    return this.#charge;
  }
}

const rivian = new EV('Ribian', 120, 23);
console.log(rivian.charge);

rivian.accelerate().chargeBattery(90).brake();
console.log(rivian);
