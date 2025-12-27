// #region Symbol

// key in js can by two types:
// string; other types are converted to string
// symbol: a uniqe object key

const user = {
  name: "Maxim",
  10: "1234",
  undefined: undefined,
  [false]: false,
  name: "Alex",
};

console.log("user", user);

console.log(Object.keys(user));

const id = Symbol("id");
const id2 = Symbol("id2");

const userSymbol = {
  [id]: 1,
  [Symbol("id")]: 2,
  [Symbol("id")]: 3,
  [Symbol("id")]: 4,
  [Symbol("id")]: 4,
  name: "Aleksandr",
};

// how to get from this another symbol id?

console.log("userSymbol", userSymbol);

console.log(userSymbol[id]);

// #endregion Symbol

// #region in

console.log("name" in user);
console.log("programmingLanguage" in user);

console.log(id in userSymbol);
console.log(id2 in userSymbol);

// #endregion in
