// #region getting of the elements

const tasksBlockGetElementById = document.getElementById("tasks");

console.log(tasksBlockGetElementById);

const allNavButtons = document.getElementsByClassName(
  "main-navigation__button-item"
);
console.log(allNavButtons);

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

// #region querySelector

const taskBlock2 = document.querySelector("#tasks");
console.log("taskBlock2", taskBlock2);

const mainNavigation = document.querySelector(".main-navigation");
console.log("mainNavigation", mainNavigation);

const firstButton = document.querySelector("button");
console.log("first button", firstButton);
// querySelector search for the first match

const thirdNavigationButton = document.querySelector("[data-button-id='3']");
console.log(thirdNavigationButton);

// #endregion querySelector

// #region querySelectorAll

const allNavigationButtons = document.querySelectorAll(
  ".main-navigation__button-item"
);
console.log(allNavigationButtons); // Node list -- what is it

allNavigationButtons.forEach((button, index) => {
  console.log(index, button);
});

const createTaskBlock = document.querySelector(".create-task-block");
const submitButtonAttribute =
  createTaskBlock.querySelector('[type = "submit"]');
console.log(submitButtonAttribute);

// #endregion querySelectorAllkkk

// #endregion getting of the elements
