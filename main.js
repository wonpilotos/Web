/**
 * Clínica Odontológica Brunete — Main JS
 * Mobile nav toggle + services dropdown
 */
(function () {
  'use strict';

  // Mobile menu toggle
  const toggle = document.querySelector('.header__toggle');
  const nav = document.getElementById('main-menu');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      this.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
      nav.classList.toggle('is-open');
    });
  }

  // Services dropdown
  const dropdownBtn = document.querySelector('.nav__link--dropdown');
  const dropdownParent = document.querySelector('.nav__item--dropdown');

  if (dropdownBtn && dropdownParent) {
    dropdownBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      dropdownParent.classList.toggle('is-open');
    });

    // Close dropdown on outside click
    document.addEventListener('click', function (e) {
      if (!dropdownParent.contains(e.target)) {
        dropdownBtn.setAttribute('aria-expanded', 'false');
        dropdownParent.classList.remove('is-open');
      }
    });

    // Close dropdown on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && dropdownParent.classList.contains('is-open')) {
        dropdownBtn.setAttribute('aria-expanded', 'false');
        dropdownParent.classList.remove('is-open');
        dropdownBtn.focus();
      }
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav__link:not(.nav__link--dropdown), .nav__dropdown-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && nav.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
        nav.classList.remove('is-open');
      }
    });
  });

  // Sticky header shadow on scroll
  var header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
      } else {
        header.style.boxShadow = '0 1px 0 rgba(0,0,0,0.06)';
      }
    }, { passive: true });
  }
})();
