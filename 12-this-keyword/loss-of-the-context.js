"use strict";

// #region the first case to lost the context: the function call without a context

const user = {
  name: "alex",
  programmingLanguage: "js",
  getName() {
    return this.name;
  },
  // getProgrammingLanguage() {
  // getProgrammingLanguage: () => {
  getProgrammingLanguage: function () {
    console.log("this", this);
    return this.programmingLanguage;
  },
};

console.log("user.getName()", user.getName());

const newGetName = user.getName; // we rewrote it differently; the function is not called, but just a reference to the function, saved in the variable

// console.log("newGetName()", newGetName()); // ther no any output; the context is lost, so the new function is called in the global context, and references to the global object

// this -- is the object before the dot

console.log("newGetName()", newGetName.call(user));

// 1. so the case when the context is lost it is when we call the functio without any context

// #endregion the first case to lost the context: the function call without a context

// #region the second case to lost the context

console.log(user.getProgrammingLanguage());
// console.log(user.getProgrammingLanguage.call(user)); // undefined is in this case also

// #endregion the second case to lost the context

// const getThis = function () {
const getThis = () => {
  // return this;
  console.log(this);
};

getThis();

console.log(
  (function () {
    return this;
  })()
);

const carT = {
  name: "car",
  getCar: () => {
    console.log(this);
  },
};

carT.getCar();

// console.log(getThis());

function getThisF() {
  console.log(this);
}
getThisF();

console.log(this);
