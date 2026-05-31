/**
 * navigation.js
 * Handles smooth page transitions between pages
 */

let isTransitioning = false;

export function initPageTransitions() {
    // Apply fade-in animation to current page content
    const mainContent = document.querySelector('main') || document.querySelector('.hero-container');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(15px)';
        mainContent.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        // Trigger fade in after a tiny delay
        setTimeout(() => {
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 50);
    }

    // Intercept all internal navigation clicks
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;
        
        // Skip external links, anchors, and javascript:
        if (href.startsWith('http') && !href.includes(window.location.hostname)) return;
        if (href.startsWith('#') || href.startsWith('javascript:')) return;
        
        e.preventDefault();
        
        // Don't transition if already transitioning
        if (isTransitioning) return;
        
        const targetUrl = new URL(href, window.location.href).href;
        
        // Animate out
        animatePageOut(() => {
            window.location.href = targetUrl;
        });
    });
}

function animatePageOut(callback) {
    isTransitioning = true;
    
    const mainContent = document.querySelector('main') || document.querySelector('.hero-container');
    const topbar = document.querySelector('.topbar');
    
    // Animate main content out
    if (mainContent) {
        mainContent.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(-10px)';
    }
    
    // Optional: animate topbar out
    if (topbar) {
        topbar.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        topbar.style.opacity = '0';
        topbar.style.transform = 'translateY(-100%)';
    }
    
    // Execute callback after animation
    setTimeout(callback, 250);
}

// Call this on page load to apply entrance animation
export function animatePageIn() {
    isTransitioning = false;
    
    const mainContent = document.querySelector('main') || document.querySelector('.hero-container');
    const topbar = document.querySelector('.topbar');
    
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(15px)';
        mainContent.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        
        // Force reflow
        void mainContent.offsetHeight;
        
        mainContent.style.opacity = '1';
        mainContent.style.transform = 'translateY(0)';
    }
    
    if (topbar) {
        topbar.style.opacity = '1';
        topbar.style.transform = 'translateY(0)';
    }
}