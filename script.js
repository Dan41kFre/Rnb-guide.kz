/* ============================================================
   R&B Archive — script.js
   Плеер: YouTube IFrame API
   Поиск + автодополнение + фильтры по карточкам артистов
   ============================================================ */

/* ─── Track data ─────────────────────────────────────────── */
const tracks = [
  {
    title:  "Красивая",
    artist: "Jony",
    genre:  "2026 ·  Pop/R&B",
    bg:     "linear-gradient(145deg,#18003a,#7c3aed)",
    cover:  "img/covers/krasivaya.jfif",
    page:   "artist.html?id=jony",
    ytId:   "3pyoPOE2U0Y"
  },
  {
    title:  "Им это надо",
    artist: "Mayot",
    genre:  "2026 · AfroDrill",
    bg:     "linear-gradient(145deg,#001020,#0ea5e9)",
    cover:  "img/covers/im.jfif",
    page:   "artist.html?id=mayot",
    ytId:   "Qf10zhu2rrk"
  },
  {
    title:  "Тени(feat.Кравц)",
    artist: "Mayot",
    genre:  "2026 · Afro/R&B",
    bg:     "linear-gradient(145deg,#1a0010,#e91e8c)",
    cover:  "img/covers/teni.jfif",
    page:   "artist.html?id=mayot",
    ytId:   "vDNWmm8AyAw"
  },
  {
    title:  "Спутник",
    artist: "M'Dee",
    genre:  "2026 · Classical R&B",
    bg:     "linear-gradient(145deg,#0a1800,#84cc16)",
    cover:  "img/covers/sputnik.jfif",
    page:   "artist.html?id=mdee",
    ytId:   "hDBoA3449Aw"
  },
];


/* ════════════════════════════════════════════════
   FEAT. — глобальный парсер (плейлист + плеер)
════════════════════════════════════════════════ */
const FEAT_ID_MAP = {
  "the weeknd":      "theweeknd",
  "drake":           "drake",
  "mayot":           "mayot",
  "бьянка":          "bianca",
  "bianca":          "bianca",
  "partynextdoor":   "partynextdoor",
  "bryson tiller":   "brysontiller",
  "chris brown":     "chrisbrown",
  "og buda":         "ogbuda",
  "yungway":         "yungway",
  "brent faiyaz":    "brentfaiyaz",
  "frank ocean":     "frankocean",
  "6lack":           "6lack",
  "sza":             "sza",
  "justin bieber":   "justinbieber",
  "michael jackson": "mj",
  "the limba":       "thelimba",
  "jony":            "jony",
  "m\'dee":         "mdee",
  "gone.fludd":      "gonefludd",
  "mot":             "mot",
  "мот":             "mot",
};

function parseFeatGlobal(title) {
  const m = title.match(/\(feat\.([^)]+)\)?$/i);
  if (!m) return { cleanTitle: title, featHtml: "", featText: "" };
  const cleanTitle = title.replace(/\s*\(feat\.[^)]*\)?\s*$/i, "").trim();
  const parts = m[1].split(/\s*[,&]\s*/).map(raw => {
    const name = raw.trim();
    const id   = FEAT_ID_MAP[name.toLowerCase()] || null;
    return { name, id };
  }).filter(a => a.name.length > 0);
  const featHtml = "feat. " + parts.map(a =>
    a.id ? `<a href="artist.html?id=${a.id}" class="playlist-feat-link">${a.name}</a>` : a.name
  ).join(", ");
  const featText = "feat. " + parts.map(a => a.name).join(", ");
  return { cleanTitle, featHtml, featText };
}

function _applyPlayerArtist(artistName, artistHref, featHtml) {
  const el = document.getElementById("barPlayerArtist");
  if (!el) return;
  if (featHtml) {
    el.innerHTML = `<a href="${artistHref}" class="mini-player__artist-main">${artistName}</a><span class="mini-player__feat"> · ${featHtml}</span>`;
  } else {
    el.innerHTML = `<a href="${artistHref}" class="mini-player__artist-main">${artistName}</a>`;
  }
}

/* ════════════════════════════════════════════════
   ГРОМКОСТЬ — горизонтальный слайдер
════════════════════════════════════════════════ */
if (window._vol === undefined) window._vol = 80;
if (window._muted === undefined) window._muted = false;
window._volDrag = false;

/* Линейный слайдер (0–100) → логарифмическая громкость для YouTube.
   Формула: ytVol = ((10^(linear/100) - 1) / 9) * 100
   Даёт плавное нарастание: 0→0, 50→25, 80→58, 100→100 */
function _linearToLog(linear) {
  if (linear <= 0) return 0;
  if (linear >= 100) return 100;
  return Math.round(((Math.pow(10, linear / 100) - 1) / 9) * 100);
}

window.setVolume = function(pct) {
  window._vol = Math.min(100, Math.max(0, Math.round(pct)));
  var ytp = (typeof ytPlayer !== "undefined") ? ytPlayer : null;
  if (ytp) {
    try {
      if (window._muted) { ytp.unMute(); window._muted = false; }
      ytp.setVolume(_linearToLog(window._vol));
    } catch(e) {}
  }
  _volUI();
};

