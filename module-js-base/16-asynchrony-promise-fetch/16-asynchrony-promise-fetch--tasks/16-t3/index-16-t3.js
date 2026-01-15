// #region 16-asynchrony-rpomis-fetch task1

/* 

Вам дан HTML-код: ссылка.

Ваши коллеги-разработчики реализовали систему, благодаря которой можно получать список пользователей по url: ссылка.

Вам необходимо получить всех пользователей с помощью fetch() и добавить данные об имени каждого пользователя внутрь html-элемента с id="data-container".

Для удобства необходимо добавить элемент <span> с текстом “Загрузка...” перед загрузкой пользователей, и спрятать этот элемент после загрузки данных о пользователях.

Шаблон для HTML-элемента пользователя выглядит следующим образом:

<li><a href="#">Имя пользователя</a></li>
Примечание: обязательно не забывайте прописывать .catch() (или используйте конструкцию try...catch). В них просто выводите ошибку в консоль при помощи console.error().*/

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

const dataContainer = document.querySelector("#data-container");

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

// #endregion 16-asynchrony-rpomis-fetch task1

// #region 16-asynchrony-rpomis-fetch task2

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
    .catch((er) => console.error())
    .finally(() => {
      toggleLoader();
    });
};

getUserById(idsArray);

// https://codesandbox.io/p/sandbox/yw2dh7

// #endregion 16-asynchrony-rpomis-fetch task2

// #region 16-asynchrony-rpomis-fetch task3

/* 
Представьте, что у вас появился новый проект, где есть следующая функциональность: отображение фотографии, которая быстрее всего загрузилась.

Создайте функцию getFastestLoadedPhoto(), которая принимает в себя 1 параметр ids, являющийся массивом параметров id у объекта photo. Чтобы получить информацию о фото, вам необходимо использовать следующий url: «https://api.slingacademy.com/v1/sample-data/photos/1» ("1" — это id фотографии). С помощью массива ids получите данные о фотографии, которая быстрее всего загрузилась при fetch() запросе. Для решения поставленной задачи используйте Promise.race().

Для удобства необходимо добавить элемент <span> с текстом “Загрузка...” перед загрузкой фотографии, и спрятать этот элемент после загрузки данных.

Для создания HTML-элемента фотографии используйте данный шаблон:

<li class="photo-item">
  <img class="photo-item__image" src="https://api.slingacademy.com/public/sample-photos/60.jpeg">
  <h3 class="photo-item__title">
    accusamus beatae ad facilis cum similique qui sunt
  </h3>
</li>
В src у <img> должно быть подставлено значение свойства url у фотографии, а в тег <h3> - значение свойства title. Добавляйте конечную фотографию в элемент с id="data-container".

getFastestLoadedPhoto([60, 12, 55]);
Примечание: обязательно не забывайте прописывать .catch()(или используйте конструкцию try...catch).В них просто выводите ошибку в консоль при помощи console.error()
 */

const photoArray = [60, 12, 55];

const createPhotoEl = (url, title) => {
  const liImage = document.createElement("li");
  liImage.classList.add("photo-item");

  const image = document.createElement("img");
  image.classList.add("photo-item__image");
  image.src = `${url}`;
  liImage.append(image);

  const imgHeading = document.createElement("h3");
  imgHeading.classList.add("photo-item__title");
  imgHeading.textContent = `${title}`;

  liImage.append(imgHeading);

  return liImage;

  /*   return `
  <li class="photo-item">
  <img class="photo-item__image" src="${url}">
  <h3 class="photo-item__title">
    ${title}
  </h3>
</li>
  `; */
};

const getFastestLoadedPhoto = (ids) => {
  toggleLoader();
  const photoFetch = ids.map((id) =>
    fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
  );
  Promise.race(photoFetch)
    .then((result) => {
      console.log(result);
      return result.json();
    })
    .then(({ photo: { url, title } }) => {
      const photoHTML = createPhotoEl(url, title);
      console.log(photoHTML);
      // dataContainer.innerHTML = photoHTML;
      dataContainer.append(photoHTML);
    })
    .catch((err) => console.error("error", err))
    .finally(() => toggleLoader());
};

getFastestLoadedPhoto(photoArray);

// https://codesandbox.io/p/sandbox/4p3vh3

// #endregion 16-asynchrony-rpomis-fetch task3
