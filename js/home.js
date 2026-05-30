import { ROOT } from './app.js';
import { renderNav, renderFooter, initNavListeners } from './components.js';

const initHomePage = () => {
  const header = document.getElementById('header-container');
  const footer = document.getElementById('footer-container');

  if (header) {
    header.innerHTML = renderNav(ROOT);
  } else {
    document.body.insertAdjacentHTML('afterbegin', renderNav(ROOT));
  }

  if (footer) {
    footer.innerHTML = renderFooter();
  } else {
    document.body.insertAdjacentHTML('beforeend', renderFooter());
  }

  initNavListeners();
};

document.addEventListener('DOMContentLoaded', initHomePage);