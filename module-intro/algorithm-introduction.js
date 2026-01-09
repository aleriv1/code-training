// Algorithm -- it is the certain set of action which lead to a specific end result.
// Algorithm -- it is a form of a task solution, a problem solving

// Бинарный поиск -- это алгоритм поиска в отсортированном массиве путём многократного деления пополам с последоватльным выбором следующей части для деления до нахождения нужного элемента или установления его отсутствия.
/* 
Например, сортировка по первой букве.

 Сортировка пузырьком -- этоалгоритм сортировки элементов в массиве,который сравнивает и при необходимости меняет местам пары элементов,находиящихся не в нужном порядке,повторяя этот процес до полной сортировки.

 Это алгоритм будет проходить по каждому элементу списка и сравнивнивать его с будущим, следующим элементом списка.
 */

const para = document.querySelector("p");

para.addEventListener("click", updateName);

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

for (let i = 0; i < visitor.length; i++) {}

// #endregion night club face control -- for person only above 18
