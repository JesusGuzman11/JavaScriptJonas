'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jesus Guzman',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-04-18T23:36:17.929Z',
    '2021-04-21T10:51:36.790Z',
  ],
  currency: 'MXN',
  locale: 'es-MX', // de-DE
};

const account2 = {
  owner: 'Annie Vargas',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Set time to 5 minutes
  let time = 120;

  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const formattedMov = formatCur(mov, account.locale, account.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ACCOUNT
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Display date and hours

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour12: true,
      // weekday: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// NOTE:
// JS represent numbers as floats no matter if
// they're written as integers

// console.log(23 === 23.0); // true

// Base 10 -> 0 to 9
// 1/10 = 0.1 but 10/3 = 3.333333333
// Binary base 2 -> 0 to 1
// hard to represent 1/10 = 0.1

// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// https://programmerclick.com/article/563546008/
// function numbersequal(a, b) {
//   return Math.abs(a - b) < Number.EPSILON;
// }

// const res = numbersequal(0.1 + 0.2, 0.3);

// console.log(res); // true

// NOTE:
// When converting strings to numbers we can use the +
// this way JS does a type coercion also parseInt recieve
// radix (base in mathematical numeral systems)
// strings with a prefix of '0x' are considered
// hexadecimal. All other strings are considered decimal.

// Converting
// console.log(Number('11')); // 11 number
// console.log(+'11'); // 11 number

// Parsing
// console.log(Number.parseInt('30px', 10)); // 30
// console.log(Number.parseInt('e23', 10)); // NaN

// console.log(Number.parseInt(' 2.5rem ')); // 2
// console.log(Number.parseFloat(' 2.5rem ')); // 2.5

// Old way
// console.log(parseFloat('2.5rem')); // 2.5

// NOTE:
// isNaN returns a boolean if argument is NaN

// Check if value is NaN
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'20X')); // true
// console.log(Number.isNaN(23 / 0)); // false

// NOTE:
// isFinite returns a boolean if argument is a valid number

// console.log(Number.isFinite(20)); // true
// console.log(Number.isFinite('20')); // false
// console.log(Number.isFinite(+'20X')); // false
// console.log(Number.isFinite(23 / 0)); // false

// NOTE:
// isInteger returns a boolean if argument is a integer

// console.log(Number.isInteger(11)); // true
// console.log(Number.isInteger(11.0)); // true
// console.log(Number.isInteger(23 / 0)); // false

// NOTE:
// Math sqrt returns the square root of a number
// also this method does type coercion

// console.log(Math.sqrt(25)); // 5
// console.log(Math.sqrt('25')); // 5
// console.log(Math.sqrt('25px')); // NaN

// Alternatives to square or cubic roots
// console.log(25 ** (1 / 2)); // 5
// console.log(8 ** (1 / 3)); // 2

// NOTE:
// Math max returns the max value of a list of numbers
// also does a type coercion

// console.log(Math.max(5, 1, 3, 11)); // 11
// console.log(Math.max(5, 1, 3, '11')); // 11
// console.log(Math.max(5, 1, 3, '11px')); // NaN

// NOTE:
// Math min returns the min value of a list of numbers
// also does a type coercion

// console.log(Math.min(5, 1, 3, 11)); // 1
// console.log(Math.min(5, '1', 3, 11)); // 1
// console.log(Math.min(5, '1px', 3, 11)); // NaN

// NOTE:
// Math PI is a number (3.141592653589793)

// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// 314.1592653589793

// NOTE:
// Math floor and trunc work perfectly together to generate numbers
// between certain range

// console.log(Math.trunc(Math.random() * 6) + 1);

// Function to generate random int
// const randomInt = (min, max) => {
//   return Math.trunc(Math.random() * (max - min + 1)) + min;
// };

// console.log(randomInt(-5, 5));

// NOTE:
// Math floor returns the largest integer less than or equal to a given number
// also works perfect with random

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// console.log(randomInt(-5, 5));

// console.log(Math.floor(11.3)); // 11
// console.log(Math.floor('11.8')); // 11
// console.log(Math.floor('11.8px')); // NaN

// NOTE:
// Math round gives us 12 while trunc remains at 11

// console.log(Math.trunc(-11.8)); // -11
// console.log(Math.floor(-11.8)); // -12

// NOTE:
// Math round returns the value of a number rounded to the nearest integer

// console.log(Math.round(11.5)); // 12
// console.log(Math.round('11.4')); // 11
// console.log(Math.round('11.4px')); // NaN

// NOTE:
// Math ceil returns the value of a number rounded to the next largest integer

// console.log(Math.ceil(11.5)); // 12
// console.log(Math.ceil('11.4')); // 11
// console.log(Math.ceil(11)); // 11
// console.log(Math.ceil('11.4px')); // NaN

// NOTE:
// The following example uses boxing wich means the number
// is converted to object with the constructor new Number ()
// then we can call toFixed method wich returns an string
// with the decimals that we pass as arguments

// console.log((11).toFixed(0)); // 11
// console.log((11.589).toFixed(2)); // 11.59
// console.log(+(11).toFixed(2)); // 11 number

// NOTE:
// The remainder operator returns a number

// console.log(5 % 2); // 1 => 2 * 2 = 4 + 1 = 5
// console.log(5 / 2); // 2.5

// console.log(8 % 3); // 2 => 3 * 2 = 6 + 2 = 8
// console.log(8 / 3); // 2.6666666666666665

// console.log(6 % 2); // 0
// console.log(6 / 2); // 3

// console.log(7 % 2); // 1 => 2 * 3 = 6 + 1 = 7
// console.log(7 / 2); // 3.5

