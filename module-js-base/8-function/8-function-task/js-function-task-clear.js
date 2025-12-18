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

// #endregion js-function-task2

// #region js-function-task3

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

console.log(getDivisorsCount(120));

// #endregion js-function-task3
