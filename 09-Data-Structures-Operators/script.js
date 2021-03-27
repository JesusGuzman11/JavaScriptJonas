'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const [mon, tue, wed, thu, fri, sat, sun] = weekdays;

const openingHours = {
  [thu]: {
    open: 12,
    close: 22,
  },
  [fri]: {
    open: 11,
    close: 23,
  },
  [sat]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza(mainIng, ...otherIngs) {
    console.log(mainIng);
    console.log(otherIngs);
  },
};

// NOTE:
// Map created with a array of arrays
// 1st position on the arrays is the key and the 2nd is the value

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// const question = new Map([
//   ['question', 'What is the best programming lenguage in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct :D'],
//   [false, 'Try again'],
// ]);

// Convert to array
// console.log([...question]); // [[key, value]...]
// console.log([...question.keys()]); // [[key]...]
// console.log([...question.values()]); // [[value]...]

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Option ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Choose an option 1, 2 or 3'));

// console.log(question.get(answer === question.get('correct')));

// NOTE:
// Maps can have any data type as keys

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// EXPLANATION:
// Set method returns the updated map so we can chain multiple times
// rest
//   .set(2, 'Lisbon, Portugal')
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 22)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :c');

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest.get(arr)); // Test
// console.log(rest.get([1, 2])); // undefined

// console.log(rest.size); // 8
// rest.clear(); // clear map
// rest.delete(2); // element deleted
// console.log(rest.has('open')); // true

// console.log(rest);
// console.log(rest.get(true)); // We are open :D
// console.log(rest.get(1)); // Firenze, Italy

// console.log(rest.get('1')); // undefined

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// NOTE:
// Set has non duplicate values
// Sets

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Waiter', 'Chef'];

// const staffUnique = [...new Set(staff)];

// console.log(staffUnique); // ["Waiter", "Chef", "Manager"]

// const orderSet = new Set(['Pizza', 'Rissoto', 'Pasta', 'Pizza', 'Pasta']);

// for (const order of orderSet) {
//   console.log(order);
// }

// orderSet.clear(); // All elements deleted

// orderSet.delete('Rissoto'); // deleted

// orderSet.add('Garlic Bread'); // added
// orderSet.add('Garlic Bread'); // not added

// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('Bread')); // false

// console.log(orderSet.size); // 3

// console.log(orderSet); // {"Pizza", "Rissoto", "Pasta"}

// Keys and Values

// const entries = Object.entries(openingHours);
// [['thu', {open:12, close: 22}]...]

// Destructuring
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
//   // On thu we open at 12 and close at 22 ...
// }

// Values
// const values = Object.values(openingHours);
// console.log(values); // [{open: 12, close: 22} ....]

// Keys
// const keys = Object.keys(openingHours); // ['thu', 'fri', 'sat']

// let openDays = `We are open on ${keys.length} days: `;

// for (const day of keys) {
//   openDays += `${day}, `;
// }
// console.log(openDays); // We are open on 3 days: thu, fri, sat,

// Arrays
// const users = [{ firstName: 'Jesús', email: 'jesusguzman.0311@gmail.com' }];

// console.log(users[0]?.firstName ?? 'User array empty'); // Jesús

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exists'); // ['Focaccia', 'Pasta']
// console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exists'); // Method does not exists

// EXAMPLE:
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? -1;
//   console.log(`On ${day} we ${open >= 0 ? 'open at: ' + open : 'dont open'} `);
// }

// console.log(restaurant.openingHours?.mon?.open); // undefined
// console.log(restaurant.openingHours?.fri?.open); // 11

// console.log(restaurant);

