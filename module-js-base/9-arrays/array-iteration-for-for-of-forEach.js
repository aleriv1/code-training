// array iteration

const array = [100, 300, 700, 1000, 1200];

const developerNames = ["Aleksandr", "Nastya", "Alena", "Irina"];

// for
console.log("developerNames[1]", developerNames[1]);

for (let i = 0; i < developerNames.length; i++) {
  console.log("i", i);
  console.log("item", developerNames[i]);
}

// for of

console.log("\nfor... of");
for (const name of developerNames) {
  console.log("name", name);
}

// foкEach -- modern, it is recommended to use it

console.log("\nforEach");
developerNames.forEach((element, index, array) => {
  console.log("name", element);
  console.log("index", index);
  console.log("array", array);
});

const arrayForOf = [1, 2, 3, 5];

for (const number of arrayForOf) {
  console.log("array item", number);
}
