const menuButton = document.querySelector(".mobile-menu-icon");
const menu = document.querySelector(".burger-menu");

menuButton.addEventListener("click", () => {
  if (menu.classList.contains("closed")) {
    menu.classList.remove("closed");
  } else {
    menu.classList.add("closed");
  }
});

const refLinks = document.querySelectorAll(".mobile-menu__link");
refLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("closed");
  });
});