// NOTE:
// For of is a way to loop over array but if you need the index
// of the array you need to use .entries() cause this for dont have
// index by itself but we can use it on for with destructuring

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, element] of menu.entries()) {
//   console.log(i); // index
//   console.log(element); // element
// }

// EXPLANATION:
// entries method return an Array Iterator object that contains the key/value pairs for each
// index in the array

// console.log([...menu.entries()]);
// [[0, "Focaccia"], [1, "Bruschetta"]....]

// NOTE:
// If we evaluate it with short-circuiting or ternary we always get 10
// because 0 and '' are falsy values however nullish coalescing operator
// evaluates based on nullish values: null, undefined and if not it returns the value

// restaurant.numGuests = 0;

// const guess = restaurant.numGuests ?? 10;

// console.log(guess); // 0

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('meat', 'cheese'); // Invoke function
// }

// restaurant.orderPizza && restaurant.orderPizza('meat', 'cheese'); // Invoke function

// NOTE:
// AND operator use any data type, return any data type and uses short-circuiting
// short-circuiting evaluates and return the first falsy value on the operation
// in case that whole operation is true the last element is returned

// console.log(0 && 'Jesús'); // 0
// console.log(13 && 'Jesús'); // Jesús
// console.log(13 && 'Jesús' && null && 'Annie'); // null

// const guessTernary = restaurant.numGuests ? restaurant.numGuests : 10; // 10
// const guessCirc = restaurant.numGuests || 10; // 10

// NOTE:
// OR operator use any data type, return any data type and uses short-circuiting
// short-circuiting evaluates and return the first truthy value on the operation
// in case that whole operation is false the last element is returned

// console.log(3 || 'Jesús'); // 3
// console.log('' || 'Jesús'); // Jesús
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || null || 'Jesús' || 5 || ''); // Jesús

// restaurant.orderPizza('meat', 'cheese', 'tomatoes');

// NOTE:
// Rest on parameters

// const add = function (...numbers) {
//   console.log(numbers); // Array with numbers that we pass to function
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum += element;
//   }
//   console.log(sum); // Sum of whole numbers on array
// };

// add(1, 2); // 3
// add(5, 2, 9, 10); // 26

// NOTE:
// Rest because is on left side of =
// rest condenses elements into an object

// const { sat, ...wekdays } = restaurant.openingHours;
// console.log(sat); // { open: 0 , close: 24 }
// console.log(wekdays); // { fri: { open: 11 , close: 23 } , thu: { open: 12 , close: 22 } }

// NOTE:
// Rest because is on left side of =
// rest condenses elements into an array

// const [a, b, ...rest] = [1, 2, 3, 4, 5];

// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4, 5]

// const ingredients = [
//   prompt("Let's make a pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

// NOTE:
// Spread Objects (ES8)
// We can use spread on objects to create copy of objets (shallow copy)

// const newRestaurant = { foundIn: 2021, ...restaurant, founder: 'Jesús' };
// newRestaurant.nameR = 'Ansus';
// console.log(restaurant); // Non affected values because nameR is a string
// console.log('newRestaurant:', newRestaurant); // restaurant with founder and found in properties also nameR changed on newRestaurant

// NOTE:
// Spread works with iterables: strings, maps, sets, but not objects
// We can't pass elemets separated by commas on template literals

// const str = 'Jesús';
// const letters = [...str];

// console.log('letters:', letters); // ['J', 'e', 's', 'ú', 's']
// console.log(`${...str}`); // Unexpected token

// Spread Operator

// Copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log('mainMenuCopy:', mainMenuCopy); // Copy mainMenu

// Join arrays

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log('menu:', menu); // Merge main and starterMenu

// const arr = [4, 5, 6];

// const newArr = [1, 2, 3, ...arr];

// console.log(newArr); // [1,2,3,4,5,6]

// restaurant.orderDelivery({
//   starterIndex: 2,
//   mainIndex: 2,
//   address: 'Norte 72 CDMX',
//   time: '22:00',
// });

// restaurant.orderDelivery({
//   address: 'Norte 72 CDMX',
//   time: '22:00',
// });

// const { nameR, openingHours, categories } = restaurant;

// // Nested Objects
// const {
//   fri: { open: start, close: finish },
// } = openingHours;

// console.log('start:', start); // 11
// console.log('finish:', finish); // 23

