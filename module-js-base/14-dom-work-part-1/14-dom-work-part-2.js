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

function allText(even) {
  even.target.innerText += " allText";
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
