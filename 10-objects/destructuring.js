// #region destructuring with arrays

function calcValues(a, b) {
  // return [a + b, a - b, a * b, a / b];
  return [a + b, undefined, a * b, a / b];
}

console.log(calcValues(42, 10));

// to create different variables from the array

const result = calcValues(42, 10);

// const sum = result[0];

// const sub = result[1];

// const [sum, sub] = result;

const [sum, sub = "there is no substration", mult, other] = calcValues(42, 10); //default values
// const [sum, , mult, ...other] = calcValues(42, 10);

console.log("sum, sub", sum, sub);
console.log("mult", mult);
console.log("mult, other", mult, other);

// #endregion destructuring with arrays

// #region destructuring with objects

const person = {
  name: "Aleksandr",
  age: 20,
  address: {
    country: "Russia",
    city: "spb",
  },
};

// const name = person.name;
// const { name } = person;
// const { name, age } = person;

const { name, age, car = "Ferrari" } = person; // default values
// const { name: ALena, age, car = "Ferrari" } = person; // default values

console.log("name:", name);
console.log("name:", name);
console.log("name, age:", name, age);
console.log("name, age:", name, age);
console.log(car);

const { name: Alena = "Aleksandr" } = person; // another variable name; it allows to avoid variable name confilcts

console.log("name:", name);
console.log(Alena);

const {
  name: firstName = "Sasha",
  age: age1,
  // address: { city, country },
  address: { city: homeTown, country },
} = person;
// console.log(firstName, age1, address);
// console.log(firstName, age1, city, country);
console.log(firstName, age1, homeTown, country);

// #region rest with destructuring

const { name: n, ...info } = person;

console.log(n, info);

// function logPerson(per) {
function logPerson({ name: firstName = "111", age }) {
  // console.log(per.name + " " + per.age);
  // console.log(name + " " + age);
  console.log(firstName + " " + age);
}

logPerson(person);
// #endregion rest with destructuring

// #endregion destructuring with objects

const personA = {
  nameA: "Alena",
};

Object.assign(personA, person);
console.log(personA);

console.log("name" in personA);
