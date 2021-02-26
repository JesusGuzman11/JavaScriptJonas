"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

// If we declare hasDriverlLicense iy might create a new variable w.o strict mode
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

function logger() {
  console.log("My name is Jesus");
}

// calling / running / invoking function
logger();

// Parameters (arguments) is the data that the function recieve
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  // return is what function produce
  return juice;
}
// appleJuice now is a string due the return of the function
const appleJuice = fruitProcessor(5, 0);

// Function declaration
// birthYear is a parameter here
function calculateAge1(birthYear) {
  return 2021 - birthYear;
}

// 1995 is an argument here
const age1 = calculateAge1(1995);
console.log(age1); // 26

// Function Expression
const calculateAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age = calculateAge2(1995);

console.log(age);

// Arrow Function is a function expression
const calculateAge3 = (birthYear) => 2021 - birthYear;
const ageJesus = calculateAge3(1995);
console.log(ageJesus);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear;
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Jesus"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`;
  return juice;
}

console.log(fruitProcessor(2, 3));
/*
Back to the two gymnastics teams, the Dolphins and the Koalas!
There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores
is calculated (so one average score per team).
A team only wins if it has at least double the average score
of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average
of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of
each team as parameters ('avgDolhins' and 'avgKoalas'), and then
logs the winner to the console, together with the victory points, 
according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both
Data 1 and
Data 2
5. Ignore draws this time
Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/
/*

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const dolphinsAverage = calcAverage(85,54,41)
const koalasAverage = calcAverage(23,34,27)
function checkWinner(dolphinsAverage, koalasAverage) {
  if (dolphinsAverage >= koalasAverage * 2) {
    console.log(`Dolphins Wins (${dolphinsAverage} vs ${koalasAverage})`);
  } else if(koalasAverage >= dolphinsAverage * 2){
    console.log(`Koalas Wins (${koalasAverage} vs ${dolphinsAverage})`);
  } else {
    console.log("No one match the requirements to win");
  }
}
checkWinner(dolphinsAverage, koalasAverage)

// Arrays
const friends = ["Annie", "Tirsa", "Jesus"]; //Literal

// Access friends position 0 = "Annie"
console.log(friends[0]);

// Get number of friends in the array
console.log(friends.length); // 3
// Get the last friend with length expression
console.log(friends[friends.length - 1]); // Jesus

friends[2] = "Francisco";
// friends = ["Rebeca", "Isaac"] invalid replacement
console.log(friends);

const firstName = "Jesus";

const jesus = [firstName, "Guzman", 2021 - 1995, friends];

console.log(jesus);

// Example
const years = [1995, 1994, 1997, 1962];

const calculateAge = function (birthYear) {
  return 2021 - birthYear;
};

const ages = [
  calculateAge(years[0]),
  calculateAge(years[1]),
  calculateAge(years[years.length - 1]),
];

console.log(ages);
*/
