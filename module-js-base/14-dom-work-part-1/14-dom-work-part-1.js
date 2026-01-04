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
