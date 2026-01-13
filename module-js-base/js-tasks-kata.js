// #region Errors

/* 
https://platform.kata.academy/user/courses/21/1/1/4

Вам нужно реализовать 2 функции. Ваша задача — породить две ошибки внутри специально созданных функций.

reference
Сделайте так, чтобы код внутри функции reference порождал ошибку типа ReferenceError.

Вспомните, что ReferenceError возникает, когда используется несуществующий идентификатор (имя). Например, если ваша функция возвращает значение константы, но такой константы не существует. Или в каком-нибудь выражении (фрагмент кода, который вычисляется в значение, как формула) используется неизвестный идентификатор.

type
Сделайте так, чтобы код внутри функции type порождал ошибку типа TypeError.

Вспомните, что TypeError возникает, когда вы используете неправильный тип. Например, если вы пытаетесь вызвать численную константу как функцию.

ВАЖНО
Ошибки должны генерироваться внутри функций reference и type.
 */

function reference() {
  let summ = n + 1;
  return summ;
}

function type() {
  let summ = 1 + 1;
  return summ();
}

// #endregion Errors

// #region Default To

/* 
https://platform.kata.academy/user/courses/21/1/1/14

Default To
 

Реализуйте функцию defaultTo, которая принимает значение первым аргументом и его значение по-умолчанию вторым. Если первое значение null, NaN или undefined, то должно быть возвращено значение по-умолчанию. Если нет, то нужно вернуть само значение (первый аргумент).

Пример:

console.log(defaultTo(1, 10)); // 1;
console.log(defaultTo(undefined, 10)); // 10;
 */

const defaultTo = (value, defaultValue) => {
  if (value === null || isNaN(value) || value === undefined) {
    return defaultValue;
  } else {
    return value;
  }
};

// #endregion Default To

// #region compareWithPrecision

/* 
https://platform.kata.academy/user/courses/21/1/1/16

CompareWithPrecision
 

Напишите функцию, которая сравнивает два числа с определенной погрешностью.

Пример:

compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true
 */

function compareWithPrecision(a, b, precision) {
  // let compare = a % b <= precision ? true : false;
  let compare = Math.abs(a - b) <= precision ? true : false;
  // console.log(1 % 0.3);
  //   console.log(Math.abs(a - b));
  //   console.log(compare);
  return compare;
}

// #endregion compareWithPrecision

// #region Capitalize

/* 
https://platform.kata.academy/user/courses/21/1/1/18

Capitalize
 

Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.

Пример:

const str = 'sOme RanDoM sTRING';
console.log(capitalize(str)); // Some Random String
 */

function capitalize(str) {
  let strResult = "";
  let letterPre = "";
  let letter = "";

  let strLowerCase = str.toLowerCase();

  console.log(strLowerCase);

  for (let i = 0; i < strLowerCase.length; i++) {
    if (i === 0) {
      letter = strLowerCase[i].toUpperCase();
    } else {
      letter =
        letterPre === " "
          ? strLowerCase[i].toLocaleUpperCase()
          : strLowerCase[i];
    }
    strResult += letter;
    letterPre = strLowerCase[i];
  }

  console.log(strResult);

  return strResult;
}

// #endregion Capitalize

// #region reverseLongWords

/* 
https://platform.kata.academy/user/courses/21/1/1/19

Stop gninnipS My sdroW!
 

Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.

Примеры:

reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw
reverseLongWords('This is a test'); // This is a test
reverseLongWords('This is another test'); // This is rehtona test
 */

const reverseLongWords = (str) => {
  let strResult = "";
  let strSplit = str.split(" ");

  let isSpace = "";

  for (let i = 0; i < strSplit.length; i++) {
    let word = "";
    let letter = "";

    if (strSplit[i].length >= 5) {
      for (let j = 0; j < strSplit[i].length; j++) {
        letter = strSplit[i][strSplit[i].length - 1 - j];

        word += letter;
      }
    } else {
      word = strSplit[i];
    }
    isSpace = strSplit.indexOf(strSplit[i]) === strSplit.length - 1 ? "" : " ";

    strResult += `${word}${isSpace}`;
  }
  return strResult;
};

// #endregion reverseLongWords

// #region wrapInParagraph

/* 
https://platform.kata.academy/user/courses/21/1/1/21

Урок с кодом
На входе есть текст, разделенный переносами строк На выходе каждая строка должна быть обернута тегом. Обратите внимание! Никаких дополнительных символов (в том числе пробелов и переносов) не должно быть в итоговой строке. Только исходный текст + тэги
 
Wrap Paragraph
Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег

.

Пример:

const text = `Some
simple multiline
text`;

console.log(wrapInParagraph(text)); // <p>Some</p>
 <p>simple multiline</p>
 <p>text</p>

const text2 = 'some\ntext';

console.log(wrapInParagraph(text2)); // <p>some</p>
 <p>text</p>
 */

function wrapInParagraph(str) {
  let strResult = ``;
  let strSplit = str.split(`\n`);
  let strPart = ``;

  let isLF = ``;

  for (let i = 0; i < strSplit.length; i++) {
    isLF = strSplit.indexOf(strSplit[i]) === strSplit.length - 1 ? `` : `\n`;
    strPart = `<p>${strSplit[i]}</p>${isLF}`;
    strResult += strPart;
  }
  return strResult;
}

// #endregion wrapInParagraph

// #region Letters Count

/* 
Реализуйте функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке.

Перед подсчетом буквы необходимо привести к нижнему регистру. Большая буква и маленькая должны считаться одинаковой буквой.

Пример:

console.log(lettersCount('aAAbbccde'));
 {
    a: 3,
    b: 2,
    c: 2,
    d: 1,
    e: 1,
 }
 */

const lettersCount = (str) => {
  let arrLetters = [];
  let objLetters = {};

  for (let i = 0; i < str.length; i++) {
    let key = str[i].toLowerCase();

    if (arrLetters.length !== 0) {
      for (let j = 0; j < arrLetters.length; j++) {
        if (arrLetters[j] === str[i].toLowerCase()) {
          objLetters[key] += 1;
          break;
        } else {
          if (j === arrLetters.length - 1) {
            arrLetters.push(str[i].toLowerCase());
            objLetters[key] = 0;
          }
        }
      }
    } else {
      arrLetters.push(str[0].toLowerCase());
      objLetters[key.toLowerCase()] = 1;
    }
  }

  console.log(objLetters);
  return objLetters;
};

// #endregion Letters Count

// #region finalGrade

/* 
finalGrade
 

Реализуйте функцию finalGrade, которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

Функция принимает два аргумента:

exam — оценка за экзамен, число от 0 до 100; projects — количество проектов, число от 0 и выше. Функция возвращает: число (итоговую оценку).

Есть четыре возможных итоговых оценки:

100, если оценка за экзамен выше 90 или есть больше 10 проектов
90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
0 в любом другом случае
Вот как должна работать ваша функция:

finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0
 */

function finalGrade(exam, projects) {
  // Ваше решение должно быть здесь
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
      ? 90
      : exam > 50 && projects >= 2
        ? 75
        : 0;
}

// #endregion finalGrade

// #region fizzbuzz

/* 
Напишите функцию, которая принимает число.
Если число кратно 3, функция должна возвращать строку «Fizz».
Если кратно 5, функция должна возвращать строку «Buzz».
Если кратно и 3 и 5 - строку «FizzBuzz». В остальных случаях функция должна вернуть переданное число.
 */

function fizzbuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log(`FizzBuzz`);
    return `FizzBuzz`;
  } else if (number % 3 === 0) {
    console.log(`Fizz`);
    return `Fizz`;
  } else if (number % 5 === 0) {
    console.log(`Buzz`);
    return `Buzz`;
  } else {
    return number;
  }
}

// #endregion fizzbuzz

// #region Arithmetic

/* 
Arithmetic

Реализуйте функцию, которая принимает на вход два числа и арифметический оператор (имя которого в виде строки) и возвращает результат соответстующей операции.

Первые 2 аргумента это положительные целые числа

Третий аргумент может быть одним из "add", "subtract", "divide", "multiply".

Примеры использования:

arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5
В случает если оператор некорректен, функция должна возвращать NaN

arithmetic(5, 2, "aaa")      => returns NaN
 */

const arithmetic = (a, b, operator) => {
  switch (operator) {
    case `add`:
      return a + b;
    case `subtract`:
      return a - b;
    case `multiply`:
      return a * b;
    case `divide`:
      return a / b;
    default:
      return NaN;
  }
};

// #endregion Arithmetic

// #region Are brackets balanced

/* 
Are brackets balanced
 

Реализуйте функцию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
 */

const areBracketsBalanced = (str) => {
  const strArrForCheck = [];

  for (let char of str) {
    if (char === `(`) {
      strArrForCheck.push(char);
    } else if (char === `)`) {
      if (strArrForCheck.length === 0) {
        return false;
      }
      strArrForCheck.pop();
    }
  }
  console.log(strArrForCheck.length === 0);
  return strArrForCheck.length === 0;
};

