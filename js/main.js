"use strict";
/**
 * add events
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navToggle = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = () => navbar.classList.toggle("active");
addEventOnElem(navToggle, "click", toggleNavbar);

const closeNavbar = () => navbar.classList.remove("active");
addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header & back top btn active when scroll down to 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", headerActive);

/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItens = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;
  for (let i = 0; i < filterItens.length; i++) {
    if (
      this.dataset.filterBtn === filterItens[i].dataset.filter ||
      this.dataset.filterBtn === "all"
    ) {
      filterItens[i].style.display = "block";
      filterItens[i].classList.add("active");
    } else {
      filterItens[i].style.display = "none";
      filterItens[i].classList.remove("active");
    }
  }
};

addEventOnElem(filterBtns, "click", filter);
