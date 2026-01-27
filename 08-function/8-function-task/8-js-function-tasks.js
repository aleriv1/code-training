// #region js-function-task1

function getName1(name = "Aleksandr1") {
  return `Имя равно ${name}`;
}
console.log(getName1());

const getName2 = function (name = "Aleksandr2") {
  return `Имя равно ${name}`;
};
console.log(getName2());

const getName3 = (name = "Aleksandr3") => `Имя равно ${name}`;
console.log(getName3());

// https://codepen.io/aleriv1/pen/azNeZBR

// #endregion js-function-task1

// #region js-function-task2

const getSumOfNumbers = (number, type = "odd") => {
  if (
    number === undefined ||
    Number.isNaN(number) ||
    typeof number !== "number"
  ) {
    return NaN;
  }
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (type === "odd") {
      i % 2 !== 0 && (sum += i);
    } else if (type === "even") {
      i % 2 === 0 && (sum += i);
    } else if (type === "") {
      sum += i;
    }
  }
  return sum;
};

console.log(getSumOfNumbers(2, ""));

// https://codepen.io/aleriv1/pen/WbwVxYX

const getSumOfNumbersGrokImproved = (number, type = "odd") => {
  if (
    number === undefined ||
    Number.isNaN(number) ||
    typeof number !== "number" ||
    !Number.isFinite(number) || // Ловит Infinity/-Infinity
    number < 0 // Предполагаю invalid
  ) {
    return NaN;
  }
  const n = Math.floor(number); // Для дробных — floor
  if (type !== "odd" && type !== "even" && type !== "") {
    return NaN; // Или fallback: type = "odd";
  }
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    let add = false;
    if (type === "odd" && i % 2 !== 0) add = true;
    else if (type === "even" && i % 2 === 0) add = true;
    else if (type === "") add = true;
    if (add) sum += i;
  }
  return sum;
};

// #endregion js-function-task2

// #region js-function-task3

function getDivisorsCount2(number) {
  console.log(`getDivisorsCount started`);
  if (
    number === undefined ||
    Number.isNaN(number) ||
    typeof number !== "number" ||
    !Number.isFinite(number) || // Ловит Infinity/-Infinity
    number < 0 // Предполагаю invalid
  ) {
    return NaN;
  } else if (number < 0 || !Number.isInteger(number)) {
    console.log("number must be an integer and greater than zero");
    return;
  }
  let divisors = "делители - ";

  if (number === 1) {
    return (divisors += 1);
  } else if (number === 2) {
    return (divisors += "1, 2");
  }

  divisors += "1, ";

  for (let i = 2; i < number; i++) {
    if (i !== number) {
      number % i === 0 ? (divisors += `${i}, `) : null;
    }
  }
  divisors += number;

  return divisors;
}

function getDivisorsCount(number) {
  if (
    number === undefined ||
    Number.isNaN(number) ||
    typeof number !== "number" ||
    !Number.isFinite(number)
  ) {
    return NaN;
  } else if (number < 0 || !Number.isInteger(number)) {
    alert(`number должен быть целым числом и больше нуля!`);
    return "bad number";
  }
  let divisors = "делители - ";
  let divisorsCount = 0;

  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      divisorsCount++;
      if (i !== number) {
        divisors += `${i}, `;
      } else {
        divisors += i;
      }
    }
  }
  return `количество делителей для числа ${number}: ${divisorsCount} (${divisors})`;
}
// https://codepen.io/aleriv1/pen/qEZeqzM

console.log(getDivisorsCount(12));

// #endregion js-function-task3
