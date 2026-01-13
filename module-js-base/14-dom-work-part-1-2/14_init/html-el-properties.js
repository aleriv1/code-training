// #region html element properties

// #region getting (and changing) of elemen class

const taskWrapper = document.querySelector(".tasks__wrapper");
console.log("taskWrapper", taskWrapper);
console.log("taskWrapper.className", taskWrapper.className);
taskWrapper.className = "1";
// console.log("taskWrapper.className", taskWrapper.className);

// #endregion getting (and changing) of elemen class

// #region getting (and changing) of elemen id

const tasksBlock = document.querySelector("#tasks");
console.log(tasksBlock.id);

// tasksBlock.id = "new_tasks";

// #endregion getting (and changing) of elemen id

// #endregion html element properties

// #region changing of the element content

const submitButton = document.querySelector(".create-task-block__button");
console.log(submitButton.innerText);
console.log(submitButton.textContent);

// submitButton.textContent = "Create a new task";
// submitButton.textContent = "<b>Create a new task</b>";

// #region innerHTML

// console.log(tasksBlock.innerHTML); // the whole this element layout was outputted as a sting
// submitButton.textContent = "<b>Create a new task</b>";
// submitButton.innerText = "<b>Create a new task</b>";
submitButton.innerHTML = "<b>Create a new task</b>"; // the difference between innerHTML and innerText (textContent) is that the code (e.g. tags) is processing only in the innerHTML

// tasksBlock.innerHTML = "<b>Alena</b>";

// #endregion innerHTML

// #endregion changing of the element conte nt

// #region children children

const createTaskForm = document.querySelector(".create-task-block");
console.log(createTaskForm.children); // the HTML collection is outputted; it has all children which are inside the form;
// the children are only for reading, they cannot be changed.

createTaskForm.children = null;

// #endregion children children

// #region data-attributes

const firstNavButton = document.querySelector(".main-navigation__button-item");
// to get data attribute
console.log(firstNavButton.dataset); // the object is outputted that has a key -- button-id (data attribute is data-button-id)
// it can be used, we can refer to this attribute
console.log(
  "firstButtonClass.dataset.buttonId",
  firstNavButton.dataset.buttonId
);
console.log(firstNavButton.dataset.buttonMainId);

// data attribute can be changed
firstNavButton.dataset.buttonId = 10;
console.log(
  "firstButtonClass.dataset.buttonId",
  firstNavButton.dataset.buttonId
);

// #endregion data-attributes

// #region style properties; it can be used for getting and changing the certain element style

console.log(firstNavButton.style); // we received a huge objet with many properties, that are responsible for styles.
firstNavButton.style.fontWeight = "bold";
firstNavButton.style.boxShadow = "inset 0 0 0 3px white";
// firstNavButton.style.color = "green";

// #endregion style properties; it can be used for getting and changing the certain element style

// #region
// #endregion