window.toggleMute = function() {
  window._muted = !window._muted;
  var ytp = (typeof ytPlayer !== "undefined") ? ytPlayer : null;
  if (ytp) { try { window._muted ? ytp.mute() : ytp.unMute(); } catch(e) {} }
  _volUI();
};

function _volUI() {
  var v = window._vol, m = window._muted;
  var disp = m ? 0 : v;

  var fill  = document.getElementById("barVolFill");
  var thumb = document.getElementById("barVolThumb");
  var pct   = document.getElementById("barVolPct");
  if (fill)  fill.style.width = disp + "%";
  if (thumb) thumb.style.left = disp + "%";
  if (pct)   pct.textContent  = m ? "0%" : v + "%";

  var icon    = document.getElementById("barVolIcon");
  var lowIcon = document.getElementById("barVolLowIcon");
  var muteIco = document.getElementById("barVolMuteIcon");
  if (m || v === 0) {
    if (icon)    icon.style.display    = "none";
    if (lowIcon) lowIcon.style.display = "none";
    if (muteIco) muteIco.style.display = "";
  } else if (v < 40) {
    if (icon)    icon.style.display    = "none";
    if (lowIcon) lowIcon.style.display = "";
    if (muteIco) muteIco.style.display = "none";
  } else {
    if (icon)    icon.style.display    = "";
    if (lowIcon) lowIcon.style.display = "none";
    if (muteIco) muteIco.style.display = "none";
  }

  var btn = document.getElementById("barVolBtn");
  if (btn) btn.classList.toggle("muted", !!(m || v === 0));
}

function _volPosFromX(clientX) {
  var bar = document.getElementById("barVolBar");
  if (!bar) return;
  var r = bar.getBoundingClientRect();
  var p = Math.min(100, Math.max(0, (clientX - r.left) / r.width * 100));
  window.setVolume(p);
}

window._volBound = false;
function _volBind() {
  if (window._volBound) return;
  var bar    = document.getElementById("barVolBar");
  var widget = document.getElementById("volWidget");
  if (!bar) return;
  window._volBound = true;

  bar.addEventListener("mousedown", function(e) {
    window._volDrag = true; bar.classList.add("dragging");
    _volPosFromX(e.clientX); e.preventDefault();
  });
  bar.addEventListener("touchstart", function(e) {
    window._volDrag = true; bar.classList.add("dragging");
    _volPosFromX(e.touches[0].clientX); e.preventDefault();
  }, { passive: false });

  document.addEventListener("mousemove", function(e) {
    if (window._volDrag) _volPosFromX(e.clientX);
  });
  document.addEventListener("touchmove", function(e) {
    if (window._volDrag) { _volPosFromX(e.touches[0].clientX); e.preventDefault(); }
  }, { passive: false });
  document.addEventListener("mouseup",  function() {
    if (window._volDrag) { window._volDrag = false; bar.classList.remove("dragging"); }
  });
  document.addEventListener("touchend", function() {
    if (window._volDrag) { window._volDrag = false; bar.classList.remove("dragging"); }
  });

  /* Колёсико на виджете */
  if (widget) widget.addEventListener("wheel", function(e) {
    e.preventDefault();
    window.setVolume(window._vol + (e.deltaY < 0 ? 5 : -5));
  }, { passive: false });

  _volUI();
}
_volBind();
document.addEventListener("DOMContentLoaded", _volBind);

/* ─── State ─────────────────────────────────────────────── */
let currentTrack = 0;
const liked = new Set();

/* ============================================================
   ПОИСК + АВТОДОПОЛНЕНИЕ + ФИЛЬТРЫ
   ============================================================ */

/* ── Собираем данные об артистах из карточек в DOM ── */
function getArtistCardsData() {
  const cards = [];
  document.querySelectorAll(".artist-card").forEach(card => {
    const name    = card.querySelector(".artist-card__name")?.textContent?.trim() || "";
    const meta    = card.querySelector(".artist-card__meta")?.textContent?.trim() || "";
    const badge   = card.querySelector(".artist-card__badge")?.textContent?.trim() || "";
    const link    = card.querySelector(".artist-card__btn")?.getAttribute("href") || "#";
    const tab     = card.closest(".artists__grid")?.id || "";

    // Определяем страну из ARTISTS data по id артиста (не из DOM-текста,
    // чтобы фильтр работал корректно на любом языке)
    let country = "";
    const idMatch = link.match(/[?&]id=([^&]+)/);
    if (idMatch && typeof ARTISTS !== "undefined" && ARTISTS[idMatch[1]]) {
      // Используем русское название страны как ключ сравнения —
      // фильтр тоже нормализуется через countryKeyMap ниже
      country = ARTISTS[idMatch[1]].country; // всегда на русском
    } else {
      // Фолбэк: русские названия из мета-текста
      if (meta.includes("США"))                 country = "США";
      else if (meta.includes("Канада"))          country = "Канада";
      else if (meta.includes("Великобритания"))  country = "Великобритания";
      else if (meta.includes("Россия"))          country = "Россия";
      else if (meta.includes("Казахстан"))       country = "Казахстан";
      else if (meta.includes("Азербайджан"))     country = "Азербайджан";
    }

    // Определяем примерный год начала карьеры из meta
    const yearMatch = meta.match(/(\d{4})/);
    const startYear = yearMatch ? parseInt(yearMatch[1]) : 0;

    cards.push({ card, name, meta, badge, link, tab, country, startYear });
  });
  return cards;
}

