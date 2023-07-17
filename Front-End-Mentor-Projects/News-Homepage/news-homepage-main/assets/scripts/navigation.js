document.addEventListener("DOMContentLoaded", function () {
  function navClose() {
    const navmenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");

    navmenu.style.display = "none";
    body.style.backgroundColor = "white";
    body.style.overflow = "scroll";
  }

  function openNav() {
    const navmenu = document.querySelector(".nav-menu");
    const body = document.querySelector("body");

    navmenu.style.display = "flex"; // to see the menu
    navmenu.style.animation = "slideOpen .138s ease-in-out";
    navmenu.style.width = "65%"; // to set the width permanently
    body.style.backgroundColor = "rgba(0,0,0, .2)";
    body.style.overflow = "hidden"; //if the menu is open cant sctroll
  }

  document
    .querySelector(".hamburger-button")
    .addEventListener("click", openNav);
  document.querySelector(".close-button").addEventListener("click", navClose);
});