// #endregion Are brackets balanced

// #region findAllIdx

/* 
findAllIdx
 
Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.

findAllIdx([1,0,1,0,0,1], 0) // [1,3,4]
findAllIdx([1,1], 0) // []
 */

function findAllIdx(arr, value) {
  const indexArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === value) {
      indexArr.push(index);
    }
  }
  return indexArr;
}

// https://windmaomao.medium.com/keep-array-index-after-filter-in-javascript-57add103a1ce

// return arr
//     .map((v, i) => ({ v, i }))
//     .filter(t => t.v === value)

// #endregion findAllIdx

// #region replaceItems

function replaceItemsClear(arr, item, replaceItem) {
  const arrToReturn = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i] === item ? replaceItem : arr[i];
    arrToReturn.push(element);
  }
  console.log(arrToReturn);
  return arrToReturn;
}

/* 
moveToStart
 

Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.

Функция должна возвращать новый массив, а не мутировать старый.

Примеры:

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 10)
); // [1, 2, 3, 4, 5]

 */

function replaceItemsMutate(arr, item, replaceItem) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i] === item ? replaceItem : arr[i];
    arr[i] = element;
  }
  console.log(arr);
  return arr;
}

// #endregion replaceItems

// #region moveToStart

/* 
moveToStart
 

Реализуйте функцию moveToStart, которая принимает массив и число n. Функция должна переставить n элементов массива из конца в начало.

Если второй аргумент больше или равен длине массива, то должен быть возвращен новый массив, порядок элементов которого совпадает с изначальным.

Функция должна возвращать новый массив, а не мутировать старый.

Примеры:

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 3)
); // [3, 4, 5, 1, 2]

console.log(
  moveToStart([1, 2, 3, 4, 5], 10)
); // [1, 2, 3, 4, 5]

 */

const moveToStart = (arr, n) => {
  let arrToReturn;
  if (n >= arr.length) {
    arrToReturn = arr.slice();
    console.log(`arrToReturn is:`, arrToReturn);
  } else {
    let arrPart = arr.slice(arr.length - n);
    console.log(`arrPart is:`, arrPart);
    arrToReturn = arrPart.concat(arr);
    arrToReturn.splice(arrToReturn.length - n, n);
    console.log(`arrToReturn is:`, arrToReturn);
  }
  return arrToReturn;
};

// #endregion moveToStart

// #region Has Arrays

/* 
Has Arrays
 

Реализуйте функцию hasArrays, которая принимает массив данных разных типов и возвращает true, если этот массив содержит массив внутри себя. Если нет, функция должна вернуть false.

Пример:

const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
console.log(hasArrays(data1)); 
// true

const data2 = [];
console.log(hasArrays(data2)); 
// false
 */

const hasArrays = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      return true;
    }
  }
  return false;
};

// #endregion Has Arrays

// #region Parity

/* 
Реализуйте функцию getNumbersByParity, которая принимает массив чисел в качестве первого аргумента и строку "even" или "odd" в качестве второго. Функция должна вернуть новый массив, состоящий из четных чисел, если вторым аргументом было передано "even" и нечетных, если было передано "odd".

Оба аргумента функции обязательны. Первый обязательно будет массивом, а второй - строкой "even"/"odd".

const data = [1, 2, 3, 4, 5, 6];

console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];
 */

const getNumbersByParity = (data, parity) => {
  const arrToReturn = [];
  switch (parity) {
    case `even`:
      for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 === 0) {
          arrToReturn.push(data[i]);
        }
      }
      break;
    case `odd`:
      for (let i = 0; i < data.length; i++) {
        if (data[i] % 2 !== 0) {
          arrToReturn.push(data[i]);
        }
      }
      break;
  }
  return arrToReturn;
};

// #endregion Parity

// #region sequenceSum

/* 
sequenceSum
 
Реализуйте (с использованием рекурсии) функцию sequenceSum, которая находит сумму последовательности целых чисел. Последовательность задается двумя значениями: begin - начало последовательности, end - конец последовательности. Например: begin = 2 и end = 6 дают нам такую последовательность 2, 3, 4, 5, 6. Сумма такой последовательности будет: 20.

sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
Подсказки

Последовательность, в которой begin > end, не содержит ни одного числа, т.е. является "пустой". Вычислить сумму чисел такой последовательности не представляется возможным, в этом случае возвращаем NaN Сумма чисел последовательности, в которой begin === end, равна begin (или end)

// NaN (т.к. это "пустая" последовательность)
sequenceSum(7, 2);

// 0 (т.к. это единственное число, входящее в последовательность)
sequenceSum(0, 0);
// 6 (т.к. это единственное число, входящее в последовательность)
sequenceSum(6, 6);
P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию sequenceSum
 */

function sequenceSum(begin, end) {
  if (begin === end) {
    return begin;
  } else if (begin > end) {
    return NaN;
  } else {
    console.log(`x is`, begin);
    console.log(`y is`, end);
    return begin + sequenceSum(begin + 1, end);
  }
}

// #endregion sequenceSum

// #region getStringCount

/* 
getStringCount
 

Реализуйте (с использованием рекурсии) функцию getStringCount, которая должна принимать массив или объект и считать количество строк в массиве / значениях объекта с учетом вложенности.

getStringCount
({
  first: '1',
  second: '2',
  third: false,
  fourth: ['anytime', 2, 3, 4 ],
  fifth:  null,
}); // 3

getStringCount
(['1', '2', ['3']]) // 3
P.S. Для корректного прохождения проверку на рекурсию - вы должны вызывать именно функцию getStringCount
 */

function getStringCount(object) {
  let count;

  if (Array.isArray(object) === true) {
    count = 0;
    for (let value of object) {
      if (typeof value === `string`) {
        count++;
      } else if (typeof value === `object`) {
        console.log(value);
        count += getStringCount(value);
      }
    }
  } else {
    count = 0;
    console.log(`it is not an array`);
    for (let key in object) {
      if (typeof object[key] === `string`) {
        count++;
      } else if (typeof object[key] === `object`) {
        console.log(object[key]);
        count += getStringCount(object[key]);
      }
    }
  }
  return count;
}

// #endregion getStringCount

// #region OptionalChaining

/* 
OptionalChaining

Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.

Если какое-то из свойств не найдено - функция возвращает undefined.

Пример:

const obj = {
  a: {
    b: {
      c: {
        d: 'Привет!'
      }
    }
  }
}
optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined

optionalChaining(obj, ["a", "c", "d"]) // undefined
optionalChaining(obj, ["b", "d", "a"]) // undefined
 */

const optionalChaining = (obj, chain = [`a`, `b`, `c`, `d`]) => {
  let value;

  next: for (let i = 0; i < chain.length; i++) {
    // console.log(`lilya`);
    if (chain[i] in obj) {
      console.log(`chain[${i}] in obj is true`);
      if (typeof obj[chain[i]] === `object` && i !== chain.length - 1) {
        console.log(`typeof obj[chain[${i}]] is object`);
        obj = obj[chain[i]];
        continue next;
      } else {
        console.log(`the last part of chain`);
        value = obj[chain[i]];
      }
    } else {
      console.log(`chain[i] in obj is false`);
      // return undefined;
      value = undefined;
    }
  }
  return value;
};

// #endregion OptionalChaining

// #region Partition

/* 
Partition

Задача реализовать функцию partition которая принимает на вход массив и коллбэк функцию, а возвращает массив в котором два массива.

partition(array, callback) => [trueArray, falseArray]
Во время выполнения функция должна вызвать callback для каждого элемента массива array.

Сигнатура функции callback

callback(element) => boolean
element - Элемент массива на котором была вызвана функция callback

Если callback вернёт true то element с которым была вызвана функция должен попасть в массив trueArray

Если callback вернёт false то element с которым была вызвана функция должен попасть в массив falseArray

Функция должна правильно отрабатывать если callback возвращает приводимые к true false значения:

Приводимые к true
{} => true
1 => true
...
совокупность таких значений называется truthy
Приводимые к false
undefined => false
"" => false
0 => false
...
совокупность таких значений называется falsey 
Если callback не передан то truthy значения попадают в trueArray а falsey значения попадают в falseArray

Функция не должна менять изначальный массив

Примеры использования
Попроще

const numbers = [1,2,3,4,5,6];

partition(numbers, (element) => element > 3);
=> [ 
    [4, 5, 6], // trueArray 
    [1, 2, 3]  // falseArray
];
const numbers = [0, 1, 2, {}, false, "", "0"];

partition(numbers, (element) => element);
=> [ 
    [1, 2, {}, "0"], // trueArray 
    [0, false, ""]  // falseArray
];
Посложнее

const users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
partition(users, (element) => element.active );
=> [
  [  
      { 'user': 'fred',    'age': 40, 'active': true }
  ],
  [  
      { 'user': 'barney',  'age': 36, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': false }
  ] 
]
 */

