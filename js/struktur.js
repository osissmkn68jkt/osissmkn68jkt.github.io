import { getSiteRoot } from './utils.js';

// ─── Node Builders ────────────────────────────────────────────

function orgNode(nama, jabatan, level = 'main') {
    return `
    <div class="org-node org-node--${level}">
        <div class="org-node__name">${nama}</div>
        <div class="org-node__role">${jabatan}</div>
    </div>`;
}

function connector() {
    return `<div class="org-connector"></div>`;
}

function orgDept({ nama, anggota }) {
    return `
    <div class="org-dept">
        <div class="org-dept__name">${nama}</div>
        <div class="org-dept__members">${anggota.join('<br>')}</div>
    </div>`;
}

function renderSekbidColumn(sek) {
    return `
    <div class="org-col org-col--sekbid">
        ${orgNode(sek.ketua, `Ketua Sekbid ${sek.nama}`, 'sekbid')}
        ${sek.departemen.map(orgDept).join('')}
    </div>`;
}

function renderOrgChart(data) {
    const spineNodes = data.pimpinanAtas
        .map((p, i) => orgNode(p.nama, p.jabatan) + (i < data.pimpinanAtas.length - 1 ? connector() : ''))
        .join('');

    const sekretarisNodes = data.sekretaris.map(s => orgNode(s.nama, s.jabatan, 'wing')).join('');
    const bendaharaNodes  = data.bendahara.map(b => orgNode(b.nama, b.jabatan, 'wing')).join('');
    const sekbidColumns   = data.sekbid.map(renderSekbidColumn).join('');

    return `
    <div class="org-chart">
        <div class="org-col org-col--spine">
            ${spineNodes}
        </div>

        <div class="org-row org-row--mid">
            <div class="org-col org-col--wing">
                ${sekretarisNodes}
            </div>

            <div class="org-col org-col--center">
                ${orgNode(data.koordinator.nama, data.koordinator.jabatan)}
                ${connector()}
                <div class="org-row org-row--sekbid">
                    ${sekbidColumns}
                </div>
            </div>

            <div class="org-col org-col--wing">
                ${bendaharaNodes}
            </div>
        </div>
    </div>`;
}

// ─── Page Init ────────────────────────────────────────────────

export async function renderOsisTree() {
    const container = document.getElementById('osis-tree-container');
    if (!container) return;

    const dataUrl = getSiteRoot() + 'content/osis-data.json';

    try {
        const res = await fetch(dataUrl);
        if (!res.ok) throw new Error('Cannot load osis-data.json');
        const data = await res.json();

        container.innerHTML = renderOrgChart(data);

    } catch (err) {
        console.error('Org tree failed:', err);
        container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat data struktur: ${err.message}</p>`;
    }
}
