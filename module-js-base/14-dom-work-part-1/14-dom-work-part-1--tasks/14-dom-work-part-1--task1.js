// #region 14-dom-work-part-1 task1, creating elements

// #region task 1 -- using innerHTML

function renderForm() {
  const body = document.querySelector("body");

  const insertedHtml = `<form class="create-user-form">
    <label>
        Имя
        <input type="text" name="userName" placeholder="Введите ваше имя">
    </label>
    <label>
        Пароль
        <input type="password" name="password" placeholder="Придумайте Пароль">
    </label>
    <button type="submit">
        Подтвердить
    </button>
</form>`;

  body.innerHTML = insertedHtml;

  // #endregion task 1 -- using innerHTML

  // #region using createElement()

  const formEl = document.createElement("form");
  formEl.className = "create-user-form";

  const createInputEl = (content, inputType, inputName, placeholder) => {
    const labelEl = document.createElement("label");
    labelEl.innerText = `${content}`;
    const inputEl = document.createElement("input");
    inputEl.type = `${inputType}`;
    inputEl.name = `${inputName}`;
    inputEl.placeholder = `${placeholder}`;
    labelEl.append(inputEl);
    return labelEl;
  };

  const createButtonEl = (type, buttonName) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = `${type}`;
    buttonEl.textContent = `${buttonName}`;
    return buttonEl;
  };

  formEl.append(
    createInputEl("Имя", "text", "userName", "Введите имя"),
    createInputEl("Пароль", "password", "password", "Придумайте пароль"),
    createButtonEl("submit", "Подтвердить")
  );

  body.append(formEl);

  // #endregion using createElement()
}

renderForm();

// #endregion 14-dom-work-part-1 task1, creating elements

// https://codepen.io/aleriv1/pen/NPrNjWq

// https://codesandbox.io/p/sandbox/7vvymp
