/* 
Вы отлично справились с поставленной задачей, и теперь все элементы отрисовываются правильно. Теперь вам хотят предоставить дело посложнее. Необходимо реализовать логику создания новых задач при помощи формы по селектору .create-task-block.

Используйте предыдущий код и повесь обработчик событий submit на форму по селектору .create-task-block. При отправке формы создавайте новую задачу в массиве tasks и в DOM-дереве (внутри тега по селектору .tasks-list). id должен быть для каждой задачи уникальным. Текст для задачи берется из текстового поля по селектору .create-task-block__input.

Подсказка: для получения уникального id можно воспользоваться Date.now().
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
  tasksList.innerHTML = "";

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

  tasks.forEach(({ id, completed, text }) => {
    const task = createTaskEl(id, completed, text);
    tasksList.append(task);
  });
}

renderTasks(tasks);

// #region 14-dom-work task1s

function addTask(tasks) {
  // В задании добавлять задачи в массив task; но ведь одно из фундаментальный правил react -- исходой значение должно быть неизменным, творим (вместе с библиотекой) над копией
  const updatedTasks = [...tasks];

  function addTaskToArray(
    text = "new task",
    id = String(Date.now()),
    completed = false
  ) {
    return { id, completed, text };
  }

  // #region 14-dom-work task2

  const emptyTask = "Название задачи не должно быть пустым";
  const sameNameTask = "Задача с таким названием уже существует";

  function createErrorMessage(message) {
    const errorMessageBlock = document.createElement("span");
    errorMessageBlock.classList.add("error-message-block");
    errorMessageBlock.innerText = message;
    return errorMessageBlock;
  }

  // #endregion 14-dom-work task2

  const createTaskBlock = document.querySelector(".create-task-block");

  createTaskBlock.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = event.target.elements.taskName.value;

    // #region 14-dom-work task2

    if (document.querySelector(".error-message-block")) {
      document.querySelector(".error-message-block").remove();
    }

    if (!text) {
      createTaskBlock.append(createErrorMessage(emptyTask));
      return;
    } else if (
      updatedTasks.some(({ text: existingTask }) => {
        return text === existingTask;
      })
    ) {
      createTaskBlock.append(createErrorMessage(sameNameTask));
      return;
    }

    // #endregion 14-dom-work task2

    updatedTasks.push(addTaskToArray(text));
    renderTasks(updatedTasks);
  });
}

addTask(tasks);

// #endregion 14-dom-work task1s

// https://codesandbox.io/p/sandbox/d25z5v
