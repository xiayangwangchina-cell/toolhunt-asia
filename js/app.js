// ToolHunt Asia v2 — Interactive App
(function() {
  const lang = document.documentElement.lang || 'jp';
  const L = TOOLS[lang] || TOOLS.jp;
  
  let activeCat = L.all;
  let searchQuery = '';
  
  // ── Render Category Pills ──
  const catContainer = document.getElementById('category-filters');
  if (catContainer) {
    [L.all, ...L.cats].forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'cat-pill' + (cat === L.all ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => { activeCat = cat; renderAll(); });
      catContainer.appendChild(btn);
    });
  }
  
  // ── Search ──
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.placeholder = L.searchPlaceholder || '';
    searchInput.addEventListener('input', e => { searchQuery = e.target.value.toLowerCase(); renderAll(); });
  }
  
  // ── Filter Tools ──
  function filterTools() {
    let list = TOOLS_DATA;
    if (activeCat !== L.all) {
      list = list.filter(t => {
        if (lang === 'kr') return t.catKR === activeCat;
        if (lang === 'en') return t.catEN === activeCat;
        return t.cat === activeCat;
      });
    }
    if (searchQuery) {
      const q = searchQuery;
      list = list.filter(t => {
        const haystack = [t.name, t.descJP||'', t.descKR||'', t.descEN||'', t.cat||'', t.catKR||'', t.catEN||''].join(' ').toLowerCase();
        return haystack.includes(q);
      });
    }
    return list;
  }
  
  // ── Get description by lang ──
  function desc(t) {
    if (lang === 'kr') return t.descKR || t.descJP;
    if (lang === 'en') return t.descEN || t.descJP;
    return t.descJP;
  }
  
  function catLabel(t) {
    if (lang === 'kr') return t.catKR || t.cat;
    if (lang === 'en') return t.catEN || t.cat;
    return t.cat;
  }
  
  // ── Render Tool Card ──
  function toolCard(t) {
    const badges = [];
    badges.push(`<span class="tag tag-cat">${catLabel(t)}</span>`);
    if (t.isFree) badges.push(`<span class="tag tag-free">${lang==='kr'?'무료':'Free'}</span>`);
    else badges.push(`<span class="tag tag-paid">${lang==='kr'?'유료':'Paid'}</span>`);
    if (t.hot) badges.push(`<span class="tag tag-hot">🔥 Hot</span>`);
    if (t.highCommission) badges.push(`<span class="tag tag-commission">💰 ${lang==='jp'?'高還元':'High'}</span>`);
    if (t.freeTrial) badges.push(`<span class="tag tag-free">🎁 ${lang==='jp'?'無料お試し':'Trial'}</span>`);
    
    return `<div class="tool-card">
      ${t.highCommission ? '<span class="commission-hint">Affiliate</span>' : ''}
      <div class="top-row">
        <h3><a href="${t.url}" target="_blank" rel="nofollow sponsored">${t.name}</a></h3>
        <div class="tags">${badges.join('')}</div>
      </div>
      <p class="desc">${desc(t)}</p>
      <div class="footer-row">
        <span class="price">${t.price}</span>
        <a href="${t.url}" target="_blank" rel="nofollow sponsored" class="cta">${L.cta} →</a>
      </div>
      <p class="affiliate-note">${L.affiliateNote}</p>
    </div>`;
  }
  
  // ── Render Section ──
  function section(title, tools) {
    if (!tools.length) return '';
    return `<h2 class="section-title"><span class="icon">${title.slice(0,2)}</span>${title.slice(3)}</h2>
    <div class="tools-grid">${tools.map(toolCard).join('')}</div>`;
  }
  
  // ── Main Render ──
  function renderAll() {
    const hotGrid = document.getElementById('hot-tools');
    const highGrid = document.getElementById('high-commission-tools');
    const trialGrid = document.getElementById('free-trial-tools');
    const allGrid = document.getElementById('all-tools');
    const sidebarHot = document.getElementById('sidebar-hot');
    const sidebarNew = document.getElementById('sidebar-new');
    
    let filtered = filterTools();
    const hot = filtered.filter(t => t.hot);
    const highC = filtered.filter(t => t.highCommission);
    const trial = filtered.filter(t => t.freeTrial);
    
    if (hotGrid) hotGrid.innerHTML = hot.length ? `<div class="tools-grid">${hot.map(toolCard).join('')}</div>` : '';
    if (highGrid) highGrid.innerHTML = highC.length ? `<div class="tools-grid">${highC.map(toolCard).join('')}</div>` : '';
    if (trialGrid) trialGrid.innerHTML = trial.length ? `<div class="tools-grid">${trial.map(toolCard).join('')}</div>` : '';
    if (allGrid) allGrid.innerHTML = `<div class="tools-grid">${filtered.map(toolCard).join('')}</div>`;
    
    // Sidebar hot tools
    if (sidebarHot) {
      const topHot = TOOLS_DATA.filter(t => t.hot).slice(0, 8);
      sidebarHot.innerHTML = topHot.map(t => `<li><a href="${t.url}" target="_blank" rel="nofollow sponsored">🔥 ${t.name}</a></li>`).join('');
    }
    if (sidebarNew) {
      const newest = [...TOOLS_DATA].reverse().slice(0, 8);
      sidebarNew.innerHTML = newest.map(t => `<li><a href="${t.url}" target="_blank" rel="nofollow sponsored">🆕 ${t.name}</a></li>`).join('');
    }
    
    // Update category pill active state
    document.querySelectorAll('.cat-pill').forEach(btn => {
      btn.classList.toggle('active', btn.textContent.trim() === activeCat);
    });
  }
  
  // ── Populate Sidebar Titles ──
  const sidebarHotTitle = document.getElementById('sidebar-hot-title');
  const sidebarNewTitle = document.getElementById('sidebar-new-title');
  if (sidebarHotTitle) sidebarHotTitle.textContent = L.sidebar.hotTitle;
  if (sidebarNewTitle) sidebarNewTitle.textContent = L.sidebar.newTitle;
  
  // ── Populate Section Titles ──
  const el = (id, key) => { const e = document.getElementById(id); if(e) e.textContent = L.sections[key]; };
  el('sec-hot', 'hot'); el('sec-high', 'highCommission'); el('sec-trial', 'freeTrial'); el('sec-all', 'all');
  
  // ── Notify Bar ──
  const notify = document.getElementById('notify-bar');
  if (notify) notify.textContent = L.notifyBar;
  
  // ── Footer ──
  const footerAbout = document.getElementById('footer-about');
  if (footerAbout) footerAbout.textContent = L.footer.about;
  
  // Initial render
  renderAll();
})();
