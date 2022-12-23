"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

// Make navbar transparent when it is on the top
// arrow function
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  scrollIntoViews(link);
});

// Handle click on "contact me" button on home
const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", () => {
  scrollIntoViews("#contact");
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector("#home");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(homeHeight);
});

// Utility function
function scrollIntoViews(selector) {
  const scrollTo = document.querySelector(selector);

  scrollTo.scrollIntoView({ behavior: "smooth" });
}
