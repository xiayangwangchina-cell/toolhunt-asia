// ToolHunt Asia — Search & Filter Logic
(function() {
  const lang = document.documentElement.lang || 'jp';
  const tools = TOOLS_DATA[lang] || TOOLS_DATA.jp;
  
  // Category translations
  const catMap = {
    jp: ["すべて", "文章作成", "画像生成", "動画制作", "デザイン", "コーディング", "翻訳", "音声/音楽", "リサーチ", "業務効率化"],
    kr: ["전체", "글쓰기", "이미지 생성", "영상 제작", "디자인", "코딩", "번역", "음성/음악", "리서치", "업무 효율화"]
  };
  const cats = catMap[lang] || catMap.jp;
  
  let activeCat = cats[0];
  let searchQuery = '';
  
  // Build category buttons
  const catContainer = document.getElementById('category-filters');
  if (catContainer) {
    cats.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'cat-btn' + (cat === activeCat ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        activeCat = cat;
        renderFilters();
        renderTools();
      });
      catContainer.appendChild(btn);
    });
  }
  
  // Search handler
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderTools();
    });
  }
  
  function renderFilters() {
    document.querySelectorAll('.cat-btn').forEach(btn => {
      btn.classList.toggle('active', btn.textContent === activeCat);
    });
  }
  
  function getFilteredTools() {
    return tools.filter(t => {
      const matchCat = activeCat === cats[0] || t.cat === activeCat;
      const matchSearch = !searchQuery || 
        t.name.toLowerCase().includes(searchQuery) ||
        t.desc.toLowerCase().includes(searchQuery) ||
        t.cat.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });
  }
  
  function renderTools() {
    const grid = document.getElementById('tools-grid');
    const countEl = document.getElementById('tool-count');
    if (!grid) return;
    
    const filtered = getFilteredTools();
    if (countEl) {
      const totalStr = lang === 'jp' ? '件' : '개';
      countEl.textContent = `${filtered.length}${totalStr}のツールが見つかりました`;
      if (lang === 'kr') countEl.textContent = `${filtered.length}${totalStr}의 도구를 찾았습니다`;
    }
    
    if (filtered.length === 0) {
      const noResultStr = lang === 'jp' ? '条件に合うツールが見つかりませんでした' : '조건에 맞는 도구를 찾을 수 없습니다';
      grid.innerHTML = `<div class="no-results">🔍 ${noResultStr}</div>`;
      return;
    }
    
    grid.innerHTML = filtered.map(t => {
      const priceBadge = t.isFree 
        ? `<span class="badge badge-free">${t.price}</span>`
        : `<span class="badge badge-paid">${t.price}</span>`;
      
      return `
        <div class="tool-card">
          <div class="tool-card-header">
            <h3><a href="${t.url}" target="_blank" rel="noopener">${t.name}</a></h3>
            <div class="tool-badges">
              <span class="badge badge-cat">${t.cat}</span>
              ${priceBadge}
            </div>
          </div>
          <p class="tool-desc">${t.desc}</p>
          <div class="tool-footer">
            <span>${t.price}</span>
            <a href="${t.url}" target="_blank" rel="noopener">${lang === 'jp' ? 'サイトへ →' : '사이트로 →'}</a>
          </div>
        </div>
      `;
    }).join('');
  }
  
  // Initial render
  renderTools();
})();
