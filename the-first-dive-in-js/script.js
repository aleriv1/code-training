/* 
Давайте представим, что ваш босс дал вам следующую информацию для создания этой игры:

Я хочу, чтобы ты создал простую игру по принципу "Угадай число". Игра должна случайным образом генерировать число от 0 до 100, затем игрок должен отгадать это число за 10 попыток. После каждой попытки игроку сообщают, угадал он число или не угадал, и если он ошибся, то ему сообщается, что загаданное число больше или меньше того, которое он ввёл. Также необходимо показывать игроку числа из его предыдущих попыток. Игра будет окончена, если игрок угадал число верно или если у него кончатся все попытки. После окончания игры игроку будет дана возможность сыграть в игру ещё раз".

Поглядев на это краткое изложение, первое, что мы можем сделать - это начать разбивать его на простые действия, максимально думая как программист:

1.  Сгенерировать случайное число между 1 и 100.
2.  Начать запись количества попыток игрока угадать число. Начать с 1.
3.  Предоставить попытку угадать игроку загаданное число.
4.  Как только попытка угадать была отправлена, сначала записать её где-нибудь, чтобы пользователь мог увидеть свои предыдущие попытки
5.  Далее проверить, было ли это число верным.
6.  Если число верное:
    -   Показать поздравительное сообщение.
    -   Оградить игрока от дальнейшей возможности ввода чисел (это испортит игру).
    -   Предоставить возможность для перезапуска игры.
7.  Если число неверное и есть попытки:
    -   Сказать игроку, что он не угадал.
    -   Разрешить ему использовать ещё попытку.
    -   Повысить число попыток на 1.
8.  Если число неверное и попыток нет:
    -   Сказать игроку, что игра окончена.
    -   Оградить игрока от дальнейшей возможности ввода чисел (это испортит игру).
    -   Предоставить возможность для перезапуска игры.
9.  Во время перезапуска игры убедиться, что игровая логика и пользовательский интерфейс полностью сбросились на начальные значения и далее перейти обратно к пункту 1.


 */

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

const guessField = document.querySelector("#guessField");
const guessSubmit = document.querySelector(".guessSubmit");

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let restButton;

console.log(randomNumber);

function checkGuess() {
  // console.log('I am a placeholder')
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses: ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.txtContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
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

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button);");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// console.log(randomNumber, guesses, lastResult, lowOrHi, guessSubmit, guessField, guessCount, restButton)

// const fruits = ['apples', 'bananas', 'cherries']

// for (const fruit of fruits) {
//   console.log(fruit)
// }
