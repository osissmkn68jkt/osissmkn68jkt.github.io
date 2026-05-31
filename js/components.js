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

const ROOT = getSiteRoot();

const NAV_LINKS = [
    { href: 'index.html',    label: 'Beranda' }, // ✅ Added on the left
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

    const linksHtml = NAV_LINKS.map(link => {
        const pageFile = link.href.split('/').pop();
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
            <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">🌓</button>
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

export function initDarkMode() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        root.setAttribute('data-theme', 'dark');
        if (toggle) toggle.textContent = '☀️';
    }
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            toggle.textContent = newTheme === 'dark' ? '☀️' : '🌓';
        });
    }
}

export function injectComponents() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = renderNav();

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = renderFooter();
    
    // Initialize dark mode after nav is injected
    setTimeout(() => {
        initDarkMode();
        initTopbarScrollBehavior(); // Add this line
    }, 0);
}

export function initTopbarScrollBehavior() {
    const topbar = document.querySelector('.topbar');
    if (!topbar) return;
    
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function handleScroll() {
        const currentScrollY = window.scrollY;
        
        // Only hide when scrolling down past 100px
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            topbar.classList.add('topbar--scrolled');
        } 
        // Show when scrolling up OR at the top
        else if (currentScrollY < lastScrollY || currentScrollY <= 50) {
            topbar.classList.remove('topbar--scrolled');
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    }, { passive: true });
    
    // Initial check
    handleScroll();
}