/* 

Вам дан HTML-код: ссылка.

Ваши коллеги-разработчики реализовали систему, благодаря которой можно получать список пользователей по url: ссылка.

Вам необходимо получить всех пользователей с помощью fetch() и добавить данные об имени каждого пользователя внутрь html-элемента с id="data-container".

Для удобства необходимо добавить элемент <span> с текстом “Загрузка...” перед загрузкой пользователей, и спрятать этот элемент после загрузки данных о пользователях.

Шаблон для HTML-элемента пользователя выглядит следующим образом:

<li><a href="#">Имя пользователя</a></li>
Примечание: обязательно не забывайте прописывать .catch() (или используйте конструкцию try...catch). В них просто выводите ошибку в консоль при помощи console.error().

*/

const dataContainer = document.querySelector("#data-container");

const createUserElement = (userName) => {
  const userEl = document.createElement("li");
  const userElAnchor = document.createElement("a");

  userElAnchor.href = "#";
  userElAnchor.textContent = userName;
  userEl.append(userElAnchor);

  return userEl;
};

const toggleLoader = () => {
  const loaderHTML = document.querySelector("#loader");
  const isHidden = loaderHTML.hasAttribute("hidden");

  if (isHidden) {
    loaderHTML.removeAttribute("hidden");
  } else {
    loaderHTML.setAttribute("hidden", "");
  }
};

function getAllUsers() {
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  // const USERS_URL = "https://jsonplaceholder.typicode.com/user"; // catch test

  toggleLoader();

  fetch(USERS_URL)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("request error");
      }
      return resp.json();
    })
    .then((users) => {
      console.log(users);
      users.forEach(({ name }) => {
        const userHTML = createUserElement(name);
        dataContainer.append(userHTML);
      });
    })
    .catch((error) => {
      console.log(error);
      const weWillFixLine = `We'll fix it`;
      dataContainer.textContent = weWillFixLine;
    })
    .finally(() => {
      toggleLoader();
    });
}

getAllUsers();

// https://codesandbox.io/p/sandbox/6gndg7
