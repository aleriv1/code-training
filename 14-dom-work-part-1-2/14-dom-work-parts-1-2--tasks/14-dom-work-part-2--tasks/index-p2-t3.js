// #region 14-dom-work part 1 task 2

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

let currentTaskId = null;

const tasksList = document.querySelector(".tasks-list");

function renderTasks() {
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

renderTasks();

// #endregion 14-dom-work part 1 task 2

// #region 14-dom-work part 2 task 1

function addTask() {
  function addTaskToArray(
    text = "new task",
    id = String(Date.now()),
    completed = false
  ) {
    return { id, completed, text };
  }

  // #region 14-dom-work part 2 task 2

  const emptyTask = "Название задачи не должно быть пустым";
  const sameNameTask = "Задача с таким названием уже существует";

  function createErrorMessage(message) {
    const errorMessageBlock = document.createElement("span");
    errorMessageBlock.classList.add("error-message-block");
    errorMessageBlock.innerText = message;
    return errorMessageBlock;
  }

  // #endregion 14-dom-work part 2 task 2

  const createTaskBlock = document.querySelector(".create-task-block");

  createTaskBlock.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = event.target.elements.taskName.value;

    // #region 14-dom-work part 2 task 2

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

    // #endregion 14-dom-work part 2 task 2

    tasks = [...tasks, addTaskToArray(text)];
    // "Поговорив" с Grok об аллюзиях на React :), перекинул немутирующее присванивание сюда, также заменив const tasks в начале на let, чтобы можно было присваивать
    renderTasks(tasks);
  });
}

addTask();

// #endregion 14-dom-work part 2 task 1

// #region 14-dom-work part 2 task 3

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

  deleteModalButtonConfirm.addEventListener("click", () => {
    if (!currentTaskId) return;
    tasks = [
      ...tasks.filter(({ id }) => {
        return id !== currentTaskId;
      }),
    ];
    modalOverlay.classList.add("modal-overlay_hidden");
    currentTaskId = null;
    renderTasks();
  });

  deleteModalButtons.append(deleteModalButtonConfirm);

  deleteModal.append(deleteModalButtons);

  modalOverlay.insertAdjacentElement("beforeend", deleteModal);

  return modalOverlay;
};

const modalOverlay = createDeleteModal();
document.querySelector("body").append(modalOverlay);

tasksList.addEventListener("click", (e) => {
  const isDeleteButton = e.target.closest(".task-item__delete-button");
  if (isDeleteButton) {
    modalOverlay.classList.remove("modal-overlay_hidden");
    const taskItem = e.target.closest(".task-item");
    currentTaskId = taskItem.dataset.id;
  }
});

// #endregion 14-dom-work part 2 task 3

// https://codesandbox.io/p/sandbox/xzf2w5

/* 14-dom-work part 1 task 2

Вы вместе с командой разработки создаете приложение для контроля задач. Сейчас команда сделала только макет, чтобы приложение было красивым. Вам поручили задачу отрисовать все данные о задачах при помощи JavaScript-кода (способ выберите самостоятельно). У вас имеется массив tasks и HTML-шаблон, по которому необходимо создать элементы для каждой задачи.

Добавьте все HTML-элементы с задачами в элемент по селектору .tasks-list.

HTML-шаблон для задачи:

<div class\="task-item" data-task-id\="1"\> <div class\="task-item\_\_main-container"\> <div class\="task-item\_\_main-content"\> <form class\="checkbox-form"\> <input class\="checkbox-form\_\_checkbox" type\="checkbox" id\="task-1"\> <label for\="task-1"\></label\> </form\> <span class\="task-item\_\_text"\> Посмотреть новый урок по JavaScript </span\> </div\> <button class\="task-item\_\_delete-button default-button delete-button"\> Удалить </button\> </div\> </div\>

Массив задач:

const tasks = \[ { id: '1138465078061', completed: false, text: 'Посмотреть новый урок по JavaScript', }, { id: '1138465078062', completed: false, text: 'Выполнить тест после урока', }, { id: '1138465078063', completed: false, text: 'Выполнить ДЗ после урока', }, \];

Данные об _id_ должны использоваться в _data-task-id_, в _id_ у _input_ и в _for_ у _label_. Значение свойства _text_ должно добавляться в тег _<span>_ по селектору _.task-item\_\_text_.

**Примечание:** атрибут for в JavaScript-коде пишется как htmlFor.

У вас имеются начальные файлы: [ссылка](https://github.com/vmschool/14). Используйте их для разработки логики приложения.
 */