// NOTE:
// Object destructuring
// We can rename variables from object using :

// const { nameR, openingHours, categories } = restaurant;
// console.log('name:', nameR);
// console.log('openingHours:', openingHours);
// console.log('categories:', categories);

// Default Values Objects
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log('menu:', menu); // []
// console.log('starters:', starters); // starterMenu array

// let a = 1995;
// let b = 1994;
// const mutate = { a: 13, b: 11 };
// ({ a, b } = mutate); // Success
// console.log('a:', a); // 13
// console.log('b:', b); // 11

// NOTE:
// We can skip positions by adding ,
// Destructuring
// const [main, , secondary] = restaurant.categories;
// console.log('main:', main); // Italian
// console.log('secondary:', secondary); // Vegetarian

// Switching variables w.o destructuring
// let [main, , secondary] = restaurant.categories;
// console.log('main:', main); // Italian
// console.log('secondary:', secondary); // Vegetarian

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('main:', main); // Vegetarian
// console.log('secondary:', secondary); // Italian

// Switching variables with destructuring

// [main, secondary] = [secondary, main];
// console.log('main:', main); // Vegetarian
// console.log('secondary:', secondary); // Italian

// const [starter, main] = restaurant.order(2, 0);
// console.log('starter:', starter); // Garlic Bread
// console.log('main:', main); // Pizza

// NOTE:
// Desestructuring nested array
// if we want to get individual values from nested array
// then we destructure inside destructure

// const nested = [11, 13, [7, 3]];

// const [a, , [b, c]] = nested;
// console.log(a); // 11
// console.log(b); // 7
// console.log(c); // 3

// Default Values
// const numbers = [11, 13];

// const [a = 1, b = 1, c = 1] = numbers;

// console.log(a); // 11
// console.log(b); // 13
// console.log(c); // 1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

const {
  odds: { team1, team2, x: draw },
} = game;
// console.log(team1);
// console.log(team2);
// console.log(draw);

const printGoals = function (...players) {
  console.log(`Total goals: ${players.length}`);
  for (let i = 0; i < players.length; i++) {
    const element = players[i];
    console.log(element);
  }
};
printGoals(...game.scored);

game.odds.team1 > game.odds.team2 &&
  console.log('Team 1 is more likely to win');
game.odds.team1 < game.odds.team2 &&
  console.log('Team 1 is more likely to win');

*/

/*Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const scores = {};

for (const [idx, player] of game.scored.entries()) {
  console.log(`Goal ${idx + 1}: ${player}`);
  scores[player] = (scores[player] || 0) + 1;
}
console.log(scores);

let averageOdds = 0;
const odds = Object.entries(game.odds);

for (const [odd, value] of odds) {
  averageOdds += value;
  const teamStr = odd === 'x' ? 'draw:' : `victory ${game[odd]}:`;
  console.log(`Odd of ${teamStr} ${value}`);
}
averageOdds /= odds.length;
console.log(averageOdds);
*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
let average = 90 / gameEvents.size;

console.log(`An event happened, on average, every ${average} minutes`);

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`${half} HALF ${key}: ${value}`);
  // if (key > 0 && key <= 45) {
  //   console.log(`[FIRST HALF] ${key}: ${value}`);
  // } else {
  //   console.log(`[SECOND HALF] ${key}: ${value}`);
  // }
}
*/

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.slice(4)); // Air Portugal
//console.log(airline.slice(4,7)); // Air

// console.log(airline.slice(0,airline.indexOf(" "))); // TAP
// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // Portugal
// console.log(airline.slice(-2)); // al
// console.log(airline.slice(1, -1)); // AP Air Portuga

// console.log(new String ("Jesus")); // String {"Jesus"}
// console.log(typeof new String ("Jesus")); // object
// console.log(typeof new String ("Jesus").slice(1)); // string

