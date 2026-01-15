/* 

Вы молодцы! Если вы дошли до этого задания, то вы умеете получать данные и отображать их в HTML. Сейчас же задача будет посложнее.

Вам необходимо создать функцию getUsersByIds(), которая будет принимать массив, состоящий из id пользователей. Вам нужно получить всех пользователей, у которых есть данные значения id. Используйте некоторый код из предыдущего задания и Promise.all() для решения поставленной задачи.

Добавьте данные об имени каждого пользователя внутрь html-элемента с id="data-container". Также для удобства необходимо добавить элемент <span> с текстом “Загрузка...” перед загрузкой пользователей, и спрятать этот элемент после загрузки данных о пользователях.

Шаблон для HTML-элемента пользователя выглядит следующим образом:

<li><a href="#">Имя пользователя</a></li>;
Для тестирования функции getUsersByIds() используйте данный код:

getUsersByIds([5, 6, 2, 1]);
Примечание: обязательно не забывайте прописывать блоки .catch() (или используйте конструкцию try...catch). В них просто выводите ошибку в консоль при помощи console.error().

 */

const dataContainer = document.querySelector("#data-container");

const toggleLoader = () => {
  const loaderHTML = document.querySelector("#loader");
  const isHidden = loaderHTML.hasAttribute("hidden");

  if (isHidden) {
    loaderHTML.removeAttribute("hidden");
  } else {
    loaderHTML.setAttribute("hidden", "");
  }
};

const createUserElement = (userName) => {
  const userEl = document.createElement("li");
  const userElAnchor = document.createElement("a");

  userElAnchor.href = "#";
  userElAnchor.textContent = userName;
  userEl.append(userElAnchor);

  return userEl;
};

const idsArray = [5, 3, 10];

const getUserById = (ids) => {
  toggleLoader();
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";

  const userRequests = ids.map((id) => {
    return fetch(`${USERS_URL}/${id}`);
  });

  console.log(userRequests);

  Promise.all(userRequests)
    .then((userResponses) => {
      const userResponsesParced = userResponses.map((userReponse) => {
        return userReponse.json();
      });
      // console.log(userResponsesParced);
      return Promise.all(userResponsesParced);
    })
    .then((users) => {
      console.log(users);
      users.forEach(({ name }) => {
        const userName = createUserElement(name);
        dataContainer.append(userName);
      });
    })
    .catch((er) => console.error(er))
    .finally(() => {
      toggleLoader();
    });
};

getUserById(idsArray);

// https://codesandbox.io/p/sandbox/yw2dh7
