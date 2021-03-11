'use strict';
/*
// Query select by class, id or tag and textContent retrieves tag text
// console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

// Change input value
document.querySelector('.guess').value = 23;

// Get input value
console.log(document.querySelector('.guess').value);
*/

// Generate number between 1 - 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const resetGame = function (score) {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...!';
};

const winGame = function (secretNumber) {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.message').textContent = 'Correct Number!';
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // No input
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // Win
    winGame(secretNumber);
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low');
      score--;
      displayScore(score);
    } else {
      displayMessage('Game Over!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  resetGame(score);
});