function partition(array, callback) {
  // #region trying to make a single test function

  const distrValue = (check) => {
    for (let i = 0; i < array.length; i++) {
      if (check) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    }
    resArray.push(trueArray, falseArray);
    console.log(resArray);
  };

  // #endregion trying to make a single test function

  const trueArray = [];
  const falseArray = [];
  const resArray = [];

  if (!callback) {
    for (let i = 0; i < array.length; i++) {
      if (Boolean(array[i])) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        trueArray.push(array[i]);
      } else {
        falseArray.push(array[i]);
      }
    }
  }
  resArray.push(trueArray, falseArray);
  return resArray;
  // return resArray.push(trueArray, falseArray);
}

// #endregion Partition

// #region once

const once = (fn) => {
  let count = 0;
  console.log(count);
  return function () {
    if (count < 1) {
      count++;
      return fn();
    }
  };
};

const f = () => console.log(`hi`);

const onceF = once(f);

onceF();
onceF();
onceF();

// #endregion once

// #region Array Filters

/* 
Для этой задачи вам нужно будет ознакомиться с методом массива filter, который принимает функцию-коллбэк для фильтрации массива.

 Реализуйте набор готовых к использованию функций для arr.filter:// ^:imp

inRange(a, b) – число находится между a и b (включительно).
Если аргумент или элемент массива можно привести к числу,
то функция должна сначала приводить его к числу, а потом проверять условие.
Если a > b, то функция должна возвращать false для всех элементов массива

inArray([...]) – значение находится в данном массиве.

notInArray([...]) – значение не находится в данном массиве.
Они должны использоваться таким образом:

arr.filter(inRange(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
arr.filter(notInArray([1,2,3])) – выбирает только те элементы,
которые не совпадают ни с одним из элементов массива
Пример:

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]
 */

const inRange = (a, b) => {
  //code here
  return function (value) {
    return value >= a && value <= b;
  };
};

const inArray = (arr) => {
  //code here
  return function (value) {
    return arr.includes(value);
  };
};

const notInArray = (arr) => {
  //code here
  return function (value) {
    return !arr.includes(value);
  };
};

// #endregion Array Filters

// #region createObjectCalculator

/* 
Реализуйте функцию createObjectCalculator, которая принимает в качестве аргументов два числа, а возвращает следующий объект:

Объект calculator (калькулятор) с тремя методами:

read(a, b) (читать) принимает два значения и сохраняет их как свойства объекта. sum() (суммировать) возвращает сумму сохранённых значений. mul() (умножить) перемножает сохранённые значения и возвращает результат.

Гарантируется, что оба числа, передаваемых в read всегда будут числами.

Пример:

const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408
 */

const createObjectCalculator = (initialA, initialB) => {
  //code here
  return {
    num1: initialA,
    num2: initialB,

    read(a, b) {
      this.num1 = a;
      this.num2 = b;
    },

    sum() {
      return this.num1 + this.num2;
    },

    mul() {
      return this.num1 * this.num2;
    },
  };
};

const calculator = createObjectCalculator(2, 3);
console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
calculator.read(12, 34);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408

// #endregion createObjectCalculator

// #region field

/* 
Реализуйте функцию getField, которая принимает массив объектов в качестве первого аргумента и ключ объекта в строке в качестве второго. Функция должна вернуть новый массив. На месте объекта должно находиться значение поля объекта, находящееся по ключу, переданному в функцию вторым аргументом. Массив гарантированно состоит из объектов. Если в данном объекте, нет такого поля, то вместо значения поля должен быть undefined. Если массив не передан, то функция должна вернуть пустой массив.

Пример:

const data = [
  {
    name: 'Denis',
    age: 25,
  },
  {
    name: 'Ivan',
  },
  {
    name: 'Ann',
    age: 18,
  },
];

console.log(getField(data, 'age'));
// [25, undefined, 18]
 */

// const data = [
//   {
//     name: "Denis",
//     age: 25,
//   },
//   {
//     name: "Ivan",
//   },
//   {
//     name: "Ann",
//     age: 18,
//   },
// ];

const getField = (data, field) => {
  //code here
  const arrRes = data.map(function (value) {
    // console.log(value);
    // console.log(value[field]);
    return value[field] ? value[field] : undefined;
  });
  return arrRes;
};

console.log(getField(data, "age"));
// [25, undefined, 18]

// #endregion field

// #region crate Username

/* 
Дан массив пользователей. Необходимо преобразовать массив так, чтобы у каждого пользователя появился username. Поле username создается путем конкатенации firstName в нижнем регистре, первой буквы lastName в нижнем регистре и года рождения пользователя, который необходимо вычислить из текущей даты и возраста пользователя. Учтите, что функция должна работать даже в том случае, если вызвать ее, к примеру, через 10 лет.

Данные всегда будут передаваться в указаном ниже формате.
Возраст представлен в виде целого числа.
Фамилия всегда будет в формате "N.", где N - первая буква фамилии.
Порядок объектов в массиве должен сохраняться.
Порядок полей в объекте не важен.
Пример:

Данные на входе:

const data = [
{ firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
{ firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
Данные на выходе:

Предположим, что функция была вызвана в 2020 году, тогда результатом работы этой фнукции было бы:

const processedData = createUsernames(data);
console.log(processedData); // [
{ firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
 username: 'emilyn1990' },
{ firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
 username: 'nore2000' }
];
 */

const createUsernames = (users) => {
  //code here
  // const arrRes = users.map(function (value) {
  const arrRes = users.map((value) => {
    const currDate = new Date();
    const birthYear = currDate.getFullYear() - value.age;
    username = `${value.firstName.toLowerCase()}${value.lastName[0].toLowerCase()}${birthYear}`;
    value.username = username;
    return value;
  });
  return arrRes;
};

// #endregion crate Username

// #region orders-price

/* 
Реализуйте функцию calculatePrice, которая принимает массив заказов, а возвращает сумму их стоимостей. Каждый объект заказа содержит поле price, в котором хранится стоимость товара в числовом формате.

Суммой пустого массива должен быть 0. Если массив не передан, то суммой так же должен быть 0.

Пример:

const data = [
  {
    type: 'food',
    price: 130,
  },
  {
    type: 'clothes',
    price: 7300,
  },
  {
    type: 'other',
    price: 1400,
  },
];

calculatePrice(data); // 8830
 */

const calculatePrice0 = (orders = []) => {
  //code here
  const priceSum = orders.reduce((total, value) => {
    return total + value.price;
  }, 0);

  return priceSum;
};

const calculatePrice = (orders = []) => {
  //code here
  return orders.reduce((total, value) => {
    return total + value.price;
  }, 0);
};

// #endregion orders-price

// #region most-senior

/* 
Дан список информации о людях.

Необходимо вернуть массив, содержащий самого старшего человека в списке. Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

Возраст хранится в поле age.

Данные на входе:

const data =[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
const result = getMostSenior(data);
Данные на выходе:

console.log(result);
[
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
]
 */

const getMostSenior = (humans) => {
  //code here
  const humansAge = humans.map((value) => {
    return value.age;
  });
  let maxAge = Math.max.apply(null, humansAge);
  const mostSenior = humans.filter((value) => {
    return value.age === maxAge;
  });
  return mostSenior;
};

// #endregion most-senior

/* 
Запись на ревью

- Типы данных, приведение типов
- Хранение чисел, неточные вычисления
- Ошибки
- Рекурсия
- Замыкания и область видимости
- Различия var/let/const, hoisting
- Чистые функции. Побочные эффекты
- Значения по умолчанию
- Функции высшего порядка
- Отличия стрелочных функций от обычных
- map / filter / reduce
 */

// #region Invert

/* 
Invert
Напишите функцию, которая создает объект, состоящий из инвертированных ключей и значений объекта.

Если объект содержит повторяющиеся значения, последующие значения перезаписывают присвоения свойств предыдущих значений.

Пример:

invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }
 */

function invert(obj) {
  const invKeyValue = Object.entries(obj).map(([key, value]) => {
    return [value, key]
  })
  return Object.fromEntries(invKeyValue)
}

// #endregion Invert

// #region deepEqual

/* 
DeepEqual
Напишите функцию, которая проверяет на равенство два объекта, учитывая их вложенность.

Два объекта считаются равными, если у них все свойства одинаковы. В случае, если одно из свойств - само объект, мы сравниваем на равенство эти объекты по тому же алгоритму. Пример:

const firstObject = {
  a: {
    b: {
      c: 1,
      d: 'string',
      e: {
        num: 1
      }
    }
  }
};

const secondObject = {
  a: {
    b: {
      e: {
        num: 1,
      },
      d: 'string',
      c: 1,
    }
  }
};

deepEqual(firstObject, secondObject); // true
deepEqual({ a:1, b: 3 }, { b: 2, a: 1}); // false
deepEqual(1, 2); // false
deepEqual(true, false); // false
 */

