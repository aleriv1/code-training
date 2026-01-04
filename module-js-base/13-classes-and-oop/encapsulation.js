// #region encapsulation -- it is a hiding of data from access outside of the class or by inheritance

class Developer {
  #salary;
  constructor(name, programmingLanguage) {
    this.name = name;
    this.programmingLanguage = programmingLanguage;
    this.#salary = 3000; // this is a private field
  }

  startCoding() {
    console.log(this.#salary);
    this.#printProgrammingLanguage();
    console.log(`${this.name} begins to wrtie the code`);
  }

  get devSalary() {
    // we created getter, which allows us to access private fields, to get salary
    return this.#salary;
  }

  set setSalary(salary) {
    this.salary = salary;
  }

  // printProgrammingLanguage() {
  #printProgrammingLanguage() {
    // it is a private method; there is no access to it because it is private
    console.log(`Programming language ${this.programmingLanguage}`);
  }
}

const developer = new Developer("Aleksandr", "JS");

console.log("developer", developer);

console.log("developer.name", developer.name);
// console.log(
//   "developer.printProgrammingLanguage",
//   developer.printProgrammingLanguage
// );

developer.startCoding();
// developer.printProgrammingLanguage();

// fields and method, which are acceble through the dot are called public; they are acceblle in child class also

class JuniorDeveloper extends Developer {
  constructor(name, programmingLanguage) {
    super(name, programmingLanguage);
  }
}

const juniorDeveloper = new JuniorDeveloper("Alena", "JS");
console.log("developer.devSalary", developer.devSalary);
developer.setSalary = 5000;
console.log("developer.devSalary", developer.devSalary);

// juniorDeveloper.printProgrammingLanguage();

// sometimes it is necessary to hide data from access outside of the class, to restrict access

// console.log(developer.#salary); // an error ; Private field '#salary' must be declared in an enclosing class

// #endregion encapsulation -- it is a hiding of data from access outside of the class or by inheritance
