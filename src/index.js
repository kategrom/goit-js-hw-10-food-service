import './styles/index.scss';
import menu from './data/menu.json';
import { renderInHbs } from "./scripts/renderHbs";
import { Theme, Theme_KEY } from "./scripts/theme-constants";

renderInHbs(menu);

const bodyElem = document.querySelector('body')
const themeSwitcherToggle = document.querySelector('.theme-switch__toggle');

const defaultTheme = bodyElem.className;

function changeTheme(themeName) {
  localStorage.setItem(Theme_KEY, themeName);
  bodyElem.className = '';
  bodyElem.classList.add(themeName);
};

function checkPersistedTheme() {
  const persistedTheme = localStorage.getItem(Theme_KEY);
  if (persistedTheme) {
    changeTheme(persistedTheme);
  } else{
    changeTheme(defaultTheme);
  }

  if (persistedTheme === Theme.Light) {
    themeSwitcherToggle.checked = false;
  } else {
    themeSwitcherToggle.checked = true;
  }
};

checkPersistedTheme();

themeSwitcherToggle.addEventListener('click', (e) => {
  if (e.target.checked) {
    changeTheme(Theme.Dark)
  }else{
    changeTheme(Theme.Light)
  };
})
