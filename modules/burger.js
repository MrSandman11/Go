import debounce from './serviceFunc.js';

const menuBtn = document.querySelector('.header__menu');
const menuLines = document.querySelectorAll('.header_menu-icon');
const menuOverlay = document.querySelector('.burger__navigation-overlay');

const menuControl = (menuOverlay, menuBtn) => {
  const durationOpacity = 1000;
  const startTime = NaN;

  const openMenu = (timestamp) => {
    menuOverlay.style.visibility = 'visible';
    const progress = (timestamp - startTime) / durationOpacity;
    menuOverlay.style.opacity = progress;

    if (progress > 1) {
      requestAnimationFrame(openMenu);
    } else {
      menuOverlay.style.opacity = 1;
    }

    menuLines.forEach((line) => {
      line.classList.toggle('header_menu-icon_active');
    });
    menuBtn.classList.toggle('header__menu_active');

    menuBtn.removeEventListener('click', openMenu);
    menuBtn.addEventListener('click', closeMenu);
  };

  const closeMenu = (timestamp) => {
    const progress = (timestamp - startTime) / durationOpacity;
    menuOverlay.style.opacity = 1 - progress;

    if (progress < 1) {
      requestAnimationFrame(closeMenu);
    } else {
      menuOverlay.style.opacity = 0;
      menuOverlay.style.visibility = 'hidden';
    }

    menuLines.forEach((line) => {
      line.classList.remove('header_menu-icon_active');
    });

    menuBtn.addEventListener('click', openMenu);
    menuBtn.removeEventListener('click', closeMenu);
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

  menuBtn.addEventListener('click', openMenu);

  menuOverlay.addEventListener('click', e => {
    const target = e.target;
    if (target === menuOverlay ||
      target.closest('.header_menu')) {
      closeMenu();
    }
  });

  const menuItem = document.querySelectorAll('.burger__navigation-item');
  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
};

debounce(menuControl(menuOverlay, menuBtn));
