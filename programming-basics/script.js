console.log(23);

//  comments

// #region variables

let cat = "Murzik";

console.log("cat", cat);

cat = "Kuyza";

console.log("cat", cat);

const dog = "Sharik";

console.log("dog", dog);

// #endregion variables

// #region data types

let string = "string";
let number = 12;
let booleanTrue = true;
let booleanFalse = false;
const object = {
  nemae: "Aleks",
};

// #endregion data types

// #region math operators + - / *

let resultPlus = 10 + 5;
console.log("result", resultPlus);
let resultMinus = 10 - 5;
console.log("resultMinus", resultMinus);
let resultMult = 10 * 5;
console.log("resultMult", resultMult);
let resultDivide = 10 / 5;
console.log("resultDivide", resultDivide);

let a = 15;
let b = 8;

let c = a * b;
console.log("c", c);

c = a / b;
console.log("c", c);

// #endregion math operators + - / *

// #region comparison operators ===, >, <, >=, <=, !==

let resultCompareEqu = 10 === 5;
console.log("resultCompareEqu", resultCompareEqu);

let resultCompareLess = 10 < 5;
console.log("resultCompareLess", resultCompareLess);

let resultCompareGreater = 10 > 5;
console.log("resultCompareGreater", resultCompareGreater);

let resultCompareNotEqu = 10 !== 5;
console.log("resultCompareNotEqu", resultCompareNotEqu);

// #endregion comparison operators ===, >, <, >=, <=, !==

// #region arrays and objects

// data structure -- this is a way of organization and storage of information in a program, tha allows to process information quickly and efficiently

// #region arrays

const array = [
  1,
  "string",
  true,
  ,
  5n,
  undefined,
  null,
  { name: "Aleks" },
  [1, 2, 3],
];
console.log(array);

console.log(array[8]);

// #endregion arrays

// #region objects

const objectNew = {
  cat: "Kuzya",
  dog: "Sharik",
  number: 12,
  array: [1, 2, 3],
};

console.log(objectNew.cat, objectNew["number"], objectNew["array"][0]);
// #endregion objects

// #endregion arrays and objects

// #region conditional branching

// if (true) {
// if (10 > 5) {
if (false) {
  console.log("hello");
} else {
  console.log("world");
}

// #endregion conditional branching

// #region logic operators

// logic and &&
// logic or ||

// if (5 > 3 && 7 >= 5) {
if (5 > 3 || 7 === 5) {
  console.log("logic works");
}

// #endregion logic operators

// #region loops

// 1. inititalization statement; counter creation
// 2. condtition for loop work, true of false
// 3. ending (result) operation

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const price = [100, 200, 300];

for (let i = 0; i < price.length; i++) {
  console.log(price[i] * 0.9);
}

// #endregion loops

// #region functions

let store0 = 100 * 50 * 0.9;
console.log(store0);

let store1 = 5000 * 50 * 0.9;
console.log(store1);

let store2 = 15000 * 50 * 0.9;
console.log(store2);

function getGoodDetails(boxes, details, defect) {
  return boxes * details * (1 - defect);
}

console.log("getGoodDetails(100, 50, 0.1)", getGoodDetails(100, 50, 0.1));
// #endregion functions

const circle = document.querySelector(".circle");
console.log(circle);

circle.addEventListener("click", () => {
  console.log("world");
  circle.classList.toggle("circle-red");
  // circle.remove();
});

circle.addEventListener("mouseover", () => {
  circle.style.backgroundColor = "orange";
});

circle.addEventListener("mouseout", () => {
  circle.style.backgroundColor = "purple";
});

window.document;
