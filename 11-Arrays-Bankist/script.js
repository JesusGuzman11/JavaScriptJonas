'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jesús Guzmán',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Annie Vargas',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Tirsa Gutierrez Ramirez',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Teresa Guzmán',
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

const createUsernames = function (accs) {
  accs.forEach(acc => {
    acc.user = acc.owner
      .toLowerCase()
      .split(' ')
      .map(user => user[0])
      .join('');
  });
};

createUsernames(accounts);

const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `${account.balance}€`;
};

const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

const displayMovements = function (movements, sort = false) {
  // Cleaning container
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach((mov, idx) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${idx + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    // Insert HTML
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const updateUI = function (account) {
  // Display movements
  displayMovements(account.movements);
  // Display balance
  calcDisplayBalance(account);
  // Display summary
  calcDisplaySummary(account);
};

// EVENTS HANDLERS
let currentAccount;

btnLogin.addEventListener('click', function (event) {
  // Prevent submitting from
  event.preventDefault();
  currentAccount = accounts.find(
    account => account.user === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;

    // Clear Inputs
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Display UI and message
    containerApp.style.opacity = 100;
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiveAcc = accounts.find(
    account => account.user === inputTransferTo.value
  );
  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
  if (
    amount > 0 &&
    receiveAcc &&
    currentAccount.balance >= amount &&
    receiveAcc.user !== currentAccount.user
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiveAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (event) {
  event.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (event) {
  event.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.user &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const idx = accounts.findIndex(acc => acc.user === currentAccount.user);

    // Delete account
    accounts.splice(idx, 1);
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (event) {
  event.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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

// NOTE:
// We can use forEach method on Sets and Maps
// for sets key is the same as value cause sets doesn't have indexes
// but we can skip that key using the _

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const currenciesUnique = new Set(['USD', 'EUR', 'EUR', 'GBP']);

// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

// currencies.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// USD
// EUR
// GBP

// currenciesUnique.forEach((value, _, set) => {
//   console.log(`${value}`);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each).
For now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'),
and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs!
So create a shallow copy of Julia's array, and remove the cat ages from that copied array
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old")
or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const correctDogsJulia = dogsJulia.slice(1, -2);
//   const totalDogs = [...correctDogsJulia, ...dogsKate];
//   console.log(totalDogs);
//   totalDogs.forEach((dogAge, idx) => {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${idx + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${idx + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// NOTE:
// Map returns a new array (shallow copy) and the keyword returns the element
// and place it on each position of the new array so we can return any kind of data

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movDescriptions); // Array of strings

// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(mov => 23); // Array with number 23 repeated 8 times

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD); // Array with each position multiplied by 1.1

// NOTE:
// The filter method returns the elements who satisfy a certain condition

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(mov => mov > 0);

// console.log(deposits); // [200, 450, 3000, 70, 1300]

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

// NOTE:
// The reduce method return a single value of an array (accumulator)

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Max value

// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) {
//     return acc;
//   } else {
//     return mov;
//   }
// }, movements[0]);

// console.log(max); // 3000

// // Arrow
// const balance = movements.reduce((acc, mov, idx, arr) => acc + mov, 0);

// // Function Expression
// const balanceExp = movements.reduce((acc, mov, idx, arr) => {
//   return acc + mov;
// }, 0);

// console.log(balance); // 3840
// console.log(balanceExp); // 3840

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to
human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge.
If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
*/

// const calcAverageHumanAge = function (dogsAges) {
//   // 1
//   const agesHuman = dogsAges
//     .map(dogAge => {
//       if (dogAge <= 2) {
//         return dogAge * 2;
//       } else {
//         return 16 + dogAge * 4;
//       }
//     })
//     .filter(humanAge => humanAge >= 18)
//     .reduce((acc, humanAge, idx, arr) => acc + humanAge / arr.length, 0);
//   return agesHuman;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// NOTE:
// We can chain other metods because they return arrays except reduce

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * 1.1)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD); // 5522.000000000001

// NOTE:
// The find method returns the first element who satisfies a certain condition

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);

// console.log(firstWithdrawal); // -400

// let findedMov;
// for (const mov of movements) {
//   if (mov < 0) {
//     findedMov = mov;
//     break;
//   }
// }

// console.log(findedMov);

// NOTE:
// Find Index returns the index of the element who satisfies the condition
// if no one satisfies the condition it returns -1

// const data = [
//   {
//     firstName: 'Jesus',
//     lastName: 'Guzman',
//   },
//   {
//     firstName: 'Annie',
//     lastName: 'Vargas',
//   },
//   {
//     firstName: 'Tirsa',
//     lastName: 'Gutierrez',
//   },
// ];

// const index = data.findIndex(user => user.firstName === 'Annie');

// console.log(index); // 1

// NOTE:
// Some method return true if there's at least one element who satisfies
// the condition if not returns false

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const anyDeposits = movements.some(mov => mov > 0);

// console.log(anyDeposits); // true

// NOTE:
// Every returns true only if whole array satisfies the condition

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const movements2 = [200, 450, 200, 6000, 100, 50, 50, 300];

// console.log(movements.every(mov => mov > 0)); // false
// console.log(movements2.every(mov => mov > 0)); // true

// NOTE:
// Flat returns a new array (shallow copy) with all elements no matter
// if there's nested arrays into the new array

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// const arr2 = [[[1, 2], 3], [4, [5, 6]], 7, 8];

// console.log(arr.flat()); // [1,2,3,4,5,6,7,8]
// console.log(arr2.flat(2)); // [1,2,3,4,5,6,7,8]

// NOTE:
// Flat map returns a new array (shallow copy) with a map method and then
// performs a level 1 flat method

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

// const sumArr = arr
//   .flatMap(element => element)
//   .reduce((acc, element) => acc + element, 0);

// console.log(sumArr); // 36

// NOTE:
// Sort mutates the original array and by default converts whole
// array into strings if no compare function is provided

// const names = ['Jesus', 'Annie', 'Tirsa'];
// console.log(names.sort());

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0 => A, B (keep order)
// return > 0 => B, A (switch order)
// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// // Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

// // Alternative

// movements.sort((a, b) => a - b);

// console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// movements.sort((a, b) => b - a);

// console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

// NOTE:
// new Array constructor creates an array with the passed arguments
// however if we just send 1 number as argument it creates an array
// with that length and whole elements are empty also you cant loop over it

// NOTE:
// Fill method works like slice method and overrides the value of the indexes
// with the first argument provided

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const x = new Array(7);

// console.log(x); // [empty × 7]

// // Filling empty array
// x.fill(1);
// console.log(x); // [1, 1, 1, 1, 1, 1, 1]

// // Overriding an array indexes
// arr.fill(11, 3, 5);
// console.log(arr); // [1, 2, 3, 11, 11, 6, 7]

// NOTE:
// Array From creates programatically an array and recieve 2 arguments
// first an object with the desired length and second a map function
// same like map method but just with access to current value and index

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y); // [1, 1, 1, 1, 1, 1, 1]

// const z = Array.from({ length: 7 }, (_, idx) => idx + 1);
// console.log(z); // [1, 2, 3, 4, 5, 6, 7]

// const randomDice = Array.from({ length: 100 }, () =>
//   Math.trunc(Math.random() * 7)
// );
// console.log(randomDice);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]

//   const movementsUI2 = [
//     ...document.querySelectorAll('.movements__value'),
//   ].map(el => Number(el.textContent.replace('€', '')));

//   console.log(movementsUI2); // [1300, 70, -130, -650, 3000, -400, 450, 200]
// });
