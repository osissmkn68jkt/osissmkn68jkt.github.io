import { getSiteRoot } from './utils.js';

const ROOT = getSiteRoot();

const NAV_LINKS = [
    { href: 'static/about.html',    label: 'Tentang Kami' },
    { href: 'static/proker.html',   label: 'Program Kerja' },
    { href: 'static/struktur.html', label: 'Struktur' },
    { href: 'static/articles.html', label: 'Artikel' },
    { href: 'static/contacts.html', label: 'Contact' },
];

function getCurrentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
}

export function renderNav() {
    const current = getCurrentPage();

    const linksHtml = NAV_LINKS.map(({ href, label }) => {
        const isActive = current === href.split('/').pop() ? 'active' : '';
        return `<a href="${ROOT}${href}" class="nav-btn ${isActive}">${label}</a>`;
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
