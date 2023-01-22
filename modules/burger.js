import debounce from './serviceFunc.js';

const menuBtn = document.querySelector('.header__menu');
const menuLines = document.querySelectorAll('.header_menu-icon');
const menuOverlay = document.querySelector('.burger__navigation-overlay');
const menuItem = document.querySelectorAll('.burger__navigation-item');

const menuControl = (menuOverlay, menuBtn) => {
  const openMenu = () => {
    menuOverlay.classList.toggle('burger__navigation-overlay_active');
    menuLines.forEach((line) => {
      line.classList.toggle('header_menu-icon_active');
    });
  };

  const closeMenu = () => {
    menuOverlay.classList.remove('burger__navigation-overlay_active');
    menuLines.forEach((line) => {
      line.classList.remove('header_menu-icon_active');
    });
  };

  menuBtn.addEventListener('click', openMenu);

  menuOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === menuOverlay ||
      target.closest('.header_menu')) {
      closeMenu();
    }
  });

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
};

debounce(menuControl(menuOverlay, menuBtn));

