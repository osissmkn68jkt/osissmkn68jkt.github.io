/**
 * app.js
 * Entry point — injects shared components and boots the correct
 * page module based on the current URL.
 */

import { injectComponents, initTopbarScrollBehavior } from './components.js';
import { initHomeSlider, initHomeNews } from './home.js';
import { initArticleListPage, initArticlePage } from './articles.js';
import { renderOsisTree } from './struktur.js';
import { initProkerPage } from './proker.js';
import { initBackToTop } from './backtotop.js';
import { injectSEOMeta, updateCanonicalURL } from './seo.js';
import { initPageTransitions, animatePageIn } from './navigation.js';

// ===== ROBUST PRELOADER (Fail-safe version) =====
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  // Prevent scroll during load
  document.body.classList.add('preloader-active');

  let hasHidden = false;
  
  const hidePreloader = () => {
    if (hasHidden) return;
    hasHidden = true;
    
    preloader.classList.add('hidden');
    document.body.classList.remove('preloader-active');
    
    // Trigger page entrance animation after preloader is gone
    setTimeout(() => {
      animatePageIn();
    }, 50);
    
    // Clean up DOM after transition
    setTimeout(() => {
      if (preloader.parentNode) {
        preloader.remove();
      }
    }, 400);
  };

  // Strategy 1: Hide when DOM is ready + critical images loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(hidePreloader, 100);
    });
  } else {
    setTimeout(hidePreloader, 100);
  }

  // Strategy 2: Fallback timeout (never hang longer than 2.5s)
  setTimeout(hidePreloader, 2500);

  // Strategy 3: Hide immediately on cached navigation
  try {
    const nav = performance.getEntriesByType('navigation')[0];
    if (nav?.type === 'back_forward') {
      hidePreloader();
    }
  } catch (e) { /* ignore */ }

  // Strategy 4: Hide on first user interaction (safety net)
  const onFirstInteraction = () => {
    hidePreloader();
    ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt =>
      document.removeEventListener(evt, onFirstInteraction)
    );
  };
  ['click', 'touchstart', 'keydown', 'scroll'].forEach(evt =>
    document.addEventListener(evt, onFirstInteraction, { once: true, passive: true })
  );
}

// Call preloader init
initPreloader();

// 1. Inject nav + footer on every page
injectComponents();

// 2. Initialize back to top
initBackToTop();

// 3. Initialize page transitions
initPageTransitions();

// 4. Boot the correct page module based on the filename
const page = window.location.pathname.split('/').pop() || 'index.html';

if (page === 'index.html' || page === '') {
    initHomeSlider();
    initHomeNews();
    // SEO for homepage
    setTimeout(() => {
        injectSEOMeta({
            title: 'OSIS SMKN 68 Jakarta - Organisasi Siswa Intra Sekolah',
            description: 'Website resmi OSIS SMKN 68 Jakarta. Bergerak bersama, berinovasi untuk masa depan. Temukan informasi kegiatan, program kerja, dan artikel edukatif.',
            url: window.location.href,
            type: 'website'
        });
        updateCanonicalURL();
    }, 100);
} else if (page === 'struktur.html') {
    renderOsisTree();
    setTimeout(() => {
        injectSEOMeta({
            title: 'Struktur Organisasi - OSIS SMKN 68 Jakarta',
            description: 'Bagan hierarki wewenang, tanggung jawab, dan koordinasi internal kepengurusan OSIS SMKN 68 Jakarta.',
            url: window.location.href,
            type: 'website'
        });
    }, 100);
} else if (page === 'articles.html') {
    initArticleListPage();
    setTimeout(() => {
        injectSEOMeta({
            title: 'Artikel & Berita - OSIS SMKN 68 Jakarta',
            description: 'Jelajahi bacaan edukasi, info rilis fitur terbaru, dan dokumentasi kegiatan OSIS SMKN 68 Jakarta.',
            url: window.location.href,
            type: 'website'
        });
    }, 100);
} else if (page === 'proker.html') {
    initProkerPage();
    setTimeout(() => {
        injectSEOMeta({
            title: 'Program Kerja - OSIS SMKN 68 Jakarta',
            description: 'Daftar agenda kerja prioritas serta cetak biru pergerakan strategis di setiap seksi bidang OSIS SMKN 68 Jakarta.',
            url: window.location.href,
            type: 'website'
        });
    }, 100);
} else if (page.endsWith('.html') && window.location.pathname.includes('/articles/')) {
    initArticlePage();
    // SEO will be injected by initArticlePage after loading article data
} else if (page === 'about.html') {
    setTimeout(() => {
        injectSEOMeta({
            title: 'Tentang Kami - OSIS SMKN 68 Jakarta',
            description: 'Mengenal lebih dekat visi, misi, serta komitmen kami sebagai organisasi intra sekolah SMKN 68 Jakarta.',
            url: window.location.href,
            type: 'website'
        });
    }, 100);
} else if (page === 'contacts.html') {
    setTimeout(() => {
        injectSEOMeta({
            title: 'Hubungi Kami - OSIS SMKN 68 Jakarta',
            description: 'Punya pertanyaan atau rencana kolaborasi kreatif? Kirimkan pesan langsung kepada OSIS SMKN 68 Jakarta.',
            url: window.location.href,
            type: 'website'
        });
    }, 100);
}