// let randomNumber = Math.floor(Math.random() * 100) + 1;

// const guesses = document.querySelector('.guesses');
// const LastResult = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');

// const guessSubmit = document.querySelector('.guessSubmit');
// const guessField = document.querySelector('.guessField');

// let guessCount = 1;
// let restButton;

let randomNumber = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

const guessField = document.querySelector('#guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

let restButton;



console.log(randomNumber)

function checkGuess() {
  // console.log('I am a placeholder')
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!'
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.txtContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!'
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

/* let name = 'Bingo'
console.log(name)

let hello = ' says hello'
console.log(hello)

let greeting = name + hello
console.log(greeting)

let name1 = 'Bing'
name1 += ' says hello'

console.log(name1)

console.log('Chris' !== 'Ch' + 'ris')
console.log('Chris' === 'Ch' + 'ris')
console.log(10 < 6)
console.log(20 > 10) */


guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button);')
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame)
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1
}

// console.log(randomNumber, guesses, lastResult, lowOrHi, guessSubmit, guessField, guessCount, restButton)

// const fruits = ['apples', 'bananas', 'cherries']

// for (const fruit of fruits) {
//   console.log(fruit)
// }