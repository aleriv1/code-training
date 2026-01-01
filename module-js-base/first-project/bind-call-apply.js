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

printHeroInfo.call(mainHero, "the main hero", "call"); // ^ the difference is how we pass the parameter; for call we use comma
printHeroInfo.apply(badHero, ["the bad hero", "apply"]); // ^ parameters are passed in array

const bindedPrintHeroInfo = printHeroInfo.bind(
  mainHero,
  "the main hero",
  "bind"
); // ^ it like a call, but bind doesn't call the function; it creates a new function with new context; we bound the function the context of mainHero; this will refer to mainHero

bindedPrintHeroInfo();

// #region call(), bind(), apply() playground/sandbox

function showName() {
  console.log(this.name);
}

const carF = {
  name: "Ferrari 250 GTO",
  showName() {
    console.log(this.name);
  },
};

const ownerF = { name: "Aleksandr" };

showName.call(carF);
showName.call(ownerF);

const bike = {
  name: "GT Avalance",
};

carF.showName.call(bike); // borrowing a method

const carK = {
  name: "Ferrari F40",
  year: 1987,
  modification: "F40 LM",
};

function showInfo(key1, key2) {
  console.log("key1 and key2:", `${this[key1]} ${this[key2]}`);
}

console.log("call()");
showInfo.call(carK, "name", "year");
showInfo.call(carK, "name", "modification");

console.log("apply()");
showInfo.apply(carK, ["name", "year"]);
showInfo.apply(carK, ["name", "modification"]);

// --

const showCarName = showName.bind(carF);
showCarName();
const showCarOwnerName = showName.bind(ownerF);
showCarOwnerName();

bike.showName = carF.showName.bind(bike); // also a borrowing a method
bike.showName();

// #endregion call(), bind(), apply() playground/sandbox

// #endregion bind(), call(), apply()
