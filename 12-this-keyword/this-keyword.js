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
