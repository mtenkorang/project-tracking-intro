//Select elements
const burgerIcon = document.querySelector(".burger");
const closeIcon = document.querySelector(".close");
const navBox = document.querySelector("nav");

//Add click event listener  to burger icon
burgerIcon.addEventListener("click", doShowNav);

function doShowNav() {
  closeIcon.style.display = "block";
  navBox.style.display = "block";
  burgerIcon.classList.add("hidden");
}

//Add click event listener to close icon
closeIcon.addEventListener("click", doShowBurger);

function doShowBurger() {
  navBox.style.display = "none";
  closeIcon.style.display = "none";
  burgerIcon.classList.remove("hidden");
}
