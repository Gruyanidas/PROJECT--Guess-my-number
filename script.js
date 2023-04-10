//VAZNO NASLOV PROJECT #1 GUESS MY NUMBER VAZNO
'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//UPROSTI funkcija za poruku, moze i za sve ostale koje se ponavljaju

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(`.number`).textContent = number;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  let guess = Number(document.querySelector(`.guess`).value); //VAZNO Funkcija se poziva samo na click event
  //NASLOV Kada nema inputa
  if (!guess) {
    displayMessage('No number!');
  } else if (guess > 20 || guess < 1) {
    displayMessage('Number is out of game range!');
  }
  //NASLOV Kada se pobedi
  else if (guess === secretnumber) {
    if (score > highscore) {
      //VAZNO uslov za postavku higscore
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    displayMessage('Correct Number!!!');
    displayNumber(secretnumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //UPROSTI kada je guess pogresan, ternary operator
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(
        guess > secretnumber ? 'Number is too high!' : 'Number is too low!'
      );
      score--;
      displayScore(score);
    } else {
      displayScore('You lost the game looser!');
    }
  }

  //   //NASLOV kada je broj veci od tajnog broja
  //    else if (guess > secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = 'Number is too high!';
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.score`).textContent =
  //       'You lost the game looser!';
  //   }
  //   //NASLOV kada je broj manji od tajnog broja
  // } else if (guess < secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = 'Number is too low!';
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(`.score`).textContent =
  //       'You lost the game looser!';
  //   }
  // }
});

//NASLOV Funkcionalnost AGAIN dugmeta
document.querySelector(`.again`).addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.guess`).value = null;
  displayScore(score);
  displayNumber('?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing again...');
});
