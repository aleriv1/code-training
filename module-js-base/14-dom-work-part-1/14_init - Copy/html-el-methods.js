// #region createElemnt

/* 
<a class="main-navigation__button-item" href="#tasks_today" data-button-id="1">
      Задачи на Сегодня
    </a>
 */

const newNavButton = document.createElement("a");

console.log("newNavButton", newNavButton); // This element does not yet exist in the DOM tree.

newNavButton.className = "main-navigation__button-item";
newNavButton.href = "#tasks_expired";
newNavButton.dataset.buttonId = "4";
newNavButton.textContent = "Expired, overdue tasks";

// console.log("newNavButton", newNavButton); // This element does not yet exist in the DOM tree.
console.log(newNavButton); // This element does not yet exist in the DOM tree.

// #endregion createElemnt

// #region adding an element to the dom

// #region append, prepend
// we must understand, where to put the element; for this we need to get the parent element

const mainNavigation = document.querySelector(".main-navigation");
console.log("mainNavigation.dataset", mainNavigation.dataset);

function clodneEl() {
  return newNavButton.cloneNode(true);
}
// mainNavigation.insertAdjacentElement("afterbegin", clodneEl());

const cloneElArr = () => newNavButton.cloneNode(true);

// mainNavigation.append(newNavButton);
// mainNavigation.prepend(newNavButton);
// mainNavigation.insertAdjacentElement("beforeend", newNavButton);

let dataIdAttr = 3;
// mainNavigation.append(createNavButton());

mainNavigation.insertAdjacentElement("afterbegin", createNavButton());
mainNavigation.insertAdjacentElement("beforeend", createNavButton());

// function createNavButton(dataId) {
function createNavButton() {
  console.log(dataIdAttr++);
  const newNavButton = document.createElement("a");
  newNavButton.className = "main-navigation__button-item";
  newNavButton.href = "#tasks_expired";
  newNavButton.dataset.buttonId = dataIdAttr;
  newNavButton.textContent = "Expired, overdue tasks";
  return newNavButton;
}

/* 
// Замыкание: dataId внутри, инкрементируется автоматически
const createNavButton = (function() {
  let dataId = 0; // Приватный счётчик, стартует с 0

  return function() {
    console.log("Текущий dataId перед инкрементом:", dataId);
    const newNavButton = document.createElement("a");
    newNavButton.className = "main-navigation__button-item";
    newNavButton.href = "#tasks_expired";
    newNavButton.dataset.buttonId = ++dataId; // Инкремент и присвоение (становится 1, 2, 3...)
    newNavButton.textContent = "Expired, overdue tasks";
    return newNavButton;
  };
})();

// Использование: каждый вызов — новый ID
const mainNavigation = document.querySelector(".main-navigation");
mainNavigation.append(createNavButton()); // buttonId = 1
mainNavigation.append(createNavButton()); // buttonId = 2
// И т.д.
 */

// #endregion append, prepend

// #endregion adding an element to the dom

// #region remove moethod

// mainNavigation.remove();

// #endregion remove moethod

// #region closest(); it reminds querySelector() method; it search the closeest parent element of the element that are beore dot

const taskItemText = document.querySelector(".task-item__text");
console.log(taskItemText);

const taskItem = taskItemText.closest(".task-item");
console.log(taskItem);

// #endregion closest(); it reminds querySelector() method; it search the closeest parent element of the element that are beore dot

// #region classList: add, remove, toggle

const firstNavigationButton = document.querySelector(
  ".main-navigation__button-item"
);

firstNavigationButton.classList.add("main-navigation__button-item_selected");
firstNavigationButton.classList.remove("main-navigation__button-item_selected");
firstNavigationButton.classList.toggle("main-navigation__button-item_selected");
firstNavigationButton.classList.toggle("main-navigation__button-item_selected");
firstNavigationButton.classList.toggle("main-navigation__button-item_selected");

// #endregion classList: add, remove, toggle

// #region attribute methods

const createTaskInput = document.querySelector(".create-task-block__input");
console.log(createTaskInput.hasAttribute("name"));
console.log(createTaskInput.getAttribute("value"));
createTaskInput.removeAttribute("placeholder");
createTaskInput.removeAttribute("value");
createTaskInput.setAttribute("placeholder", "Alena");
createTaskInput.setAttribute("value", "Alena");

// #endregion attribute methods
