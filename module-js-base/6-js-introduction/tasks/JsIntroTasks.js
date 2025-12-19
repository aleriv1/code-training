const existingUserLogin = 'Alex'
const existingUserPassword = '123'

// #region jsIntroTask1

function jsIntroTask1() {
  let userLogin = prompt('Enter the login')
  if (userLogin === null) {
    console.log('you refused to enter text')
  } else {
    if (userLogin === '') {
      console.log('you entered an empty login')
    } else {
      let userLoginTrimmed = userLogin.trim()
      let userPassword = prompt('enter the password')
      if (userPassword === null) {
        console.log('you refused to enter the password')
      } else {
        let userPasswordTrimmed = userPassword.trim()
        if (userLoginTrimmed === existingUserLogin && userPasswordTrimmed === existingUserPassword) {
          alert(`welcome ${userLoginTrimmed}`)
        } else {
          alert('wrong login or password')
        }
      }
    }
  }
}

// jsIntroTask1()

function jsIntroTask1Mentor() {
  const existingUserLogin = "the_best_user";
  const existingUserPassword = "12345678";

  const userLogin = prompt("Введите логин") || '';
  const userPassword = prompt("Введите пароль") || '';

  if (existingUserLogin === userLogin.trim() && existingUserPassword === userPassword.trim()) {
    alert(`Добро пожаловать, ${userLogin}!`);
  } else {
    alert("Логин и (или) Пароль введены неверно!");
  }
}

// #endregion jsIntroTask1

// #region jsintroTask2

function jsIntroTask2() {
  const correctAnswer1 = 4, correctAnswer2 = 4, correctAnswer3 = 1, correctAnswer4 = 12, correctAnswer5 = 6;
  let correctAnswers = 0, incorrectAnswers = 0;

  // let userAnswer1 = 4
  let userAnswer1 = +prompt('What is 2+2')
  userAnswer1 === correctAnswer1 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  let userAnswer2 = +prompt('What is 2*2')
  userAnswer2 === correctAnswer2 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  let userAnswer3 = +prompt('Petya had 5 apples. He ate 3 and gave one to his friend. How many apples does Petya have left?')
  userAnswer3 === correctAnswer3 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  let userAnswer4 = +prompt('Mashs has 10 candies. She ate 2, then gave 1 to her friend. After that her Mom gave her 5 more candies. How many candies did Masha have left in the end')
  userAnswer4 === correctAnswer4 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  let userAnswer5 = +prompt('What is 2+2*2')
  userAnswer5 === correctAnswer5 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)

  // console.log(`End of test; the correct answers: ${correctAnswers}, the incorrect answers: ${incorrectAnswers}`)
  alert(`End of test; the correct answers: ${correctAnswers}, the incorrect answers: ${incorrectAnswers}`)
}

function jsintroTask2Mentor() {
  const question1 = "Сколько будет 2 + 2?";
  const question2 = "Сколько будет 2 * 2?";
  const question3 =
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
  const question4 =
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
  const question5 = "Сколько будет 2 + 2 * 2?";

  const answer1 = 4;
  const answer2 = 4;
  const answer3 = 1;
  const answer4 = 12;
  const answer5 = 6;

  let correctAnswers = 0;
  let incorrectAnswers = 0;

  const userAnswer1 = prompt(question1);
  if (Number(userAnswer1) === answer1) {
    alert("Ответ Верный");
    correctAnswers += 1;
  } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
  }

  const userAnswer2 = prompt(question2);
  if (Number(userAnswer2) === answer2) {
    alert("Ответ Верный");
    correctAnswers += 1;
  } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
  }

  const userAnswer3 = prompt(question3);
  if (Number(userAnswer3) === answer3) {
    alert("Ответ Верный");
    correctAnswers += 1;
  } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
  }

  const userAnswer4 = prompt(question4);
  if (Number(userAnswer4) === answer4) {
    alert("Ответ Верный");
    correctAnswers += 1;
  } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
  }

  const userAnswer5 = prompt(question5);
  if (Number(userAnswer5) === answer5) {
    alert("Ответ Верный");
    correctAnswers += 1;
  } else {
    alert("Ответ Неверный");
    incorrectAnswers += 1;
  }

  alert(
    `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`
  );

}


// jsIntroTask2()

// #endregion jsintroTask2

// #region jsIntroTask 4 loops while and do while

function jsIntroTask4OriLoop() {
  for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
  }
}

function jsIntroTask4DoWhile() {
  let i = 0
  do {
    let newStudent = prompt('Введите имя нового студента!');
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
    i++
  } while (i < 3)
}

