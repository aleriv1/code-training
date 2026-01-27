// javaScript имеет динамическую типизацию

let animal = 'Dog';

animal = 10;


// 1. Преобразование к Стркое
const age = 20;
console.log('number age:', typeof age)
console.log('string age:', typeof String(age)) // это явное преобразование


const updatedAge = '1' + 20;

console.log(updatedAge, typeof updatedAge) // неявное преобразование
// рекомендация -- использовать явное преобрзаование

// 2. Преобразование к Числу
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript: ', typeof experienceInJavaScript)
// console.log('number experienceInJavaScript: ', Number(experienceInJavaScript))
console.log('number experienceInJavaScript: ', typeof Number(experienceInJavaScript)) // явное преобразование к числу

console.log('experienceInJavaScript', typeof +experienceInJavaScript) // неявное преоразование

console.log('Hello world', Number('Hello World'))

// 3. Преобразование к Boolean
// Boolean()
console.log('Hello', Boolean('0'))
console.log('null', Boolean(null))
console.log('undefined', Boolean(undefined))
console.log('0', Boolean(0))

// to false: nul, undeined, NaN, 0, ''

let number = 521

for (const letter of String(number)) {
  // console.log(letter)
  // letter === '2' ? (console.log('there is a letter in sting'), console.log('hello')) : null

  if (letter === '2') {
    console.log('there is a letter in the string')
    console.log('you are good')
  }

}

// let enteredNumber = prompt('Введите число', 12)
let enteredNumber = Number(prompt('Введите число', 12))
console.log(enteredNumber, typeof enteredNumber)