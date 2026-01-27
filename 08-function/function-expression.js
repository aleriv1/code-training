// Function Expression

// sum(5, 10)

const sum = function (a, b) {
  console.log(a + b);
};

// function expression connot be called before declaration

sum(10, 20);

// arrow function

// const name = () => {

// }

const sumArrow = (a, b) => {
  console.log(a, b);
  return a + b;
};

const sumArrowShort = (a, b) => a + b; // it is allowed, when the function consistы of one line.

const result = sumArrow(1, 11);
const res = sumArrowShort(1, 12);

console.log("result", result);

console.log("res", res);

//

// const addFive = a => a + 5
const addFive = (a) => a + 5;

const resAddFive = addFive(10);

console.log(resAddFive);

// arrow function can be used, passed as a callback function

function multiply(a, b, callback) {
  const result = a * b;
  callback(result);
}

multiply(5, 2, (multiplyResult) => {
  console.log("multiplyResult", multiplyResult);
});

const calc = (a, b) => {
  // a + b;
  return a + b;
};

console.log(calc(2, 3));

const sayHelloArror = (name, showMethod) => {
  showMethod(`Hello ${name}`);
};

sayHelloArror("Alex", (message) => console.log(`${message}`));

/* function sum3(a, b, callback) {
  const result = a + b;
  // callback(result);
  callback(`res ${result}`);
}

function displayer(res) {
  // the funciton will display the final sum
  console.log("result", res);
}

sum3(3, 10, displayer); // the function callback is just passed; th call will be realized by sum3 */
