/*Navigation*/
let burgerMenuOpen = document.querySelector(".burgerMenuOpen");
let burgerMenuClose = document.querySelector(".burgerMenuClose");
let navLinks = document.querySelector(".nav-links");

burgerMenuOpen.addEventListener("click", () => {
  navLinks.classList.add("active");
  burgerMenuOpen.classList.add("active");
  burgerMenuClose.classList.add("active");
});

burgerMenuClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  burgerMenuOpen.classList.remove("active");
  burgerMenuClose.classList.remove("active");
});

/**/
