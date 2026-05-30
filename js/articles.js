import { ROOT } from './app.js';
import { parseMarkdown } from './md-parser.js';
import { renderNav, renderFooter, initNavListeners } from './components.js';

const contentPath = (rel) => `${ROOT}content/${rel}`;
const articleUrl = (id) => `${ROOT}static/articles/${id}.html`;

const formatDate = (isoDate) => {
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const [y, m, d] = isoDate.split('-').map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};

const loadManifest = async () => {
  const res = await fetch(contentPath('articles-manifest.json'));
  if (!res.ok) throw new Error('Could not load articles manifest');
  return res.json();
};

const renderFeaturedCard = (article) => `
  <div class="featured-news-hero-card" data-category="${article.category}">
    <div class="featured-hero-img-box">
      <img src="${article.cover}" alt="${article.title}" loading="lazy">
    </div>
    <div class="featured-hero-body">
      <span class="news-date">SOROTAN UTAMA • ${formatDate(article.date)}</span>
      <h2>${article.title}</h2>
      <p>${article.excerpt}</p>
      <a href="${articleUrl(article.id)}" class="featured-read-btn">Baca Artikel Utama</a>
    </div>
  </div>
`;

const renderArticleCard = (article) => `
  <article class="news-card" data-category="${article.category}">
    <div class="news-image-wrapper">
      <img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">
    </div>
    <div class="news-body">
      <span class="news-date">${formatDate(article.date)}</span>
      <h3><a href="${articleUrl(article.id)}">${article.title}</a></h3>
      <p>${article.excerpt}</p>
    </div>
  </article>
`;

const setupLayout = () => {
  const header = document.getElementById('header-container');
  const footer = document.getElementById('footer-container');
  if (header) header.innerHTML = renderNav(ROOT);
  if (footer) footer.innerHTML = renderFooter();
  initNavListeners();
};

export const initArticlesPage = async () => {
  setupLayout();
  const gridContainer = document.getElementById('articles-grid');
  const featuredContainer = document.getElementById('featured-article-container');
  const categoryListId = 'category-list';
  
  if (!gridContainer) return;

  try {
    const manifest = await loadManifest();
    const featured = manifest.filter(a => a.featured);
    const regular = manifest.filter(a => !a.featured);

    if (featuredContainer && featured.length > 0) {
      featuredContainer.innerHTML = featured.map(renderFeaturedCard).join('');
    }
    
    gridContainer.innerHTML = regular.map(renderArticleCard).join('');
    
    if (typeof buildCategorySidebar === 'function') {
      buildCategorySidebar(manifest, categoryListId);
    }
  } catch (err) {
    console.error('Articles failed to load:', err);
    gridContainer.innerHTML = '<p style="color:red">Gagal memuat artikel.</p>';
  }
};

export const initArticlePage = async () => {
  setupLayout();
  const container = document.getElementById('article-render-target');
  if (!container) return;

  const articleId = container.dataset.articleId || window.location.pathname.split('/').pop().replace('.html', '');

  try {
    const manifest = await loadManifest();
    const meta = manifest.find(a => a.id === articleId);
    
    if (!meta) throw new Error(`Article "${articleId}" not found in manifest`);
    
    const bodyHtml = parseMarkdown(meta.body || '');
    document.title = `${meta.title} — OSIS SMKN 68 Jakarta`;

    container.innerHTML = `
      <div class="reading-content-wrapper">
        <a href="${ROOT}static/articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>
        <article>
          <header class="article-header">
            <span class="article-category">${meta.category_display || meta.category}</span>
            <h1>${meta.title}</h1>
            <div class="article-meta">
              <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(meta.author)}&background=007bff&color=fff" alt="${meta.author}" class="author-avatar">
              <div class="meta-details">
                <span class="author-name">Ditulis oleh ${meta.author}</span>
                <span class="publish-date">${meta.date_display || formatDate(meta.date)}${meta.readtime ? ` • Waktu baca: ${meta.readtime}` : ''}</span>
              </div>
            </div>
          </header>
          ${meta.cover ? `
          <figure class="article-featured-image">
            <img src="${meta.cover}" alt="${meta.title}" loading="lazy">
          </figure>` : ''}
          <div class="article-content">
            ${bodyHtml}
          </div>
        </article>
      </div>
    `;
  } catch (err) {
    console.error('Article load error:', err);
    container.innerHTML = '<p style="color:red">Gagal memuat konten artikel.</p>';
  }
};