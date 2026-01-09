// Algorithm -- it is the certain set of action which lead to a specific end result.
// Algorithm -- it is a form of a task solution, a problem solving

// Бинарный поиск -- это алгоритм поиска в отсортированном массиве путём многократного деления пополам с последоватльным выбором следующей части для деления до нахождения нужного элемента или установления его отсутствия.

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
