// #region prototype

// const person = {
//   name: "Aleksandr",
//   age: 25,
//   greet: function () {
//     console.log("Greet");
//   },
// };

// console.log(person);
// console.log(person.greet());

// person.sayHello();
// person.toString();

const person = new Object({
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greet");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello");
};

const Lena = Object.create(person);

console.log(Lena.name);

Lena.name = "Elena";

console.log(Lena.name);
console.log(Lena);
// Prototype -- it is some Object that is exit in Object and it is called in the chain from the top to down.
// #endregion prototype

// #region in js all is the object

// const str = "I am a string";

const str = new String("I am a string");

// #endregion in js all is the object
