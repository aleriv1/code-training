// "use strict";
// #region keyword this

// this points to the current code execution context
// in the most cases this is an object; thus "this" has data type object

console.log(this); // the global object; window for browswers (global for NodeJS)

const user = {
  name: "Aleks",
  dateOfBirth: new Date(1996, 10, 11),
  // getName: function () {
  getName: function () {
    // return user.name; // this variant is not universal; for other objects, for other object -- getName will return uncorrect values
    return this.name; // return this.name
  },

  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.dateOfBirth.getFullYear(); // this gives versatility
  },
  getAllInfo: function () {
    const age = this.calculateAge();
    console.log("name", this.name, "age", age);
  },
};

console.log(user.getName());
console.log(user.calculateAge());
console.log(user.getAllInfo());

// #endregion keyword this

// #region bind, call, apply -- they allow to tight some context to the function

const user2 = {
  name: "Sasha",
};

const user2Name = user.getName.call(user2);

console.log("user2Name", user2Name);

// #region playground sandbox

console.log("global this", this);
console.log("globalThis", globalThis);

const car = {
  name: "Ferrari 330",
  year: 1967,
  getInfro() {
    console.log("name", this.name, ",", "year", this.year);
  },
  owner: {
    name: "Aleksandr",
    experience: 5,
    getInfo() {
      console.log("owner", this.name, "experience", this.experience);
    },
  },
};

car.getInfro();
car.owner.getInfo();

const globalArrowFunc = () => console.log(this);

const obj = {
  objArrowFunc: () => console.log(this),
  objFunc() {
    // const nestedObjFunc = () => console.log(this);
    const nestedObjFunc = function () {
      console.log(this);
    };
    nestedObjFunc();
  },
};

globalArrowFunc();
obj.objArrowFunc();
obj.objFunc();

function testUsualFunc() {
  return this;
}

console.log(testUsualFunc());

// ---
function showYear() {
  console.log(this.year);
}

showYear();

const carNew = {
  name: "Ferrari F40",
  year: 1967,
};

car.showYear = showYear;
car.showYear();

// #endregion playground sandbox

// #endregion bind, call, apply -- they allow to tight some context to the function

// #region bind(), call(), apply() also "connect" function with method with object.

const mainHero = {
  fullName: "SpiderMan",
  health: 65,
  strength: 5,
};

const badHero = {
  fullName: "Joker",
  health: 55,
  strength: 10,
};

function printHeroInfo(extraInfo = "", eI = "") {
  console.log("this", this);
  console.log(
    `Имя : ${this.fullName}, здоровье: ${this.health}, сила: ${this.strength}, ${extraInfo}, ${eI}`
  );
} //  эта функия не завязана на каком-то объекте

console.log(printHeroInfo());

printHeroInfo.call(mainHero, "the main hero", "call"); // the difference is how we pass the parameter; for call we use comma
printHeroInfo.apply(badHero, ["the bad hero", "apply"]); // parameters are passed in array

const bindedPrintHeroInfo = printHeroInfo.bind(
  mainHero,
  "the main hero",
  "bind"
); // ^ it like a call, but bind doesn't cal the function; it creates a new function with new context; we bound the function the context of mainHero; this will refer to mainHero

bindedPrintHeroInfo();

// #endregion bind(), call(), apply()
