const navBar = document.querySelector(".navbar");
const menuButton = document.querySelector(".navbar__icon");
const menu = document.querySelector(" .navbar__menu ul");

window.addEventListener("scroll", handleScroll);
menuButton.addEventListener("click", showMenu);

const sticky = navBar.offsetTop;
function handleScroll() {
  let isSticky = window.pageYOffset - sticky >= sticky;
  if (isSticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

function showMenu() {
  menu.classList.toggle("active");
}
