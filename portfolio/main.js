"use strict";

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

// arrow function
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
});
