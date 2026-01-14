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
