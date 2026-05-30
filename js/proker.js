import { getSiteRoot } from './utils.js';

// ─── Renderers ────────────────────────────────────────────────

function renderProkerCard({ periode, status, status_class, judul, deskripsi }) {
    const statusClass = status_class ? ` ${status_class}` : '';
    return `
    <div class="proker-item-card">
        <div class="proker-meta">
            <span class="badge">${periode}</span>
            <span class="badge${statusClass}">${status}</span>
        </div>
        <h4>${judul}</h4>
        <p>${deskripsi}</p>
    </div>`;
}

function renderSekbidAccordion(sekbid, index) {
    const checkboxId  = `sec-${sekbid.id}`;
    const checkedAttr = index === 0 ? ' checked' : '';

    return `
    <div class="sekbid-accordion">
        <input type="checkbox" id="${checkboxId}" class="accordion-toggle"${checkedAttr}>
        <label for="${checkboxId}" class="accordion-header">
            ${sekbid.nama}
            <span class="accordion-icon">+</span>
        </label>
        <div class="accordion-content">
            ${sekbid.proker.map(renderProkerCard).join('')}
        </div>
    </div>`;
}

// ─── Page Init ────────────────────────────────────────────────

export async function initProkerPage() {
    const container = document.getElementById('proker-render-target');
    if (!container) return;

    const ROOT = getSiteRoot();

    try {
        const res = await fetch(`${ROOT}content/proker-data.json`);
        if (!res.ok) throw new Error('Gagal memuat data program kerja.');
        const data = await res.json();

        container.innerHTML = data.map(renderSekbidAccordion).join('');

    } catch (err) {
        console.error('Proker render failed:', err);
        container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat program kerja: ${err.message}</p>`;
    }
}
