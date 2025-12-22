    /* Modal accesssibilty/ Modal dialog component*/
        const openModalBtn = document.getElementById('open-about-modal');
  const modalBackdrop = document.getElementById('about-modal');
  const closeModalBtn = document.getElementById('close-about-modal');
  let lastFocusedElement = null;

  const getFocusableElements = () =>
    modalBackdrop.querySelectorAll(
      'button, a[href], input,textarea,select, [tabindex]:not([tabindex="-1"])'
    );

    function openModal() {
      lastFocusedElement = document.activeElement;
      modalBackdrop.hidden = false;
      document.body.style.overflow='hidden';

      const focusables=getFocusableElements();
      if (focusables.length> 0) {
        focusables[0].focus();
      }

      document.addEventListener('keydown', handleKeyDown);
    }

    function closeModal() {
      modalBackdrop.hidden=true;
      document.body.style.overflow='';
      document.removeEventListener('keydown', handleKeyDown);

      if (lastFocusedElement) {
        lastFocusedElement.focus();
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeModal();
        return;
      }

    if (event.key !== 'Tab') return;

    const focusables = getFocusableElements();
    if (focusables.length=== 0) return;

    const first = focusables[0];
    const last = focusables[focusables.length -1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
      }
    }

    if(!openModalBtn || !modalBackdrop || !closeModalBtn) {
      
    } else {

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    }

    modalBackdrop.addEventListener('click', (event) => {
      if (event.target === modalBackdrop) {
        closeModal();
      }
    });

    const modalOkBtn = document.querySelector('.modal-ok');
    if (modalOkBtn) {
      modalOkBtn.addEventListener('click', closeModal);
    }