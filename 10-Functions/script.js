'use strict';

// NOTE:
// Default parameters in ES6 accepts expressions
// We can use other parameters too

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5
//   // numPassengers = numPassengers || 1;
//   // price = price || 199

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   bookings.push(booking);
//   console.log(booking);
// };

// createBooking('LH123'); // {flightNum: "LH123", numPassengers: 1, price: 199}
// createBooking('LH123', 2, 800); // {flightNum: "LH123", numPassengers: 2, price: 800}
// createBooking('LH123', 5); // {flightNum: "LH123", numPassengers: 5, price: 995}
// createBooking('LH123', undefined, 1000); // {flightNum: "LH123", numPassengers: 1, price: 1000}

// NOTE:
// Arguments are values no matter if object seems like reference
// Cause we can change object properties values in functions

// const flight = 'LH234';
// const jesus = {
//   fullName: 'Jesus Guzman',
//   passport: 123456789,
// };

// const ckeckIn = function (flightNum, passenger) {
//   // Bad practice
//   flightNum = 'LH999';
//   passenger.fullName = `Mr. ${passenger.fullName}`;
//   if (passenger.passport === 123456789) {
//     alert('Checked in!');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// ckeckIn(flight, jesus);

// EXPLANATION:
// Object mutated because when invoking function it creates a copy
// like this const flightNum = flight and const passenger = jesus
// so on heap both point to same address

// console.log(flight); // LH234
// console.log(jesus); // {fullName: "Mr. Jesus Guzman", passport: 123456789}

// WARNING:
// Always Wrong passport due object mutation on heap

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000);
// };

// newPassport(jesus);
// ckeckIn(flight, jesus);

//NOTE:
// High Order Functions uses programming abstract concept

// Low order (abstract)
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// Low order (abstract)
// const upperFirstWord = function (str) {
//   const [first, ...rest] = str.split(' ');
//   return [first.toUpperCase(), ...rest].join(' ');
// };

// High Order
// const transformer = function (str, fn) {
//   console.log(`Original Str: ${str}`);
//   console.log(`Transformed Str: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };

// 1 - Love JS lenguage
// 2 - LOVE JS lenguage
// 3 - upperFirstWord
// transformer('Love JS lenguage', upperFirstWord);
// 1 - Love JS lenguage
// 2 - lovejslenguage
// 3 - oneWord
// transformer('Love JS lenguage', oneWord);

// EXPLANATION:
// JS uses callbacks all the time on this example once we click on HTML body
// prints 👋 and same on forEach method (each position of the array)

// const hi5 = function () {
//   console.log('👋');
// };

// document.body.addEventListener('click', hi5);
// ['Jesus', 'Annie'].forEach((element, idx) => {});

// NOTE:
// Functions Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jesús');
// greeterHey('Annie');

// greet('Hello')('Jesús');

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Jesús');

// const aeroMexico = {
//   airline: 'Aero México',
//   code: 'AM',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.code}${flightNum}`, name });
//   },
// };

// NOTE:
// In this example this keyword is set it to null because
// we dont need it instead we set the rate to one value (.16)

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200)); // 220

// const addIVA = addTax.bind(null, 0.16);
// console.log(addIVA(200)); // 232

// CHALLENGE
// const addTaxCh = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const tax = addTaxCh(0.16);
// console.log(tax(200));
// console.log(addTaxCh(0.16)(200));

// NOTE:
// With event listener this points to the selected tag
// even if we directly call the buyPlane method of aeroMexico
// so we need to bind cause it returns a new function

// aeroMexico.planes = 300;
// aeroMexico.buyPlanes = function () {
//   console.log(this); // aeroMexico
//   this.planes++;
//   console.log(this.planes); // aeroMexico
// };

// NaN because this points to button element
// document.querySelector('.buy').addEventListener('click', aeroMexico.buyPlanes);

// document
//   .querySelector('.buy')
//   .addEventListener('click', aeroMexico.buyPlanes.bind(aeroMexico));

// const goldMexico = {
//   airline: 'Gold México',
//   code: 'GM',
//   bookings: [],
// };

// const book = aeroMexico.book;
// Does not work
// book(23, 'Tirsa Neftali'); // TypeError

// NOTE:
// Bind Method returns a new function and bind the this keyword
// const bookGold = book.bind(goldMexico);
// bookGold(13, 'Jesús Guzman'); // [{flight: "GM13", name: "Jesús Guzman"}]

// EXPLANATION:
// You can set default parameters with bind

// const bookGold13 = book.bind(goldMexico, 13);
// bookGold13('Annie Vargas'); // [{…}, {…}]

// aeroMexico.book(239, 'Jesus Guzman');
// aeroMexico.book(635, 'Annie Vargas');

// NOTE:
// Apply method is deprecated
// const dataFlight = [13, 'Jesús Guzman'];
// book.apply(goldMexico, dataFlight);
// console.log(goldMexico.bookings); // [{flight: "GM13", name: "Jesús Guzman"}]

// NOTE:
// Call method can use an array with spread operator too
// book.call(goldMexico, 11, 'Annie Vargas');
// book.call(goldMexico, ...dataFlight);
// console.log(goldMexico.bookings);
// [{flight: "GM11", name: "Annie Vargas"},{flight: "GM13", name: "Jesús Guzman"}]

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join(
//           '\n'
//         )}\nWrite option number (default: 0)`
//       )
//     );
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else {
//       console.log(`Poll results are: ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [5, 2, 3] });

// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// NOTE:
// IIFE need to be wraped into ()

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// (function () {
//   console.log('This will never run again');
//   const age = 26;
//   var isMale = true;
// })(); // Invoked

// console.log(isMale); // ReferenceError
// console.log(age); // ReferenceError

// (() => console.log('This will ALSO never run again'))(); // Invoked

// {
//   const hi = 'Hola';
//   var love = true;
// }
// console.log(love); // true
// console.log(hi); // ReferenceError

// NOTE:
// Closures

// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker(); // 1 passengers
// booker(); // 1 passengers
// booker(); // 1 passengers

// NOTE:
// Displays an interactive list of the properties
// of the specified JavaScript object.
// The output is presented as a hierarchical listing
// with disclosure triangles that let you see the
// contents of child objects.

// console.dir(booker);

// NOTE:
// Closure Example reminds the a and b variables

// let f;
// const g = function () {
//   const a = 11;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 13;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f(); // 22

// // Re-assign variable
// h();
// f(); // 26

// NOTE:
// Closure have priority over scope chain
// So even if we have a perGroup on global scope
// it will use the function variable but if we comment
// that variable JS uses the scope chain

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;
//   setTimeout(() => {
//     console.log(`We are now boarding all ${n} passengers`);

//     console.log(`There're 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

// Challenge
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document
    .querySelector('body')
    .addEventListener('click', () => (header.style.color = 'blue'));
})();
