// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// NOTE: Basic config
//const calcAge = birthYear => 2021 - birthYear;

/* 
EXERCISE: 
PROBLEM 1 - We work for a company building a smart home thermometer. Our
most recent task is: "Given an array of temperatures of one day, calculate the temperature amplitude.
Keep in mind that sometimes there might be a sensor error."

// 1 - Understanding the problem
// What is temperature aplitude? Difference between highest and lower temp
// How to compute max and min temp in a array? Find max value and min value in array
// How an error looks like? "string". What to do with an error? Skip.

// 2 - Breaking up into sub-problems
// a) How to ignore errors?
// b) Find max value in array
// c) Find min value in array
// d) Substract min from max (amplitude) and return it

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    // a
    if (typeof currentTemp !== 'number') continue;
    // b
    if (currentTemp > max) max = currentTemp;
    // c
    if (currentTemp < min) min = currentTemp;
  }
  // d
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);

console.log('amplitude', amplitude);

// EXERCISE:
// PROBLEM 2:
// Function should now recieve 2 arrays of temps
// 1 - Understanding the problem
// With 2 arrays, should we implement functionality twice? NO! Just merge 2 arrays

// 2 - Breaking up into sub-problems
// a) Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  // a
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;

    if (currentTemp < min) min = currentTemp;
  }

  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([5, 9, 2], [8, 0, 6]);

console.log('amplitudeNew', amplitudeNew);

const measurementKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius')),
    value: 10,
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measurementKelvin());

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;
    debugger;
    if (currentTemp > max) max = currentTemp;

    if (currentTemp < min) min = currentTemp;
  }

  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([5, 9, 2], [8, 4, 6]);

console.log('amplitudeBug', amplitudeBug);
*/

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your Tasks: 
1 - Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2 - Use the problem-solving framework: Understand the problem and break it up
into sub-problems! 

Test Data: 
 1 - Data 1: [17, 21, 23]
 2 - Data 2: [12, 5, -5, 0, 4] 
*/

/*
 1) Understanding the problem
 There's no a errors on temperatures? No
 Just one array its going to pass it as parameter? Yes
 There should be more temps on one array than 7 (days of the week)?
 Ignore if we pass other things besides numbers? Yes just work with numbers
 Handle when we pass a non array as function parameter? Yes
 What to display when a non array passed as parameter? Pass correct data
 Concatenate just the passed days or for entire week? Just passed days

 2) Making it sub-problems

 a) How to concatenate strings on for loop based on length
 b) How to validate if is array the function parameter
 c) How to ignore if array doesnt have number on each position

*/

const printForecast = function (temps) {
  // b
  if (temps instanceof Array) {
    let tempDays = '';

    for (let i = 0; i < temps.length; i++) {
      const currentTemp = temps[i];
      // c
      if (typeof currentTemp !== 'number') {
        tempDays = 'Some value on array is not a number';
        break;
      }
      // a
      tempDays += `... ${currentTemp}°C in ${i + 1} days `;
    }

    return tempDays;
  } else {
    return 'Pass correct data (Array of temperatures)';
  }
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
