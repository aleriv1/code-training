// #region callback

/* const promise = new Promise(() => { })

setTimeout(() => { }, 1000)

// #endregion callback

const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1'

const getTodo = (callback) => {
  return fetch(FIRST_TODO_URL)
    .then((response) => response.json())
    .then((todo) => {
      console.log('todo', todo)
      return callback(todo)
    })
    .then((res) => {
      console.log('res', res)
      return res
    })
    .catch((err) => {
      console.log('err', err)
    })
}

// getTodo()
getTodo((todoItem) => {
  console.log('todoItem', todoItem)
  return getTodo((todoItem) => {
    console.log('todoItem the second layer', todoItem)
    return getTodo((todoItem) => {
      console.log('todoItem the third layer', todoItem)
      return 'reutrn 3'
    })
    // return 'reutrn 2'
  })
  // return 'reutrn 1'
})
  .then((finalRes) => {
    console.log('finalRes', finalRes)
  }) */

// #region callback text

function firstFunc(ourCallback) {
  setTimeout(() => {
    console.log('Hello')
    ourCallback()
  }, 100);
}

const secondFunc = () => console.log('World')

firstFunc(secondFunc)
// secondFunc()

setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log('st3')
      return
    }, 200);
    console.log('st2')
  }, 200);
  console.log('sе1')
}, 200);

const wait = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

wait(1000)
  .then(() => wait(1000))
  .then(() => wait(1000))
  .then(() => wait(1000))
  .then(() => console.log('Hello World!'));

// #endregion callback text
