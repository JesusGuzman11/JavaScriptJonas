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

// aeroMexico.book(239, 'Jesus Guzman');
// aeroMexico.book(635, 'Annie Vargas');

// const goldMexico = {
//   airline: 'Gold México',
//   code: 'GM',
//   bookings: [],
// };

// const book = aeroMexico.book;
// Does not work
// book(23, 'Tirsa Neftali'); // TypeError

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
