// #region 10-objects-tasks task 1 net status

const users = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

function getNetStatusWithMap(users, netStatus) {
  const onlineUsers = users.filter((user) => {
    return user.status === netStatus;
  });
  const onlineUserName = onlineUsers.map((user) => {
    return user.username;
  });
  return `Сейчас в онлайн следующие пользователи: ${onlineUserName.join(", ")}`;
}

console.log(getNetStatusWithMap(users, "online"));
// alert(getNetStatusWithMap(users, "online"));

function getNetStatusWithForEach(users, netStatus) {
  let onlineUserName = "";
  const onlineUsers = users.filter((user) => {
    return user.status === netStatus;
  });
  onlineUsers.forEach((user) => {
    onlineUserName += `${user.username}, `;
  });
  return `Сейчас в онлайн следующие пользователи: ${onlineUserName.slice(
    0,
    -2
  )}`;
}

console.log(getNetStatusWithForEach(users, "online"));
// alert(getNetStatusWithForEach(users, "online"));

function getNetStatusWithForOf(users, netStatus) {
  let onlineUserName = [];
  const onlineUsers = users.filter((user) => {
    return user.status === netStatus;
  });
  for (const user of onlineUsers) {
    onlineUserName.push(user.username);
  }
  return `Сейчас в онлайн следующие пользователи: ${onlineUserName.join(", ")}`;
}

console.log(getNetStatusWithForOf(users, "online"));
// alert(getNetStatusWithForOf(users, "online"));

// https://codepen.io/aleriv1/pen/KwMPyom

// #endregion 10-objects-tasks task 1 net status

// #region 10-objects-tasks task 2 the people and the queue

const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

function getTalonsInOrder(patients, orders) {
  const peopleOrdered = [];
  for (const order of orders) {
    peopleOrdered.push(
      patients.find((patient) => {
        return patient.id === order;
      })
    );
  }
  return peopleOrdered;
}

const result = getTalonsInOrder(people, ordersArr);
console.log("result", result);

// https://codepen.io/aleriv1/pen/myEbpxW

// #endregion 10-objects-tasks task 2 the people and the queue

// #region 10-objects-tasks task 3 the object handle

const obj = {
  name: "Alex",
  programmingLanguage: "JS",
};

function handleObject(obj, key, action) {
  if (action === "get") {
    return obj[key];
  } else if (action === "add") {
    obj[key] = "";
    return obj;
  } else if (action === "delete") {
    delete obj[key];
    return obj;
  } else {
    return obj;
  }
}

const resultObj = handleObject(obj, "name", "get");
// const resultObj = handleObject(obj, "name", "get");

console.log("resultObj", resultObj);
console.log(handleObject(obj, "key", "add"));
console.log(handleObject(obj, "name", "delete"));

// https://codepen.io/aleriv1/pen/raLBdKd

// #endregion 10-objects-tasks task 3 the object handle
