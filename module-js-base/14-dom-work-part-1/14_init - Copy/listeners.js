// #region click

const firstNavButton = document.querySelector(".main-navigation__button-item");

// firstNavButton.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.target);
//   console.log("hello");
//   // const target = event.target;
//   const { target } = event; // more consice and modern record
//   target.classList.add("main-navigation__button-item_selected");
// });

const allNavButtons = document.querySelectorAll(
  ".main-navigation__button-item"
);

allNavButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log("event");
    const { target } = event;
    allNavButtons.forEach((button) => {
      button.classList.remove("main-navigation__button-item_selected");
    });
    target.classList.add("main-navigation__button-item_selected");
  });
});

// #endregion click

// #region sumbit

const createTaskForm = document.querySelector(".create-task-block");
createTaskForm.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  const { target } = event;
  const taskNameInput = target.taskName;
  // console.log(taskNameInput);
  const inputValue = taskNameInput.value;
  if (inputValue) {
    console.log(`You've created a task ${inputValue}`);
  } else {
    console.log("enter the right data");
  }
});

// #endregion sumbit
