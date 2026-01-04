// #region oop, constructor, classes; video

// oop -- it is the methodology, in the basis of which lay objects
// oop -- it is when the program is a set of objects that interact with each other

// function and class

function AnimalFunc(name) {
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

class Animal {
  constructor(name) {
    // a special function that is called when an object is created, at once; it initializes the initial values
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// new
const resultCatWithoutNew = AnimalFunc("cat");
console.log("resultCatWithoutNew", resultCatWithoutNew);

const resultCat = new Animal("cat");
console.log("resultCat", resultCat);

console.log(resultCat.name);

console.log(resultCat.getName());

const dog = new Animal("dog");
console.log(dog);

// #endregion oop, constructor, classes; video

// #region oop, constructor, classes; text

// #region constructor, text

function Pet(type, name) {
  this.type = type;
  this.name = name;
  this.favoriteAction = "to sleep";
  this.say = function () {
    console.log(
      `${this.type} with name ${this.name} likes ${this.favoriteAction}`
    );
  };
}

const cat = new Pet("cat", "Kyzya");

console.log(cat);
cat.say();

const dogM = new Pet("dog", "Muhtar");
console.log(dogM);

// #endregion constructor, text

// #region class, text

class Class {}
console.log("typeof Class:", typeof Class);

class PetClass {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.favoriteAction = "to sleep";
  }

  say() {
    console.log(
      `${this.type} with name ${this.name} likes ${this.favoriteAction} in Class`
    );
  }
}

const catClass = new PetClass("tiger", "Aleks");

console.log("catClass", catClass);
catClass.say();

// console.log("PetClass", PetClass);
console.log(PetClass);

// #endregion class, text

// #endregion oop, constructor, classes; text

// #region oop principles

// 1. inheritance
// 2. encapsulation
// 3. polymorphism
// 4. abstraction
console.log(`
Four OOP principles:
inheritance
encapsulation
polymorphism
abstraction
`);

// #endregion oop principles

// #region oop text

class Transport {
  constructor(type, category) {
    this.type = type;
    this.category = category;
  }

  sayInfo() {
    console.log(
      `This transport type is ${this.type}; Scope of application: ${this.category}`
    );
  }

  move() {
    console.log("Let's go!");
  }
}

class Car extends Transport {
  constructor(type, category) {
    super(type, category);
    this.numOfWheels = 4;
  }
  move() {
    console.log("Let's drive!");
  }
}

class PlaneT extends Transport {
  constructor(type, category) {
    super(type, category);
    this.numOfWheels = 2;
    this.numberOfWings = 2;
  }
  move() {
    console.log("Let's fly!");
  }
}

const car = new Car("Car", "Passenger");
console.log("car", car);
car.sayInfo();
car.move();

const planeT = new PlaneT("Plane", "Cargo");
console.log("planeT", planeT);
planeT.sayInfo();
planeT.move();

class FirstClass {}
class SecondClass {}

const obj = new FirstClass();

console.log("obj instanceof FirstClass", obj instanceof FirstClass);
console.log("obj instanceof SecondClass", obj instanceof SecondClass);

// #endregion oop text
