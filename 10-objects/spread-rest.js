// #region spread wit arrays

const citiesRussia = ["Moscow", "Spb", "Kazan", 12];

console.log(citiesRussia);
console.log(...citiesRussia); // spread unfolds the array -- we've got separate elements

const citiesEurope = ["London", "Paris", "Rome"];
const cities = [...citiesRussia, "Tokio", ...citiesEurope];
// const cities = [...citiesEurope, ...citiesRussia, "Tokio"];

const allCities = citiesEurope.concat(citiesRussia);

console.log(cities);

// #endregion spread wit arrays

// #region spread with objects

const citiesRussiaWithPopulation = {
  Moscow: 2,
  Spb: 3,
};

const citiesEuropeWithPopulation = {
  Moscow: 15,
  London: 3,
  Paris: 2,
};

console.log("citiesEuropeWithPopulation", citiesEuropeWithPopulation);
console.log("citiesRussiaWithPopulation", citiesRussiaWithPopulation);

// console.log("...citiesRussiaWithPopulation", ...citiesRussiaWithPopulation);

// const citiesWithPopulation = {
//   ...citiesRussiaWithPopulation,
//   ...citiesEuropeWithPopulation,
// };
const citiesWithPopulation = {
  ...citiesEuropeWithPopulation,
  ...citiesRussiaWithPopulation,
};

console.log("citiesWithPopulation", citiesWithPopulation);

const numbers = [5, 37, 42, 17];

// console.log(Math.max(5, 37, 42, 17));
console.log(Math.max(...numbers));
console.log(Math.max.apply(null, numbers));

// #endregion spread with objects

// #region spread operator application

const divs = document.querySelectorAll("div");
console.log(divs); // it is node list; it is not actually an array -- it is a colleciont of dom elements

const divsArr = [...divs]; // now it is an array
console.log(divsArr);

console.log("---");
console.log(divs, Array.isArray(divs));
console.log(divsArr, Array.isArray(divsArr));
console.log("---");

// #endregion spread operator application

// #region rest operator

function sum(a, b, ...rest) {
  console.log("rest", rest); // a usual array; the operator collected the remaining arguments from the function
  console.log("...rest", ...rest); //here is a spread already
  // return a + b;
  return a + b + rest.reduce((acc, el) => (acc += el), 0);
}
const sumNumber = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(sum(...sumNumber)); // spread here;

// const a = sumNumber[0];
// const b = sumNumber[1];

const [a, b, ...otherNumbers] = sumNumber;

console.log(a, b, otherNumbers);

// #endregion rest operator

// #region rest in objects

const person = {
  name: "Alex",
  age: 20,
  city: "Moscow",
  country: "Russia",
};

const { name, age, ...addrews } = person;

console.log(name, age, addrews);

// #endregion rest in objects
