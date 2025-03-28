const menuBtn = document.querySelector(".navbar__mobile__button");
const mobileMenu = document.querySelector(".navbar__mobile__menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menuItems = document.querySelectorAll(".nav__item");

function closeMenuHandler() {
  mobileMenu.classList.add("hide");
}

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hide");
});

closeMenuBtn.addEventListener("click", closeMenuHandler);

for (i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", closeMenuHandler);
}
