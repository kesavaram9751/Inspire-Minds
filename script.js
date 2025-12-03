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

//whatsapp form

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop normal form submit

  const name = document.querySelector('input[name="name"]').value.trim();
  const email = document.querySelector('input[name="email_address"]').value.trim();
  const company = document.querySelector('input[name="company"]').value.trim();
  const website = document.querySelector('input[name="website"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  const phoneNumber = "919994416487"; // 👈 your WhatsApp number here

  let text = `New enquiry from InspireMinds website%0A%0A`;
  text += `Name: ${name}%0A`;
  text += `Email: ${email}%0A`;
  if (company) text += `Company / Brand: ${company}%0A`;
  if (website) text += `Website: ${website}%0A`;
  text += `%0AGoals for next 3–6 months:%0A${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank"); // open WhatsApp Web / App
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
