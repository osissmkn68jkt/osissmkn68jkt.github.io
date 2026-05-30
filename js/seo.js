/**
 * seo.js
 * Handles SEO meta tags, Open Graph, Twitter Cards, and JSON-LD structured data
 */

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

export function injectSEOMeta({
    title = 'OSIS SMKN 68 Jakarta',
    description = 'Website resmi OSIS SMKN 68 Jakarta - Organisasi Siswa Intra Sekolah yang bergerak dalam pengembangan kreativitas, kepemimpinan, dan inovasi siswa.',
    image = `${ROOT}img/icon.png`,
    url = window.location.href,
    type = 'website',
    article = null
}) {
    // Remove existing meta tags if any
    const existingTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], meta[name="description"]');
    existingTags.forEach(tag => tag.remove());

    const head = document.head;

    // Basic meta
    const descMeta = document.createElement('meta');
    descMeta.name = 'description';
    descMeta.content = description;
    head.appendChild(descMeta);

    // Open Graph
    const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:url', content: url },
        { property: 'og:type', content: type },
        { property: 'og:site_name', content: 'OSIS SMKN 68 Jakarta' },
        { property: 'og:locale', content: 'id_ID' }
    ];

    ogTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        head.appendChild(meta);
    });

    // Twitter Card
    const twitterTags = [
        { name: 'twitter:card', content: type === 'article' ? 'summary_large_image' : 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image }
    ];

    twitterTags.forEach(tag => {
        const meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.content = tag.content;
        head.appendChild(meta);
    });

    // Article-specific meta
    if (article) {
        const articleTags = [
            { property: 'article:published_time', content: article.date },
            { property: 'article:author', content: article.author },
            { property: 'article:section', content: article.category }
        ];

        articleTags.forEach(tag => {
            const meta = document.createElement('meta');
            meta.setAttribute('property', tag.property);
            meta.content = tag.content;
            head.appendChild(meta);
        });
    }

    // JSON-LD Structured Data
    injectJSONLD({ title, description, image, url, type, article });
}

function injectJSONLD({ title, description, image, url, type, article }) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';

    let jsonLD = {};

    if (type === 'article' && article) {
        jsonLD = {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: title,
            description: description,
            image: image,
            url: url,
            datePublished: article.date,
            dateModified: article.date,
            author: {
                '@type': 'Person',
                name: article.author
            },
            publisher: {
                '@type': 'Organization',
                name: 'OSIS SMKN 68 Jakarta',
                logo: {
                    '@type': 'ImageObject',
                    url: `${ROOT}img/icon.png`
                }
            },
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': url
            }
        };
    } else {
        jsonLD = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'OSIS SMKN 68 Jakarta',
            url: ROOT,
            logo: `${ROOT}img/icon.png`,
            description: description,
            sameAs: [
                'https://www.instagram.com/osissmkn68.jkt/',
                'https://www.youtube.com/@OSISSMKN68',
                'https://www.tiktok.com/@osissmkn68'
            ],
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Penganten Ali RT 09 RW 06',
                addressLocality: 'Jakarta Timur',
                addressRegion: 'DKI Jakarta',
                addressCountry: 'ID'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+62-896-1672-7118',
                contactType: 'customer service',
                availableLanguage: ['Indonesian']
            }
        };
    }

    script.textContent = JSON.stringify(jsonLD);
    document.head.appendChild(script);
}

export function updateCanonicalURL(url) {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
    }
    canonical.href = url || window.location.href;
}