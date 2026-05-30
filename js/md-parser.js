// ─── Frontmatter ─────────────────────────────────────────────

export function parseFrontmatter(raw) {
    const fm       = {};
    const fmMatch  = raw.match(/^---\n([\s\S]*?)\n---/);
    let   body     = raw;

    if (fmMatch) {
        body = raw.slice(fmMatch[0].length).trim();
        fmMatch[1].split('\n').forEach(line => {
            const colon = line.indexOf(':');
            if (colon === -1) return;
            fm[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
        });
    }

    return { fm, body };
}

// ─── Helpers ─────────────────────────────────────────────────

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function inlineFormat(text) {
    return text
        .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.*?)\*\*/g,     '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g,         '<em>$1</em>')
        .replace(/`([^`]+)`/g,         '<code>$1</code>');
}

// ─── Block-level Parser ───────────────────────────────────────

export function parseMarkdown(markdown) {
    const lines = markdown.split('\n');
    const html  = [];
    let i = 0;

    while (i < lines.length) {
        const line = lines[i];

        // Headings
        if (line.startsWith('### ')) { html.push(`<h3>${inlineFormat(line.slice(4))}</h3>`);  i++; continue; }
        if (line.startsWith('## '))  { html.push(`<h2>${inlineFormat(line.slice(3))}</h2>`);   i++; continue; }
        if (line.startsWith('# '))   { html.push(`<h1>${inlineFormat(line.slice(2))}</h1>`);   i++; continue; }

        // Thematic break
        if (line.trim() === '---')   { html.push('<hr>'); i++; continue; }

        // Blockquote
        if (line.startsWith('> '))   { html.push(`<blockquote>${inlineFormat(line.slice(2))}</blockquote>`); i++; continue; }

        // Unordered list
        if (line.startsWith('- ')) {
            html.push('<ul>');
            while (i < lines.length && lines[i].startsWith('- ')) {
                html.push(`<li>${inlineFormat(lines[i].slice(2))}</li>`);
                i++;
            }
            html.push('</ul>');
            continue;
        }

        // Ordered list
        if (/^\d+\. /.test(line)) {
            html.push('<ol>');
            while (i < lines.length && /^\d+\. /.test(lines[i])) {
                html.push(`<li>${inlineFormat(lines[i].replace(/^\d+\. /, ''))}</li>`);
                i++;
            }
            html.push('</ol>');
            continue;
        }

        // Inline image (standalone line)
        const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
            const [altRaw, url]      = [imgMatch[1], imgMatch[2]];
            const [alt, caption = ''] = altRaw.includes('|')
                ? altRaw.split('|').map(s => s.trim())
                : [altRaw];

            const figcaption = caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : '';
            html.push(`<figure class="article-inline-image"><img src="${url}" alt="${escapeHtml(alt)}" loading="lazy">${figcaption}</figure>`);
            i++;
            continue;
        }

        // Blank line
        if (line.trim() === '') { i++; continue; }

        // Paragraph — consume until a block-level marker or blank line
        const paraLines = [];
        while (
            i < lines.length        &&
            lines[i].trim() !== ''  &&
            !lines[i].startsWith('#')  &&
            !lines[i].startsWith('> ') &&
            !lines[i].startsWith('- ') &&
            !/^\d+\. /.test(lines[i])  &&
            !lines[i].startsWith('!')  &&
            lines[i].trim() !== '---'
        ) {
            paraLines.push(lines[i]);
            i++;
        }

        if (paraLines.length > 0) {
            html.push(`<p>${inlineFormat(paraLines.join(' '))}</p>`);
        }
    }

    return html.join('\n');
}
