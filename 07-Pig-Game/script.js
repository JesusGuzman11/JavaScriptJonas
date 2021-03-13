'use strict';

// Selecting Elements
const score0El = document.querySelector('#score--0');
// Get element by id finds more faster  than querySelector
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current1El = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let activePlayer, playing, totalScores, currentScore;

const initGame = function () {
  diceEl.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
  totalScores = [0, 0];
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--winner');
  player1El.classList.remove('player--active');
};

initGame();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player0El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate random number
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Display the dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // Swtich player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to total score
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    // Check if player have 100 point
    if (totalScores[activePlayer] >= 20) {
      playing = false;
      // Win
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', initGame);
