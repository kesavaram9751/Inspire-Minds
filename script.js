'use strict';

/**
 * Helper: add event on element or NodeList
 */
const addEventOnElem = function (elem, type, callback) {
  if (!elem) return;

  if (NodeList.prototype.isPrototypeOf(elem) || Array.isArray(elem)) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Toggle navbar
 */
const navbar = document.querySelector('[data-navbar]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const navToggler = document.querySelector('[data-nav-toggler]');

const toggleNavbar = function () {
  navbar.classList.toggle('active');
  navToggler.classList.toggle('active');
};

addEventOnElem(navToggler, 'click', toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove('active');
  navToggler.classList.remove('active');
};

addEventOnElem(navbarLinks, 'click', closeNavbar);

/**
 * Header active + back to top
 */
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }

  // simple parallax on hero background
  if (heroBg) {
    const offset = window.scrollY * 0.15;
    heroBg.style.transform = `translateY(${offset * -1}px)`;
  }
});

/**
 * Init AOS (scroll animations)
 */
if (window.AOS) {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out',
    offset: 80,
  });
}
