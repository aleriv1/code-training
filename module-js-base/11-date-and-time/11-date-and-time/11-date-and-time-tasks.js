// #region 11-date-and-time tasks, task 1, date format

/* 
todo Часто мы записываем даты в следующем формате: «день.месяц.год». Сейчас вам необходимо создать функцию getDateFormat(), которая будет приводить дату к этому формату. Она принимает 2 параметра:

^ date - экземпляр класса Date, который нужно перевести в данный текстовый формат: “день.месяц.год”
^ separator - разделитель дня, месяца и года. По умолчанию он должен быть равен точке ".". Если в качестве разделителя будет передано тире "-", то формат уже должен быть таким: “день-месяц-год”.
^ Также учтите, что номер месяца в JavaScript считается с 0 до 11. Кроме этого, если день либо месяц возвращают однозначное число, то вам к нему необходимо добавить 0. То есть результат должен быть не таким: «5.5.2001», а «05.05.2001».
 */

const dateT1 = new Date("08-04-2025");

function getDateFormat(date = dateT1, separator = ".") {
  const day = String(dateT1.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}${separator}${month}${separator}${year}`;
}

console.log(getDateFormat(dateT1, "-"));

//  https://codepen.io/aleriv1/pen/gbMbBQv

// #endregion 11-date-and-time tasks, task 1, date format

// #region 11-date-and-time tasks, task 2, days to the next birtday

/* 
^ День рождения — это знаменательный праздник для каждого человека. А когда день рождения у вас? Уверены, что вы помните эту дату. Сколько дней осталось до вашего дня рождения? Вот это уже посложнее.

todo Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday(), которая будет возвращать количество дней до следующего дня рождения. Данная функция должна принимать 1 параметр nextBirthdayDate, который является экземпляром класса Date и указывает на дату вашего ближайшего дня рождения. Год стоит указывать ближайший к текущей дате, а не год вашего рождения.

* Также рекомендуется создать вспомогательную функцию convertMsToDays(), которая переводит миллисекунды в дни. Для округления итогового числа используйте Math.round().
 */

const theBirtday = new Date(2025, 2, 15);
console.log(theBirtday.getDate());

function convertMsToDays(ms) {
  return Math.round(ms / 86400000);
}

function getDaysBeforeBirthday(nextBirthdayDate = theBirtday) {
  const now = Date.now();

  if (nextBirthdayDate < now) {
    nextBirthdayDate.setFullYear(new Date(now).getFullYear() + 1);
  }
  const msDiff = nextBirthdayDate.getTime() - Date.now();
  return `До следующего ДР осталось ${convertMsToDays(msDiff)} `;
  // return Math.round((nextBirthdayDate.getTime() - Date.now()) / 86400000);
}

console.log(getDaysBeforeBirthday(theBirtday));

// https://codepen.io/aleriv1/pen/gbMbQeq

// #endregion 11-date-and-time tasks, task 2, days to the next birtday

// #region 11-date-and-time taks, task 3, adding days

/* 
^ В JavaScript объект даты может принимать в себя timestamp, т.е. количество миллисекунд с 1 января 1970 года 00:00:00 по UTC. По данному количеству миллисекунд генерируется объект даты. Благодаря этому, чтобы добавить определенное число миллисекунд, можно использовать следующую запись: new Date(Date.now() + 5000), где 5000 - это миллисекунды. В итоге мы получим дату, которая на 5000 миллисекунд больше текущей.

todo Используя эти знания, вам необходимо создать функцию addDays(), которая будет добавлять переданное количество дней к переданной дате. Она принимает в себя 2 параметра:

* date - экземпляр класса Date
* days - количество дней, тип данных number
* Вам необходимо к параметру date прибавить определенное количество дней, которое передается в параметр days. Функция addDays() должна возвращать обновленную дату.

^ Подсказка: не забывайте, что timestamp, который передается в Date(), должен измеряться в миллисекундах.
 */

const daysToMs = (days) => days * 86400000;
const dateForAdding = new Date(2025, 11, 30);
// const dateForAdding = new Date();

function addDays(date = dateForAdding, days = 1) {
  const dateAfterAddingDays = new Date(date.getTime() + daysToMs(days));
  return dateAfterAddingDays;
}

console.log(addDays().toString());
console.log(addDays().toISOString());

// https://codepen.io/aleriv1/pen/EayaGGr

// #endregion 11-date-and-time taks, task 3, adding days
