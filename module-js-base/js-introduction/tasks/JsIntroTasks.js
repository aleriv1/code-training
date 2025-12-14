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

jsIntroTask1()

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



// #endregion jsintroTask2