function deepEqual(obj1, obj2) {
  let check = true

  if (obj1 === null) {
    return check = (obj2 === null) ? true : false
  }
  if (obj2 === null) {
    return check = (obj1 === null) ? true : false
  }

  if (typeof obj1 !== `object` && typeof obj2 !== `object`) {
    return check = obj1 === obj2 ? true : false
  }

  function testObj(obj1, obj2) {

    if (typeof obj2 === `object`) {
      for (let item1 in obj1) {
        if (!(item1 in obj2)) {
          return check = false
        }
      }
    }

    if (typeof obj1 === `object`) {
      for (let item2 in obj2) {
        if (!(item2 in obj1)) {
          return check = false
        }
      }
    }

    let arrOfObjEtnr1 = Object.entries(obj1)

    for (let item of arrOfObjEtnr1) {

      let objEtnr2 = Object.entries(obj2)

      // #region filer
      let filterNotObjValue1 = arrOfObjEtnr1.filter(([key, value]) => {
        return typeof value !== `object`
      }).sort()

      let filterNotObjValue2 = objEtnr2.filter(([key, value]) => {
        return typeof value !== `object`
      }).sort()

      let objValue1 = Object.entries(obj1).filter(([key, value]) => {
        return typeof value === `object`
      })
      // #endregion filer

      if (filterNotObjValue1.length !== 0 && !(filterNotObjValue1.length === filterNotObjValue2.length && filterNotObjValue1.every((value, index) => value.toString() === filterNotObjValue2[index].toString()))) {
        return check = false
      } else if (objValue1.length !== 0) {
        testObj(item[1], obj2[item[0]])
      }
    }
    return check
  }

  return testObj(obj1, obj2)
}

// #endregion deepEqual

// #region Sum

/* 
Sum
Реализуйте функцию sum, которая принимает неограниченное количество чисел в качестве аргументов и возвращает их сумму. Вызов функции без аргументов должен вернуть 0. В случае, если аргумент не является числом и не может быть приведен к таковому, нужно проигнорировать его. Если его можно привести к числу, то приведите его и прибавьте, как и обычное число.

Пример использования:

console.log(
    sum(1, 2, 3, 4, 5, 6),
); // 21
console.log(
    sum(-10, 15, 100),
); // 105
console.log(
    sum(),
); // 0
console.log(
    sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)
 */

const sum = (...args) => {
  /*let res = 0
  for (let i = 0; i < args.length; i++) {
    res += isFinite(args[i]) ? +args[i] : 0
  }
  return res*/
  // return args.reduce((acc, item) => {
  //   num = isFinite(item) ? +item : 0
  //   return acc + num
  // }, 0)

  return args.reduce((acc, item) => acc += isFinite(item) ? +item : 0, 0)
};

// #endregion Sum

// #region Merge

/* 
Merge
Реализуйте функцию merge, которая будет принимать неограниченное количество объектов в качестве аргументов и возвращать новый объект, который должен содержать все поля со всех объектов. Если ключи в объектах повторяются, то каждый последующий объект при совпадении ключей должен иметь больший приоритет над предыдущим. Порядок полей в результирующем объекте не важен.

Пример:

console.log(
  merge(
    {
      name: 'John',
      age: 22,
    },
    {
      surname: 'Klein',
      age: 20,
      profession: 'student',
    },
    {
      profession: 'frontend developer',
      country: 'USA',
    }
  )
);

// {
//   name: 'John',
//   surname: 'Klein',
//   age: 20,
//   profession: 'frontend developer',
//   country: 'USA',
// }
 */

const merge = (...obj) => {
  return Object.assign(...obj)
  //   return obj.reduce((acc, item) => {
  //     return { ...acc, ...item }
  //     // return Object.assign(acc, item)
  // })
};

// #endregion Merge

// #region getArrayCounts
https://platform.kata.academy/user/courses/21/2/1/11

/* 
getArraysCounts
Реализуйте функцию getArraysCounts, которая принимает массив в качестве аргумента. Функция должна вернуть Map, в котором ключи - все уникальные элементы в массиве, а значения - количество этих элементов в массиве.

Пример:

const obj = { name: 123 };
const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
const counts = getArraysCounts(data); // экземпляр Map
console.log(counts.get(1)); // 3
console.log(counts.get(2)); // 4
console.log(counts.get(true)); // 2
console.log(counts.get(obj)); // 2
 */

const getArraysCounts = (arr) => {
  //code here

  let setToSort = new Set();

  let mapToReturn = new Map();

  for (let dataValue of data) {
    setToSort.add(dataValue)
  }

  for (let setValue of setToSort) {
    let countSetValue = data.filter((item) => item === setValue || (Number.isNaN(item) && Number.isNaN(setValue))).length

    mapToReturn.set(setValue, countSetValue)
  }

  return mapToReturn
};


// #endregion getArrayCounts

// #region Unique

/* 
Unique
Реализуйте функцию unique, которая принимает массив в качестве аргумента и возвращает новый массив, в котором содержатся только уникальные значения из исходного массива. Исходный массив не должен изменяться.

Порядок элементов должен сохраняться.

Используйте Set для реализации этой функции.

Пример:

const data1 = [1, 2, 3, 3, 4, 4];
console.log(unique(data1)); // [1, 2, 3, 4]

const obj = { name: 'John' };
const data2 = [obj, obj, obj, { name: 'John' }];
const result = unique(data2);
console.log(result); // [{ name: 'John' }, { name: 'John' }]

console.log(result[0] === obj); // true
console.log(result[1] === obj); // false
 */

const unique = (arr) => {
  return Array.from(new Set(arr))
};

// #endregion Unique

// #region //! getDaysBetweenDates

/* 
* getDaysBetweenDates
Реализуйте функцию getDaysBetweenDates которая принимает на вход две даты и возвращает количество полных дней между ними.

getDaysBetweenDates('1-1-2020', '1-2-2020'); // -> 1

Функция должна корректно работать с объектом Date
getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)); // -> 366

Функция должна корректно рабоать со значениями в миллисекундах
getDaysBetweenDates(1409796000000, 1409925600000); // -> 1

Если входные параметры - невалидные даты, то функция вовращает NaN:
getDaysBetweenDates('1-1-2020', 'дата'); // -> NaN

Если аргументов меньше 2-х, то функция должна пробросить исключение TypeError
getDaysBetweenDates(null); // -> TypeError

new Date(null) - валидная запись, которая вернёт количество миллисекунд, прошедшее с 01.01.1970 https://en.wikipedia.org/wiki/Unix_time
 */

const getDaysBetweenDates = (date1, date2) => {
  //code here
  // if (arguments.length < 2) {
  if (!date2) {
    throw new TypeError('');
  }

  let d1 = date1 instanceof Date ? date1 : new Date(date1);
  let d2 = date2 instanceof Date ? date2 : new Date(date2);

  if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
    return NaN;
  }

  const diff = Math.abs(d2.getTime() - d1.getTime());
  // const diff = d2.getTime() - d1.getTime();
  // return Math.floor(diff / (1000 * 60 * 60 * 24));
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return d1.getTime() > d2.getTime() && days > 1 ? -days : d1.getTime() > d2.getTime() && days < 1 ? 0 : days
};

// #endregion getDaysBetweenDates

// #region isEmpty

/* 
IsEmpty
Напишите функцию isEmpty, которая возвращает true, если у объекта нет свойств(у самого объекта, не у прототипов), иначе возвращает false.

const obj = Object.create(null);
isEmpty(obj); // -> true
isEmpty({ prop: 'value' }); // -> false
Напишите функцию isEmptyWithProtos, которая возвращает true, если у объекта и его прототипов(не включая Object.prototype) нет свойств, иначе возвращает false.

const protoObj = Object.create(null);
const obj = Object.create(protoObj);
isEmptyWithProtos(obj); // -> true
isEmptyWithProtos({}); // -> false
Обрати внимание на то, что функция isEmptyWithProtos проверяет наличие свойств не только у самого объекта, но и у его прототипов. Если создать пустой объект литерально (просто через фигурные скобки как в примере {}) то у такого объекта автоматически будет прототип Object. Поэтому isEmptyWithProtos возвращает false для таких объектов.


 */

function isEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false
}

function isEmptyWithProtos(obj) {
  while (obj !== null && obj !== Object.prototype) {
    if (Object.keys(obj).length > 0) {
      return false;
    }
    obj = Object.getPrototypeOf(obj);
  }
  return true;
}

// #endregion шыУьзен

// #region Library

/* 
Library
Реализуйте функционал для работы с книгами в библиотеке:

создание книги(добавление новой книги в библиотеку)
Выдача книги читателю
Получение книги от читателя
Получение у кого книга сейчас находится
Необходимо создать контруктор объектов Book, который будет создавать объекты со следующими полями:

name - имя книги
author - имя автора
year - год книги
reader - текущий читатель книги(у кого она на руках) - если она сейчас свободна - должно быть равно null
Необходимо реализовать на прототипе следующие методы работы с книгой:

isAvailable() // true/false - доступна ли книга для выдачи или она у кого-то на руках
takeBook(readerName) - должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
returnBook() - регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
changeBookName(newBookName) - изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
changeAuthorName(newAuthorName) - изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
getCurrentReader() - возвращает имя текущего читателя или null, если книга доступна для выдачи
 */

