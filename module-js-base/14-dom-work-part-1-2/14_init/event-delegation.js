// #region event deleation

// const allNavigationButtons = document.querySelectorAll(
//   ".main-navigation__button-item"
// );

// allNavigationButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const targetButton = event.target;
//     allNavigationButtons.forEach((navButton) => {
//       navButton.classList.remove("main-navigation__button-item_selected");
//     });
//     targetButton.classList.add("main-navigation__button-item_selected");
//   });
// });

// ---

// We should take the main parent and hang the common listner on it.

const allNavigationButtons = document.querySelectorAll(
  ".main-navigation__button-item"
);

const mainNavigation = document.querySelector(".main-navigation");

mainNavigation.addEventListener("click", (event) => {
  // console.log("target", event.target);
  const isNavButton = event.target.closest(".main-navigation__button-item");
  console.log("click on the container");
  if (isNavButton) {
    allNavigationButtons.forEach((navButton) => {
      navButton.classList.remove("main-navigation__button-item_selected");
    });
    event.target.classList.add("main-navigation__button-item_selected");
  }
}); // this handler will be triggered on every html el which are incide this parent html element
// so we can check, if target is a link the action is activated

const firstNavButton = document.querySelector(".main-navigation__button-item");

firstNavButton.addEventListener("click", (e) => {
  console.log("the frist button", e.target);
});

document.body.addEventListener("click", (e) => {
  console.log(`click on the body`, e.target);
});

// #endregion event deleation
