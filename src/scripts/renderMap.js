import cardTemplate from '../partials/card.hbs';

export function renderMap(menu) {
  const menuCardElem = document.querySelector('.js-menu');

  const html = menu.map((card) => cardTemplate(card)).join('');
  menuCardElem.insertAdjacentHTML('beforeend', html);
}