//const checkMiddleSeat = function(seat){
// B and E are middle seats
//  const str = seat.slice(-1);
//  if (str === 'B' || str === 'E') {
//    console.log('You got the middle seat');
//  } else {
//    console.log('You got lucky');
//  }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// Index Of & Last Index Of
// console.log(airline.indexOf("r")); // 6
// console.log(airline.lastIndexOf("r")); // 10
// console.log(airline.indexOf("Portugal")) // 8

// Access String
// console.log(plane[0]); // A
// console.log('B737'[0]); // B

// Length String
// console.log(airline.length); // 16
// console.log('Jesus'.length); // 5

// const passenger = 'JeSuS';
// const passengerLow = passenger.toLowerCase(); // jesus
// const correct = passengerLow[0].toUpperCase() + passengerLow.slice(1); // Jesus

// Comparing Emails
// const email = 'hello@jesus.io';
// const login = ' Hello@Jesus.Io \n';
// const normalizedEmail = login.toLowerCase().trim();

// console.log(normalizedEmail); // hello@jesus.io

// const priceGB = "230,89€";
// const priceUS = priceGB.replace('€','$').replace(',', '.');

// console.log(priceUS); // 230.89$

// const announcement = "Board door 23!, Board door 23!";

// First occurence
// Board gate 23!, Board door 23!
//console.log(announcement.replace('door', 'gate'));
// Whole string
// Board gate 23!, Board gate 23!
//console.log(announcement.replaceAll('door', 'gate'));
// Regex to match string global
// Board gate 23!, Board gate 23!
// console.log(announcement.replaceAll(/door/g, 'gate'));

// Includes, StartWith, EndWith

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.startsWith('Airb')); // true
// console.log(plane.endsWith('neo')); // true

// if (plane.startsWith('Airbus') && plane.endsWith('neo') ) {
//   console.log('Part of the new Airbus family');
// }

// const checkBagging = function (items) {
//   const baggage = items.toLowerCase()
//   if (baggage.includes('knife') || baggage.includes('gun') ) {
//     console.log('You are not allowed to board');
//   } else {
//     console.log('Welcome aboard');
//   }
// }

// checkBagging("I have Socks and camera")
// checkBagging("I have Food and Knife")
// checkBagging("I have Outfit and Gun")

// NOTE:
// Split returns an array w.o the argument passed in
// Join returns the array together replacing the , by the argument

// console.log('some+nice+string'.split('+')); // ["some", "nice", "string"]
// console.log('Jesús Guzman'.split(' ')); // ["Jesus", "Guzman"]

// const newName = ['Mr.', 'Jesus', 'Guzman'].join(' ');
// console.log(newName); // Mr. Jesus Guzman

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     // alternative
//     // namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper); // ["Annie", "Vargas"]
// };

// capitalizeName('Annie Vargas');

// NOTE:
// Padding add the character passed as second argument
// and will add it until strings match the first argument (desired length)

// console.log('Jesus'.padStart(10, '+').padEnd(15, '+')); // +++++Jesus+++++

// const maskCreditCard = function (number) {
//   const card = number + '';
//   const masked = card.slice(-4);
//   return masked.padStart(card.length, '*');
// };
// console.log(maskCreditCard(1254879564874521)); // ************4521

// NOTE:
// Repeat the number of times we pass it as argument

// const message = 'Bad weather... All departures delayed... ';

// console.log(message.repeat(5)); // message * 5

// const planesInLine = function (n) {
//   console.log(`There're ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// planesInLine(2); // There're 2 planes in line ✈️✈️

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable 
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const textArr = text.split('\n');
//   const newWords = [];
//   for (const word of textArr) {
//     if (word.includes('_')) {
//       newWords.push(word.split('_'));
//     }
//   }
//   for (const [idx, [first, second]] of newWords.entries()) {
//     first.toLowerCase();
//     const secondUpper = second[0].toUpperCase() + second.slice(1).toLowerCase();
//     console.log(`${first}${secondUpper} ${'✅'.repeat(idx + 1)}`);
//   }
// });

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   for (const [idx, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(idx + 1)}`);
//   }
// });
