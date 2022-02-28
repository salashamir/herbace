// fixed navbar
const navbar = document.getElementById("navbar");
const linksCont = document.querySelector(".main-nav");
const topLink = document.querySelector(".top-link");
// scroll links for smooth scrolling
const scrollLinks = document.querySelectorAll(".scroll-link");
// mobile nav
const btnMobile = document.querySelector(".btn-mobile-nav");
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;

  // make navbar fixed after certain height
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }

  // show top arrow after certain height
  if (scrollHeight > 575) {
    topLink.style.display = "block";
  } else {
    topLink.style.display = "none";
  }
});

// smooth scroll
const scroll = new SmoothScroll('a[href*="#"]');

const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__link");

btnMobile.addEventListener("click", () => {
  mobileNav.classList.toggle("mobile-active");
});

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.toggle("mobile-active");
  });
});
