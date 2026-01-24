// LocalStorage -- a storage inside the broser, which allows to save any data and store and they will be accessible after the page reload
// it is a local improvised database for your browser



const myNumber = 42

// localStorage  // it is a global object
console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber)
localStorage.setItem('Alena', 'Ermakova');

console.log(localStorage.getItem('Alena'));

