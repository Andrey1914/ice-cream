(() => {
    const refs = {
    openModalBtn: document.querySelector('.about__btn'),
    closeModalBtn: document.querySelector('.information__closingbutton'),
    modal: document.querySelector('.backdrop'),
    };
    
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
    }
    })();