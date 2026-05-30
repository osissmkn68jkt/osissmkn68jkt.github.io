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

function renderProkerCard(item) {
    const statusClass = item.status_class ? ` ${item.status_class}` : '';
    return `
    <div class="proker-item-card">
        <div class="proker-meta">
            <span class="badge">${item.periode}</span>
            <span class="badge${statusClass}">${item.status}</span>
        </div>
        <h4>${item.judul}</h4>
        <p>${item.deskripsi}</p>
    </div>`;
}

function renderSekbidAccordion(sekbid, index) {
    const checkboxId = `sec-${sekbid.id}`;
    const checkedAttr = index === 0 ? ' checked' : '';
    const cards = sekbid.proker.map(renderProkerCard).join('');

    return `
    <div class="sekbid-accordion">
        <input type="checkbox" id="${checkboxId}" class="accordion-toggle"${checkedAttr}>
        <label for="${checkboxId}" class="accordion-header">
            ${sekbid.nama}
            <span class="accordion-icon">+</span>
        </label>
        <div class="accordion-content">
            ${cards}
        </div>
    </div>`;
}

export async function initProkerPage() {
    const container = document.getElementById('proker-render-target');
    if (!container) return;

    const ROOT = getSiteRoot();

    try {
        const res = await fetch(`${ROOT}content/proker-data.json`);
        if (!res.ok) throw new Error('Gagal memuat data program kerja.');
        const data = await res.json();

        container.innerHTML = data.map((sekbid, i) => renderSekbidAccordion(sekbid, i)).join('');
    } catch (err) {
        console.error('Proker render failed:', err);
        container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat program kerja: ${err.message}</p>`;
    }
}