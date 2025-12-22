// sort method; it changes the current array
// it sorts an array in ascending or descending order

const salariesOfDevelopers = [400, 2000, 500, 600, 350];

function displaySortMethod() {
  salariesOfDevelopers.sort((a, b) => {
    console.log(`a: ${a}, b: ${b}`);
    return a - b; // ascending sort
    // return b - a; // desscending sort
  });

  // salariesOfDevelopers.sort(); // without callback the array values are converted to strings, so sorting becomes starange for numbers
}

/* 
the callback we pass to the sort method should return three values:
< 0
> 0
0
*/

displaySortMethod();

console.log(salariesOfDevelopers);

const developerNames = ["Aleksandr", "Nastya", "Alena", "Irina", "Mariya"];

developerNames.sort();
//
developerNames.sort((a, b) => {
  // if (a > b) {
  if (a < b) {
    return 1; // надо будет делать перестановку
  }
  // if (a < b) {
  if (a > b) {
    return -1; // не надо делать перестановку
  }
  return 0;
});

console.log("developerNames", developerNames);

// devNames.sort();
// const devNames = ["Maxim", "Igor", "Nastya", "Irina"];
// devNames.sort((a, b) => {
//   if (a > b) {
//     return 1; // надо будет делать перестановку
//   }
//   if (a < b) {
//     return -1; // не надо делать перестановку
//   }
//   return 0;
// });
// console.log("devNames", devNames);
