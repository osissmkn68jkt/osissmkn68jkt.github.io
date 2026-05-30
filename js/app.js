import { injectComponents } from './components.js';
import { initHomeSlider, initHomeNews } from './home.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initProkerPage } from './proker.js';

injectComponents();

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