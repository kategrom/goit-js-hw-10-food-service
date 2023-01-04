import cardListTemplte from "../partials/card-list.hbs";

export function renderInHbs(menu) {
  const rootElem = document.querySelector('#root');
  const html = cardListTemplte({
    menu: menu,
  });
  rootElem.insertAdjacentHTML('beforeend', html);
}