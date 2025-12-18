// function declaration
// function declaration fucntion may be called before declaration
sayHello();

function name(...param) {
  // body
}

function sayHello() {
  console.log("Hello, User");
}

// sayHello()

sum(2, 8);

function sum(a, b) {
  console.log(a + b);
}

sum(2, 3);

sum(); // undefined + undefined => NaN

function sum1(a = 2, b = 1) {
  console.log(a + b);
}

sum1();

function sum2(a, b = 1) {
  console.log(a + b);
}

sum2(3);

// parameters may be to be any type of value

// function as a parameter

// callback -- this is a function, tha is passed as a parameter into antoher function

function sum3(a, b, callback) {
  const result = a + b;
  // callback(result);
  callback(`res ${result}`);
}

function displayer(res) {
  // the funciton will display the final sum
  console.log("result", res);
}

sum3(3, 10, displayer); // the function callback is just passed; th call will be realized by sum3

// an anonymous function can also be used, without  name

sum3(4, 10, function (res) {
  console.log("result", res);
});

// as a callback we can pass the internal js function< such as alert

// sum3(5, 5, alert)

sum3(7, 7, console.log);

// key word return -- it allows to return some result from a function

function sumReturn(a, b) {
  // console.log(a + b) // --but if we just want to get the final value and not output it anywhere, for example, for statistics
  console.log("hello before return");
  return a + b;
  console.log("hello after return");
}

const resultReturn = sumReturn(10, 20);

console.log("resultReturn", resultReturn);
console.log("sumReturn(30, 40)", sumReturn(30, 40));

// return immediately stops the function execution
