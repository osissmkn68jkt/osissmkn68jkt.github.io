import { ROOT } from './app.js';
import { renderNav, renderFooter, initNavListeners } from './components.js';

const renderProkerCard = (item) => {
  const statusClass = item.status_class ? ` ${item.status_class}` : '';
  
  return `
    <div class="proker-item-card">
      <div class="proker-meta">
        <span class="badge">${item.periode}</span>
        <span class="badge${statusClass}">${item.status}</span>
      </div>
      <h4>${item.judul}</h4>
      <p>${item.deskripsi}</p>
    </div>
  `;
};

const renderSekbidAccordion = (sekbid, index) => {
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
    </div>
  `;
};

const setupLayout = () => {
  const header = document.getElementById('header-container');
  const footer = document.getElementById('footer-container');
  if (header) header.innerHTML = renderNav(ROOT);
  if (footer) footer.innerHTML = renderFooter();
  initNavListeners();
};

export const initProkerPage = async () => {
  setupLayout();
  const container = document.getElementById('proker-render-target');
  if (!container) return;

  try {
    const res = await fetch(`${ROOT}content/proker-data.json`);
    if (!res.ok) throw new Error('Data proker gagal dimuat');
    
    const data = await res.json();
    container.innerHTML = data.map((sekbid, i) => renderSekbidAccordion(sekbid, i)).join('');
  } catch (err) {
    console.error('Proker load error:', err);
    container.innerHTML = `<p style="color:red">Gagal memuat program kerja: ${err.message}</p>`;
  }
};