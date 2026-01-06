/* 
Вы вместе с командой разработки создаете приложение для контроля задач. Сейчас команда сделала только макет, чтобы приложение было красивым. Вам поручили задачу отрисовать все данные о задачах при помощи JavaScript-кода (способ выберите самостоятельно). У вас имеется массив tasks и HTML-шаблон, по которому необходимо создать элементы для каждой задачи.

Добавьте все HTML-элементы с задачами в элемент по селектору .tasks-list.

HTML-шаблон для задачи:

<div class="task-item" data-task-id="1">
    <div class="task-item__main-container">
        <div class="task-item__main-content">
            <form class="checkbox-form">
                <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
                <label for="task-1"></label>
            </form>
            <span class="task-item__text">
                Посмотреть новый урок по JavaScript
            </span>
        </div>
        <button class="task-item__delete-button default-button delete-button">
            Удалить
        </button>
    </div>
</div>
Массив задач:

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];
Данные об id должны использоваться в data-task-id, в id у input и в for у label. Значение свойства text должно добавляться в тег <span> по селектору .task-item__text.

Примечание: атрибут for в JavaScript-коде пишется как htmlFor.

У вас имеются начальные файлы: ссылка. Используйте их для разработки логики приложения.
 */

const tasks = [
  {
    id: "1138465078061",
    completed: true,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: true,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

function renderTasks(tasks) {
  const tasksList = document.querySelector(".tasks-list");

  // #region innerHTML реализация -- готовимся к vue :)

  function returnTask(id, completed, text) {
    return `<div class="task-item" data-task-id="${id}">
            <div class="task-item__main-container">
              <div class="task-item__main-content">
                <form class="checkbox-form">
                  <input class="checkbox-form__checkbox" type="checkbox" id="${id}" ${
      completed ? "checked" : ""
    }>
                  <label for="${id}"></label>
                </form>
                <span class="task-item__text">
                  ${text}
                </span>
              </div>
              <button class="task-item__delete-button default-button delete-button">
                Удалить
              </button>
            </div>
          </div>`;
  }

  const tasksString = tasks
    .map(({ id, completed, text }) => returnTask(id, completed, text))
    .join("");

  tasksList.innerHTML = tasksString;

  // #endregion innerHTML реализация -- готовимся к vue :)

  // #region createElement реализация -- react близко... :)

  function createTaskEl(id, completed, text) {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");
    taskItem.dataset.id = id;

    const taskItemMainContainer = document.createElement("div");
    taskItemMainContainer.classList.add("task-item__main-container");

    const taskItemMainContent = document.createElement("div");
    taskItemMainContent.classList.add("task-item__main-content");

    const checkboxForm = document.createElement("form");
    checkboxForm.classList.add("checkbox-form");

    const checkboxFormCheckbox = document.createElement("input");
    checkboxFormCheckbox.classList.add("checkbox-form__checkbox");

    checkboxFormCheckbox.setAttribute("type", "checkbox");
    checkboxFormCheckbox.id = id;

    completed ? checkboxFormCheckbox.setAttribute("checked", true) : "";

    const labelInput = document.createElement("label");
    labelInput.setAttribute("htmlFor", id);

    checkboxForm.append(checkboxFormCheckbox, labelInput);

    const taskItemText = document.createElement("span");
    taskItemText.classList.add("task-item__text");
    taskItemText.innerText = text;
    taskItemMainContent.append(checkboxForm, taskItemText);

    const taskItemDeleteButton = document.createElement("button");
    taskItemDeleteButton.classList.add(
      "task-item__delete-button",
      "default-button",
      "delete-button"
    );
    taskItemDeleteButton.innerText = "Удалить";
    taskItemMainContainer.append(taskItemMainContent, taskItemDeleteButton);
    taskItem.append(taskItemMainContainer);

    return taskItem;
  }

  console.log(createTaskEl("1", true, "la-la"));

  tasks.forEach(({ id, completed, text }) => {
    const task = createTaskEl(id, completed, text);
    tasksList.append(task);
    // tasksList.append(createTaskEl(id, completed, text));
  });

  // #endregion createElement реализация -- react близко... :)
}

renderTasks(tasks);

// https://codepen.io/aleriv1/pen/LEZNjQO

// https://codesandbox.io/p/sandbox/p73ynj