/* 14-dom-work part 2 task 1

Вы отлично справились с поставленной задачей, и теперь все элементы отрисовываются правильно. Теперь вам хотят предоставить дело посложнее. Необходимо реализовать логику создания новых задач при помощи формы по селектору .create-task-block.

Используйте предыдущий код и повесь обработчик событий **submit** на форму по селектору .create-task-block. При отправке формы создавайте новую задачу в массиве tasks и в DOM-дереве (внутри тега по селектору .tasks-list). id должен быть для каждой задачи уникальным. Текст для задачи берется из текстового поля по селектору .create-task-block\_\_input.

**Подсказка:** для получения уникального id можно воспользоваться Date.now().

У вас имеются начальные файлы: [ссылка](https://github.com/vmschool/14). Используйте их для разработки логики приложения.
 */

/* 14-dom-work part 2 task 2

**Молодцы!** Вы справились с задачей и отдали ее на код-ревью старшему разработчику. Но старший разработчик обнаружил, что не нужно отправлять форму, если значение пустое либо задача с таким же названием уже существует. Поэтому вас просят добавить валидацию в ваш код.

Для блока с ошибкой создавай тег <span> по селектору .error-message-block. Внутрь данного тега будет помещаться текст с ошибкой.

Если форма была отправлена с пустым полем, то отобразите ошибку: «Название задачи не должно быть пустым», добавив блок с ошибкой в форму по селектору .create-task-block. Если же задача с введенным в поле названием уже существует, то отображайте ошибку: «Задача с таким названием уже существует.»

Если при отправке формы ошибок не было найдено, то удалите блок с ошибкой, если он существует в DOM, и создайте новую задачу в списке.

У вас имеются начальные файлы: [ссылка](https://github.com/vmschool/14). Используйте их для разработки логики приложения.
 */

/* 14-dom-work part 2 task 3

Чтобы успешно завершить все ваши задачи на проекте, осталось выполнить только удаление задач. Для этого имеется кнопка «Удалить». Но иногда пользователи могут случайно нажать на кнопку, и из-за этого удалится задача. В таком случае обычно создаются модальные окна, которые спрашивают пользователя, действительно ли он хочет удалить задачу. Сейчас вам будет необходимо реализовать такое модальное окно.

Стили для модального окна и HTML-шаблон у вас уже имеются. Создайте HTML-элемент модального окна с помощью JavaScript и добавь его внутри тега <body>.

Шаблон модального окна:  

<div class\="modal-overlay modal-overlay\_hidden"\> <div class\="delete-modal"\> <h3 class\="delete-modal\_\_question"\> Вы действительно хотите удалить эту задачу? </h3\> <div class\="delete-modal\_\_buttons"\> <button class\="delete-modal\_\_button delete-modal\_\_cancel-button"\> Отмена </button\> <button class\="delete-modal\_\_button delete-modal\_\_confirm-button"\> Удалить </button\> </div\> </div\> </div\>

Класс "modal-overlay\_hidden" отвечает за открытие и закрытие модального окна. Если оно открыто, то класса "modal-overlay\_hidden" нету, если закрыто, то класс "modal-overlay\_hidden" присутствует.

Вам необходимо открывать модальное окно после нажатия на любую кнопку «Удалить» около каждой задачи. Повесьте обработчик события «**click**» на элемент по селектору .tasks-list. Используйте делегирование событий для того, чтобы отлавливать клики на кнопки для удаления задач.

В модальном окне есть 2 кнопки: «Отмена» и «Удалить». «Отмена» закрывает модальное окно, а «Удалить» удаляет задачу из массива tasks и из DOM-дерева и закрывает модальное окно.

Для удаления задачи используйте атрибут data-task-id, который содержит информацию о свойстве id объекта задачи из массива tasks. По данному id вы сможете найти нужную задачу и удалить ее.

У вас имеются начальные файлы: [ссылка](https://github.com/vmschool/14). Используйте их для разработки логики приложения.
 */
