/**
 * components.js
 * Injects shared navigation and footer into every page.
 *
 * ROOT is determined once by finding the deepest path that contains index.html.
 * This works correctly on GitHub Pages (with or without a repo subfolder),
 * local dev servers, and any other static host.
 */

/**
 * Detects the root URL of the site robustly.
 *
 * Strategy: walk up the path segments until we find the one that is the
 * actual site root. We do this by checking <base> tag (if set by build tool),
 * or by using the fact that index.html always lives at root.
 *
 * The reliable approach: if the site lives at origin/ (no subfolder), root = origin/
 * If the site lives at origin/repo/, root = origin/repo/
 *
 * We detect this by looking at the <link rel="canonical"> or simply by
 * checking if the first path segment is a known repo name. Since we can't
 * know the repo name at runtime, we use a smarter heuristic:
 *
 * - All static pages live under /static/ or at root /
 * - All article pages live under /static/articles/
 * - So the root is everything BEFORE the first occurrence of:
 *     "static/", "index.html", or end of meaningful path
 */
function getSiteRoot() {
    const { origin, pathname } = window.location;

    // Find the root by stripping known subpaths
    // Known page locations relative to root:
    //   /                          → index.html
    //   /index.html                → root
    //   /static/about.html         → root is everything before "static/"
    //   /static/articles/foo.html  → root is everything before "static/"
    //   /repo/                     → root (GitHub Pages with repo subfolder)
    //   /repo/static/about.html    → root is everything before "static/"

    const staticIdx = pathname.indexOf('/static/');
    if (staticIdx !== -1) {
        // Root is the path up to (and including) the slash before "static/"
        return origin + pathname.slice(0, staticIdx + 1);
    }

    // We're at root level (index.html or /)
    // The root is everything up to the last path segment if it's a file,
    // or the full path if it ends with /
    const lastSlash = pathname.lastIndexOf('/');
    const afterLastSlash = pathname.slice(lastSlash + 1);

    if (afterLastSlash.includes('.')) {
        // It's a file (e.g. index.html) — root is the directory
        return origin + pathname.slice(0, lastSlash + 1);
    }

    // It's a directory path — use as-is (ensure trailing slash)
    return origin + pathname + (pathname.endsWith('/') ? '' : '/');
}

const ROOT = getSiteRoot();

const NAV_LINKS = [
    { href: 'about.html',    label: 'Tentang Kami' },
    { href: 'proker.html',   label: 'Program Kerja' },
    { href: 'struktur.html', label: 'Struktur' },
    { href: 'articles.html', label: 'Artikel' },
    { href: 'contacts.html', label: 'Contact' },
];

function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

export function renderNav() {
    const current = getCurrentPage();

    const linksHtml = NAV_LINKS.map(link => {
        const pageFile = link.href.split('/').pop(); // e.g. "about.html"
        const isActive = current === pageFile ? 'active' : '';
        return `<a href="${ROOT}${link.href}" class="nav-btn ${isActive}">${link.label}</a>`;
    }).join('');

    return `
    <nav class="topbar">
        <div class="logo">
            <a href="${ROOT}index.html">OSIS SMKN 68 Jakarta</a>
        </div>
        <div class="nav-links">
            ${linksHtml}
        </div>
    </nav>`;
}

export function renderFooter() {
    return `
    <footer class="site-footer">
        <div class="footer-content">
            <div class="footer-section">
                <h4>OSIS SMKN 68 Jakarta</h4>
                <p>Jl. Penganten Ali RT 09 RW 06,<br>Jakarta Timur, DKI Jakarta</p>
            </div>
            <div class="footer-section">
                <h4>Kontak</h4>
                <p>Email: osissmkn68jakarta@gmail.com</p>
                <p>Telepon: +62 896-1672-7118 (Mutia)</p>
                <p>Telepon: +62 823-1151-1050 (Samuel)</p>
                <p>Jam Kerja: Senin–Jumat, 09.00–17.00 WIB</p>
            </div>
            <div class="footer-section socials">
                <h4>Ikuti Kami</h4>
                <a href="https://www.instagram.com/osissmkn68.jkt/" target="_blank" rel="noopener">Instagram</a>
                <a href="https://www.youtube.com/@OSISSMKN68" target="_blank" rel="noopener">Youtube</a>
                <a href="https://www.tiktok.com/@osissmkn68" target="_blank" rel="noopener">TikTok</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 OSIS SMKN 68 Jakarta. All rights reserved.</p>
        </div>
    </footer>`;
}

export function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = renderNav();

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
}