// #region squares

for (let i = 0; i < 10; i++) {
  const body = document.querySelector("body");
  body.classList.add("body");
  // body.style.display = "flex";
  // body.style.justifyContent = "space-around";

  const square = document.createElement("div");
  square.classList.add("square");
  // square.style.width = "30px";
  // square.style.height = "30px";
  // square.style.backgroundColor = "green";
  body.appendChild(square);
}

// #endregion squares

// #region dom tree

// #endregion dom tree

const div = document.getElementById("main");
console.log(div);
console.log("div.id", div.id);
console.log("div.innerHTML", div.innerHTML); // the all html code
console.log("div.children", div.children);

console.log(div.style);
div.style.border = "3px solid orange";
div.style.backgroundImage = "linear-gradient(0deg, red, yellow)";

const textCollection = document.getElementsByClassName("text");
console.log(textCollection);

const paragraph = document.getElementsByTagName("p");
console.log(paragraph);

const divQuerySelector = document.querySelector("#main");
console.log(divQuerySelector);

const textQuerySelector = document.querySelector(".text");
console.log("textQuerySelector", textQuerySelector);
console.log("textQuerySelector.className", textQuerySelector.className);
console.log("textQuerySelector.innerText", textQuerySelector.innerText);
console.log("textQuerySelector.textContent", textQuerySelector.textContent);
console.log("textQuerySelector.dataset", textQuerySelector.dataset);
console.log(
  "textQuerySelector.dataset.id (data-id)",
  textQuerySelector.dataset.id
);
textQuerySelector.dataset.id = 12;
console.log(
  "textQuerySelector.dataset.id (data-id)",
  textQuerySelector.dataset.id
);

const paragraphQuerySelector = document.querySelector("p");
console.log(paragraphQuerySelector);

const paragraphQuerySelectorAtrr = document.querySelector('[data-id="2"]');
console.log(paragraphQuerySelectorAtrr);

const elements = document.querySelector("#main p.text");
console.log(elements);

const paragraphQuerySelectorAll = document.querySelectorAll("p");
console.log(paragraphQuerySelectorAll);

const newParagraph = document.createElement("p");
newParagraph.className = "text";
newParagraph.dataset.id = "3";
newParagraph.textContent = "the third paragraph";
console.log(newParagraph);

div.append(newParagraph);
div.prepend(newParagraph);
div.before(newParagraph);
div.after(newParagraph);

const firstParagraph = document.querySelector("p");
// firstParagraph.replaceWith(newParagraph);
div.insertAdjacentElement("beforeend", newParagraph);

// firstParagraph.remove();

const parent = firstParagraph.closest("div");
console.log(parent);

console.log("firstParagraph.classList", firstParagraph.classList);

firstParagraph.classList.add("red");

console.log(
  'firstParagraph.hasAttribute("class")',
  firstParagraph.hasAttribute("class")
);

console.log(
  'firstParagraph.getAttribute("class"):',
  firstParagraph.getAttribute("class")
);

firstParagraph.setAttribute("id", "alena");

console.log(
  'firstParagraph.getAttribute("id"):',
  firstParagraph.getAttribute("id")
);

div.removeAttribute("style");
