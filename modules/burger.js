import debounce from './serviceFunc.js';

const menuBtn = document.querySelector('.header__menu');
const menuLines = document.querySelectorAll('.header_menu-icon');
const menuOverlay = document.querySelector('.burger__navigation-overlay');

const menuControl = (menuOverlay, menuBtn) => {
  const durationOpacity = 300;

  const startOpenMenu = () => {
    const startTime = Date.now();

    const openMenu = () => {
      const timestamp = Date.now();
      menuOverlay.style.visibility = 'visible';
      const progress = (timestamp - startTime) / durationOpacity;
      menuOverlay.style.opacity = progress;

      if (progress < 1) {
        requestAnimationFrame(openMenu);
      } else {
        menuOverlay.style.opacity = 1;
      }
    };

    menuLines.forEach((line) => {
      line.classList.toggle('header_menu-icon_active');
    });

    menuBtn.removeEventListener('click', startOpenMenu);
    menuBtn.addEventListener('click', startCloseMenu);

    openMenu();
  };

  const startCloseMenu = () => {
    const startTime = Date.now();

    const closeMenu = () => {
      const timestamp = Date.now();
      const progress = (timestamp - startTime) / durationOpacity;
      menuOverlay.style.opacity = 1 - progress;
      if (progress < 1) {
        requestAnimationFrame(closeMenu);
      } else {
        menuOverlay.style.opacity = 0;
        menuOverlay.style.visibility = 'hidden';
      }
    };

    menuLines.forEach((line) => {
      line.classList.remove('header_menu-icon_active');
    });

    menuBtn.addEventListener('click', startOpenMenu);
    menuBtn.removeEventListener('click', startCloseMenu);

    closeMenu();
  };

  // const openMenu = () => {
  //   menuOverlay.classList.toggle('burger__navigation-overlay_active');
  //   menuLines.forEach((line) => {
  //     line.classList.toggle('header_menu-icon_active');
  //   });
  // };

  // const closeMenu = () => {
  //   menuOverlay.classList.remove('burger__navigation-overlay_active');
  //   menuLines.forEach((line) => {
  //     line.classList.remove('header_menu-icon_active');
  //   });
  // };

  menuBtn.addEventListener('click', startOpenMenu);

  menuOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === menuOverlay ||
      target.closest('.header_menu')) {
      startCloseMenu();
    }
  });

  const menuItem = document.querySelectorAll('.burger__navigation-item');
  menuItem.forEach((item) => {
    item.addEventListener('click', startCloseMenu);
  });
};

debounce(menuControl(menuOverlay, menuBtn));
