const NAV_LINKS = [
    { href: 'index.html', label: 'Home' },
    { href: 'static/about.html', label: 'Tentang Kami' },
    { href: 'static/struktur.html', label: 'Struktur' },
    { href: 'static/proker.html', label: 'Program Kerja' },
    { href: 'static/articles.html', label: 'Artikel' },
    { href: 'static/contacts.html', label: 'Contact' }
  ];
  
  const getCurrentPage = () => window.location.pathname.split('/').pop() || 'index.html';
  
  export const renderNav = (rootUrl) => {
    const current = getCurrentPage();
    
    const linksHtml = NAV_LINKS.map(({ href, label }) => {
      const pageFile = href.split('/').pop();
      const isActive = current === pageFile ? 'active' : '';
      return `<a href="${rootUrl}${href}" class="nav-btn ${isActive}">${label}</a>`;
    }).join('');
  
    return `
      <nav class="topbar">
        <div class="logo">
          <a href="${rootUrl}index.html">OSIS SMKN 68 Jakarta</a>
        </div>
        <div class="nav-links">
          ${linksHtml}
        </div>
      </nav>
    `;
  };
  
  export const renderFooter = () => {
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
            <a href="https://www.tiktok.com/@osis.smkn68jkt" target="_blank" rel="noopener">TikTok</a>
          </div>
        </div>
      </footer>
    `;
  };