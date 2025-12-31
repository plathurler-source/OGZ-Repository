// THEME (Dark / Light Mode) — Tema Yönetimi
// ======================================================
(() => {
  const btn = document.getElementById('toggle-theme');
  if (!btn) return;

  const setTheme = (mode) => {
    if (mode === 'dark') document.body.setAttribute('data-theme', 'dark');
    else document.body.removeAttribute('data-theme');

    btn.textContent = mode === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode';
    btn.setAttribute('aria-pressed', String(mode === 'dark'));
    localStorage.setItem('theme', mode);
  };

  setTheme(localStorage.getItem('theme') || 'light');

  btn.addEventListener('click', () => {
    const next =
      document.body.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark';
    setTheme(next);
  });
})();


// ======================================================
// NAVBAR (Hamburger Menu) — Mobil Menü
// ======================================================
(() => {
  const menuBtn = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinks.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
})();


// ======================================================
// BACK TO TOP — Yukarı Çık Butonu
// ======================================================
(() => {
  const btt = document.getElementById('back-to-top');
  if (!btt) return;

  window.addEventListener('scroll', () => {
    btt.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  btt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


// ======================================================
// CONTACT FORM — Form Error UX (Erişilebilir)
// ======================================================
(() => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameEl = document.getElementById('name');
  const emailEl = document.getElementById('email');
  const msgEl = document.getElementById('message');

  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  const errMsg = document.getElementById('err-message');

  const formMessage = document.getElementById('form-message');

  const setError = (el, errEl, text) => {
    el.setAttribute('aria-invalid', 'true');
    el.setAttribute('aria-describedby', errEl.id);
    errEl.textContent = text;
    errEl.hidden = false;
  };

  const clearError = (el, errEl) => {
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
    errEl.textContent = '';
    errEl.hidden = true;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    formMessage.textContent = '';
    formMessage.className = '';

    clearError(nameEl, errName);
    clearError(emailEl, errEmail);
    clearError(msgEl, errMsg);

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();
    const message = msgEl.value.trim();

    let firstInvalid = null;

    if (!name) {
      setError(nameEl, errName, 'Name is required.');
      firstInvalid = firstInvalid || nameEl;
    }

    if (!email) {
      setError(emailEl, errEmail, 'Email is required.');
      firstInvalid = firstInvalid || emailEl;
    } else if (!email.includes('@')) {
      setError(emailEl, errEmail, 'Please enter a valid email.');
      firstInvalid = firstInvalid || emailEl;
    }

    if (!message) {
      setError(msgEl, errMsg, 'Message is required.');
      firstInvalid = firstInvalid || msgEl;
    }

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    form.reset();
    formMessage.textContent = 'Your message has been sent!';
    formMessage.className = 'success';
  });
})();


// ======================================================
// MODAL — Açılır Pencere
// ======================================================
import './modal.js';