function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.reader = null;
}

Book.prototype =
{
  isAvailable: function () {
    console.log(`this.reader now is:`, this.reader)
    return this.reader ? false : true
  },
  takeBook(readerName) {
    if (this.isAvailable()) {
      this.reader = readerName;
      console.log(`this.reader now is:`, this.reader)
      return true
    }
    return false
  },
  returnBook() {
    let returnCheck = this.isAvailable() ? false : true
    this.reader = null;
    return returnCheck
  },
  changeBookName(newBookName) {
    this.name = newBookName
    return this.name === newBookName ? true : false
  },
  changeAuthorName(newAuthorName) {
    this.author = newAuthorName
    return this.author === newAuthorName ? true : false
  },
  getCurrentReader() {
    return this.reader
  }
}

// #endregion Library

// #region Prototypes Decorator

/* 
Prototypes Decorator
Необходимо добавить возможность логирования в функцию add класса Addition

Используя прототип класса Addition добавить декоратор к функции add, дающий возможность логировать ее вызов
При этом результат выполнения add должен быть как и в оригинале, но дополнительно при вызове выводить в консоль 'called'

Менять изначальную функцию, класс или созданный объект нельзя.
Код можно писать только в обозначенной зоне.

Пример:
const startedValue = new Addition(5);
const result = startedValue.add(3,5,6) //В консоль выводится "called"
console.log(result) //В консоль выводится 19
 */

class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum);
  }
}
// Write you code here
function logCall(func) {
  return function (...nums) {
    console.log(`called`)
    return func.apply(this, nums)
  }
}
Addition.prototype.add = logCall(Addition.prototype.add)
// End of code

// #endregion Prototypes Decorator

// #region Object Create

/* 
Object Create
В данном задании вам нужно будет реализовать полифл Object.create.

Реализуйте аналог стандартной фунции Object.create - создаёт и возвращает новый объект, прототипом которого является первый аргумент, переданный в функцию. Если передан второй аргумент - устанавливает его в качестве свойств для нового объекта. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

Ваша функция должна принимать два параметра:

prototype (обязательный) - объект или null (но не undefined), который будет являтся прототипом для созданного объекта.
properties (optional) - аргумент, который установит свойства для нового объекта (будет передан в Object.defineProperties).
Если параметры фунции отсутствуют или prototype НЕ является объектом или null, то необходимо пробросить TypeError.

В результате Object.create вернет созданный объект с внутренним свойством [[Prototype]], установленным в значение переданного в аргументе prototype. Если properties передан и НЕ является undefined, то будет вызван Object.defineProperties(obj, properties), где obj - объект,который должен быть возвращен из Object.create.

Подсказки:

Для доступа к внутреннему свойству объекта [[Prototype]] используйте методы Object.getPrototypeOf/Object.setPrototypeOf.
В JavaScript все является объектом, кроме: null и undefined.
NaN, Infinity, /regular expression literals/, function(){} - это всё тоже объекты.
Пример:

const A = {
  objectName: 'Object A',
  getObjectName: function() {
    return `This is ${this.objectName}!`;
  },
};

const B = Object.create(A, {
  objectName: {
    value: 'Object B',
  },
});

A.getObjectName(); // This is Object A!
B.getObjectName(); // This is Object B!

A.hasOwnProperty('getObjectName'); // true
A.hasOwnProperty('objectName'); // true

B.hasOwnProperty('getObjectName'); // false
B.hasOwnProperty('objectName'); // true
 */

Object.create = function (proto, propertiesObject) {
  if (typeof proto !== 'object' && proto !== null) {
    throw new TypeError('Prototype must be an object or null');
  }

  if (propertiesObject !== undefined && typeof propertiesObject !== 'object') {
    throw new TypeError('Properties must be an object or undefined');
  }

  const obj = Object.setPrototypeOf({}, proto);

  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }

  return obj;
};

// #endregion Object Create

// #region Bank Account

/* 
Личный Счет
Создайте 2 класса - Person для описания клиента и Account для работы с банковским счетом частного лица.
Считаем, что отрицательный баланс счета - это нормально, обрабатывать как ошибку не надо.

Person
const person = new Person('Johannes', 'Helms', '1983-01-02');
Методы
getAge() - Возвращает возраст владельца счета
Свойства
firstName - Имя
lastName - Фамилия
fullName - Имя вместе с фамилией, вычислямое свойство (используем геттер)
Account
new Account(person, 1000);
Методы
addMoney(amount, description) - Положить деньги на аккаунт с комментарием к переводу
withdrawMoney(amount, description) - Вывести деньги с аккаунта с комментарием к переводу
getAmount() - Получить текущее состояние счета
getAccountHistory() - Возвращает массив с объектами формата { timestamp: 1574434091131, target: 'in', amount: 10, description: 'ЗП' }. Поле target может иметь значения in или out.
transfer(fromAccount, toAccount, amount) - статический метод, переводит деньги с одного счета на другой
Свойства
person - Владелец счета
Пример
const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
helenAccount.getAmount(); // 500
alexAccount.getAmount(); // 1700
 */

class Person {
  constructor(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
  }

  getAge() {
    const today = new Date(`2019-05-23`);
    let age = today.getFullYear() - this.birthDate.getFullYear();
    const monthDiff = today.getMonth() - this.birthDate.getMonth();
    const dayDiff = today.getDate() - this.birthDate.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--
    }

    return age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Account {
  constructor(person, initialBalance) {
    this.person = person;
    this.balance = initialBalance;
    this.history = [];
  }

  addMoney(amount, description) {
    this.balance += amount;
    this.history.push({
      timestamp: Date.now(),
      target: 'in',
      amount,
      description,
    });
  }

  withdrawMoney(amount, description) {
    this.balance -= amount;
    this.history.push({
      timestamp: Date.now(),
      target: 'out',
      amount,
      description,
    });
  }

  getAmount() {
    return this.balance;
  }

  getAccountHistory() {
    return this.history;
  }

  static transfer(fromAccount, toAccount, sum) {
    fromAccount.withdrawMoney(sum, `Transfer to ${toAccount.person.fullName}`);
    toAccount.addMoney(sum, `Transfer from ${fromAccount.person.fullName}`);
  }
}

// #endregion Bank Account

// #region Calc

/* 
Calc
Реализовать класс Calc с методами sub / add / result

В конструкторе можем передать начальное иммутабельное значение (поумолчанию 0), потом методами add и sum прибавлять и вычитать из него.
Вызов add/sub можно объединять в цепочку (fluent interface), методы возвращают новый объект класса.
По вызову result() получаем результат вычислений.

Пример использования:

const calc = new Calc();
calc.result(); // 0
calc.add(5).result(); // 0 + 5 = 5
calc.add(3).sub(10).result(); // 0 + 3 - 10 = -7

const ten = calc.add(10);
ten.sub(5).result(); // 10 - 5 = 5
ten.result(); // 10
 */

class Calc {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    return new Calc(this.value + num);
  }

  sub(num) {
    return new Calc(this.value - num);
  }

  result() {
    return this.value;
  }
}

// #endregion Calc

// #region Event EventEmitter

// https://platform.kata.academy/user/courses/21/2/2/12

/* 
Транслятор событий
Cоздайте класс EventEmitter для управления событиями. У этого класса должны быть следующие методы:
.on(event, callback) - добавить обработчик события

.off(event, callback) - удалить обработчик события

.once(event, callback) - добавить обработчик события, который сработает единожды

.emit(event, [...arg]) - вызвать все обработчики события event, можно передать аргументы

Расширьте EventEmitter классом BroadcastEventEmitter так, чтобы была возможность вызвать все обработчики всех событий:
emit("*", [...arg]) - вызвать все обработчики событий, можно передать аргументы
Event Emitter можно перевести как “транслятор” событий.

Представьте себе такую ситуацию: происходит какое-то событие, например пользователь кликнул на кнопку, на которое должны отреагировать разные участки программы. Чтобы проще организовать такую логику, используют шаблон Event Emitter, который можно реализовать разными способами. Основная идея в том, чтобы грамотно создать основу для управления событиями и реализовать возможность любым элементам “подписаться” на него (и быть в курсе происходящего).
 */

class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    // code here
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback)
  }

  off(eventName, callback) {
    // code here
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
    }
  }

  once(eventName, callback) {
    // code here
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }

  emit(eventName, ...args) {
    // code here
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(...args));
    }
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(evenName, ...args) {
    Object.values(this.events).forEach(callbacks => callbacks.forEach(callback => callback(...args)))
  }
}

// #endregion Event EventEmitter

// #region Обработка ошибок

// #region csvGenerator

// https://platform.kata.academy/user/courses/21/3/1/2

