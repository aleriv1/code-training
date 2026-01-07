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
  // const taskNameInput = target.taskName;
  // console.log(taskNameInput);

  // const inputValue = taskNameInput.value;

  // const inputValue = event.target.elements.taskName.value;
  // const inputValue = event.target.taskName.value;
  const inputValue = target.taskName.value;
  if (inputValue) {
    console.log(`You've created a task ${inputValue}`);
  } else {
    console.log("enter the right data");
  }
});

// #endregion sumbit

// #region keydown, keyup

// #region keydown

// const taskItems = document.querySelectorAll(".task-item");
// console.log([...taskItems]);

document.addEventListener("keydown", (event) => {
  const { key } = event;
  console.log("keydown", key);

  /*   let taskItems = [...document.querySelectorAll(".task-item")];
  // console.log("taskItems before task deleting", taskItems);

  // const updateTaskItems = [...taskItems]
  if (Number(key) - 1 >= 0 && Number(key) - 1 <= taskItems.length - 1) {
    console.log(
      `the number of the task in the list ${key}, it will be removed`
    );
    taskItems[key - 1].remove();
  }
  // taskItems = [...document.querySelectorAll(".task-item")];
  // console.log("taskItems after task deleting", taskItems); */

  /*   const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
  if (taskItemToDelete) {
    const deleteConfirmed = confirm("Are you sure");
    if (deleteConfirmed) {
      taskItemToDelete.remove();
    }
  } */
});

// #endregion keydown

// #region keyup

document.addEventListener("keyup", (event) => {
  const { key } = event;
  console.log("keyup", key);
  const taskItemToDelete = document.querySelector(`[data-task-id="${key}"]`);
  if (taskItemToDelete) {
    // const deleteConfirmed = confirm("Are you sure");
    // if (deleteConfirmed) {
    //   taskItemToDelete.remove();
    // }
    taskItemToDelete.remove();
  }
});

// #endregion keyup

// #endregion keydown, keyup

// #region mouseover -- when the mouse pointer is over some elements

const createTooltip = (text) => {
  const tooltip = document.createElement("span");
  tooltip.textContent = text;
  tooltip.classList.add("tooltip");
  return tooltip;
};

document.addEventListener("mouseover", (event) => {
  // console.log(event);
  const { target } = event;
  // console.log("target of mouseover", target);

  const isOverDeleteButton = target.className.includes(
    "task-item__delete-button"
  );
  if (isOverDeleteButton) {
    console.log("success");
    const taskItemHTML = target.closest(".task-item");

    const taskId = taskItemHTML?.dataset.taskId;

    if (taskId) {
      const tooltipHTML = createTooltip(`To delete the task ${taskId}?`);
      target.append(tooltipHTML);
    }
  }
});

// #endregion mouseover -- when the mouse pointer is over some elements

// #region mouseout -- when the mouse pointer leaves the some elements

document.addEventListener("mouseout", (e) => {
  const { target } = e;
  const isOutFromDeleteButton = target.className.includes(
    "task-item__delete-button"
  );
  const tooltip = document.querySelector(".tooltip");
  if (tooltip) {
    tooltip.remove();
  }
});

// #endregion mouseout -- when the mouse pointer leaves the some elements

// #region mousemove -- when the mouse is moved

document.addEventListener("mousemove", (e) => {
  // console.log(e);
});

// #endregion mousemove -- when the mouse is moved
