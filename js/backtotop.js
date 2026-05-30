/**
 * backtotop.js
 * Back to top button with smooth scroll
 */

export function initBackToTop() {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '↑';
    button.setAttribute('aria-label', 'Kembali ke atas');
    document.body.appendChild(button);

    const scrollThreshold = 400;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }, { passive: true });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}