/* 
csvGenerator
Нужно написать функцию, которая переводит двумерный массив (массив массивов) в CSV формат и возвращать строку О формате: https://ru.wikipedia.org/wiki/CSV (детали в разделе "Спецификация")

Допустимые значения в качестве элементов массива - числа и строки Если встречается функция - выбрасывать ошибку с текстом "Unexpected value"

Функция принимает: data - массив массивов, содержашие числа или строки

Функция возвращает: Строку в формате CSV

Пример:

arraysToCsv([[1, 2], ['a', 'b']]) // '1,2
a,b'
arraysToCsv([[1, 2], ['a,b', 'c,d']]) // '1,2
"a,b","c,d"'
 */

function arrayToCsv(data) {
  try {
    const strCSVarr = []

    for (let value of data) {
      for (let valueIn of value) {
        if (typeof valueIn !== 'string' && typeof valueIn !== 'number') {
          throw new Error('Unexpected value')
        }
      }

      let newValue = value.map((item) => {
        return typeof item === 'string' && (item.includes(',') || item.includes('"')) ? `"${item.replace(/"/g, '""')}"` :
          typeof item === 'string' ? item.replace(/"/g, '""') : item
      })
      strCSVarr.push(newValue)
    }
    console.log(strCSVarr)
    console.log(strCSVarr.join('\n'))
    return strCSVarr.join('\n')
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

// #endregion csvGenerator

// #region increment-counter

// https://platform.kata.academy/user/courses/21/3/1/3

/* 
В localStorage по ключу "counters" находится JSON c объектом, полями которого являются имена счётчиков, а значениями - числовое значение счётчика. Напишите функцию incrementCounter, которой на вход первым параметром передаётся counterName - имя счётчика.

Задача функцции увеличить значение счётчика counterName на 1 и обновить данные в localStorage. В localStorage может находится невалидный JSON, чтение которого может првести к ошибке, в этом случае функция должна записывать новые данные, где у указанного счетчика будет значение 1. В конце функция должна возвращать значение счетчика после инкремента.
 */

function incrementCounter(counterName) {
  try {
    const counters = JSON.parse(localStorage.getItem('counters'));
    counters[counterName] = (counters[counterName] || 0) + 1;
    localStorage.setItem('counters', JSON.stringify(counters));
    return counters[counterName];
  } catch (e) {
    const counters = {};
    counters[counterName] = 1;
    localStorage.setItem('counters', JSON.stringify(counters));
    return 1;
  }
}

// function incrementCounter(counterName) {
//   try {
//     const counters = JSON.parse(localStorage.getItem('counters')) || {};
//     counters[counterName] = (counters[counterName] || 0) + 1;
//     localStorage.setItem('counters', JSON.stringify(counters));
//     return counters[counterName];
//   } catch (e) {
//     const counters = {};
//     counters[counterName] = 1;
//     localStorage.setItem('counters', JSON.stringify(counters));
//     return 1;
//   }
// }

// #endregion increment-counter

// #region getRepetableData

// https://platform.kata.academy/user/courses/21/3/1/4
/* 
getRepeatableData
Написать функцию getRepeatableData, котрая принимает на вход три параметра:

getData- функция, возвращающая данные со стороннего источника. Может генерировать ошибки (см ниже)
key - аргумент, с которым нужно вызвать getData
maxRequestsNumber- максимальное количество вызовов getData функции. Если этот параметр отсутствует - повторяем бесконечное количество раз.
getRepeatableData(getData, key, maxRequestNumber);

Функция getRepeatableData должна вызывать getData и обрабатывать ошибки по условию:

Если вызов getData возвращает ошибку NotFoundError, то мы пробрасываем исключение.
Если вызов getData возвращает ошибку TemporaryError, то мы должны делать повторный вызов getData функции. Кол-во таких вызовов не должно превышать значение maxRequestsNumber. Если кол-во повторого вызыва превышает maxRequestsNumber, то функция getRepeatableData должна пробрасывать ошибку AttemtsLimitExceeded.
Если getData выполняется без ошибок - функция должна вернуть то, что вернула getData. Пример:
const getData = (key) => 'hello' + key;
const res = getRepeatableData(getData, '1', 3); // 'hello1'
 */

class AttemptsLimitExceeded extends Error {
  constructor() {
    super('Max attempts limit exceed');
    this.name = 'AttemptsLimitExceeded';
  }
}

class NotFoundError extends Error {
  constructor() {
    super('Not found');
    this.name = 'NotFoundError';
  }
}

class TemporaryError extends Error {
  constructor() {
    super('TemporaryError');
    this.name = 'TemporaryError';
  }
}

function getRepeatableData(getData, key, maxRequestsNumber = Infinity) {
  //ваш код здесь
  try {
    // console.log('try')
    let func = getData(key)
    return func

  } catch (err) {
    if (err instanceof NotFoundError) {
      console.log('NotFoundError')
      throw err
    } else if (err instanceof TemporaryError) {
      if (maxRequestsNumber === 1) {
        console.log('AttemptsLimitExceeded')
        throw new AttemptsLimitExceeded()
      } else {
        return getRepeatableData(getData, key, maxRequestsNumber - 1)
      }
    }
  }
}

function getRepeatableData1(getData, key, maxRequestsNumber = Infinity) {
  let attempts = 0;
  while (attempts <= maxRequestsNumber) {
    try {
      return getData(key);
    } catch (error) {
      if (error instanceof NotFoundError) {
        throw error;
      } else if (error instanceof TemporaryError) {
        attempts++;
        if (attempts > maxRequestsNumber) {
          throw new AttemptsLimitExceeded();
        }
      } else {
        throw error;
      }
    }
  }
}

// #endregion getRepetableData

// #region Apply Functions

// https://platform.kata.academy/user/courses/21/3/1/5
/* 
Apply Functions
Написать функцию applyFn, которая принимает на вход 2 параметра:

Массив с входными данными
Функцию, которую нужно применить к каждому элементу массива входных данных applyFn(dataArr, callback);
Функция должна возвращать объект в котором 2 массива массив результатов succeeded и массив ошибок errors с правильными call stacks

{
  succeeded: [...], // Массив данных после функции обработчика, как при вызове .map
  errors: [...],    // Массив инстансов ExecutionError
}
Создать класс ошибки ExecutionError с методом .getArgData(), по которому можно получить входные данные, на которых упала функция-коллбэк, то есть возвращать element входного массива dataArr, если вызов callback(element) сгенерирует ошибку

Стек трейс должен указывать на корректную позицию в функции-коллбэке Примечание: класс ExecutionError нужно сделать наследником другого класса

Пример:

const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
/  succeeded: [2, 3, 4],
/  errors: [],

const dataArr = ['{"login":"login","password":"password"}', '{{}'];
const callback = JSON.parse;
const { succeeded, errors } = applyFn(dataArr, callback);
/  succeeded: [{ login: 'login', password: "password" }],
/  errors: [ExecutionError],
errors[0].getArgData(); // '{}'
 */

class ExecutionError extends Error {
  constructor(arg, stack) {
    super()
    this.arg = arg;
    this.stack = stack
  }

  getArgData() {
    return this.arg
  }
}

function applyFn(dataArr, callback) {

  let succeeded = []
  let errors = []

  // dataArr.forEach((value) => {
  dataArr.forEach((arg) => {
    try {
      // succeeded.push(callback(value))
      succeeded.push(callback(arg))
    } catch (error) {
      // const executionError = new ExecutionError(value, error.stack);
      const executionError = new ExecutionError(arg, error.stack);
      errors.push(executionError);
    }
  })

  return { succeeded, errors }
}

// #endregion Apply Functions

// #endregion Обработка ошибок

// #region Работа с асинхронным кодом

// #region SumFileSizes

// https://platform.kata.academy/user/courses/21/3/2/3

/* 
SumFileSizes
Напишите функцию, которая принимает имена двух файлов и вызывает функцию, переданную третьим параметром и передает ей первым агрументом сумму их размеров.

Для получения рамзера файла необходимо использовать функцию getFileSize(filename, cb).
*/

let fileSizes = {
  testFile1: 65,
  testFile2: 48,
}

function getFileSize(filename, cb) {
  setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
}

function sumFileSizes(filename1, filename2, cb) {
  getFileSize(filename1, function (size1) {
    getFileSize(filename2, function (size2) {
      cb(size1 + size2)
    })
  })
}

/* This function uses the getFileSize function to get the sizes of both files, and then calls the callback function cb with the sum of the two sizes.

However, this implementation has a problem: it's not very efficient, as it waits for the first file size to be retrieved before requesting the second file size. A better approach would be to request both file sizes concurrently, and then call the callback function when both sizes are available.

Here's an improved implementation: */

function sumFileSizes(filename1, filename2, cb) {
  let sizes = [];
  getFileSize(filename1, (size1) => {
    sizes[0] = size1;
    if (sizes[1] !== undefined) {
      cb(sizes[0] + sizes[1]);
    }
  });
  getFileSize(filename2, (size2) => {
    sizes[1] = size2;
    if (sizes[0] !== undefined) {
      cb(sizes[0] + sizes[1]);
    }
  });
}

/* This implementation uses an array to store the sizes of both files, and calls the callback function when both sizes are available.

Alternatively, you can use Promise to make the code more readable and efficient: */

function sumFileSizes(filename1, filename2, cb) {
  Promise.all([getFileSizePromise(filename1), getFileSizePromise(filename2)])
    .then((sizes) => cb(sizes[0] + sizes[1]));

  function getFileSizePromise(filename) {
    return new Promise((resolve) => {
      getFileSize(filename, resolve);
    });
  }
}
/* This implementation uses Promise.all to wait for both file sizes to be retrieved, and then calls the callback function with the sum of the two sizes. */

// #endregion SumFileSizes

// #region getUsersInfo

// https://platform.kata.academy/user/courses/21/3/2/4

/* 
getUsersInfo
Вам нужно написать функцию, которая получает массив всех пользователей и передает его в функцию коллбэк.

Пример использования

getUsersInfo((users) => {
  console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
});
Для получения данных вам предоставлены 2 асинхронные функции

getUsersIds - Возвращает массив с идентификаторами пользователей
getUserInfo - Возвращает данные пользователя по заданному идентификатору
getUsersIds((ids) => {
  console.log(ids); // ['id2', 'id6']
});

getUserInfo('someUserId', (userInfo) => {
  console.log(userInfo); // { name: 'Alex', age: 70 }
});
Функция должна вызвать callback, переданный первым агрументом и передать туда массив данных о пользователях.

Порядок пользователей в результирующем массиве должен соответствовать порядку идентификаторов в массиве из getUsersIds

Hint: Вне платформы вы можете создать эти функции с помощью setTimeout и какого-то общего хранилица данных.
 */

/* 
Here's an implementation of the getUsersInfo function that uses the getUsersIds and getUserInfo functions to fetch user data and pass it to the callback function in the correct order:
 */

const { getUserInfo, getUsersIds } = db;

function getUsersInfo(onLoad) {
  getUsersIds((ids) => {
    let users = [];
    let count = 0;
    ids.forEach((id) => {
      getUserInfo(id, (userInfo) => {
        users.push(userInfo);
        count++;
        if (count === ids.length) {
          onLoad(users);
        }
      });
    });
  });
}

/*
This implementation uses the forEach method to iterate over the array of user IDs returned by getUsersIds. For each ID, it calls getUserInfo to fetch the user data and pushes it to the users array. It also keeps track of the number of users fetched using the count variable. Once all users have been fetched, it calls the onLoad callback function and passes the users array as an argument.
 */

// #endregion getUsersInfo

// #region increaseSalary

// https://platform.kata.academy/user/courses/21/3/2/6

/* 
increaseSalary
Давайте напишем функцию, которая будет увеличивать зарплату сотруднику с наименьшей зарплатой.

Вам нужно

Получает данные по всем работникам
Находит работника с наименьшей зарплатой
Отправляет запрос на повышение зарплаты этому сотруднику на 20%
Если запрос прошел успешно - отправить сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
Если запрос завершился неудачей - отправить данные об ошибке администратору
Должна всегда возвращать resolved промис с boolean значением:

true если увеличение прошло успешно
false если нет
Все функции для получения/изменения данных асинхронны и возвращают промисы.
Вам предоставлены функции:

api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
api.notifyAdmin(error); // Принимает ошибку
 */

/* 
Here's an explanation of the code:

We first get all employees using api.getEmployees().
We find the employee with the lowest salary using reduce().
We calculate the new salary by increasing the lowest salary by 20%.
We update the employee's salary using api.setEmployeeSalary().
We send a notification to the employee using api.notifyEmployee().
If all steps are successful, we return true.
If any step fails, we catch the error, notify the admin using api.notifyAdmin(), and return false.
Note that we use then() to chain the promises together, and catch() to handle any errors that may occur.
 */

function increaseSalary() {
  return api.getEmployees()
    .then(employees => {
      const lowestSalaryEmployee = employees.reduce((min, current) => current.salary < min.salary ? current : min, employees[0]);
      const newSalary = lowestSalaryEmployee.salary * 1.2;
      return api.setEmployeeSalary(lowestSalaryEmployee.id, newSalary);
    })
    .then(updatedEmployee => {
      const notificationText = `Hello, ${updatedEmployee.name}! Congratulations, your new salary is ${updatedEmployee.salary}!`;
      return api.notifyEmployee(updatedEmployee.id, notificationText);
    })
    .then(() => true)
    .catch(error => {
      api.notifyAdmin(error);
      return false;
    });
}

const api = {
  _employees: [
    { id: 1, name: 'Alex', salary: 120000 },
    { id: 2, name: 'Fred', salary: 110000 },
    { id: 3, name: 'Bob', salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      this._employees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
            ...employee,
            salary: newSalary,
          }
      );
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },
};


// #endregion increaseSalary

// #region promise-race

// https://platform.kata.academy/user/courses/21/3/2/7

/* 
PromiseRace
Напишите функцию, которая принимает массив промисов и возвращает результат того, который завершился первым. При этом если первый промис выдал ошибку - необходимо вернуть ее.

Пример:

const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

promiseRace([firstPromise, secondPromise, thirdPromise]); // 100
 */

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      promise.then((result) => {
        resolve(result);
      }).catch((error) => {
        reject(error);
      });
    });
  });
}

