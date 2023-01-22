const buttonCall = document.querySelector('.header__button');
const menuButtonCall = document.querySelector('.burger__button');
const modalOverlay = document.querySelector('.modal-overlay');

const modalControl = (modalOverlay, buttonCall) => {
  const openModal = () =>
    modalOverlay.classList.add('modal-overlay_active');

  const closeModal = () =>
    modalOverlay.classList.remove('modal-overlay_active');

  buttonCall.addEventListener('click', openModal);

  modalOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === modalOverlay ||
      target.closest('.modal__close')) {
      closeModal();
    }
  });
};

modalControl(modalOverlay, buttonCall);
modalControl(modalOverlay, menuButtonCall);
