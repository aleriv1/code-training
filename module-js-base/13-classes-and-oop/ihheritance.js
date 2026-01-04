// #region inheritance

// inheritance it is a creation of child class based on the parent

// inheritance it is a mechanism that allows one class to inherit properties and methods from another class

class Plane {
  constructor(type, numberOfPassangers) {
    this.type = type;
    this.numberOfPassangers = numberOfPassangers;
  }

  startFlight() {
    // Method for taking off our plane :).
    console.log(`Let's fly`);
  }
}

const planePassenger = new Plane("Passenger", 100);
console.log("planePassenger", planePassenger);

planePassenger.startFlight();

// but a military aircraft can have guns and rockets, that are not in the passenger plane, but it also have type and so on -- the basic property and method of the Plane; so here -- the principle of inheritance -- we can create a new class for millitary plane

class MilitaryPlane extends Plane {
  constructor(type) {
    // there is no passgender in military plane (it the tutor opinoion, but ther are passenger military planes by the way)
    // we need to call the constructor of the parent class to initialize the properties of the parent class
    super(type, 0);
    // ^? if do not pass the second parameter,  will it be undefined?
    this.numberOfGuns = 0;
  }

  startFlight() {
    console.log("Let's fly to fight");
  }

  setNumberOfGuns(numberOfGuns) {
    this.numberOfGuns = numberOfGuns;
    console.log("we have changed the number of guns");
  }

  shoot() {
    console.log("We're shooting...");
  }
}

console.log("---");

const militaryPlane = new MilitaryPlane("military");
console.log("militaryPlane", militaryPlane);

console.log("number of guns in default:", militaryPlane.numberOfGuns);
militaryPlane.setNumberOfGuns(8);
console.log(
  "number of guns after applying of the method setNumberOfGuns:",
  militaryPlane.numberOfGuns
);

militaryPlane.startFlight();

militaryPlane.shoot();

// instaneof  -- it checks whether the object is an instance of the another class; whether the object belongs to the class

class Dog {
  constructor(name) {
    this.name = name;
  }
}

console.log(
  "militaryPlane instanceof MilitaryPlane",
  militaryPlane instanceof MilitaryPlane
);

console.log("militaryPlane instanceof Plane", militaryPlane instanceof Plane);

console.log("militaryPlane instanceof Dog", militaryPlane instanceof Dog);

// inheritance allows us to decompose logic by creating the similar entities from the one template -- the parent class

// #endregion inheritance