// #endregion promise-race

// #region promise-all

// https://platform.kata.academy/user/courses/21/3/2/8

/* 
PromiseAll
Напишите асинхронную функцию, которая принимает массив промисов и возвращает массив результатов вызова этих промисов.

Пример:

const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

promiseAll([firstPromise, secondPromise, thirdPromise])
    .then(console.log); // [300, 200, 100]
 */

function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      resolve([])
    } else {
      const results = [];
      let completed = 0;
      for (let i = 0; i < promises.length; i++) {
        promises[i].then((result) => {
          results[i] = result;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        }).catch((error) => {
          reject(error);
        });
      }
    }

  });
}

// #endregion promise-all

// #region increaseSalary async/await

// https://platform.kata.academy/user/courses/21/3/2/10

/* 
increaseSalary
Давайте доработаем нашу функцию увеличения зарплат, но теперь будем увеличивать ЗП всем сотрудникам и добавим к ней дополнительный функционал.
Теперь будем использовать функционал async/await для решения этой задачи.

Вам нужно написать функцию, которая

Получает данные по всем работникам
Считаем среднее-арифметическое по ЗП
Тем сотрудникам, у которых ЗП меньше средней - повышаем на 20%, у кого больше - на 10%
Если запрос прошел успешно - отправлять сотруднику уведомление об увеличении ЗП тектом: Hello, <имя>! Congratulations, your new salary is <новая ЗП>!
Если запрос завершился неудачей - отправлять данные ошибки администратору
По итогу отправить суммарное ЗП работников после повышения в бухгалтерию
Должна всегда возвращать resolved промис с числовым значением, сколько зарплат успешно повышено.

Все функции для получения/изменения данных асинхронны и возвращают промисы.
Вам предоставлены функции:

api.getEmployees(); // Возвращает массив с объектами {id: 343, name: 'Alex', salary: 20000}
api.setEmployeeSalary(employeeId, newSalary); // Принимает id сотрудника и новую зарплату. Возвращает новые данные по сотруднику.
api.notifyEmployee(employeeId, text); // Принимает id сотрудника и текст уведомления
api.notifyAdmin(error); // Принимает ошибку
api.sendBudgetToAccounting(summarySalaries); // Принимает суммарную ЗП
 */

async function increaseSalary() {
  try {
    // 1. Get data on all employees
    const employees = await api.getEmployees();

    // 2. Calculate the arithmetic mean for the salaries
    const averageSalary = employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;

    // Initialize counter for successfully increased salaries
    let increasedSalariesCount = 0;

    // Initialize total salaries after increase
    let totalSalariesAfterIncrease = 0;

    // Loop through each employee
    for (const employee of employees) {
      // Determine the increase percentage based on the average salary
      const increasePercentage = employee.salary < averageSalary ? 0.2 : 0.1;

      // Calculate the new salary
      const newSalary = employee.salary * (1 + increasePercentage);

      try {
        // 3. Increase the salary
        await api.setEmployeeSalary(employee.id, newSalary);

        // 4. Send a notification to the employee
        await api.notifyEmployee(employee.id, `Hello, ${employee.name}! Congratulations, your new salary is ${newSalary}!`);

        // Increment the counter for successfully increased salaries
        increasedSalariesCount++;

        // Add the new salary to the total salaries after increase
        totalSalariesAfterIncrease += newSalary;
      } catch (error) {
        // 6. Send a notification to the administrator if there's an error increasing the salary
        await api.notifyAdmin(error);
      }
    }

    // 7. Send the total salaries after increase to the accounting department
    await api.sendBudgetToAccounting(totalSalariesAfterIncrease);

    // Return the number of successfully increased salaries
    return increasedSalariesCount;
  } catch (error) {
    // 5. Send the error data to the administrator if the request fails
    await api.notifyAdmin(error);
    return 0;
  }
}

