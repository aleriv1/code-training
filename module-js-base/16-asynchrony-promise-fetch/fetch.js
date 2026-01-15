/* const developer = {
  name: "Aleksandr",
  // isJsDev: true,
  isJsDev: false, // for reject in promise
};

const promise = new Promise((resolve, reject) => {
  if (developer.isJsDev) {
    setTimeout(() => {
      resolve(`${developer.name} is a JS developer`); // function that called when promise is fulfilled successfully
    }, 3000);
  } else {
    reject(`${developer.name} is not a JS developer`);
  }
});

console.log(promise); // now it in pending status

promise
  .then(
    (successMessage) => {
      // then will be called, when resolve will be executed
      console.log("successMessage", successMessage);
      // then возвращает promise, so ...
    },
    (failureMessage) => {
      console.log(failureMessage);
    }
  )

  .catch((error) => {
    console.log("error", error);
    // ^! what is the difference between an error and its catching
    // ^! what is the error processing
  })
  .finally(() => {
    console.log("finally");
  });
 */

// #region fetch -- is a special function with which we cant data by URL

// const TODOS_URL = "https://jsonplaceholder.typicode.com/todos/";

// #region fetch explanation
/* 
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos/";
// const TODOS_URL = "https://jsonplaceholder.typicode.com/tods/"; // for catch branch

const result = fetch(TODOS_URL, {
  method: "GET", // get to get data
  // post -- to send, or update data
  // delete
});

// ^! we get the promise, which we can process

console.log("result", result);

result
  .then((response) => {
    console.log("response", response);
    if (!response.ok) {
      throw new Error("request error"); // the  special error class
      // ^! does error always takes the string -- will it always return the error message
    }
    return response.json(); // this method decode data in json format and represents the todos array
    // return response.text(); // in text format
  })
  // ^! .json returns the promise -- the box?
  .then((todos) => {
    console.log(todos); // resonse, inside then
    // we need to decode the response
  })
  .catch((error) => {
    console.log("error", error);
  });
 */
// #endregion fetch explanation

const createTodoElement = (text) => {
  const todoElement = document.createElement("li");
  const todoElementAnchor = document.createElement("a");

  todoElementAnchor.href = "#";
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor);

  return todoElement;
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

const getAllTodos = () => {
  const TODOS_URL = "https://jsonplaceholder.typicode.com/todos/";
  // const TODOS_URL = "https://jsonplaceholder.typicode.com/tods/"; // for catch branch

  toggleLoader(); // ^ loader we need to show immediately before data fetching

  const result = fetch(TODOS_URL, {
    method: "GET",
  });

  console.log("result", result);

  result
    .then((response) => {
      console.log("response", response);
      if (!response.ok) {
        throw new Error("request error");
      }
      return response.json();
    })
    .then((todos) => {
      console.log(todos);
      // todos.forEach(({ title }) => {
      todos.slice(0, 2).forEach(({ title }) => {
        // todos.forEach((todo) => {
        // const todoHTML = createTodoElement(todo.title);
        const todoHTML = createTodoElement(title);
        dataContainer.append(todoHTML);
      });
    })
    .catch((error) => {
      console.log("error func:", error);
    })
    .finally(() => {
      // ^ loader we need to hide when data was loaded or when an error is thrown
      toggleLoader();
    });
};

getAllTodos("");

// console.log(fetch("https://api.github.com/users"));
// fetch("https://api.github.com/users")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

function outputTable(users) {
  const table = document.createElement("table");

  for (const user of users) {
    const row = table.insertRow();

    const column1 = row.insertCell();
    column1.innerHTML = `<img class="avatar" src="${user.avatar_url}" />`;

    const column2 = row.insertCell();
    column2.innerHTML = `<a href="${user.html_url}">${user.login}</a>`;
  }

  // document.body.append(table);
  document.querySelector("#data-container1").append(table);
}

fetch("https://api.github.com/users")
  .then((resp) => {
    if (!resp) {
      throw new Error("request error");
    }
    return resp.json();
  })
  .then((data) => {
    outputTable(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    const loader = document.querySelector("#loader1");
    loader.style.display = "none";
  });

// #endregion fetch -- is a special function with which we cant data by URL
