/*
let js = "Amazing";

40 + 8 + 23 - 10;

console.log(40 + 8 + 23 - 10);

 // Task 1
let country = "México";
let continent = "America";
let population = 126200000000;

console.log("Country:", country);
console.log("Continent:", continent);
console.log("Population:", population);

// Basic operators 

let y = 10 + 3; // addition
console.log("Sum:", y);
y = 10 - 3; // substraccion
console.log("Subs:", y);
y = 10 * 3; // multiplication
console.log("Mult:", y);
y = 10 / 3; // split
console.log("Split:", y);
y = 10 ** 3; // potency
console.log("Potenc:", y);

// Assignment operators 

let x = 10 + 5; //15
console.log("Equal:", x);
x += 10; // x = x + 10 = 25
console.log("+=:", x);
x *= 4; // x= x * 4 = 100;
console.log("*=:", x);
x++; // x = x + 1 = 101
console.log("++:", x);
x--; // x = x - 1 = 100
console.log("--:", x);

// Comparison operators
const now = 2021;

const ageJesus = now - 1995;
const ageAnnie = now - 1994;

console.log(ageAnnie > ageJesus); // > < <= >=
console.log(ageAnnie >= 18);

const isFullAge = ageAnnie >= 18;

console.log(now - 1994 > now - 1995);


// Operators Precedence

let x, y; // undefined

x = y = 25 - 10 - 5; // x = Y = 10 , x = 10

console.log(x, y);

const now = 2021;

const ageJesus = now - 1995;
const ageAnnie = now - 1994;

const averageAge = (ageJesus + ageAnnie) / 2;

console.log(averageAge);
*/

// Code Challenge
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height)(mass in kgand height in meter).

Tasks:
1. Store Mark's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement bothversions).
3. Create a Boolean variable'markHigherBMI'containing information about whether Mark has a higher BMI than John.

Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.


// Data 1

// const heighMarks = 1.69;
// const weightsMarks = 78;
// const heighJohn = 1.95;
// const weightsJohn = 92;

// Data 2

const heighMarks = 1.88;
const weightsMarks = 95;
const heighJohn = 1.76;
const weightsJohn = 85;

const BMIMarks = weightsMarks / heighMarks ** 2;
const BMIJohn = weightsJohn / (heighJohn * heighJohn);

const markHigherBMI = BMIMarks > BMIJohn;

console.log("Marks BMI:", BMIMarks);
console.log("John BMI:", BMIJohn);
console.log("markHigherBMI:", markHigherBMI);

console.log(`String
with
multiple
lines`);


const age = 15;

if (age >= 18) {
  console.log("You can start driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`You are too young. Wait another ${yearsLeft} years`);
}
*/

///// CODE CHALLENGE 2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it
/* 
1.- Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2.- Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!" 


const heighMarks = 1.88;
const weightsMarks = 95;
const heighJohn = 1.76;
const weightsJohn = 85;

const BMIMarks = weightsMarks / heighMarks ** 2;
const BMIJohn = weightsJohn / (heighJohn * heighJohn);

if (BMIMarks > BMIJohn) {
  console.log(`Marks BMI (${BMIMarks}) is higher than Johns BMI (${BMIJohn})`);
} else {
  console.log(`John BMI (${BMIJohn}) is higher than Marks BMI (${BMIMarks})`);
}


// Type Conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(Number("Jesus"));
console.log(typeof NaN);
console.log(String(23));

// Type Coercion
console.log("I'm" + 26 + "years old"); // String
console.log("26" - "20" - 6); // Number
console.log("26" * "20" - 6); // Number
console.log("26" / "20" - 6); // Number
console.log("26" > "20"); // True cause it converted to number

// Explicit Mode (Conversion)
// 5 falsy values: 0, "" , undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
// Truthy values
console.log(Boolean("Jesus"));
console.log(Boolean({}));

// Implicit Mode (Coercion)

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

// Equality Operators

const age = "18";

if (age === 18) console.log("You just became an adult (strict)");
if (age == 18) console.log("You just became an adult (loose)");

const fav = Number(prompt("What's your favourite number?"));

console.log(fav);

if (fav === 11) {
  console.log("Cool 11 it's an amazing number");
} else if (fav === 23) {
  console.log("Cool 23 it's a amazing number");
} else {
  console.log("Why not 23 or 11?");
}
// CODE CHALLENGE 3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score).
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks.
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// Task
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins Win");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas Win");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Draw");
}
// Bonus
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins Win");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas Win");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both Wins the trophy");
} else {
  console.log("No ones win the trophy");

const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // AND - False
console.log(hasDriversLicense || hasGoodVision); // OR - True
console.log(!hasDriversLicense); // NOT - False

if (hasDriversLicense && hasGoodVision) {
  console.log("Jésus is able to drive");
} else {
  console.log("Someone else should drive");
}

const day = "wednesday";

// Switch strict equality
switch (day) {
  case "monday": // day === 'monday'
    // Dont need {} JS read lines and to end it need a break word
    console.log("Take course");
    console.log("Go to work");
    break;
  case "tuesday":
    console.log("Play basketball");
    break;
  case "wednesday":
  // No break word until next case so JS execute same lines to thoose cases
  case "thursday":
    console.log("Code work");
    break;
  case "friday":
    console.log("Watch a movie");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("Not a valid day");
    break;
}

// Task
if (day === "monday") {
  console.log("Take course");
  console.log("Go to work");
} else if (day === "tuesday") {
  console.log("Play basketball");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Code work");
} else if (day === "friday") {
  console.log("Watch a movie");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend");
} else {
  console.log("Not a valid day");
}

if (11 > 8) {
  // "11 is bigger" is and expression and whole const declaration is the statement
  const str = "11 is bigger";
}


const age = 26;

// Ternary Operator always produce a value so its an expression
age >= 18
  ? console.log("You can drink wine")
  : console.log("You can't drink wine");

const drink = age >= 18 ? "Can drink wine" : "Can't drink wine";

// CODE CHALLENGE 4

Steven wants to build a very simple tip calculator for whenever he goes eating in arestaurant.
In his country, it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value.
Create a variable called 'tip' for this.
It's not allowed to use an if/else statement
2. Print a string to the console containing the bill value, the tip, and the final value(bill+ tip).
Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

Data 1: Test for bill values 275, 40 and 430
*/

const bill = 430;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `THe bill was ${bill}, the tip was ${tip} and the total bill was ${
    bill + tip
  }`
);
