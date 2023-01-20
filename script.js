const navToggleCont = document.querySelector("#nav-toggle-cont");
const mainNavContainer = document.querySelector(".main-nav-container");

const headerNavItemSpan = document.querySelector(".header-nav-item-span");

navToggleCont.addEventListener("click", () => {
  mainNavContainer.classList.toggle("display");
  console.log("An icon or the icon's box was just clicked");
});
