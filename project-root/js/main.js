import './modal.js';
import './slider.js';

function initThemeToggle() {
  const btn = document.getElementById('toggle-theme');
  if (!btn) return;

  const setTheme = (mode) => {
    if (mode === 'dark') document.body.setAttribute('data-theme', 'dark');
    else document.body.removeAttribute('data-theme');

    btn.textContent = mode === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode';
    localStorage.setItem('theme', mode);
  };

  setTheme(localStorage.getItem('theme') || 'light');

  btn.addEventListener('click', () => {
    const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
  });
}

function initBackToTop() {
  const btt = document.getElementById('back-to-top');
  if (!btt) return;

  window.addEventListener('scroll', () => {
    btt.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const msg = document.getElementById('form-message');
  if (!form || !msg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !email || !message) {
      msg.style.color = 'red';
      msg.textContent = 'Please fill in all fields.';
      return;
    }
    if (!email.includes('@')) {
      msg.style.color = 'red';
      msg.textContent = 'Please enter a valid email address.';
      return;
    }

    msg.style.color = 'green';
    msg.textContent = 'Your message has been sent!';
    form.reset();
  });
}

function initMobileNav() {
  const btn = document.querySelector('.nav-toggle');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

// init
initThemeToggle();
initBackToTop();
initContactForm();
initMobileNav();