// Method for not only iteration but for array operation

// #region map

// map; this method returns a new array, which contains elements is modified by our function-callback

// const salariesOfDevelopers = [400, 500, 600, 2000, 350];
const salariesOfDevelopers = [400, 2000, 500, 600, 350];
console.log("salariesOfDevelopers", salariesOfDevelopers);

const upddatedSalaries = salariesOfDevelopers.map((salary, index, array) => {
  // return salary * 2;
  return salary ** 2;
});

console.log("upddatedSalaries", upddatedSalaries);

// #endregion map

// #region filter

const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
  // const filteredSalaries = upddatedSalaries.filter((salary, index, array) => {
  // return salary > 500;
  // return salary > 600;
  return index % 2 === 0;
});

console.log("filteredSalaries", filteredSalaries);

// #endregion filter

// #region find

// salariesOfDevelopers.find((salary, index, array) => {
const searchedSalary = salariesOfDevelopers.find((salary) => {
  return salary > 400;
});

console.log(searchedSalary);

// #endregion find

// #region findIndex

const searchedIndex = salariesOfDevelopers.findIndex((salary) => {
  // return salary > 500;
  // return salary === 400;
  // return salary === 600;
  return salary === 6000; // -1 -- it means that the element is not found
});

console.log(searchedIndex);

// #endregion findIndex

// #region some, every

// const someElementExist = salariesOfDevelopers.some((salary) => {
// const everyElementExist = salariesOfDevelopers.every((salary) => {
const allElementExist = salariesOfDevelopers.every((salary) => {
  // return salary >= 2000;
  return salary > 0;
});

// console.log("someElementExist", someElementExist);
console.log("allElementExist", allElementExist);

// #endregion some, every

// #region reduce

// salariesOfDevelopers.reduce((acc, curEl, index, array) => {}, 0);

// accumolator -- the initial parameter
const sumFromReduceMethod = salariesOfDevelopers.reduce(
  (acc, curEl, index, array) => {
    console.log("new iteration");
    console.log("acc", acc);
    console.log("curEl", curEl);
    console.log(
      "acc+curEl",
      `${acc}+${curEl}`,
      acc + curEl,
      "\nto the next iteration"
    );
    // console.log("acc+1", acc + 1, "\nto the next iteration");
    // return 1;
    // return acc + 1;
    return acc + curEl;
    // return curEl;
    // },
    // 0
    // );
  }
);

console.log("the final sumFromReduceMethod:", sumFromReduceMethod);

// #endregion reduce
