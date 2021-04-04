'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// NOTE:
// Slice returns a shallow copy of array if there's no arguments
// also recieve numbers as arguments

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.slice(2)); // ["c", "d", "e", "f"]
// console.log(arr.slice(2, 4)); // ["c", "d"]
// console.log(arr.slice(-2)); // ["e", "f"]
// console.log(arr.slice(-1)); // ["f"]
// console.log(arr.slice(1, -2)); // ["b", "c", "d"]
// console.log(arr.slice()); // Shallow copy of array
// console.log([...arr]); // Shallow copy of array

// NOTE:
// Splice returns a array of the elements deleted from an array but mutates the original
// works similar to slice method the second parameter is a number of elements
// that we want to delete from splice array and it will also keep it on original array

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.splice(-1)); // ["f"]
// console.log(arr); // ["a", "b", "c", "d", "e"]
// console.log(arr.splice(1, 2)); // ["b", "c"]
// console.log(arr); // ["a", "d", "e"]

// NOTE:
// Reverse mutates the original array

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.reverse()); // ["f", "e", "d", "c", "b", "a"]
// console.log(arr); // ["f", "e", "d", "c", "b", "a"]

// NOTE:
// Concat merge 2 arrays and then return a shallow copy of them
// so doesnt mutate the arrays

// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// const arr2 = ['g', 'h', 'i'];

// const letters = arr.concat(arr2);
// console.log(letters); // ["a", "b", "c", "d", "e", "f", "g", "h", "i"]
// console.log(arr); // ["a", "b", "c", "d", "e", "f"]
// console.log([...arr, ...arr2]); // ["a", "b", "c", "d", "e", "f", "g", "h", "i"]

// NOTE:
// Join add all elements of the array into one string separated by the argument
// const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
// console.log(arr.join(' - ')); // a - b - c - d - e - f

// NOTE:
// For Each loops over arrays and our callback recieve the
// element, index and the array we're looping over
// you can't use continue and break on this method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach((move, idx, array) => {
//   if (move > 0) {
//     console.log(`Movement ${idx} You deposited: ${move}`);
//   } else {
//     console.log(`Movement ${idx} You withdrew: ${Math.abs(move)}`);
//   }
//   console.log(array); // movements array
// });
