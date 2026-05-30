/**
 * utils.js
 * Shared utilities used across JS modules.
 */

/**
 * Resolves the site root URL regardless of whether the current page
 * is at the root level or inside /static/.
 * @returns {string} e.g. "https://example.com/repo/"
 */
export function getSiteRoot() {
    const { origin, pathname } = window.location;

    const staticIdx = pathname.indexOf('/static/');
    if (staticIdx !== -1) {
        return origin + pathname.slice(0, staticIdx + 1);
    }

    const lastSlash = pathname.lastIndexOf('/');
    const segment   = pathname.slice(lastSlash + 1);

    // If the last segment is a file (has an extension), root is its directory
    if (segment.includes('.')) {
        return origin + pathname.slice(0, lastSlash + 1);
    }

    // Directory path — ensure trailing slash
    return origin + pathname + (pathname.endsWith('/') ? '' : '/');
}
