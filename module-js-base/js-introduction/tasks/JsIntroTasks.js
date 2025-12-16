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
  const correctAnswer1 = 4
  const correctAnswer2 = 4
  const correctAnswer3 = 1
  const correctAnswer4 = 12
  const correctAnswer5 = 6

  let correctAnswers = 0
  let incorrectAnswers = 0

  // let userAnswer1 = 4
  let userAnswer1 = +prompt('What is 2+2')
  // userAnswer1 === correctAnswer1 ? (console.log(`You're right`), correctAnswers++) : (console.log(`You're not right`), incorrectAnswers++)
  userAnswer1 === correctAnswer1 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  // let userAnswer2 = 2
  let userAnswer2 = +prompt('What is 2*2')
  // userAnswer2 === correctAnswer2 ? (console.log(`You're right`), correctAnswers++) : (console.log(`You're not right`), incorrectAnswers++)
  userAnswer2 === correctAnswer2 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  // let userAnswer3 = 1
  let userAnswer3 = +prompt('Petya had 5 apples. He ate 3 and gave one to his friend. How many apples does Petya have left?')
  // userAnswer3 === correctAnswer3 ? (console.log(`You're right`), correctAnswers++) : (console.log(`You're not right`), incorrectAnswers++)
  userAnswer3 === correctAnswer3 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  // let userAnswer4 = 12
  let userAnswer4 = +prompt('Mashs has 10 candies. She ate 2, then gave 1 to her friend. After that her Mom gave her 5 more candies. How many candies did Masha have left in the end')
  // userAnswer4 === correctAnswer4 ? (console.log(`You're right`), correctAnswers++) : (console.log(`You're not right`), incorrectAnswers++)
  userAnswer4 === correctAnswer4 ? (alert(`You're right`), correctAnswers++) : (alert(`You're not right`), incorrectAnswers++)
  // let userAnswer5 = 6
  let userAnswer5 = +prompt('What is 2+2*2')
  // userAnswer5 === correctAnswer5 ? (console.log(`You're right`), correctAnswers++) : (console.log(`You're not right`), incorrectAnswers++)
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