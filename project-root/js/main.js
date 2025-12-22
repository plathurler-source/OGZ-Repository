//JavaScript for Dark/Light Mode Toggle
const openclose = document.getElementById('toggle-theme');
      const setTheme = (mode) =>{
        if(mode==='dark') document.body.setAttribute('data-theme','dark');
        else document.body.removeAttribute('data-theme');
        openclose.textContent = mode==='dark' ? '🌞 Light Mode' : '🌙 Dark Mode';
        localStorage.setItem('theme',mode);
      };

      setTheme(localStorage.getItem('theme') || 'light');
      openclose.addEventListener('click', () => {
        const next = document.body.getAttribute('data-theme')==='dark' ? 'light' : 'dark';
        setTheme(next);
    });

    //JavaScript for BacktoTop
      const backtotop = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        backtotop.style.display = window.scrollY > 200 ? 'block' : 'none';
      });
      backtotop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth'}));
    

      document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('form-message');
        if (!name || !email || !message) {
          formMessage.style.color = 'red';
          formMessage.textContent = 'Please fill in all fields.';
          return;
        }
        if (!email.includes('@')) {
          formMessage.style.color = 'red';
          formMessage.textContent = 'Please enter a valid email address.';
        }
        formMessage.style.color = 'green';
        formMessage.textContent = 'YourMessage has been sent!';
        document.getElementById('contact-form').reset();
      });
      
      const menubutton = document.querySelector('.nav-toggle');
      const navlinks = document.getElementById('nav-links');
      menubutton.addEventListener('click', () => {
        const isOpen = navlinks.classList.toggle('open');
        menubutton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      
      navlinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          navlinks.classList.remove('open');
          menubutton.setAttribute('aria-expanded', 'false');
        }
      });

      import './modal.js';