// const isEven = n => n % 2 === 0;

// console.log(isEven(8)); // true
// console.log(isEven(514)); // true
// console.log(isEven(11)); // false

// NOTE:
// Big int type can be created with constructor BigInt() or adding
// n at the end of the number we can use operator on big int
// but we can't mix big int with regular numbers

// JavaScript limitations due base 64 numerical system

// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Not precision numbers
// console.log(2 ** 53 + 1); // 9007199254740992
// console.log(2 ** 53 + 2); // 9007199254740994
// console.log(2 ** 53 + 3); // 9007199254740996

// Converting to big int
// console.log(6548748456484848484894949454n);

// Constructor works better with smaller numbers
// console.log(BigInt(654875));

// Operations
// console.log(1000n + 1000n); // 2000n
// console.log(488484548415848484n * 1000n); // 488484548415848484000n

// const huge = 56445485848485484n;
// const num = 11;

// console.log(huge * num); // Cannot mix big int with normal numbers
// console.log(huge * BigInt(num)); // 620900344333340324n

// Exceptions
// console.log(20n > 15); // true
// console.log(20n === 20); // false => not doing coercion
// console.log(typeof 20n); // bigint
// console.log(20n == '20'); // true => doing coercion

// console.log(huge + ' BIG INT'); // 56445485848485484 BIG INT

// Divisions
// With big int division rounds to closest big int
// console.log(11n / 3n); // 3n
// console.log(12n / 3n); // 4n
// console.log(10 / 3); // 3.3333333

// NOTE:
// Creating dates with new Date constructor also months are 0 based

// const now = new Date();
// Wed Apr 21 2021 21:09:19 GMT-0500 (hora de verano central)
// console.log(now);

// Wed Apr 21 2021 21:09:46 GMT-0500 (hora de verano central)
// console.log(new Date('Apr 21 2021 21:09:46'));

// Thu Dec 24 2015 00:00:00 GMT-0600 (hora estándar central)
// console.log(new Date('December 24, 2015')); // unreliable

// Fri Nov 01 2019 07:15:33 GMT-0600 (hora estándar central)
// console.log(new Date('2019-11-01T13:15:33.035Z')); // UTC

// Create with numbers (year, month, day, hour, minute, second)
// Thu Nov 19 2037 15:23:05 GMT-0600 (hora estándar central)
// console.log(new Date(2037, 10, 19, 15, 23, 5));

// Smart JS date constructor if we pass 33 retrieves next month
// Thu Dec 03 2037 00:00:00 GMT-0600 (hora estándar central)
// console.log(new Date(2037, 10, 33));

// Unix milliseconds
// Wed Dec 31 1969 18:00:00 GMT-0600 (hora estándar central)
// console.log(new Date(0));

// timestamp 3 = days, 24 = hours per day, 60 = min in an hour,
// 60 seconds in one minute, 1000 miliseconds in one minute
// Sat Jan 03 1970 18:00:00 GMT-0600 (hora estándar central)
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// NOTE:
// Get full year returns the year of the given date

// Thu Nov 19 2037 15:23:00 GMT-0600 (hora estándar central)
// const future = new Date(2037, 10, 19, 15, 23);

// console.log(future.getFullYear()); // 2037

// NOTE:
// Get month returns the month (number) of the given date

// Thu Nov 19 2037 15:23:00 GMT-0600 (hora estándar central)
// const future = new Date(2037, 10, 19, 15, 23);

// console.log(future.getMonth()); // 10

// NOTE:
// Get day returns the day of the week (number) of the given date

// Thu Nov 19 2037 15:23:00 GMT-0600 (hora estándar central)
// const future = new Date(2037, 10, 19, 15, 23);

// console.log(future.getDay()); // 4 => Thursday

// NOTE:
// Get date returns the day (number) of the given date

// Thu Nov 19 2037 15:23:00 GMT-0600 (hora estándar central)
// const future = new Date(2037, 10, 19, 15, 23);

// console.log(future.getDate()); // 19

// NOTE:
// Set time changes the date based on timestamp of the given date

// Thu Nov 19 2037 15:23:00 GMT-0600 (hora estándar central)
// const future = new Date(2037, 10, 19, 15, 23);

// console.log(future.setTime(2236972980000)); // 2236972980000
// Mon Nov 19 2040 15:23:00 GMT-0600 (hora estándar central)
// console.log(future);

// NOTE:
// new intl dateformat returs a date formatted
// based on locales

// const now = new Date();
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
//   hour12: true,
// };

// // User locale
// const locale = navigator.language;
// console.log(locale); // es-MX

// const esDate = new Intl.DateTimeFormat(locale, options).format(now);

// // Jueves, 22 de abril de 2021 8:22 p. m.
// console.log(esDate.replace(esDate[0], esDate[0].toUpperCase()));

// NOTE:
// new intl number format returns a formated number based
// on locales and options

// const num = 3888888.11;

// const options = {
//   style: 'currency',
//   unit: 'kilometer-per-hour',
//   currency: 'MXN',
//   // useGrouping: false,
// };

// const peso = new Intl.NumberFormat(navigator.language, options).format(num);

// console.log(peso); // $3,888,888.11

// NOTE:
// Set time out executes a callback after certain time

// const ingredients = ['Cheese', 'Meat'];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} with ${ing2}`),
//   3000,
//   ...ingredients
// );

// if (ingredients.includes('Sausage')) clearTimeout(pizzaTimer);

// NOTE:
// Set interval executes the given function with the specified time infinitely

// const params = [1, 2];

// setInterval(() => {
//   const now = new Date();
//   const clock = now.toLocaleTimeString('es-MX');
//   console.log(clock);
// }, 1000);
