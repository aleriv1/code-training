// #region 10-objects-tasks task 1 net status

/* 
Вам дан массив пользователей users. У каждого из них есть свойство status, которое может равняться или "online", или "offline":

const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
          username: 'Bob',
          status: 'online',
          lastActivity: 104
        }
];
Вам необходимо создать новый массив onlineUsers, который будет содержать объекты только тех пользователей, у которых status равен "online".

После выведите через alert() сообщение: «Сейчас в онлайн следующие пользователи: usersOnlineNames», где usersOnlineNames — строка, в которой имена пользователей отображаются через запятую.

Для кода выше результат должен быть следующим: «Сейчас в онлайн следующие пользователи: David, Bob».
 */

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

/* 

Представьте, что вы разрабатываете программу выдачи талончиков для местной больницы. До этого талончики выписывались вручную и вам необходимо оптимизировать данную задачу.

Вам требуется создать функцию giveTalonsInOrder(), которая сортирует очередь из пациентов. Она принимает в себя 2 параметра:

patients — массив объектов. Каждый объект хранит информацию об имени пациента и его уникальном номере — id.
orders — массив уникальных номеров id, который указывает порядок, в котором должны стоять в очереди пациенты.
Функция должна возвращать новый массив, в котором объекты из массива patients будут отсортированы по id из массива orders.

Посмотрите на возможный результат функции giveTalonsInOrder():

const ordersArr = [4, 2, 1, 3];
const people = [
   { id: 1, name: "Максим" },
   { id: 2, name: "Николай" },
   { id: 3, name: "Ангелина" },
   { id: 4, name: "Виталий" },
];
 
const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]

 */

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

/* 
Вам необходимо создать функцию, которая будет работать с объектами. Назовите ее handleObject(). Она принимает в себя 3 параметра:

obj — объект, с которым будет работать функция.
key — ключ объекта.
action — действие, которое мы будем совершать над объектом.
Параметр action может быть 4-мя значениями:

get - если action равен get, то функция handleObject() должна вернуть значение ключа key в объекте obj.
add - если action равен add, то функция handleObject() должна добавить новый ключ key в объект object и присвоить значение пустой строки "". Также из функции необходимо возвратить обновленный объект obj.
delete - если action равен delete, то функция handleObject() должна удалить свойство key из объекта obj и возвратить обновленный объект.
Если action равен любому другому значению, то функция handleObject() должна возвратить объект obj.

Протестируйте функцию на этом коде:

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}
 
const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' } 
 */

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

// #region 10-objects-tasks task 4 giveJobToStudent()

/* 
Вам необходимо создать функцию giveJobToStudent(), которая будет добавлять новое свойство в объект и выводить информацию в модальном окне. Она принимает в себя 2 параметра:

student — объект, содержащий информацию о студенте.
jobName — название новой работы студента.
Функция giveJobToStudent() выводит в модальное окно сообщение «Поздравляем! У студента fullName появилась новая работа! Теперь он jobName», где fullName — это имя студента, а jobName — название новой работы студента.

Функция giveJobToStudent() должна возвращать новый объект студента, в котором будут все ключи из объекта student и также появится новый ключ job со значением параметра jobName.

Для теста функции giveJobToStudent() используйте следующий код:

const student = {
  fullName: 'Максим',
  experienceInMonths: 12,
  stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');

updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
 */

const student = {
  fullName: "Aleksandr",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

function giveJobToStudent(student, jobName) {
  student.job = jobName;
  // alert(
  console.log(
    `Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${student.job}`
  );

  return student;
}

const updatedStudent = giveJobToStudent(student, "Front-end developer");

console.log(updatedStudent);

// https://codepen.io/aleriv1/pen/ByzBgMK

// #endregion 10-objects-tasks task 4 giveJobToStudent()

// #region 10-objects-tasks task 5 the Summmm....

/* 
Напишите функцию sum(), которая будет принимать неограниченное количество аргументов и возвращать их сумму:

function sum() {
  // Ваша реализация
}

console.log(sum(1, 2, 3)) // 6
console.log(sum(2, 2)) // 4
console.log(sum(10, 15, 249, 653, 846)) // 1773
Примечание: Выполните задание и прикрепите ссылку на ответ в форме отправки ответа ниже. После того как наставник примет ваш ответ, здесь будет открыто решение.
 */

function sum(...args) {
  return args.reduce((acc, arg) => {
    if (typeof arg === "number" && !isNaN(arg)) {
      return acc + arg;
    }
    return acc;
  }, 0);
}

console.log(sum(50, 2, "a", 3)); // 55
console.log(sum("b", "a", "c")); // 0

// https://codepen.io/aleriv1/pen/emzmOgw

// #endregion 10-objects-tasks task 5 the Summmm....
