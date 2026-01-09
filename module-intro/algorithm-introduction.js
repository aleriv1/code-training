// Algorithm -- it is the certain set of action which lead to a specific end result.
// Algorithm -- it is a form of a task solution, a problem solving

// Бинарный поиск -- это алгоритм поиска в отсортированном массиве путём многократного деления пополам с последоватльным выбором следующей части для деления до нахождения нужного элемента или установления его отсутствия.
/* 
Например, сортировка по первой букве.

 Сортировка пузырьком -- этоалгоритм сортировки элементов в массиве,который сравнивает и при необходимости меняет местам пары элементов,находиящихся не в нужном порядке,повторяя этот процес до полной сортировки.

 Это алгоритм будет проходить по каждому элементу списка и сравнивнивать его с будущим, следующим элементом списка.
 */

const para = document.querySelector("p");

para?.addEventListener("click", updateName);

function updateName() {
  let name = prompt("Enter a new name");
  para.textContent = "Player 1: " + name;
}

function createParagraph() {
  console.log("test");
  let para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", createParagraph);
}

// #region night club face control -- for person only above 18

const visitor = [
  { name: "Anna", age: 30 },
  { name: "Evgenii", age: 18 },
  { name: "Pavel", age: 17 },
];

const MAX_AGE = 18;

for (let i = 0; i < visitor.length; i++) {
  // if (visitor[i].age < 18) {
  if (visitor[i].age >= 18) {
    // console.log(visitor[i].name, "you are not allowed to enter this club.");
    console.log(visitor[i].name, "you are allowed to enter this club.");
  }
}

console.log("---");

for (const user of visitor) {
  if (user.age < 18)
    console.log(`You are not allowed to enter this club, ${user.name}.`);
}
console.log("---");

visitor.forEach((visitor) => {
  visitor.age < 18
    ? console.log(`${visitor.name} you cannot enter`)
    : console.log(`${visitor.name} you can enter`);
});

console.log("---");

console.log(
  visitor.map((visitor) => {
    return visitor.age < 18
      ? `${visitor.name} you cannot enter`
      : `${visitor.name} you can enter`;
  })
);

console.log("---");

// #endregion night club face control -- for person only above 18

// #region min and max number

// const numbers = [22, 1, 3, -2, 10, 100];
const array = [17, 12, 54, 90, 10, 2, 25, 93, 83, 15];

// console.log(Math.max.apply(null, number));
// console.log(Math.max(...number));

/* 
Вообще, есть методы поиска максимального и минимального знааения...
Но если по честному (честно, я знаю эти методы, раньше;
и,честно -- это решение, "чистое" написал сам -- и да, про infinity я в курсе.)

1. Так вот, нужны реперные точки, с чем сравнивать; мы не знаем насколько большим и малым моогут чиса в массиве -- поэтому здесь пригодятся особые значения Number -- бесконечности.
2. Эти бесконечности приравниваем ко внешним переменным, соответственно -Infinity -- к maxNumber, Ininity -- к minNumber
3. Далее в цикле по массиву производим сравнение с элементов массива с переменными; если значение для максимума из массива превышает maxNumber, объявленную вне цикла (на первой итерации это будет , если только в самом array не окажется Infinity; тогда масксимальное значение останется, и будет в дальнейшем, бесконечностью) -- присваиваем maxNaumber значение из массива -- и так по всему array.
3.1 Аналогично для минимума, но в обратную сторону -- для minNumber -- положительная бесконечность; любое число не бесконечность из массива на первой итерации будет меньше -- или минимальное число останется и будет -Infinity -- и так до конца массива

 */

function minAndMax(arrayToTest) {
  let maxNumber = -Infinity;
  let minNumber = Infinity;
  // console.log("typeof Infinity", typeof Infinity);
  // console.log("typeof -Infinity", typeof -Infinity);

  for (let i = 0; i < arrayToTest.length; i++) {
    if (arrayToTest[i] > maxNumber) {
      maxNumber = arrayToTest[i];
    }
    if (arrayToTest[i] < minNumber) {
      minNumber = arrayToTest[i];
    }
  }
  return { minNumber, maxNumber };
}

console.log(minAndMax(array).minNumber);
console.log(minAndMax(array).maxNumber);

function showMinOrMax(minOrMax) {
  const numberOutput = document.createElement("p");
  numberOutput.classList.add("min-and-max-number");
  numberOutput.id = minOrMax;
  let stringForMin = "";
  // for (const number of array) {
  array.forEach((number) => {
    let numberEl = String(number);
    if (number === minAndMax(array)[minOrMax]) {
      numberEl = `<span style='background: red; font-size: 36px; color: lime; padding: 5px; border-radius: 15%; box-shadow: 0 0 5px 1px blue'>${String(
        number
      )}</span>`;
    }
    stringForMin += `${numberEl}, `;
    // }
  });
  numberOutput.innerHTML = `${
    minOrMax === "minNumber" ? "Минимальное" : "Максимальное"
  } значение в массиве: ${stringForMin.slice(0, -2)}`;
  document.querySelector("body").append(numberOutput);
}

showMinOrMax("minNumber");
showMinOrMax("maxNumber");

// https://codesandbox.io/p/sandbox/4nyr7l

// #endregion min and max number

// #region logic tasks

const weightComparator = {
  ballWeight: {},

  findHeaviestBall(a3g, b3g, a1g, b1g) {
    const wG3a = this.weight(a3g);
    const wG3b = this.weight(b3g);

    if (wG3a === wG3b) {
      return this.compareTwoBalls(a1g, b1g);
    } else if (wG3a > wG3b) {
      return this.compareOneBallFromThree(wG3a);
    } else {
      return this.compareOneBallFromThree(wG3b);
    }
  },

  compareOneBallFromThree(group) {
    for (let i = 0; i < group.length; i++) {
      this.ballWeight[i] = this.weight(group[i]);
    }
    return this.findHeaviestBallFromGroup();
  },

  findHeaviestBallFromGroup() {
    const sortedKeys = Object.keys(this.ballWeight).sort(
      (a, b) => this.ballWeight[a] - this.ballWeight[b]
    );
    return this.ballWeight[sortedKeys[0]];
  },

  compareTwoBalls(a1g, b1g) {
    if (this.weight(a1g) > this.weight(b1g)) {
      return a1g;
    } else {
      return b1g;
    }
  },

  weight(group) {
    return group.weight;
  },
};

// #endregion logic tasks
