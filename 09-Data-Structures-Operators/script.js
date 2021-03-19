'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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

// EXAMPLE:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? -1;
  console.log(`On ${day} we ${open >= 0 ? 'open at: ' + open : 'dont open'} `);
}

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
