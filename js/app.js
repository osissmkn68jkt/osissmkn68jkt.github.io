/**
 * app.js
 * Entry point — injects shared components and boots the correct
 * page module based on the current URL.
 */

import { injectComponents } from './components.js';
import { initHomeSlider, initHomeNews } from './home.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initProkerPage } from './proker.js';

// 1. Inject nav + footer on every page
injectComponents();

// 2. Boot the correct page module based on the filename
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
    // Static article pages — static/articles/[id].html
    initArticlePage();
}

let lastScrollY = window.scrollY;
const topbarEl = document.querySelector('.topbar');

window.addEventListener('scroll', () => {
    if (!topbarEl) return;
    const currentScrollY = window.scrollY;

    // Scroll down past 100px → fade & slide away
    if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        topbarEl.classList.add('topbar--scrolled');
    } 
    // Scroll up OR back to top → reappear
    else if (currentScrollY < 50 || currentScrollY < lastScrollY) {
        topbarEl.classList.remove('topbar--scrolled');
    }

    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
}, { passive: true });