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

// Push adds elements to the end of the array
const friends = ["Annie", "Tirsa", "Jesus"];
const newLength = friends.push("Wendy");
console.log("newLength:", newLength);
console.log("friends:", friends);

// Unshift adds elements to the start of the array
friends.unshift("Mary");
console.log("friends:", friends);

// Pop removes the last element of the array
const elementPooped = friends.pop();
console.log("elementPooped:", elementPooped);
console.log("friends:", friends);

// Shift removes the first element of the array
const elementShifted = friends.shift();
console.log("elementShifted:", elementShifted);
console.log("friends:", friends);

// IndexOf returns index of the element on the array
console.log("index:", friends.indexOf("Annie"));
console.log("index:", friends.indexOf("Wendy"));

// Includes return true or false if element exist on the array
console.log("includesJesus:", friends.includes("Jesus"));
console.log("includesWendy:", friends.includes("Wendy"));
friends.push(23);
console.log(friends.includes(23));

if (friends.includes("Tirsa")) {
  console.log("You have a friend called Tirsa");
}

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%

Tasks:
1 - Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100.

2 - And now let's use arrays! So create an array 'bills' containing the test data below.

3 - Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before.

4 - Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44 

// Code Challenge 2
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

console.log(calcTip(100));

const bills = [125, 555, 44];
console.log("bills:", bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log("tips:", tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log("totals:", totals);

const jesus = {
  firstName: "Jesus",
  lastName: "Guzman",
  age: 2021 - 1995,
  job: "Software Engineer",
  friends: ["Annie", "Tirsa"],
};

// Create data in object
jesus.location = "México";
jesus["gitHub"] = "JesusGuzman11";

console.log("jesus:", jesus);
console.log("dot:", jesus.firstName);
console.log("bracket:", jesus["firstName"]);

const nameKey = "Name";
console.log(jesus["first" + nameKey]);
console.log(jesus["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jesus? Choose between firstName, lastName, job, age or friends"
);

if (jesus[interestedIn]) {
  console.log(jesus[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, job, age or friends"
  );
}

// console.log(jesus.interestedIn); // undefined cause jesus dont have prop interestedIn

// Challenge

console.log(challenge);

const jesus = {
  firstName: "Jesus",
  lastName: "Guzman",
  birthYear: 1995,
  job: "Software Engineer",
  friends: ["Annie", "Tirsa"],
  hasDriversLicense: false,
  // calcAge: function(birthYear) {
  //   return 2021 - birthYear
  // }
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    console.log("this:", this);
    return this.age;
  },

  getSummary: function () {
    this.resume = `${this.firstName} is a ${this.age} years old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "not"} drivers license`;
    return this.resume;
  },
};

// Calling the function
console.log("jesus:", jesus.calcAge());

console.log("jesusAge:", jesus.age);

// console.log("jesus:", jesus["calcAge"](1995));

// Challenge
// "Jesus is a 26 years old software engineer, and he has a/not drivers license"
console.log(jesus.getSummary());
console.log(jesus.resume);
*/

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your Tasks:
1 - For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2 - Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects).
Store the BMI value to a property, and also return it from the method.
3 - Log to the console who has the higher BMI, together with the full name and the respective BMI.
Example: "John's BMI (28.3) is higher than Mark's (23.9)!" 

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall

const mark = {
  weight: 78,
  height: 1.69,
  fullName: "Mark Miller",
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  weight: 92,
  height: 1.95,
  fullName: "John Smith",
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

console.log(john.calcBMI());
console.log(mark.calcBMI());

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!`
  );
}

// For loop keeps running while condition is true
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}


const jesus = ["Jesus", "Guzman", 2021 - 1995, ["Annie", "Tirsa"]];
const types = [];

for (let i = 0; i < jesus.length; i++) {
  // Reading jesus data
  console.log(jesus[i], typeof jesus[i]);
  // Filling types array
  // types[i] = typeof jesus[i];
  types.push(typeof jesus[i]);
}

console.log("types", types);

const years = [1995, 1994, 1997, 1962];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log("ages", ages);

const arrStrings = [];

const jesus = [
  "Jesus",
  "Guzman",
  2021 - 1995,
  "Software Engineer",
  ["Annie", "Tirsa"],
];

const arrNew = [];

// Break
for (let i = 0; i < jesus.length; i++) {
  // Ends the for if condition is true
  if (typeof jesus[i] === "number") break;
  // Adds elements to array
  arrNew.push(jesus[i]);
}

console.log(arrNew);

// Continue
for (let i = 0; i < jesus.length; i++) {
  // Skip to next iteration if condition is true
  if (typeof jesus[i] !== "string") continue;
  // Adds strings to array
  arrStrings.push(jesus[i]);
}

console.log(arrStrings);

const jesus = [
  "Jesus",
  "Guzman",
  2021 - 1995,
  "Software Engineer",
  ["Annie", "Tirsa"],
];

// Backwards
for (let i = jesus.length - 1; i >= 0; i--) {
  console.log(jesus[i]);
}

// Excercise Example
// Loop inside Loop

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`---Starting Excercise ${excercise}---`);
  // Iteration for repeticions once it finishes the excercise loop continues
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`);
  }
}

// For
for (let rep = 1; rep <= 5; rep++) {
  console.log(`For: Lifting weights repetition ${rep}`);
}

// While
let rep = 1;
while (rep <= 5) {
  console.log(`While: Lifting weights repetition ${rep}`);
  rep++;
}


// While
let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}
*/

/*
Let's improve Steven's tip calculator even more, this time using loops!
1 - Create an array 'bills' containing all 10 test bill values
2 - Create empty arrays for the tips and the totals ('tips' and 'totals')
3 - Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to solve it

1 - First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values added together
2 - To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
3 - Call the function with the 'totals' array 
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log("Tips:", tips);
console.log("Totals:", totals);
console.log("Average:", calcAverage(totals));
