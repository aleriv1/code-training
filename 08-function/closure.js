// closure -- a function inside another functionn

const createMultiplier = function (n) {
  // const createMultiplier = (n) => {
  return function () {
    return n * 10;
  };
};

// const result = createMultiplier(5);
// const multiply = createMultiplier(5);
const multiply = createMultiplier(10);

// console.log(result);
console.log("multiply:", multiply);

// console.log(multiply());
const resultMultiply = multiply();

console.log("resultMultiply:", resultMultiply);
// parameter n wich we passes in createMultiplier is saved for calling of the funcion multiply, which is inscide the functii createMultiplayer

// the internal functioin is called in context of the function createMultiplier and the parameter n is closed inside of that function -- that's why such functions is called closure
// that is when we called the function multiply the value on n 5, which we passed to the parent createMultiplier is saved

// it is the greate advantage of closure -- we get the lexical envrionemtn, scome of the top, parent function

// our parameter n is closed inside of the internal fuunction -on ourter scope, lexical environment

// ^ more complicated example

const createCounter = (initialValue = 0) => {
  // it will take the initial value as a parameter
  // after createCounter will return another arrow function and also take the new parameter
  return (valueToAdd) => {
    // and this internal funciton will return the value
    return initialValue + valueToAdd;
  };
};

// var, that will be store this function
const addFive = createCounter(5);

// now addFive is a given function and we can call it with parameter valueToAdd

// let store the call of this function in var result; then call addFive and pass the value 10

const result = addFive(10);

console.log("result", result);

// alsow we can create with createCounter another functions

const addTen = createCounter(10);

console.log("addTen(50)", addTen(50));
// the parameter initialValue is closed inside of the internal function

// const resultAddTen = addTen(10);

// console.log("resultAddTen", resultAddTen);

// ^ yet more complicated example; let's improve our createCounter

const createCounterImroved = (initialValue = 0) => {
  // let's create variabele, that will be called counter with initial value initialValue
  let counter = initialValue;
  return (valueToAdd) => {
    // after we'll add to counter values
    counter += valueToAdd;
    return counter;
  };
};

// let's call the created function

const addTwoImproved = createCounterImroved(2);
// the varible that will be the value to counter
let resultAddTwo = addTwoImproved(10);
console.log("resultAddTwo", resultAddTwo);

resultAddTwo = addTwoImproved(5);

console.log("resultAddTwo", resultAddTwo);

resultAddTwo = addTwoImproved(3);

console.log("resultAddTwo", resultAddTwo);
/*
counter variable value are preserved between of function calls (addTwo) ; initially count is equal to 2; after internal function calls counter value will be saved between calls -- it will be closed inside of the function   return (valueToAdd) => {
    counter += valueToAdd;
    return counter;
  };

  in the end when we call for the first time addTwo the value 10 is added to counter variable, it will be equal to 12; after for the second calls the counter variable is 12 and to it 5 is added -- it will be equal to 17; for the last time we add 3 to counter variable -- it will be equal to 20
  */

// ^ learning outcomes
// basicaly closure is the funciton inside of the function
// the lexical environment of outer function is saved, preserved for the inner one -- it is the very important closure feature

function outer() {
  let x = 1;
  console.log("x - initial value", x);
  // return function inner() {
  function inner() {
    x++;
    console.log("x after addition", x);
    return x;
  }

  return inner;
}

const func = outer();

console.log("func()", func());
console.log("func()", func());
console.log("func()", func());
// console.log(func());
// console.log(func());
// console.log(func());

console.log("--");
const func2 = outer();
console.log("func2()", func2());