function jsIntroTask4While() {
  let i = 0
  while (i < 3) {
    // let newStudent = prompt('enter the new student name')
    let newStudent = prompt('Введите имя нового студента!')
    if (newStudent) {
      newStudent = newStudent.trim();
      alert(`Добро пожаловать, ${newStudent}!`)
    }
    i++
  }
}


// #endregion jsIntroTask 4 loops while and do while

// #region jsIntroTask5 loops, the all numbers sum

function jsInto5TheAllNumbersSumWhile() {
  let sum = 0
  let i = 1
  while (i <= 100) {
    sum += i
    i++
  }
  console.log(sum)
}

jsInto5TheAllNumbersSumWhile()

function jsInto5TheAllNumbersSumFor() {
  let sum = 0
  for (let i = 1; i <= 100; i++) {
    sum += i
  }

  console.log(sum)
}

jsInto5TheAllNumbersSumFor()

// #endregion jsIntroTask5 loops, the all numbers sum

// #region JsIntroTasks additional tasks1

/* 
Вам дан следующий текст, взятый из Википедии: «JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.»

Вам требуется сохранить его в переменную javaScriptDescription и выполнить над этой строкой следующие действия:

Обрежьте строку наполовину с 1-го символа по символ, который находится посередине строки. Если номер символа, который находится посередине строки, получается не целым, то используйте функцию Math.floor(), чтобы округлить его к меньшему целому числу. (Например, если индекс получился 5.9, то Math.floor(5.9) будет равен 5).
В обрезанной строке необходимо заменить все строчные буквы «а» на прописные «А» (и латиницу, и кириллицу).
Удалите все пробелы в строке.
Продублируйте итоговую строку 3 раза.
В консоль необходимо вывести:

Символ, который находится посередине конечной строки. Если индекс символа получается не целым, то используйте функцию Math.floor(), чтобы округлить его к меньшему числу
Саму конечную строку
 */

const str = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

let strCut = str.slice(0, Math.floor(str.length / 2) + 1)
let strCutMod = strCut.replaceAll('а', 'А').replaceAll(' ', '').repeat(3)

console.log(strCutMod)
console.log('Символ посередение модифицированной строки:', strCutMod.charAt(Math.floor(strCutMod.length / 2)))

// #endregion JsIntroTasks additional tasks1

// #region JsIntroTasks additional task1-n

/* 
Представим, что мы разрабатываем сайт для ресторана, в котором действует программа скидок. Ресторан подсчитывает сумму оплаты каждого клиента и поощряет самых частых посетителей. На данный момент у ресторана есть клиент по имени Игорь, который за все время потратил 110$ в данном заведении. Сохраните эти данные в переменные clientName и clientSpentForAllTime.

Программа скидок работает следующим образом:

Если клиент потратил от 100$ до 300$, то скидка 10%;
Если клиент потратил от 300$ до 500$, то скидка 20%;
Если клиент потратил от 500$, то скидка 30%;
Клиент по имени Игорь решил посетить еще раз ресторан. Как мы видим, ему полагается скидка в 10%, так как он потратил 110$. Сейчас Игорь закупается в заведении на 25$, и ему необходимо предоставить скидку. Сохраните значение 25 в переменную clientSpentToday.

Для начала, реализуйте логику предоставления скидок. Используйте if...else и логические операторы. Итоговую скидку сохраните в переменную discount. Выведите в модальном окне через alert() текст: “Вам предоставляется скидка в discount%!” (discount замените на процент скидки).

После этого необходимо выставить клиенту по имени Игорь счет на оплату (учитывая скидку). Для начала обновите переменную clientSpentForAllTime. Затем выведите в модальном окне через alert() сообщение: «Спасибо, clientName! К оплате clientSpentToday$. За все время в нашем ресторане вы потратили clientSpentForAllTime$.» (замените clientName, clientSpentToday и clientSpentForAllTime на соответствующие значения переменных).
 */

function restuarantAndClient() {
  let clientName = 'Client'
  let clientSpentForAllTime = 110
  let clientSpentToday = 25

  let discount

  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
  } else if (clientSpentForAllTime >= 500) {
    discount = 30
  } else {
    discount = 0
  }

  alert(`Вам предоставляется скидка в ${discount}%!`)
  clientSpentForAllTime += clientSpentToday

  clientSpentToday = clientSpentToday * (100 - discount) / 100

  alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)
}

// #endregion JsIntroTasks additional task1-n

// #region JsIntroTasks additional task2

