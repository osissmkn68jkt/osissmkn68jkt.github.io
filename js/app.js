import { injectComponents } from './components.js';
import { initHomeSlider, initHomeNews } from './home.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initProkerPage } from './proker.js';

injectComponents();
initPreloader();

const page = window.location.pathname.split('/').pop() || 'index.html';

if (page === 'index.html' || page === '') {
    initHomeSlider();
    initHomeNews();
} else if (page === 'struktur.html') {
    renderOsisTree();
} else if (page === 'articles.html') {
    initArticleListPage();
} else if (page === 'proker.html') {
    initProkerPage();
} else if (page.endsWith('.html') && window.location.pathname.includes('/articles/')) {
    initArticlePage();
}

let lastScrollY = window.scrollY;
const topbarEl = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
    if (!topbarEl) return;
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        topbarEl.classList.add('topbar--scrolled');
    } 
    else if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        topbarEl.classList.remove('topbar--scrolled');
    }

    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
}, { passive: true });

function initPreloader() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
  
    // Add class to prevent scroll during load
    document.body.classList.add('preloader-active');
  
    // Wait for critical resources: DOM + images in hero + main CSS applied
    const hidePreloader = () => {
      preloader.classList.add('hidden');
      document.body.classList.remove('preloader-active');
      // Optional: remove from DOM after transition to free memory
      setTimeout(() => {
        if (preloader.parentNode) preloader.remove();
      }, 500);
    };
  
    // Strategy: Hide after 'load' event (all images/styles loaded)
    // But add a max timeout of 3s to avoid hanging on slow networks
    let loaded = false;
    const maxWait = 3000;
  
    const onReady = () => {
      if (loaded) return;
      loaded = true;
      hidePreloader();
    };
  
    window.addEventListener('load', onReady);
    setTimeout(onReady, maxWait);
  
    // Bonus: If page is cached (back/forward nav), skip preloader
    if (window.performance?.getEntriesByType?.('navigation')?.[0]?.type === 'back_forward') {
      hidePreloader();
    }
  }