//Select elements
const burgerIcon = document.querySelector(".burger");
const closeIcon = document.querySelector(".close");
const navBox = document.querySelector("nav");

//Add click event listener  to burger icon
burgerIcon.addEventListener("click", doShowNav);

function doShowNav() {
  navBox.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  burgerIcon.classList.add("hidden");
}

//Add click event listener to close icon
closeIcon.addEventListener("click", doShowBurger);

function doShowBurger() {
  navBox.classList.add("hidden");
  closeIcon.classList.add("hidden");
  burgerIcon.classList.remove("hidden");
}
