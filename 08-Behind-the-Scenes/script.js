'use strict';

/*function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age} years old and you born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating a variable with same name as outer scope's variable
      const firstName = 'Annie';
      // Reassigning outer scope's variable
      output = 'New Output';
      const str = `Oh, and you're a millenial ${firstName}`;
      console.log(str); // Success but now with Annie

      function add(a, b) {
        return a + b;
      }
    }
    console.log(output); // New Output
  }
  printAge(); // Success

  return age;
}

const firstName = 'Jésus';

calcAge(1995);

// Variables

console.log(me); // undefined
// console.log(job); // Reference error (initialization)
// console.log(year); // Reference error (initialization)

var me = 'Jésus';
let job = 'Software Engineer';
const year = 1995;

// Functions

console.log(addDecl(1, 2)); // 3
// console.log(addArrow(1, 2)); // TypeError (not a function) trying to invoke undefined(1,2)
// console.log(addExp(1, 2)); // TypeError (not a function) trying to invoke undefined(1,2)

function addDecl(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

const addExp = function (a, b) {
  return a + b;
};

// EXAMPLE:

// Invoke function cause its numProducts = undefined on TDZ
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products were deleted');
}

var x = 1;
const y = 2;
let z = 3;

// EXPLANATION:

// True cause var is function scoped and create property on window browser object
console.log(x === window.x);
// False cause let and const is block scoped and do not create property on window browser object
console.log(y === window.y);
console.log(z === window.z);

// This
console.log(this); // Window object because we're on global scope

const calcAge = function (birthYear) {
  console.log(this); // undefined because its a simple function call
  return 2021 - birthYear;
};

const calcAgeArrow = birthYear => {
  // EXPLANATION:
  // Arrow functions dont have this by it self instead
  // they have lexical this because uses the this keyword from parent scope
  console.log(this); // window
  return 2021 - birthYear;
};

calcAge(1995);
calcAgeArrow(1995);

const jesus = {
  birthYear: 1995,
  calcAge: function () {
    console.log(this); // object who calls the method
    console.log(2021 - this.birthYear);
  },
};

// EXPLANATION:
// this = jesus object and 26
jesus.calcAge();

const annie = {
  birthYear: 1994,
};

// EXPLANATION:
// Functions are values so we can store it into variables (reference)
annie.calcAge = jesus.calcAge;

// EXPLANATION:
// this = annie object and 27 even if calcAge was added from jesus object
annie.calcAge();

const testFunc = jesus.calcAge;

// EXPLANATION:
// this = undefined and TypeError because we can access birtYear from undefined
testFunc();

const jesus = {
  birthYear: 1995,
  firstName: 'Jesus',
  calcAge: function () {
    console.log(this); // object who calls the method
    console.log(2021 - this.birthYear);
    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.birthYear >= 1981 && self.birthYear <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this); // jesus object
      console.log(this.birthYear >= 1981 && this.birthYear <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this); // window
    console.log(`Hello ${this.firstName}`);
  },
};

// EXPLANATION:
// Arrow function has lexical this so this points to calcAge this for that code works
jesus.calcAge();

// EXPLANATION:
// We need to create a const inside calcAge method (self) to store this values
// That way we can access the object otherwise if we use this inside isMillenial function
// this will be undefined and we get a TypeError
jesus.calcAge();

// EXPLANATION:
// this = window and message is hello undefined
// because arrow function dont have their own this
// instead they use the ones from parent scope wich is global in this case
// but if we declar a var fistName then we can get rid of that undefined (var firstName = "Jesus")
jesus.greet();


// Arguments
const addExp = function (a, b) {
  console.log(arguments); // Array [1,2,3,4,5]
  return a + b;
};

addExp(1, 2, 3, 4, 5);

// const addArrow = (a, b) => {
//   console.log(arguments); // ReferenceError arguments is not defined
//   return a + b;
// };

// addArrow(1, 2, 3, 4, 5);


// Primitives
let lastName = 'Vargas';
let oldLastName = lastName;
lastName = 'Guzman';
// EXPLANATION:
// oldLastName y lastName points to diferent address on call-stack
console.log(lastName); // Guzman
console.log(oldLastName); // Vargas

const annie = {
  firstName: 'Annie',
  lastName: 'Vargas',
  age: 27,
};

const marriedAnnie = annie;

marriedAnnie.lastName = 'Guzmán';
console.log('Married Annie:', marriedAnnie); // marriedAnnie object with lastName = 'Guzmán'
console.log('Annie:', annie); // annie object with lastName = 'Guzmán'
*/

const annie = {
  firstName: 'Annie',
  lastName: 'Vargas',
  age: 27,
  family: ['Valente', 'Teresa', 'Antonio'],
};

const marriedAnnie = Object.assign({}, annie);
marriedAnnie.lastName = 'Guzmán';
marriedAnnie.family.push('Zeuz', 'Canela');

// EXPLANATION:
// lastName for annie is equal to Vargas but array family has 5 posistions
// even if we added to marriedAnnie object cause Object.assign dont do a deep copy
// for marriedAnnie object lastName is equel to Guzmán with 5 array family

console.log('Married Annie:', marriedAnnie);
// { firstName: 'Annie', lastName: 'Guzmán', age: 27, family: ['Valente', 'Teresa', 'Antonio', 'Zeuz', 'Canela'] }
console.log('Annie:', annie);
// { firstName: 'Annie', lastName: 'Vargas', age: 27, family: ['Valente', 'Teresa', 'Antonio', 'Zeuz', 'Canela'] }
