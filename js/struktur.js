import { ROOT } from './app.js';
import { renderNav, renderFooter, initNavListeners } from './components.js';

const node = (name, role, type) => `
  <div class="org-node org-node--${type}">
    <div class="org-node__name">${name}</div>
    <div class="org-node__role">${role}</div>
  </div>
`;

const connector = () => `<div class="org-line-vertical"></div>`;

const setupLayout = () => {
  const header = document.getElementById('header-container');
  const footer = document.getElementById('footer-container');
  if (header) header.innerHTML = renderNav(ROOT);
  if (footer) footer.innerHTML = renderFooter();
  initNavListeners();
};

export const initStrukturPage = async () => {
  setupLayout();
  const container = document.getElementById('struktur-render-target');
  if (!container) return;

  try {
    const res = await fetch(`${ROOT}content/osis-data.json`);
    if (!res.ok) throw new Error('Data struktur gagal dimuat');
    
    const data = await res.json();
    let html = '<div class="org-chart">';

    data.pimpinanAtas.forEach((p, i) => {
      html += node(p.nama, p.jabatan, 'main');
      if (i < data.pimpinanAtas.length - 1) html += connector();
    });

    html += connector();
    html += '<div class="org-row org-row--mid">';
    
    html += '<div class="org-col org-col--wing">';
    data.sekretaris.forEach(s => html += node(s.nama, s.jabatan, 'wing'));
    html += '</div>';

    html += '<div class="org-col org-col--center">';
    html += node(data.koordinator.nama, data.koordinator.jabatan, 'main');
    html += connector();
    
    html += '<div class="org-row org-row--sekbid">';
    data.sekbid.forEach(sek => {
      html += '<div class="org-col org-col--sekbid">';
      html += node(sek.ketua, `Ketua Sekbid ${sek.nama}`, 'sekbid');
      
      sek.departemen.forEach(dept => {
        html += `
          <div class="org-dept">
            <div class="org-dept__name">${dept.nama}</div>
            <div class="org-dept__members">${dept.anggota.join('<br>')}</div>
          </div>
        `;
      });
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';

    html += '<div class="org-col org-col--wing">';
    data.bendahara.forEach(b => html += node(b.nama, b.jabatan, 'wing'));
    html += '</div>';

    html += '</div>';
    html += '</div>';

    container.innerHTML = html;
  } catch (err) {
    console.error('Org tree failed:', err);
    container.innerHTML = `<p style="color:red;padding:2rem">Gagal memuat data struktur: ${err.message}</p>`;
  }
};