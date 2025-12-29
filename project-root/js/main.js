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

      //Menu button
      const menubutton = document.querySelector('.nav-toggle');
      const navlinks = document.getElementById('nav-links');
      menubutton.addEventListener('click', () => {
        const isOpen = navlinks.classList.toggle('open');
        menubutton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });

      //Close the Menu when link is clicked mobile
      navlinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          navlinks.classList.remove('open');
          menubutton.setAttribute('aria-expanded', 'false');
        }
      });

      //Contact Form Balidation & Submission
      const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
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
        return;
      }
      formMessage.style.color = 'green';
      formMessage.textContent = 'Your message has been sent!';
      contactForm.reset();
    });
  }

    //JavaScript for BacktoTop
      const backtotop = document.getElementById('back-to-top');
      window.addEventListener('scroll', () => {
        backtotop.style.display = window.scrollY > 200 ? 'block' : 'none';
      });
      backtotop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth'}));
    

     const form= document.getElementById('contact-form');
     if (form) {
      const nameEl = document.getElementById('name');
      const emailEl = document.getElementById('email');
      const msgEl = document.getElementById('message');

      const errName = document.getElementById('err-name');
      const errEmail = document.getElementById('err-email');
      const errMsg = document.getElementById('err-message');

      const formMessage = document.getElementById('form-message');
     
     const setError = (el, errEl, text) => {
      if (!el || !errEl) return;
      el.setAttribute('aria-invalid','true');
      el.setAttribute('aria-describedby', errEl.id);
      errEl.textContent =text;
      errEl.hidden = false;
     };

     const clearError = (el, errEl)=> {
      if(!el || !errEl) return;
      el.removeAttribute('aria-invalid');
      el.removeAttribute('aria-describedby');
      errEl.textContent = '';
      errEl.hidden = true;
     };

     form.addEventListener('sumbit',(e)=>{
      e.preventDefault();

      //reset
      formMessage.textContent='';
      formMessage.className='';
      clearError(nameEl,errName);
      clearError(emailEl,errEmail);
      clearError(msgEl,errMsg);

      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      const message = msgEl.value.trim();

      let firstInvalid = null;

      if (!name) {
        setError(nameEl,errName,'Name is required.');
        firstInvalid = firstInvalid || nameEl;
      }

      if (!name) {
        setError(emailEl,errEmail,'Email is required.');
        firstInvalid = firstInvalid || emailEl;
      } else if (!email.includes('@')) {
        setError(emailEl,errEmail,'Please enter a valid email.');
        firstInvalid = firstInvalid || emailEl;
      }
      if (!message){
        setError(msgEl, errMsg, 'Message is required');
        firstInvalid=firstInvalid || msgEl;
      }
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      form.reset();
      formMessage.textContent = 'Your message has been sent!';
      formMessage.className = 'success';
     });
    }

      import './modal.js';
