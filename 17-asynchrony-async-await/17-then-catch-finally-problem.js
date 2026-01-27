// #region the main problem of then, catch, finally

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

fetch(USERS_URL, {
  // default action for getting data
})
  .then((resp) => {
    return resp.json();
  })
  .then((users) => {
    console.log("users", users);
    const firstUsrId = users[0]?.id;
    console.log("firstUsrId", firstUsrId);
    fetch(`${TODOS_URL}?userId=${firstUsrId}`)
      .then((response) => response.json())
      .then((todos) => {
        console.log("todos", todos);
      })
      .catch((error) => {
        console.error(error);
      });
  })
  .catch((err) => console.error(err));
// код начинает расти вправо -- это нечитательно

// #endregion the main problem of then, catch, finally
