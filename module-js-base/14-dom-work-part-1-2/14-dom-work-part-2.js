// #region click

const p = document.querySelector("p");
p.addEventListener("click", (event) => {
  // p.textContent += " click";
  event.target.textContent += " click target";
});

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((p) => {
  // p.addEventListener("click", (event) => {
  //   event.target.innerText += " all paras click";
  // });
  p.addEventListener("click", allText);
});

function allText(event) {
  // event.target.innerText += " allText";
}

// #endregion click

// #region submit

const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // const { target } = event;
  // const taskNameInput = target.text;
  // const inputValue = taskNameInput.value;
  const inputValue = event.target.elements.text.value;
  if (inputValue) {
    const main = document.querySelector("#main");
    main.insertAdjacentHTML("beforeend", `<p>${inputValue}</p>`);
    // const paragraph = document.createElement("p");
    // paragraph.innerText = inputValue;
    // main.append(paragraph);
  }
});

// #endregion submit

// #region keydown, keyup

document.addEventListener("keydown", (e) => {
  const key = e.key;
  const p = document.querySelector(`[data-id='${key}']`);
  if (p) {
    p.style.fontWeight = "bold";
  }
});

document.addEventListener("keyup", (e) => {
  const key = e.key;
  const p = document.querySelector(`[data-id='${key}']`);
  if (p) {
    p.style.fontWeight = "normal";
  }
});

// #endregion keydown, keyup

// #region mouseover

const paras = document.querySelectorAll("p");

paras.forEach((p) => {
  p.addEventListener("mouseover", (e) => {
    e.target.style.fontWeight = "bold";
  });
});

paras.forEach((p) => {
  p.addEventListener("mouseout", (e) => {
    e.target.style.fontWeight = "normal";
  });
});

// #endregion mouseover

// #region contextmenu

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(e.target);
});

// #endregion contextmenu

// #region change

const input = document.querySelector('input[type="text"]');

input.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (!e.target.value) {
    console.log("Enter the text");
  }
});

// #endregion change

const button = document.querySelector('input[type="submit"]');
button.disabled = true;
input.addEventListener("input", (e) => {
  button.disabled = !e.target.value;
});
