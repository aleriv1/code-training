/* Promise.all([ // returns the promise, which will be fulfilled when all promises wass passed as an array are fulfilled, or will be rejectedwhen at least one promise will be rejected
  new Promise(),
  new Promise(),
  new Promise(),
  new Promise(),
]) */

// Это метод, который нужен, чтобы обработать список некоторых промимсов.

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos/";
const todosIds = [43, 10, 5, 108, 101];
const dataContainer = document.querySelector("#data-container");

// fetch("https://jsonplaceholder.typicode.com/todos/43").then((res) => {
//   console.log(res);
// });

const createTodoElement = (text) => {
  const todoElement = document.createElement("li");
  const todoElementAnchor = document.createElement("a");

  todoElementAnchor.href = "#";
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor);

  return todoElement;
};

const getTodosByIds = (ids) => {
  // lets generate promise array
  const requests = ids.map((id) => {
    return fetch(`${TODOS_URL}/${id}`);
  });
  Promise.all(requests)
    .then((response) => {
      // console.log("results", results);
      // ^! does Promise.all pass to then results of fullfiling of every promise in the array... it just do someting after fullfilling of every promise (as a trigger on state (of all))
      const dataResult = response.map((response) => response.json()); // it is asyncrhonous function, call, so we need Promise.all
      return Promise.all(dataResult);
      // Promise.all([
      //   response.json,
      //   response.json,
      //   response.json,
      // ])
    })
    .then((todos) => {
      console.log("todos", todos);
      todos.forEach((todo) => {
        const todoHTML = createTodoElement(todo.title);
        dataContainer.append(todoHTML);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

getTodosByIds(todosIds);
