'use strict';

// Select items
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

// Set initial scores
let myScore = 20;
let myHighScore = 0;

// Generate secret random number
let secretNumber = Math.trunc(Math.random()* 20) + 1;

const displayMessage = function(mess){
    message.textContent = mess;
}

// Compare guess with randomly generated number
checkBtn.addEventListener('click', function(){
    // Convert input 'string' to a number
   let myGuess = Number(guess.value);

   // When there is no input
   if (!myGuess){
        displayMessage('Please enter a number');

        // When player wins
   } else if(myGuess === secretNumber){
       displayMessage('You got it right!');
       number.textContent = secretNumber;
       body.style.backgroundColor = '#60b347';
       number.style.width = '30rem';
       if(myScore > myHighScore){
           myHighScore = myScore;
           highScore.textContent = myHighScore;
       }

       // When guess is wrong
   } else if(myGuess !== secretNumber){
       if(myScore > 1){
          displayMessage(myGuess > secretNumber ? 'Your guess was too high!' : 'Your guess was too low!');
          myScore--;
          score.textContent = myScore;
       } else{
          displayMessage('You lost the game!');
          score.textContent = 0;
       }
   }
})

// Reset game
resetBtn.addEventListener('click', function(){
    myScore = 20;
    score.textContent = myScore;
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    displayMessage('Start guessing...');
    number.textContent = '?';
    guess.value = '';
    number.style.width = '15rem';
    body.style.backgroundColor = '#222';
})














