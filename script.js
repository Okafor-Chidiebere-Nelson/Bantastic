const navToggleCont = document.querySelector("#nav-toggle-cont");
const mainNavContainer = document.querySelector(".main-nav-container");

navToggleCont.addEventListener("click", () => {
  mainNavContainer.classList.toggle("display");
});
