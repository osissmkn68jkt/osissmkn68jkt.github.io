function getSiteRoot() {
    const { origin, pathname } = window.location;
    const staticIdx = pathname.indexOf('/static/');
    if (staticIdx !== -1) {
        return origin + pathname.slice(0, staticIdx + 1);
    }
    const lastSlash = pathname.lastIndexOf('/');
    const afterLastSlash = pathname.slice(lastSlash + 1);
    if (afterLastSlash.includes('.')) {
        return origin + pathname.slice(0, lastSlash + 1);
    }
    return origin + pathname + (pathname.endsWith('/') ? '' : '/');
}

// ─── Hero Slider ──────────────────────────────────────────────

export function initHomeSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;

    let current = 0;
    slides[0].classList.add('active');

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 5000);
}

// ─── Berita Terkini ───────────────────────────────────────────

function renderNewsCard(article, ROOT) {
    const coverHtml = article.cover
        ? `<img src="${article.cover}" alt="${article.title}" class="news-image" loading="lazy">`
        : `<div class="news-image" style="background:var(--bg-main);display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:13px;">Tanpa Gambar</div>`;

    return `
    <article class="news-card">
        <div class="news-image-wrapper">
            ${coverHtml}
        </div>
        <div class="news-body">
            <span class="news-date">${article.date_display || article.date}</span>
            <h3 class="news-title">${article.title}</h3>
            <p class="news-excerpt">${article.excerpt}</p>
            <a href="${ROOT}static/articles/${article.id}.html" class="news-link">Baca Selengkapnya →</a>
        </div>
    </article>`;
}

export async function initHomeNews() {
    const grid = document.getElementById('home-news-grid');
    if (!grid) return;

    const ROOT = getSiteRoot();

    try {
        const res = await fetch(`${ROOT}content/articles-manifest.json`);
        if (!res.ok) throw new Error('Manifest not found');
        const articles = await res.json();

        const recent = [...articles]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 3);

        if (recent.length === 0) {
            grid.innerHTML = '<p style="color:var(--text-muted)">Belum ada artikel.</p>';
            return;
        }

        grid.innerHTML = recent.map(a => renderNewsCard(a, ROOT)).join('');
    } catch (err) {
        console.error('Home news failed to load:', err);
        grid.innerHTML = '<p style="color:var(--text-muted)">Gagal memuat berita terkini.</p>';
    }
}