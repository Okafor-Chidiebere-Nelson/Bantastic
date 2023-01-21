const navToggleCont = document.querySelector("#nav-toggle-cont");
const mainNavContainer = document.querySelector(".main-nav-container");

const headerNavItemSpan = document.querySelector(".header-nav-item-span");

navToggleCont.addEventListener("click", () => {
  mainNavContainer.classList.toggle("display");
  console.log("An icon or the icon's box was just clicked");
});

const tourBtn = document.querySelector(".tour-btn");
const browseBtn = document.querySelector(".browse-btn");

const hexaCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

function colorChanger() {
  let hashTag = "#";
  for (let i = 0; i < 6; i++) {
    hashTag += hexaCode[random()];
  }
  console.log(hashTag);
  tourBtn.style.backgroundColor = hashTag;
  browseBtn.style.backgroundColor = hashTag;
}

function random() {
  return Math.floor(Math.random() * hexaCode.length);
}

setInterval(colorChanger, 1000);

//clearinterval of the function when the mouse moves over the two buttons
// tourBtn.addEventListener("mouseover", () => {
//   clearInterval(colorChanger);
// });
