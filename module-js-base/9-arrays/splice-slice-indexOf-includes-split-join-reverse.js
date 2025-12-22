// #region splice

// splice -- to delete some elements and inserts some others; the current array is changing

const cars = ["BMW", "Mersedes", "Lada"];

const removedElements = cars.splice(2, 1, "Ferrari", "Bugatti");
// cars.splice(0, 1);
console.log("removedElements", removedElements);

console.log("cars", cars);

// #endregion splice

// #region slice

// slice; returns a new array

const agesOfDevelopers = [25, 18, 45, 30];

const slicedAgesOfDevelopers = agesOfDevelopers.slice(0, 3);

console.log("agesOfDevelopers", agesOfDevelopers);
console.log("slicedAgesOfDevelopers", slicedAgesOfDevelopers);

// #endregion slice

// #region indexOf

// indexOf; it searches some element and returns its index

const favoriteFood = ["IceCream", "Cake", "Coffee"];

const favoriteFoodIndex = favoriteFood.indexOf("IceCream");

console.log("favoriteFoodIndex", favoriteFoodIndex);

// #endregion indexOf

// #region includes

// includes

const technologies = ["JavaScript", "html", "css", "TS"];

const isTEchnologyExists = technologies.includes("TS");
// const isTEchnologyExists = technologies.includes("c++");

console.log("isTEchnologyExists", isTEchnologyExists);

// #endregion includes

// #region split + join

// split + join

const listOfOrders = "Майка, шорты, кроссовки, рюкзак";

// const listOfOrdersArray = listOfOrders.split();
const listOfOrdersArray = listOfOrders.split(", ");

console.log("listOfOrdersArray", listOfOrdersArray);

const listOfOrdersUpdated = listOfOrdersArray.join("; ");
console.log(listOfOrdersUpdated);

// #endregion split + join

// #region reverse

// revers; it reverrses the array; it changes the current array

technologies.reverse();

console.log("technologies", technologies);

// #endregion reverse

// #region concat, spread

// 1.
const currentDevelopers = ["Aleksandr", "Alena"];
const newDevelopers = ["Aleks", "Lena"];

const allDevelopers = currentDevelopers.concat(
  newDevelopers,
  currentDevelopers
);

console.log("allDevelopers", allDevelopers);

// 2. ... spread operator removes the array and outputs elements separated by commas
const allDevelopersNew = [...currentDevelopers, ...newDevelopers];

// before ["Aleksandr", "Alena"]
// after "Aleksandr", "Alena"

console.log("allDevelopersNew", allDevelopersNew);
// #endregion concat

// under the hoood it turns out like this

const allDevelopersNew1 = ["Aleksandr", "Alena", "Aleks", "Lena"];
