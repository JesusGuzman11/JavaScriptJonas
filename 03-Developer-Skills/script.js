// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// NOTE: Basic config
const calcAge = birthYear => 2021 - birthYear;

/* 
EXERCISE: 
PROBLEM 1 - We work for a company building a smart home thermometer. Our
most recent task is: "Given an array of temperatures of one day, calculate the temperature amplitude.
Keep in mind that sometimes there might be a sensor error."
*/

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