/* ── Карта перевода названий стран → русское каноническое название ── */
/* ── Маппинг ЛЮБОГО написания страны → русское каноническое название ── */
/* Ключи И значения — всё нижний регистр, как после normalize() */
const COUNTRY_KEY_MAP = {
  // EN
  "usa":            "сша",
  "united states":  "сша",
  "united kingdom": "великобритания",
  "uk":             "великобритания",
  "canada":         "канада",
  "russia":         "россия",
  "kazakhstan":     "казахстан",
  "azerbaijan":     "азербайджан",
  // Türkçe
  "abd":            "сша",
  "birleşik krallık": "великобритания",
  "kanada":         "канада",
  "rusya":          "россия",
  "kazakistan":     "казахстан",
  "azerbaycan":     "азербайджан",
  // Қазақша
  "ақш":            "сша",
  "ұлыбритания":    "великобритания",
  "ресей":          "россия",
  "қазақстан":      "казахстан",
  "әзербайжан":     "азербайджан",
};

/* ── Нормализация строки для поиска ── */
function normalize(str) {
  return str.toLowerCase().replace(/[''`]/g, "'").trim();
}

/* ── Проверка соответствия артиста фильтрам ── */
/* ── Проверка соответствия артиста фильтрам ── */
function matchesFilters(data, genreVal, countryVal, yearVal) {
  
  // === ФИЛЬТР ПО ЖАНРУ ===
  if (genreVal && genreVal !== "Все жанры" && genreVal !== "All Genres" &&
      genreVal !== "Tüm Türler" && genreVal !== "Барлық жанрлар") {
    
    const badgeLow = normalize(data.badge);
    const genreLow = normalize(genreVal);

    if (!badgeLow.includes(genreLow)) {
      // Мягкое сопоставление жанров
      const genreMap = {
        "classic r&b":       ["classic", "classical", "r&b"],
        "neo soul":          ["neo soul", "neo-soul"],
        "alt r&b":           ["alt r&b", "alt r&amp;b", "alternative"],
        "contemporary r&b":  ["contemporary"],
        "new jack swing":    ["new jack"],
        "trap soul":         ["trap soul"],
        "pop r&b":           ["pop r&b", "pop / r&b"],
      };

      const key = normalize(genreVal);
      const aliases = genreMap[key] || [key];
      const found = aliases.some(a => badgeLow.includes(a) || normalize(data.meta).includes(a));
      
      if (!found) return false;
    }
  }

  // === ФИЛЬТР ПО СТРАНЕ ===
  if (countryVal) {
    const filterKey = normalize(countryVal);
    const artistKey = normalize(data.country);
    // Прямое совпадение
    if (filterKey !== artistKey) {
      // Нормализуем через карту обе стороны
      const canonFilter = COUNTRY_KEY_MAP[filterKey] || filterKey;
      const canonArtist = COUNTRY_KEY_MAP[artistKey] || artistKey;
      if (canonFilter !== canonArtist) return false;
    }
  }

  // === ФИЛЬТР ПО ГОДУ (ИСПРАВЛЕННЫЙ БЛОК) ===
  if (yearVal && yearVal !== "Все годы" && yearVal !== "All Years" &&
      yearVal !== "Tüm Yıllar" && yearVal !== "Барлық жылдар" && data.startYear) {
    
    if (yearVal.includes("–") || yearVal.includes("-")) {
      const parts = yearVal.split(/[–-]/).map(s => parseInt(s.trim()));
      const from = parts[0];
      const to   = parts[1] || 9999;   // если до настоящего времени

      if (data.startYear < from || data.startYear > to) {
        return false;
      }
    } 
    else if (yearVal.includes("До") || yearVal.includes("Before") || 
             yearVal.includes("Öncesi") || yearVal.includes("дейін")) {
      if (data.startYear >= 1990) return false;
    }
  }

  return true;
}

/* ── Применить поиск + фильтры с учётом активной вкладки ── */
/* ── Применить поиск + фильтры с учётом активной вкладки ── */
/* ── Применить поиск + фильтры с учётом активной вкладки ── */
/* ── Применить поиск + фильтры с учётом активной вкладки ── */
/* ── Применить поиск + фильтры с учётом активной вкладки ── */
function applySearchAndFilters() {
  const searchInput = document.querySelector(".search-main__input");
  const selects     = document.querySelectorAll(".filter-select");
  
  const query       = normalize(searchInput?.value || "");
  const genreVal    = selects[0]?.value || "";
  const countryVal  = selects[1]?.value || "";
  const yearVal     = selects[2]?.value || "";

  const allData = getArtistCardsData();
  let visible = 0;

  // Определяем активную вкладку
  let activeTab = "world";
  const activeBtn = document.querySelector(".artists__tab--active");
  if (activeBtn) {
    const onclick = activeBtn.getAttribute("onclick") || "";
    if (onclick.includes("sng")) activeTab = "sng";
  }

  allData.forEach(data => {
    const isInCurrentTab = (activeTab === "world" && data.tab === "tab-world") ||
                           (activeTab === "sng" && data.tab === "tab-sng");

    if (!isInCurrentTab) {
      data.card.style.display = "none";
      return;
    }

    const matchSearch = !query ||
      normalize(data.name).includes(query) ||
      normalize(data.badge).includes(query) ||
      normalize(data.meta).includes(query);

    const matchFilter = matchesFilters(data, genreVal, countryVal, yearVal);

    if (matchSearch && matchFilter) {
      data.card.style.display = "";
      visible++;
    } else {
      data.card.style.display = "none";
    }
  });

  // === МНОГОЯЗЫЧНОЕ СООБЩЕНИЕ "НИЧЕГО НЕ НАЙДЕНО" С ПЛАВНОЙ АНИМАЦИЕЙ ===
  let noResults = document.getElementById("searchNoResults");
  
  if (!noResults) {
    noResults = document.createElement("p");
    noResults.id = "searchNoResults";
    noResults.style.cssText = `
      color: var(--text-muted); 
      text-align: center; 
      padding: 50px 20px; 
      grid-column: 1/-1; 
      font-size: 0.97rem;
      line-height: 1.6;
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
      display: none;
      background: rgba(255,255,255,0.03);
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.08);
    `;
    document.querySelector(".artists .container")?.appendChild(noResults);
  }

  // Обновляем текст сообщения
  const currentLang = window.currentLang || "ru";

  const noResultsTexts = {
    ru: "Ничего не найдено. Попробуй изменить запрос или фильтры.",
    en: "Nothing found. Try changing the query or filters.",
    tr: "Hiçbir şey bulunamadı. Sorguyu veya filtreleri değiştirmeyi deneyin.",
    kz: "Ештеңе табылмады. Сұрауды немесе сүзгілерді өзгертіп көріңіз."
  };

  noResults.textContent = noResultsTexts[currentLang] || noResultsTexts.ru;

  // Анимация появления / исчезновения
  if (visible === 0) {
    noResults.style.display = "block";
    // Небольшая задержка, чтобы transition сработал
    setTimeout(() => {
      noResults.style.opacity = "1";
      noResults.style.transform = "translateY(0)";
    }, 10);
  } else {
    noResults.style.opacity = "0";
    noResults.style.transform = "translateY(20px)";
    
    // Убираем элемент после завершения анимации
    setTimeout(() => {
      if (noResults.style.opacity === "0") {
        noResults.style.display = "none";
      }
    }, 450);
  }
}

/* ── Автодополнение (dropdown) ── */
function buildSuggestions(query) {
  if (!query || query.length < 1) return [];

  const q = normalize(query);
  const results = [];
  const seen = new Set();

  // Ищем по артистам из DOM
  getArtistCardsData().forEach(data => {
    if (normalize(data.name).includes(q) && !seen.has(data.name)) {
      seen.add(data.name);
      results.push({ type: "artist", label: data.name, sub: data.badge, link: data.link });
    }
  });

  // Ищем по трекам
  tracks.forEach(t => {
    if (normalize(t.title).includes(q) && !seen.has(t.title)) {
      seen.add(t.title);
      results.push({ type: "track", label: t.title, sub: t.artist + " · " + t.genre, link: t.page });
    }
    if (normalize(t.artist).includes(q) && !seen.has(t.artist)) {
      seen.add(t.artist);
      results.push({ type: "artist", label: t.artist, sub: t.genre, link: t.page });
    }
  });

  // Ищем по ARTISTS из artists-data.js (если доступен)
  if (typeof ARTISTS !== "undefined") {
    Object.values(ARTISTS).forEach(a => {
      if (normalize(a.name).includes(q) && !seen.has(a.name)) {
        seen.add(a.name);
        results.push({ type: "artist", label: a.name, sub: a.genre + " · " + a.country, link: "artist.html?id=" + a.id });
      }
      if (a.songs) {
        a.songs.forEach(s => {
          if (normalize(s.title).includes(q) && !seen.has(s.title + a.name)) {
            seen.add(s.title + a.name);
            results.push({ type: "track", label: s.title, sub: a.name + " · " + a.genre, link: "artist.html?id=" + a.id });
          }
        });
      }
    });
  }

  return results.slice(0, 7);
}

const DROPDOWN_STYLE = `
  position: absolute;
  top: calc(100% + 6px);
  left: 0; right: 0;
  background: var(--bg-card, #1a1a2e);
  border: 1px solid var(--border, rgba(255,255,255,0.1));
  border-radius: 12px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.5);
  overflow: hidden;
  z-index: 1100;
  max-height: 360px;
  overflow-y: auto;
`;

function getOrCreateDropdown(id, parentEl) {
  let dropdown = document.getElementById(id);
  if (!dropdown) {
    dropdown = document.createElement("div");
    dropdown.id = id;
    dropdown.style.cssText = DROPDOWN_STYLE;
    parentEl.style.position = "relative";
    parentEl.appendChild(dropdown);
  }
  return dropdown;
}

function hideDropdown(id) {
  const dropdown = document.getElementById(id);
  if (dropdown) dropdown.style.display = "none";
}

function showDropdown(inputEl, suggestions, dropdownId) {
  const parent = inputEl.closest(".search-main") || inputEl.closest(".header__search");
  if (!parent) return;
  const dropdown = getOrCreateDropdown(dropdownId, parent);

  if (suggestions.length === 0) {
    dropdown.style.display = "none";
    return;
  }

  dropdown.innerHTML = suggestions.map((s, i) => `
    <a href="${s.link}" class="search-dropdown-item" data-idx="${i}"
       style="display:flex;align-items:center;gap:12px;padding:11px 16px;text-decoration:none;
              border-bottom:1px solid var(--border,rgba(255,255,255,0.06));
              transition:background .15s;cursor:pointer;"
       onmouseenter="this.style.background='rgba(124,58,237,0.18)'"
       onmouseleave="this.style.background=''">
      <span style="font-size:1.1rem;opacity:.6">${s.type === "track" ? "🎵" : "👤"}</span>
      <span style="flex:1;min-width:0;">
        <span style="display:block;color:var(--text,#fff);font-size:.9rem;font-weight:600;
                     white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.label}</span>
        <span style="display:block;color:var(--text-muted,#888);font-size:.75rem;
                     white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${s.sub}</span>
      </span>
      <span style="font-size:.7rem;color:var(--accent,#7c3aed);font-weight:700;text-transform:uppercase;
                   letter-spacing:.06em;">${s.type === "track" ? "трек" : "артист"}</span>
    </a>
  `).join("") + `
    <div style="padding:8px 16px;text-align:center;font-size:.75rem;color:var(--text-muted,#888);">
      Нажми Enter для поиска всех результатов
    </div>
  `;

  dropdown.style.display = "block";
}

function hideAllDropdowns() {
  hideDropdown("searchDropdownMain");
  hideDropdown("searchDropdownHeader");
}

/* ── Инициализация поиска ── */
function initSearch() {
  const mainInput    = document.querySelector(".search-main__input");
  const headerInput  = document.querySelector(".header__search-input");
  const searchBtn    = document.querySelector(".search-block .btn--primary");
  const resetBtn     = document.querySelector(".filter-reset");
  const filterSelects = document.querySelectorAll(".filter-select");

  /* Главное поле поиска — автодополнение */
  if (mainInput) {
    mainInput.addEventListener("input", () => {
      const q = mainInput.value.trim();
      if (q.length > 0) {
        showDropdown(mainInput, buildSuggestions(q), "searchDropdownMain");
      } else {
        hideDropdown("searchDropdownMain");
        applySearchAndFilters();
      }
    });

    mainInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        hideDropdown("searchDropdownMain");
        applySearchAndFilters();
        document.getElementById("artists")?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "Escape") hideDropdown("searchDropdownMain");
    });

    mainInput.addEventListener("focus", () => {
      if (mainInput.value.trim().length > 0) {
        showDropdown(mainInput, buildSuggestions(mainInput.value.trim()), "searchDropdownMain");
      }
    });
  }

  /* Кнопка «Поиск» */
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      hideDropdown("searchDropdownMain");
      applySearchAndFilters();
      document.getElementById("artists")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* Поиск в хедере — полностью независимый, только dropdown с переходом */
  if (headerInput) {
    headerInput.addEventListener("input", () => {
      const q = headerInput.value.trim();
      if (q.length > 0) {
        showDropdown(headerInput, buildSuggestions(q), "searchDropdownHeader");
      } else {
        hideDropdown("searchDropdownHeader");
      }
    });

    headerInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        hideDropdown("searchDropdownHeader");
        // При Enter в хедере — скролл к артистам и показываем первый результат
        const q = headerInput.value.trim();
        if (mainInput) mainInput.value = ""; // НЕ синхронизируем
        if (q) {
          document.getElementById("artists")?.scrollIntoView({ behavior: "smooth" });
        }
      }
      if (e.key === "Escape") {
        hideDropdown("searchDropdownHeader");
        headerInput.value = "";
      }
    });

    headerInput.addEventListener("focus", () => {
      if (headerInput.value.trim().length > 0) {
        showDropdown(headerInput, buildSuggestions(headerInput.value.trim()), "searchDropdownHeader");
      }
    });
  }

  /* Фильтры — мгновенная фильтрация при изменении */
  filterSelects.forEach(sel => {
    sel.addEventListener("change", applySearchAndFilters);
  });

  /* Кнопка «Сбросить» */
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (mainInput) mainInput.value = "";
      if (headerInput) headerInput.value = "";
      filterSelects.forEach(sel => { sel.selectedIndex = 0; });
      hideAllDropdowns();
      applySearchAndFilters();
    });
  }

  /* Клик вне dropdown — скрыть */
  document.addEventListener("click", e => {
    const mainDD   = document.getElementById("searchDropdownMain");
    const headerDD = document.getElementById("searchDropdownHeader");
    if (mainDD && !mainDD.contains(e.target) && e.target !== mainInput) {
      hideDropdown("searchDropdownMain");
    }
    if (headerDD && !headerDD.contains(e.target) && e.target !== headerInput) {
      hideDropdown("searchDropdownHeader");
    }
  });
}

/* ============================================================
   YOUTUBE IFRAME API
   ============================================================ */
let ytPlayer      = null;
let ytReady       = false;
let ytDuration    = 0;
let timelineTimer = null;

window.onYouTubeIframeAPIReady = function () {
  ytReady = true;
  ytPlayer = new YT.Player("yt-player", {
    height: "1", width: "1",
    playerVars: {
      autoplay: 0, controls: 0, disablekb: 1, fs: 0,
      iv_load_policy: 3, modestbranding: 1, rel: 0,
      showinfo: 0, origin: window.location.origin,
    },
    events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
  });
};

function onPlayerReady() {
  try { ytPlayer.setVolume(_linearToLog(window._vol)); if (window._muted) ytPlayer.mute(); } catch(e) {}
  if (typeof ppResume === "function") ppResume();
}

function onPlayerStateChange(event) {
  const S = YT.PlayerState;
  if (event.data === S.PLAYING) {
    setPlayIcon(true);
    startTimelineUpdate();
    ytDuration = ytPlayer.getDuration();
    document.getElementById("barTotalTime").textContent = fmt(ytDuration);
  } else if (event.data === S.PAUSED) {
    setPlayIcon(false);
    stopTimelineUpdate();
  } else if (event.data === S.ENDED) {
    setPlayIcon(false);
    stopTimelineUpdate();
    resetTimeline();
  }
}

function startTimelineUpdate() {
  stopTimelineUpdate();
  timelineTimer = setInterval(updateTimeline, 500);
}
function stopTimelineUpdate() { clearInterval(timelineTimer); timelineTimer = null; }

function updateTimeline() {
  if (!ytPlayer || !ytPlayer.getCurrentTime) return;
  const cur = ytPlayer.getCurrentTime() || 0;
  const dur = ytDuration || ytPlayer.getDuration() || 0;
  if (!dur) return;
  const pct = (cur / dur) * 100;
  document.getElementById("barProgressFill").style.width = pct + "%";
  document.getElementById("barProgressThumb").style.left = pct + "%";
  document.getElementById("barCurrentTime").textContent  = fmt(cur);
  document.getElementById("barTotalTime").textContent    = fmt(dur);
}

function fmt(s) {
  if (!s || isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

function resetTimeline() {
  document.getElementById("barProgressFill").style.width  = "0%";
  document.getElementById("barProgressThumb").style.left  = "0%";
  document.getElementById("barCurrentTime").textContent   = "0:00";
  document.getElementById("barTotalTime").textContent     = "0:00";
}

/* ============================================================
   PLAYER
   ============================================================ */
function openPlayer(idx) {
  currentTrack = idx;
  const t = tracks[idx];

  /* Обложка в модале */
  const coverImg  = document.getElementById("barPlayerImg");
  const coverBg   = document.getElementById("miniCoverBg");
  const thumbImg  = document.getElementById("miniThumbImg");
  const thumbWrap = document.getElementById("barPlayerThumb");

  const imgSrc = t.cover || `https://img.youtube.com/vi/${t.ytId}/hqdefault.jpg`;
  if (coverImg) { coverImg.src = imgSrc; coverImg.style.display = ""; }
  if (coverBg)  { coverBg.style.background = t.bg; }
  if (thumbImg) { thumbImg.src = imgSrc; }
  if (thumbWrap) thumbWrap.style.background = t.bg;

  const _opf = parseFeatGlobal(t.title);
  document.getElementById("barPlayerTitle").textContent = _opf.cleanTitle;
  _applyPlayerArtist(t.artist, t.page || "#", _opf.featHtml);

  if (ytReady && ytPlayer && ytPlayer.loadVideoById) {
    ytDuration = 0;
    resetTimeline();
    ytPlayer.loadVideoById({ videoId: t.ytId, startSeconds: 0 });
  } else {
    setTimeout(() => openPlayer(idx), 500);
    return;
  }

  updateHeartIcons();
  /* Открыть мини-плеер */
  document.getElementById("barPlayer").classList.add("active");
  document.getElementById("playerOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function togglePlay() {
  if (!ytReady || !ytPlayer) return;
  ytPlayer.getPlayerState() === YT.PlayerState.PLAYING
    ? ytPlayer.pauseVideo()
    : ytPlayer.playVideo();
}

function closePlayer() {
  if (ytPlayer) { try { ytPlayer.stopVideo(); } catch(e){} }
  document.getElementById("barPlayer").classList.remove("active");
  document.getElementById("playerOverlay").classList.remove("active");
  document.body.style.overflow = "";
  resetTimeline();
}

function setPlayIcon(playing) {
  document.getElementById("barIconPlay").style.display   = playing ? "none" : "";
  document.getElementById("barIconPause").style.display  = playing ? "" : "none";
  document.getElementById("barPlayBtn").classList.toggle("playing", playing);
}

function skipBack() {
  if (!ytReady || !ytPlayer) return;
  ytPlayer.seekTo(Math.max(0, ytPlayer.getCurrentTime() - 15), true);
}
function skipForward() {
  if (!ytReady || !ytPlayer) return;
  const d = ytPlayer.getDuration();
  if (d) ytPlayer.seekTo(Math.min(d, ytPlayer.getCurrentTime() + 15), true);
}

const barProgressBar = document.getElementById("barProgressBar");
let barSeeking = false;

function applyBarSeek(e) {
  const rect = barProgressBar.getBoundingClientRect();
  const pct  = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
  document.getElementById("barProgressFill").style.width = (pct * 100) + "%";
  document.getElementById("barProgressThumb").style.left = (pct * 100) + "%";
  if (ytReady && ytPlayer && ytPlayer.getDuration) {
    const d = ytPlayer.getDuration();
    if (d) ytPlayer.seekTo(pct * d, true);
  }
}

barProgressBar.addEventListener("mousedown",  e => { barSeeking = true; applyBarSeek(e); });
document.addEventListener("mousemove",  e => { if (barSeeking) applyBarSeek(e); });
document.addEventListener("mouseup",    e => { if (barSeeking) { applyBarSeek(e); barSeeking = false; } });
barProgressBar.addEventListener("touchstart", e => { barSeeking = true; applyBarSeek(e.touches[0]); }, { passive: true });
document.addEventListener("touchmove",  e => { if (barSeeking) applyBarSeek(e.touches[0]); }, { passive: true });
document.addEventListener("touchend",   () => { barSeeking = false; });

/* ============================================================
   LIKES
   ============================================================ */
function toggleLike(btn, idx) {
  liked.has(idx) ? removeLike(idx) : addLike(idx);
  syncCardBtn(idx);
  if (currentTrack === idx) updateHeartIcons();
  syncPlaylistSection();
}

function toggleLikePlayer() {
  liked.has(currentTrack) ? removeLike(currentTrack) : addLike(currentTrack);
  updateHeartIcons();
  syncCardBtn(currentTrack);
  syncPlaylistSection();
}

function addLike(idx) {
  liked.add(idx);
  showToast("♥ Добавлено в «Мне нравится»");
  if (typeof RBAuth !== "undefined") {
    const t = tracks[idx];
    if (RBAuth.isLoggedIn()) {
      const _pf = parseFeatGlobal(t.title);
      RBAuth.addLike({ key: "index__" + idx, title: t.title, cleanTitle: _pf.cleanTitle, featHtml: _pf.featHtml, artist: t.artist, ytId: t.ytId, artistPage: t.page || "#" });
    } else {
      RBAuth.showLoginHint();
    }
  }
}
function removeLike(idx) {
  liked.delete(idx);
  if (typeof RBAuth !== "undefined") RBAuth.removeLike("index__" + idx);
}

function syncCardBtn(idx) {
  const btn = document.querySelector(`.album-card .like-btn[data-idx="${idx}"]`);
  if (!btn) return;
  btn.classList.toggle("liked", liked.has(idx));
  btn.textContent = liked.has(idx) ? "♥" : "♡";
}

function updateHeartIcons() {
  const isLiked = liked.has(currentTrack);
  document.getElementById("barHeartOutline").style.display = isLiked ? "none" : "";
  document.getElementById("barHeartFilled").style.display  = isLiked ? "" : "none";
  document.getElementById("barHeartBtn").classList.toggle("liked", isLiked);
}

function showToast(msg) {
  const toast = document.getElementById("playerToast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("visible");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function syncPlaylistSection() {
  const list  = document.getElementById("playlistList");
  const empty = document.getElementById("playlistEmpty");
  const count = document.getElementById("likedCount");
  if (!list) return;

  list.innerHTML = "";

  const _seen = new Set();

  /* Треки с главной страницы */
  liked.forEach(idx => {
    const t = tracks[idx];
    _seen.add(t.ytId);
    const thumb = `https://img.youtube.com/vi/${t.ytId}/mqdefault.jpg`;
    const pf = parseFeatGlobal(t.title);
    const li = document.createElement("li");
    li.className = "playlist-item";
    li.innerHTML = `
      <div class="playlist-item__cover" style="background:${t.bg}">
        <img src="${thumb}" alt="" onerror="this.style.display='none'" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"/>
      </div>
      <div class="playlist-item__info">
        <strong>${pf.cleanTitle}</strong>
        <span>
          <a href="${t.page||'#'}" class="playlist-artist-link">${t.artist}</a>
          ${pf.featHtml ? `<span class="playlist-feat"> · ${pf.featHtml}</span>` : ""}
        </span>
      </div>
      <button class="btn btn--ghost btn--sm" onclick="openPlayer(${idx})">▶</button>
      <button class="like-btn liked"
        onclick="removeLike(${idx}); syncCardBtn(${idx}); syncPlaylistSection(); updateHeartIcons();">♥</button>
    `;
    list.appendChild(li);
  });

  /* Треки со страниц артистов */
  if (typeof RBAuth !== "undefined" && RBAuth.isLoggedIn()) {
    RBAuth.getLiked().forEach(item => {
      if (/^index__/.test(item.key)) return;
      if (_seen.has(item.ytId)) return;
      _seen.add(item.ytId);
      const tIdx = tracks.findIndex(t => t.ytId === item.ytId);
      const thumb = `https://img.youtube.com/vi/${item.ytId}/mqdefault.jpg`;
      const pf = parseFeatGlobal(item.title);
      const li = document.createElement("li");
      li.className = "playlist-item";
      li.innerHTML = `
        <div class="playlist-item__cover" style="background:linear-gradient(135deg,#1a0030,#7c3aed)">
          <img src="${thumb}" alt="" onerror="this.style.display='none'" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;"/>
        </div>
        <div class="playlist-item__info">
          <strong>${pf.cleanTitle}</strong>
          <span>
            <a href="${item.artistPage||'#'}" class="playlist-artist-link">${item.artist}</a>
            ${pf.featHtml ? `<span class="playlist-feat"> · ${pf.featHtml}</span>` : ""}
          </span>
        </div>
        <button class="btn btn--ghost btn--sm" onclick="openPlayerExternal('${item.ytId}','${item.title.replace(/'/g,"\'")}','${item.artist.replace(/'/g,"\'")}','${item.artistPage||'#'}')">▶</button>
        <button class="like-btn liked" onclick="_removeArtistLike('${item.key}',this,${tIdx})">♥</button>
      `;
      list.appendChild(li);
    });
  }

  const total = list.children.length;
  empty.style.display = total === 0 ? "flex" : "none";
  count.textContent   = `${total} трек${total===1?"":total>=2&&total<=4?"а":"ов"}`;
}

function openPlayerExternal(ytId, title, artist, artistPage) {
  const el = id => document.getElementById(id);
  if (el("barPlayerImg"))   { el("barPlayerImg").src = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`; el("barPlayerImg").style.display=""; }
  if (el("miniCoverBg"))    el("miniCoverBg").style.background = "linear-gradient(135deg,#7c3aed,#e91e8c)";
  if (el("miniThumbImg"))   el("miniThumbImg").src = `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`;
  if (el("barPlayerThumb")) el("barPlayerThumb").style.background = "linear-gradient(135deg,#7c3aed,#e91e8c)";
  const _epf = parseFeatGlobal(title);
  el("barPlayerTitle").textContent = _epf.cleanTitle;
  _applyPlayerArtist(artist, artistPage || "#", _epf.featHtml);
  el("barHeartOutline").style.display = "none";
  el("barHeartFilled").style.display  = "";
  el("barHeartBtn").classList.add("liked");
  if (ytReady && ytPlayer && ytPlayer.loadVideoById) {
    ytDuration = 0; resetTimeline();
    ytPlayer.loadVideoById({ videoId: ytId, startSeconds: 0 });
  } else { setTimeout(() => openPlayerExternal(ytId, title, artist, artistPage), 500); return; }
  el("barPlayer").classList.add("active");
  el("playerOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function _removeArtistLike(key, btn, tIdx) {
  if (typeof RBAuth !== "undefined") RBAuth.removeLike(key);
  /* Снять лайк с карточки новинки если трек там тоже есть */
  if (tIdx !== undefined && tIdx >= 0) {
    liked.delete(tIdx);
    syncCardBtn(tIdx);
    updateHeartIcons();
  }
  btn.closest(".playlist-item")?.remove();
  const list = document.getElementById("playlistList");
  const total = list ? list.children.length : 0;
  const empty = document.getElementById("playlistEmpty");
  const count = document.getElementById("likedCount");
  if (empty) empty.style.display = total === 0 ? "flex" : "none";
  if (count) count.textContent = `${total} трек${total===1?"":total>=2&&total<=4?"а":"ов"}`;
}

/* ============================================================
   ARTIST TABS
   ============================================================ */
/* ============================================================
   ARTIST TABS — с сохранением фильтров
   ============================================================ */
function switchTab(tab, btn) {
  // Снимаем активный класс со всех кнопок
  document.querySelectorAll(".artists__tab").forEach(b => b.classList.remove("artists__tab--active"));
  btn.classList.add("artists__tab--active");

  // Показываем нужный грид
  document.getElementById("tab-world").classList.toggle("artists__grid--hidden", tab !== "world");
  document.getElementById("tab-sng").classList.toggle("artists__grid--hidden",   tab !== "sng");

  // ПРИМЕНЯЕМ ТЕКУЩИЕ ФИЛЬТРЫ к новой вкладке
  applySearchAndFilters();
  setTimeout(() => {
    applySearchAndFilters();
  }, 30);
}

/* ============================================================
   UI — HEADER / BURGER / LANG
   ============================================================ */
window.addEventListener("scroll", () => {
  document.getElementById("header").classList.toggle("scrolled", window.scrollY > 60);
});

document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

/* lang buttons handled by i18n.js */

/* ============================================================
   SCROLL-REVEAL
   ============================================================ */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("in-view");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".artist-card, .album-card, .learn-card, .stat")
        .forEach(el => observer.observe(el));

/* ============================================================
   i18n
   ============================================================ */

/* Сброс фильтров при смене языка */

// ====================== МНОГОЯЗЫЧНАЯ ПОДДЕРЖКА ======================


/* ── Запуск поиска после загрузки DOM ── */
document.addEventListener("DOMContentLoaded", initSearch);
// На случай если DOM уже готов
if (document.readyState !== "loading") initSearch();


/* ── Хук i18n.js при смене языка ── */
function onLangChanged(lang, dict) {
  /* Обновляем window.currentLang для applySearchAndFilters */
  window.currentLang = lang;
  /* Обновляем плейлист (счётчик треков) */
  syncPlaylistSection();
  /* Переприменяем фильтры — страна/жанр/год должны работать на любом языке */
  if (typeof applySearchAndFilters === "function") applySearchAndFilters();
}

/* ── Восстановить лайки из RBAuth при загрузке страницы ── */
function _rbaRestoreLikes() {
  if (typeof RBAuth === "undefined" || !RBAuth.isLoggedIn()) return;
  RBAuth.getLiked().forEach(item => {
    const m = item.key.match(/^index__(\d+)$/);
    if (!m) return;
    const idx = parseInt(m[1]);
    if (idx >= 0 && idx < tracks.length) {
      liked.add(idx);
      syncCardBtn(idx);
    }
  });
  syncPlaylistSection();
}

document.addEventListener("DOMContentLoaded", _rbaRestoreLikes);
if (document.readyState !== "loading") _rbaRestoreLikes();
