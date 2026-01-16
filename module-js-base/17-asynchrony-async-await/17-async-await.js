// #region async/await

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
// const USERS_URL = "https://jsonplaceholder.typicode.com/usirs"; // for catch test
const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

// const getTodosWithUserData =  () => {};

// try, catch, finally

try {
  // here js will try to execute some code
} catch (error) { //error -- This is the error information that will be occur if any error occurs in try
  console.log('error', error)
} finally {
  console.log('finally')
}

const getTodosWithUserData = async () => {
  // keyword async before functions means that it returns promise -- it automaticallly makes the funciton return a promis
  try {
    // await -- construction for async reques processin
    const response = await fetch(USERS_URL); // if the function call is asynchronous -- it need to add await; await makes the function wait until it is executed; until it is executed the code will not move to the next line

    if (!response.ok) {
      throw new Error('error in recieving data about users')
    }

    console.log(response);

    const users = await response.json();
    console.log('users', users)
    const firstUserId = users[0]?.id;
    const todoResponse = await fetch(`${TODOS_URL}?userId=${firstUserId}`)

    if (!todoResponse.ok) {
      throw new Error("error in reciving data about todos");
    }

    const todos = await todoResponse.json()
    console.log('todos', todos)
  } catch (error) {
    console.log('error', error)
  } finally {
    console.log('finally')
  }
};

const promise = getTodosWithUserData();
// console.log('promis', promise);

// #endregion async/await

// #region await async text

async function sum() {
  return 2 + 2
}

function sumPr() {
  return new Promise((res, rej) => {
    res(2 + 2)
  })
}

const sumArr = async () => {
  return 2 + 2
}

sumArr().then((sum) => { console.log(sum) })

const asyncSum = sum()

// const resultAsyncSum = await asyncSum

// asyncSum.then((sum) => { console.log(sum) })

async function test() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('succes')
    }, 1000);
  })
  const result = await promise
  console.log(result)
}

test()

async function getData() {
  try {
    const result = await promise
    return result
  }
  catch (error) {

  }
}


async function getData1() {
  const result = await promise
  return result
}

getData()
  .then(result => {
    // образотка результрезультат
  })
  .catch(error => {
    console.error(`Ошибка ${error}`)
  })


// #region comparison

const url = "https://api.github.com/users";

function getUsers() {
  return fetch(url)
    .then((resp) => {
      return resp.json()
    })
    .catch((err) => {
      console.error(`Error ${err}`)
    })
}

getUsers().then((result) => {
  console.log(result)
})

// --

async function getUserAsync() {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    console.error(`Error ${err}`)
  }
}

getUserAsync().then((res) => {
  console.log(res)
})

// #endregion comparison

// #endregion await async text

// #region пуеСфе

function getRandomArrayElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}

const CAT_TAGS = 'https://cataas.com/api/tags'
const CATS = 'https://cataas.com/api/cats'

async function getCat() {
  const tagsResponse = await fetch(CAT_TAGS)
  const tags = await tagsResponse.json()

  const randomTag = getRandomArrayElement(tags)

  const catsResponse = await fetch(`${CATS}?tags=${randomTag}`)
  const cats = await catsResponse.json()

  const randomCat = getRandomArrayElement(cats)

  return {
    tag: randomTag,
    url: `${CATS}/${randomCat.id}`
  }
}

getCat()
  .then((res) => {
    const header = document.querySelector('#header')
    header.textContent = res.tag

    const image = document.querySelector('#image')
    image.src = res.url
  })
  .catch(console.error())
  .finally(() => {
    const loader = document.querySelector('#loader')
    loader.style.display = 'none'
  })


// #endregion пуеСфе