/*
This solution uses async/await to handle the promises returned by the API functions. It calculates the average salary, increases the salaries of employees based on the average, sends notifications to employees and the administrator as needed, and finally sends the total salaries after increase to the accounting department. The function returns the number of successfully increased salaries.
 */

// #region it doesnt pass the test, for comparison

/* 
JavaScript. Now we will increase the salaries of all employees and add additional functionality to it.
Now we will use the async/await functionality to solve this problem.
You need to write a function that
1. Gets data on all employees
2. Calculate the arithmetic mean for the salaries
3. For those employees whose salaries are less than the average, we increase them by 20%, for those who are more, we increase them by 10%
4. If the request is successful, send the employee a notification about the salary increase with the text: Hello, <name>! Congratulations, your new salary is <new salary>!
5. If the request fails, send the error data to the administrator (must be!).
6. in case of an error in increasing the salary, it should send a notification to the administrator, but not to the user
7. As a result, send the total salaries of employees after the increase to the accounting department
Must always return a resolved promise with a numeric value of how many salaries have been successfully increased.
All functions for getting/changing data are asynchronous and return promises.
You are provided with the following functions:
api.getEmployees(); // Returns an array with objects {id: 343, name: 'Alex', salary: 20000}
api.setEmployeeSalary(employeeId, newSalary); // Accepts the employee id and the new salary. Returns new employee data.
api.notifyEmployee(employeeId, text); // Accepts the employee id and notification text
api.notifyAdmin(error); // Accepts the error
api.sendBudgetToAccounting(summarySalaries); // Accepts the total salary
 */


async function increaseSalary() {
  try {
    // 1. Get data on all employees
    const employees = await api.getEmployees();

    // 2. Calculate the arithmetic mean for the salaries
    const averageSalary = employees.reduce((sum, employee) => sum + employee.salary, 0) / employees.length;

    // 3. For those employees whose salaries are less than the average, we increase them by 20%, for those who are more, we increase them by 10%
    const updatedEmployees = employees.map((employee) => {
      const newSalary = employee.salary < averageSalary ? employee.salary * 1.2 : employee.salary * 1.1;
      return { ...employee, salary: newSalary };
    });

    // 4. If the request is successful, send the employee a notification about the salary increase
    await Promise.all(updatedEmployees.map((employee) => {
      api.notifyEmployee(employee.id, `Hello, ${employee.name}! Congratulations, your new salary is ${employee.salary}!`);
      return api.setEmployeeSalary(employee.id, employee.salary);
    }));

    // 5. If the request fails, send the error data to the administrator
    // (Note: this is not actually needed in this implementation, as we're using try-catch to handle errors)

    // 6. As a result, send the total salaries of employees after the increase to the accounting department
    const totalSalaries = updatedEmployees.reduce((sum, employee) => sum + employee.salary, 0);
    await api.sendBudgetToAccounting(totalSalaries);

    // Return the number of salaries successfully increased
    return updatedEmployees.length;
  } catch (error) {
    await api.notifyAdmin(error);
    throw error;
  }
}

/* This implementation uses async/await to simplify the code and make it easier to read. It also uses Promise.all to handle the array of promises returned by api.notifyEmployee and api.setEmployeeSalary. If any of the promises reject, the error is caught and sent to the administrator using api.notifyAdmin. Finally, the total salaries of employees after the increase are sent to the accounting department using api.sendBudgetToAccounting. */

// #endregion it doesnt pass the test, for comparison

// #endregion increaseSalary async/await

// #region PromisesInSeries

// https://platform.kata.academy/user/courses/21/3/2/11

// https://habr.com/ru/articles/435084/

/* 
Напишите функцию, которая принимает массив асинхронных функций и последовательно(следующая начинается, когда закончилась предыдущая) вызывает их, передавая в аргументы результат вызова предыдущей функции.

Пример:

const firstPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(300), 300));

const secondPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(200), 200));

const thirdPromise = () =>
  new Promise((resolve) => setTimeout(() => resolve(100), 100));

promisesInSeries([firstPromise, secondPromise, thirdPromise]);
Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс
 */

async function promisesInSeries(asyncFns) {
  let result = undefined;

  for (const asyncFn of asyncFns) {
    result = await asyncFn(result);
  }

  return result;
}

// #endregion PromisesInSeries

// #region throttle

// https://platform.kata.academy/user/courses/21/3/2/13

// https://learn.javascript.ru/call-apply-decorators

// https://www.youtube.com/watch?v=hebOYhtZr28&ab_channel=Front-endScienceізСергіємПузанковим

/* 
Throttle
 

Реализуйте функции throttle.

Примечание: из-за особенностей тестирования реализация new Date() изменена так, что изначальная текущая дата (new Date() или Date.now()) будет равна нулю и будут вручную увеличиваться в тестах. Учтите это, если будете использовать дату в реализации функций.

Примечание: функции, полученные из throttle, должны передавать полученные аргументы и контекст вызова в оригинальную функцию

Примечание: функция throttle может быть реализована без использования таймеров

Функция должна принимать функцию и время задержки, а возвращать модифицированную функцию. Возвращенная функция должна следовать следующим правилам:

Функция throttle должна вызывать функцию и запускать таймер, равный времени задержки, в течение которого функция не может быть вызвана заново. Throttle необходим для того, чтобы обеспечить возможность вызова функции не чаще, чем указанное время задержки. Если время задержки равно 500 мс, то при вызове функции, возвращенной из throttle, каждые 100 мс 10 раз подряд функция будет вызвана лишь три раза:
первый вызов функции на 0мс (первая попытка вызова функции после 0 мс задержки),
второй на 500 мс (пятая попытка вызова функции после 500 мс задержки)
и третий на 1000 мс (десятая попытка вызова функции после 1000 мс задержки).
Пример throttle:

let counter = 0;
const fn = () => {
  counter++;
};

const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

const intervalId = setInterval(throttledFn, 100);
setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

console.log(counter); // 3
 */

function throttle(fn, delay) {
  let timeoutId;
  return function (...args) {
    const context = this;
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, delay);
      fn.apply(context, args);
    }
  };
}

/*
Here's an explanation of how the code works:

The throttle function takes a function fn and a delay time delay as arguments.
It returns a new function that wraps the original function fn.
The returned function uses a closure to keep track of a timeoutId variable, which is used to store the ID of the timeout set by setTimeout.
When the returned function is called, it checks if a timeout is already pending (i.e., timeoutId is truthy). If not, it sets a new timeout using setTimeout with the specified delay.
If a timeout is not pending, the function calls the original function fn with the original arguments args and context this using fn.apply.
When the timeout expires, the timeoutId is reset to null, allowing the function to be called again.
You can test this implementation using the example you provided:

let counter = 0;
const fn = () => {
  counter++;
};

const throttledFn = throttle(fn, 500);

const intervalId = setInterval(throttledFn, 100);
setTimeout(() => clearInterval(intervalId), 1000);

console.log(counter); // 3
 */

// #endregion throttle

// #region debounce

// https://platform.kata.academy/user/courses/21/3/2/14

// https://learn.javascript.ru/call-apply-decorators

// https://learn.javascript.ru/task/debounce

/* 
Реализуйте функции debounce.

Примечание: функции, полученные из debounce, должны передавать полученные аргументы и контекст вызова в оригинальную функцию
Функция должна принимать функцию и время задержки, а возвращать модифицированную функцию. Возвращенная функция должна следовать следующим правилам:

Функция debounce должна запускать таймер, равный времени задержки, и игнорировать вызовы функции в течение времени задержки, а так же начинать отсчет задержки заново каждый раз, когда функция была вызвана. Как только пройдет время задержки с момента последнего вызова функции, дебаунс должен вызвать последнюю вызванную функцию. Debounce нужен для того, чтобы "собрать" многократные вызовы одной и той же функции в течение короткого промежутка времени и вызвать ее только единожды после окончания вызовов. При вызове функции, возвращенной из debounce (переданная в debounce задержка равна 200 мс), 100 раз подряд с задержкой в меньше, чем 200 мс, функция будет вызвана лишь единожды спустя 200 мс после последнего (сотого) вызова.
Пример debounce:

let counter = 0;
const fn = () => {
  counter++;
};

const debouncedFn = debounce(fn, 200);
debouncedFn(); // первый вызов
setTimeout(debouncedFn, 100); // вызов через 100 мс после последнего вызова
первый вызов был заблокирован, второй ожидает окончания таймера
setTimeout(debouncedFn, 200); // вызов через 100 мс после последнего вызова
второй вызов был заблокирован, третий ожидает окончания таймера
setTimeout(debouncedFn, 300); // ...
setTimeout(debouncedFn, 400); // после этого вызова не следует других вызовов
только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
console.log(counter); // 1
 */

const debounce = (fn, debounceTime) => {
  //code here
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, arguments), debounceTime)
  }
};

// #endregion debounce

// #endregion Работа с асинхронным кодом