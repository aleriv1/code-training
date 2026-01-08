/* 
Вы отлично справились с поставленной задачей, и теперь все элементы отрисовываются правильно. Теперь вам хотят предоставить дело посложнее. Необходимо реализовать логику создания новых задач при помощи формы по селектору .create-task-block.

Используйте предыдущий код и повесь обработчик событий submit на форму по селектору .create-task-block. При отправке формы создавайте новую задачу в массиве tasks и в DOM-дереве (внутри тега по селектору .tasks-list). id должен быть для каждой задачи уникальным. Текст для задачи берется из текстового поля по селектору .create-task-block__input.

Подсказка: для получения уникального id можно воспользоваться Date.now().
 */

// const tasks = [
let tasks = [
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

// const updatedTasks = [...tasks];

const tasksList = document.querySelector(".tasks-list");

function renderTasks(tasks) {
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

function addTask() {
  // В задании добавлять задачи в массив task; но ведь одно из фундаментальный правил react -- исходой значение должно быть неизменным, творим (вместе с библиотекой) над копией
  // tasks = [...tasks];

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
      tasks.some(({ text: existingTask }) => {
        return text === existingTask;
      })
    ) {
      createTaskBlock.append(createErrorMessage(sameNameTask));
      return;
    }

    // #endregion 14-dom-work task2

    // tasks.push(addTaskToArray(text));
    tasks = [...tasks, addTaskToArray(text)];
    renderTasks(tasks);
  });
}

addTask();

const createDeleteModal = () => {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay", "modal-overlay_hidden");
  modalOverlay.classList.add("modal-overlay");

  const deleteModal = document.createElement("div");
  deleteModal.classList.add("delete-modal");

  const deleteModalQuestion = document.createElement("h3");
  deleteModalQuestion.classList.add("delete-modal__question");
  deleteModalQuestion.textContent =
    "Вы действительно хотите удалить эту задачу?";

  deleteModal.append(deleteModalQuestion);

  const deleteModalButtons = document.createElement("div");
  deleteModalButtons.classList.add("delete-modal__buttons");

  const deleteModalButtonCancel = document.createElement("button");
  deleteModalButtonCancel.classList.add(
    "delete-modal__button",
    "delete-modal__cancel-button"
  );
  deleteModalButtonCancel.textContent = "Отмена";
  deleteModalButtonCancel.addEventListener("click", () => {
    modalOverlay.classList.add("modal-overlay_hidden");
  });
  deleteModalButtons.append(deleteModalButtonCancel);

  const deleteModalButtonConfirm = document.createElement("button");
  deleteModalButtonConfirm.classList.add(
    "delete-modal__button",
    "delete-modal__confirm-button"
  );
  deleteModalButtonConfirm.textContent = "Удалить";
  deleteModalButtons.append(deleteModalButtonConfirm);

  deleteModal.append(deleteModalButtons);

  modalOverlay.insertAdjacentElement("beforeend", deleteModal);

  return modalOverlay;
};

document.querySelector("body").append(createDeleteModal());

tasksList.addEventListener("click", (e) => {
  const isDeleteButton = e.target.closest(".task-item__delete-button");
  if (isDeleteButton) {
    const modalOverlay = document.querySelector(".modal-overlay");
    modalOverlay.classList.remove("modal-overlay_hidden");
    const taskItem = e.target.closest(".task-item");
    console.log(taskItem.dataset.id);
    const deleteModalConfirmButton = document.querySelector(
      ".delete-modal__confirm-button"
    );
    deleteModalConfirmButton.addEventListener("click", () => {
      const filteredTasks = tasks.filter(({ id }) => {
        return id !== taskItem.dataset.id;
      });
      tasks = [...filteredTasks];
      console.log(tasks);
      renderTasks(tasks);
    });
  }
});

// console.log(createDeleteModal());

// #endregion 14-dom-work task1s

// https://codesandbox.io/p/sandbox/xzf2w5