/* 
Поздравляем! Вы разработали логику предоставления скидки клиентам ресторана. Вы оптимизировали большую задачу, потому что раньше скидки считались вручную.

Вы работали уже с заранее определенными данными clientName, clientSpentToday и clientSpentForAllTime. Но клиентов у ресторана много и каждый покупает блюда по разной стоимости и каждому необходимо предоставлять разные скидки. Поэтому сейчас мы будем запрашивать пользователя ввести нужные данные в текстовое поле.

Воспользуемся уже известной нам функцией prompt(). В каждую из следующих переменных clientName, clientSpentToday и clientSpentForAllTime присвойте значение, которое введет пользователь в текстовое поле. Итоговые данные clientSpentToday и clientSpentForAllTime должны быть типом данных number.

Для clientName сообщение в prompt() должно быть: «Введите имя клиента», clientSpentToday — «Сколько клиент потратил сегодня?», clientSpentForAllTime- «Сколько клиент потратил за все время?».

Если пользователь ввел неверные данные для clientSpentToday и clientSpentForAllTime (например, «hello»), то выведите в модальном окне текст: «Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузи страницу, чтобы повторить попытку.». При неверных данных не позволяйте пользователю идти дальше к подсчету скидки. Используйте if...else, чтобы реализовать данную логику.
 */

function clientAndRestuarantContinue() {
  let clientName = 'Client'
  let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?')
  let clientSpentToday = +prompt('Сколько клиент потратил сегодня?')

  // if (typeof clientSpentForAllTime !== 'number' || typeof clientSpentToday !== 'number') {
  if ((Number.isNaN(clientSpentForAllTime) || clientSpentForAllTime === 0) || (Number.isNaN(clientSpentToday) || clientSpentToday === 0)) {
    alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть не нулевым числом! Перезагрузи страницу, чтобы повторить попытку.')
  } else {

    let discount

    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
      discount = 10
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
      discount = 20
    } else if (clientSpentForAllTime >= 500) {
      discount = 30
    } else {
      discount = 0
    }

    alert(`Вам предоставляется скидка в ${discount}%!`)
    clientSpentForAllTime += clientSpentToday

    clientSpentToday = clientSpentToday * (100 - discount) / 100

    alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$`)
  }
}

// #endregion JsIntroTasks additional task2

// #region JsIntroTasks additonal task3

/* 
Когда мы проходим регистрацию, то в большинстве случаев у нас запрашивают пароль. И всегда для него есть некоторые ограничения по длине либо по символам. Сейчас вы напишите программу, которая будет проверять на валидность пароль, введенный пользователем.

Для начала вам необходимо запросить пароль у пользователя при помощи prompt().

Отобразите сообщение: «Введите пароль».

Пароль должен удовлетворять следующим условиям:

Длина пароля должна быть минимум 3 символа и не больше 30 символов (включая 30).
Пароль должен содержать минимум 1 прописную (большую) букву.
Пароль должен содержать минимум 1 цифру.
Если все условия удовлетворены, то выведите при помощи alert()сообщение: «Пароль валидный. Добро пожаловать в аккаунт!», иначе: «Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.»

Посмотрите на несколько возможных результатов:

"1234f" - не удовлетворяет условиям
"123456" - не удовлетворяет условиям
"1234F" - удовлетворяет условиям
"12" - не удовлетворяет условиям
"JavaScript"- не удовлетворяет условиям
"JavaScript123" - удовлетворяет условиям
 */

function jsIntroAdditionalTask4PasswordCheck() {
  let password = prompt('Введите пароль', '123')

  let hasUpper = false
  let hasDigit = false

  if (password === null) {
    alert('Надо ввести пароль!')
  } else {
    for (let i = 0; i < password.length; i++) {
      if (password[i].toUpperCase() === password[i]) {
        hasUpper = true
        break
      }
    }
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= '0' && password[i] <= '9') {
        hasDigit = true
        break
      }
    }

    if (hasUpper && hasDigit && password.length >= 8 && password.length <= 30) {
      alert('Пароль валидный. Добро пожаловать в аккаунт')
    } else {
      alert('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
    }
  }
}


function jsIntroAdditionalTask4PasswordCheckAnother() {
  const password = prompt("Введите пароль");
  const errorMessage =
    "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.";
  const successMessage = "Пароль валидный. Добро пожаловать в аккаунт!";

  if (password === null || password.length < 3 || password.length > 30) {
    alert(errorMessage);
  } else {
    let hasBigSymbol = false;
    let hasNumbers = false;
    for (const symbol of password) {
      const isNumberSymbol = !isNaN(parseInt(symbol));
      if (symbol >= "A" && symbol <= "Z") {
        hasBigSymbol = true;
      }
      if (isNumberSymbol) {
        hasNumbers = true;
      }
    }

    if (!hasBigSymbol || !hasNumbers) {
      alert(errorMessage);
    } else {
      alert(successMessage);
    }
  }

}

// #endregion JsIntroTasks additonal task3
