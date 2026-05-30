import { getSiteRoot } from './utils.js';
import { parseMarkdown } from './md-parser.js';

const ROOT = getSiteRoot();

// ─── Helpers ──────────────────────────────────────────────────

function contentPath(rel) {
    return ROOT + 'content/' + rel;
}

function articleUrl(id) {
    return ROOT + 'static/articles/' + id + '.html';
}

function formatDate(isoDate) {
    const MONTHS = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
    ];
    const [y, m, d] = isoDate.split('-').map(Number);
    return `${d} ${MONTHS[m - 1]} ${y}`;
}

async function loadManifest() {
    const res = await fetch(contentPath('articles-manifest.json'));
    if (!res.ok) throw new Error('Could not load articles manifest');
    return res.json();
}

// ─── Card Renderers ───────────────────────────────────────────

function renderFeaturedCard(article) {
    return `
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
    </div>`;
}

function renderArticleCard(article) {
    return `
    <article class="news-card" data-category="${article.category}">
        <div class="news-image-wrapper">
            <img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">
        </div>
        <div class="news-body">
            <span class="news-date">${formatDate(article.date)}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <a href="${articleUrl(article.id)}" class="news-link">Baca Selengkapnya →</a>
        </div>
    </article>`;
}

// ─── Category Sidebar ─────────────────────────────────────────

function buildCategorySidebar(articles, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const counts = articles.reduce((acc, { category }) => {
        acc[category] = (acc[category] || 0) + 1;
        return acc;
    }, {});

    const allItem = `
        <li><a href="#" class="category-btn active" data-filter="all">
            Semua Kategori <span>${articles.length}</span>
        </a></li>`;

    const categoryItems = Object.entries(counts).map(([cat, count]) => {
        const label = cat.charAt(0).toUpperCase() + cat.slice(1);
        return `
        <li><a href="#" class="category-btn" data-filter="${cat}">
            ${label} <span>${count}</span>
        </a></li>`;
    }).join('');

    container.innerHTML = allItem + categoryItems;
    initCategoryFilter(articles);
}

function initCategoryFilter() {
    const buttons   = document.querySelectorAll('.category-btn');
    const feedTitle = document.getElementById('feed-title-text');

    buttons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            document.querySelectorAll('[data-category]').forEach(el => {
                const isMatch = filter === 'all' || el.dataset.category === filter;
                el.style.display = isMatch
                    ? (el.classList.contains('featured-news-hero-card') ? 'grid' : '')
                    : 'none';
            });

            if (feedTitle) {
                feedTitle.textContent = filter === 'all'
                    ? 'Update Berita'
                    : `Kategori: ${btn.childNodes[0].textContent.trim()}`;
            }
        });
    });
}

// ─── Article List Page ────────────────────────────────────────

export async function initArticleListPage() {
    const featuredContainer = document.getElementById('featured-article-container');
    const gridContainer     = document.getElementById('articles-grid-container');

    if (!gridContainer) return;

    try {
        const manifest = await loadManifest();
        const featured = manifest.filter(a => a.featured);
        const regular  = manifest.filter(a => !a.featured);

        if (featuredContainer) {
            featuredContainer.innerHTML = featured.map(renderFeaturedCard).join('');
        }
        gridContainer.innerHTML = regular.map(renderArticleCard).join('');

        buildCategorySidebar(manifest, 'category-list');

    } catch (err) {
        console.error('Articles failed to load:', err);
        if (gridContainer) {
            gridContainer.innerHTML = '<p style="color:red">Gagal memuat artikel. Pastikan server berjalan (jangan buka file:// langsung).</p>';
        }
    }
}

// ─── Single Article Page ──────────────────────────────────────

export async function initArticlePage() {
    const container = document.getElementById('article-render-target');
    if (!container) return;

    const articleId = container.dataset.articleId
        || window.location.pathname.split('/').pop().replace('.html', '');

    const backLink = `<a href="${ROOT}static/articles.html" class="back-to-feed-link">← Kembali ke Artikel</a>`;

    try {
        const manifest = await loadManifest();
        const meta = manifest.find(a => a.id === articleId);

        if (!meta) throw new Error(`Article "${articleId}" not found in manifest`);

        document.title = `${meta.title} — OSIS SMKN 68 Jakarta`;

        const coverHtml = meta.cover ? `
            <figure class="article-featured-image">
                <img src="${meta.cover}" alt="${meta.title}" loading="lazy">
                ${meta.cover_caption ? `<figcaption>${meta.cover_caption}</figcaption>` : ''}
            </figure>` : '';

        const readtimeHtml = meta.readtime ? ` • Waktu baca: ${meta.readtime}` : '';

        container.innerHTML = `
            <div class="reading-content-wrapper">
                ${backLink}
                <article>
                    <header class="article-header">
                        <span class="article-category">${meta.category_display || meta.category}</span>
                        <h1>${meta.title}</h1>
                        <div class="article-meta">
                            <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(meta.author)}&background=007bff&color=fff"
                                 alt="${meta.author}" class="author-avatar">
                            <div class="meta-details">
                                <span class="author-name">Ditulis oleh ${meta.author}</span>
                                <span class="publish-date">${meta.date_display || formatDate(meta.date)}${readtimeHtml}</span>
                            </div>
                        </div>
                    </header>
                    ${coverHtml}
                    <div class="article-content">
                        ${parseMarkdown(meta.body || '')}
                    </div>
                </article>
            </div>`;

    } catch (err) {
        console.error('Article render failed:', err);
        container.innerHTML = `
            <div class="reading-content-wrapper">
                ${backLink}
                <p style="color:red; margin-top: 2rem;">Gagal memuat artikel: ${err.message}</p>
            </div>`;
    }
}
