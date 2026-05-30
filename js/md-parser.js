export const parseFrontmatter = (raw) => {
    const fm = {};
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/);
    let body = raw;
  
    if (fmMatch) {
      body = raw.slice(fmMatch[0].length).trim();
      fmMatch[1].split('\n').forEach(line => {
        const colon = line.indexOf(':');
        if (colon === -1) return;
        const key = line.slice(0, colon).trim();
        const val = line.slice(colon + 1).trim();
        fm[key] = val;
      });
    }
    
    return { fm, body };
  };
  
  const escapeHtml = (str) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  };
  
  export const parseMarkdown = (text) => {
    let html = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    
    html = html.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
    const blocks = html.split(/\n\n+/);
    
    const parsedBlocks = blocks.map(block => {
      if (block.startsWith('# ')) return `<h1>${block.slice(2)}</h1>`;
      if (block.startsWith('## ')) return `<h2>${block.slice(3)}</h2>`;
      if (block.startsWith('### ')) return `<h3>${block.slice(4)}</h3>`;
      if (block.startsWith('> ')) return `<blockquote>${block.slice(2)}</blockquote>`;
      
      if (block.startsWith('- ')) {
        const items = block.split('\n').map(item => `<li>${item.slice(2)}</li>`).join('');
        return `<ul>${items}</ul>`;
      }
      
      return `<p>${block}</p>`;
    });
  
    return parsedBlocks.join('\n');
  };