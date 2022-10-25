const burger = document.querySelector(".toggle-sidebar");
const frite = document.querySelector(".close-btn");

const navLinks = document.querySelector(".show-sidebar");
const closeLinks = document.querySelector(".show-sidebar");

burger.addEventListener("click", function () {
  navLinks.classList.add("show-sidebar");
});
frite.addEventListener("click", function () {
  closeLinks.classList.remove("show-sidebar");
});
