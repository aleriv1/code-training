// #region static fields and methods

class Car {
  static isCar(car) {
    // this is a static method
    return car instanceof Car;
  }

  static #initialParams = {
    // if we don't pass the parametersinitial parameters will be substituted
    // these fields do not belong to the instance
    // you cannot use 'this' in static fild; is there is 'this' the field is not static
    name: "bmw",
    maxSpeed: 150,
  };

  constructor(name, maxSpeed) {
    this.name = name || Car.#initialParams.name;
    this.maxSpeed = maxSpeed || Car.#initialParams.maxSpeed;
  }
  drive() {
    console.log(`The car ${this.name} is on its way now`);
  }
}

const car = new Car("Ferrari", 300);

console.log(car);

const animal = {};

const isCar = Car.isCar(car);
const isCarAnimal = Car.isCar(animal);

console.log(isCar);
console.log(isCarAnimal);

const car2 = new Car();
console.log(car2);

// Car.#initialParams; // Uncaught SyntaxError: Private field '#initialParams' must be declared in an enclosing class (at static-fields-and-methods.js:41:4)

// car.isCar(animal); // an error car.isCar is not a function; access only through the class itself

// static is need when the field or method does not belong to the instance but belongs to the class; or when inside the method is not used this

// #region static fields and methods, text

class SimpleClass {
  static staticProperty = "I am a static property";
  static staticMethod() {
    return "I am a static method";
  }

  constructor(value1, value2) {
    this.value1 = value1;
    this.value2 = value2;
  }

  foo() {
    console.log(this.value1, this.value2);
  }
}

console.log(SimpleClass.staticProperty);
console.log(SimpleClass.staticMethod());

class Person {
  static isPerson(obj) {
    return obj instanceof Person;
  }

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Aleks", 39);
const person2 = {};

console.log("Person.isPerson(person1)", Person.isPerson(person1));
console.log("Person.isPerson(person2)", Person.isPerson(person2));

class SimpleClass1 {
  static defaultParamas = {
    value1: "I love",
    value2: "JS",
  };
  constructor(value1, value2) {
    this.value1 = value1 || this.constructor.defaultParamas.value1;
    this.value2 = value2 || SimpleClass1.defaultParamas.value2;
  }

  sayHi() {
    console.log(this.value1, this.value2);
  }
}

const obj1 = new SimpleClass1("hello", "world");
obj1.sayHi();

const obj2 = new SimpleClass1();
obj2.sayHi();

// #endregion static fields and methods, text

// #endregion static fields and methods
