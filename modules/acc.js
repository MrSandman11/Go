const items = document.querySelectorAll('.faq__list-item');
const buttons = document.querySelectorAll('.faq__list-item-question-button');
const textWrapper = document.querySelectorAll('.faq__list-item-text-wrapper');

const removeActive = (i) => {
  items[i].classList.remove('faq__list-item_active');
  textWrapper[i].classList.remove('faq__list-item-text-wrapper_active');

  if (buttons[i].classList
      .contains('faq__list-item-question-button_odd') ||
      buttons[i].classList
          .contains('faq__list-item-question-button_odd_active')) {
    buttons[i].classList
        .remove('faq__list-item-question-button_odd_active');
    buttons[i].classList.add('faq__list-item-question-button_odd');
  } else {
    buttons[i].classList
        .remove('faq__list-item-question-button_even_active');
    buttons[i].classList.add('faq__list-item-question-button_even');
  }
};

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    for (let i = 0; i < items.length; i += 1) {
      if (index === i) {
        textWrapper[i].classList.toggle('faq__list-item-text-wrapper_active');
        items[i].classList.toggle('faq__list-item_active');

        if (buttons[i].classList
            .contains('faq__list-item-question-button_odd') ||
            buttons[i].classList
                .contains('faq__list-item-question-button_odd_active')) {
          buttons[i].classList
              .toggle('faq__list-item-question-button_odd_active');
          buttons[i].classList.toggle('faq__list-item-question-button_odd');
        } else {
          buttons[i].classList
              .toggle('faq__list-item-question-button_even_active');
          buttons[i].classList.toggle('faq__list-item-question-button_even');
        }
      } else {
        removeActive(i);
      }
    }
  });
});

document.addEventListener('click', ({target}) => {
  items.forEach(elem => {
    if (elem.classList.contains('faq__list-item_active')) {
      if (!target.closest('.faq__list-item')) {
        for (let i = 0; i < items.length; i += 1) {
          removeActive(i);
        }
      }
    }
  });
});
