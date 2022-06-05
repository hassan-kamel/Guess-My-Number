'use strict';
///--Getting document objects
const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const messageContent = document.querySelector('.message');
const scoreContent = document.querySelector('.score');
const highScoreContent = document.querySelector('.highscore');
const number = document.querySelector('.number');
const bodyElement = document.body;
const againButton = document.querySelector('.again');
///--Global variables 
let score = 3;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
if (localStorage.getItem('highScore')) {
    highScore = localStorage.getItem('highScore');
} else {
    localStorage.setItem('highScore', highScore);
}
//console.log(secretNumber);
//--Game logic
highScoreContent.textContent = highScore;
checkButton.addEventListener('click', function() {
    const guessedNumber = guessInput.value;
    if (score > 1) {
        if (guessedNumber > secretNumber) {
            messageContent.textContent = '⬆️ Too High';
            score--;
            scoreContent.textContent = score;
        } else if (guessedNumber < secretNumber) {
            messageContent.textContent = '⬇️ Too Low';
            score--;
            scoreContent.textContent = score;
        } else if (guessedNumber == secretNumber) {
            messageContent.textContent = '🎉 Correct Number';
            bodyElement.style.backgroundColor = '#60b347';
            checkButton.setAttribute('disabled', 'true');
           // guessInput.setAttribute('disabled', ' true');
            number.textContent = secretNumber;
            if (highScore < score) {
                highScore = score;
                localStorage.setItem('highScore', highScore);
            }
            highScoreContent.textContent = highScore;
         
        }
    } else {
        score = 0;
        messageContent.textContent = '🔥 You Lost The Game';
        bodyElement.style.backgroundColor = '#a31111';
        checkButton.style.visibility= 'hidden';
        guessInput.style.visibility= 'hidden';
        number.textContent = secretNumber;
        scoreContent.textContent = score;
    }

});
againButton.addEventListener('click', function() {
    messageContent.textContent = '❔ Start guessing...';
    bodyElement.style.backgroundColor = '#222';
    guessInput.value = '0';
    checkButton.style.visibility= 'visible';
    guessInput.style.visibility= 'visible';
    score = 3;
    number.textContent = '?';
})
