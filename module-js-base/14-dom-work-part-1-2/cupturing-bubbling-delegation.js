// #region capturing and bubbling

const allElements = document.querySelectorAll("*");

allElements.forEach((elem) => {
  elem.addEventListener("click", (event) => {
    // event.stopPropagation(); // stops bubling on the listner
    // console.log(event);
    if (event.currentTarget.tagName === "FORM") {
      event.stopPropagation();
    }
    // currentTarget the elements on which the event was acted NOW
    console.log(`bubling, ${elem.tagName}`);
  });
  // elem.addEventListener(
  // "click",
  // () => {
  // console.log(`capturing, ${elem.tagName}`);
  // },
  // true
  // );
});

// #endregion capturing and bubbling

// #region event delegations

const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", (e) => {
  const p = e.target.closest("p");
  if (p) {
    p.style.color = "red";
  }
});

// #endregion event delegations
