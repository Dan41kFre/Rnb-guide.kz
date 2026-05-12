/* ============================================================
   artist.js — логика страницы артиста
   ============================================================ */

/* ── Scroll-reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in-view"); });
}, { threshold: 0.1 });

/* ── Артист из URL ───────────────────────────────────────── */
const params   = new URLSearchParams(window.location.search);
const artistId = params.get("id");
const artist   = ARTISTS[artistId];

/* ── Карта «имя в feat.» → id артиста (модульный уровень) ── */
const FEAT_ID_MAP = {
  "the weeknd":        "theweeknd",
  "drake":             "drake",
  "mayot":             "mayot",
  "бьянка":            "bianca",
  "bianca":            "bianca",
  "partynextdoor":     "partynextdoor",
  "bryson tiller":     "brysontiller",
  "chris brown":       "chrisbrown",
  "og buda":           "ogbuda",
  "yungway":           "yungway",
  "brent faiyaz":      "brentfaiyaz",
  "frank ocean":       "frankocean",
  "6lack":             "6lack",
  "sza":               "sza",
  "justin bieber":     "justinbieber",
  "michael jackson":   "mj",
  "the limba":         "thelimba",
  "jony":              "jony",
  "m'dee":             "mdee",
  "gone.fludd":        "gonefludd",
  "mot":               "mot",
  "мот":               "mot",
};

/* ── Глобальный парсер feat. (совместим со script.js) ── */
if (typeof parseFeatGlobal === "undefined") {
  window.parseFeatGlobal = function(title) {
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
  };
}

/* ── Состояние плеера ────────────────────────────────────── */
let ytPlayer    = null;

/* ── Вспомогательная функция для feat. в плеере ── */
function _applyPlayerArtist(artistName, artistHref, featHtml) {
  const el = document.getElementById("barPlayerArtist");
  if (!el) return;
  if (featHtml) {
    el.innerHTML = `<a href="${artistHref}" class="mini-player__artist-main">${artistName}</a><span class="mini-player__feat"> · ${featHtml}</span>`;
  } else {
    el.innerHTML = `<a href="${artistHref}" class="mini-player__artist-main">${artistName}</a>`;
  }
}

let ytReady     = false;
let ytDuration  = 0;
let timer       = null;
let currentSong = 0;
const liked     = new Set();

/* ── Очередь на запуск (если нажали до готовности API) ───── */
let _pendingVideoId = null;

/* ══════════════════════════════════════════════════════════
   YouTube IFrame API
   Колбэк должен быть объявлен ДО загрузки скрипта yt API,
   поэтому мы перехватываем его здесь и сохраняем прежний
   (если он уже был назначен player-persist.js).
══════════════════════════════════════════════════════════ */
const _prevYTReady = window.onYouTubeIframeAPIReady;

window.onYouTubeIframeAPIReady = function () {
  /* Вызываем предыдущий обработчик (player-persist) если был */
  if (typeof _prevYTReady === "function") _prevYTReady();

  ytPlayer = new YT.Player("yt-player", {
    height: "1",
    width: "1",
    playerVars: {
      autoplay:        0,
      controls:        0,
      disablekb:       1,
      fs:              0,
      iv_load_policy:  3,
      modestbranding:  1,
      rel:             0,
      playsinline:     1,
    },
    events: {
      onReady: function () {
        ytReady = true;
        try { ytPlayer.setVolume(_linearToLog(window._vol)); if (window._muted) ytPlayer.mute(); } catch(e) {}
        console.log("[YT] Player ready");
        if (_pendingVideoId) {
          ytPlayer.loadVideoById({ videoId: _pendingVideoId, startSeconds: 0 });
          _pendingVideoId = null;
        }
        if (typeof ppResume === "function") ppResume();
      },
      onStateChange: onStateChange,
      onError: function (e) {
        console.warn("[YT] Error code:", e.data);
      }
    },
  });
};

/* ── Если YouTube API уже загрузилась до этого скрипта ────── */
if (window.YT && window.YT.Player) {
  window.onYouTubeIframeAPIReady();
}

/* ══════════════════════════════════════════════════════════ */
function onStateChange(e) {
  const S = YT.PlayerState;
  if (e.data === S.PLAYING) {
    setPlayIcon(true);
    startTimer();
    ytDuration = ytPlayer.getDuration();
    document.getElementById("barTotalTime").textContent = fmt(ytDuration);
  } else if (e.data === S.PAUSED) {
    setPlayIcon(false);
    stopTimer();
  } else if (e.data === S.ENDED) {
    setPlayIcon(false);
    stopTimer();
    resetTimeline();
  }
}

function startTimer() {
  stopTimer();
  timer = setInterval(() => {
    if (!ytPlayer || !ytPlayer.getCurrentTime) return;
    const cur = ytPlayer.getCurrentTime() || 0;
    const dur = ytDuration || ytPlayer.getDuration() || 0;
    if (!dur) return;
    const pct = (cur / dur) * 100;
    document.getElementById("barProgressFill").style.width  = pct + "%";
    document.getElementById("barProgressThumb").style.left  = pct + "%";
    document.getElementById("barCurrentTime").textContent   = fmt(cur);
    document.getElementById("barTotalTime").textContent     = fmt(dur);
  }, 500);
}

function stopTimer()  { clearInterval(timer); timer = null; }

function resetTimeline() {
  document.getElementById("barProgressFill").style.width = "0%";
  document.getElementById("barProgressThumb").style.left = "0%";
  document.getElementById("barCurrentTime").textContent  = "0:00";
  document.getElementById("barTotalTime").textContent    = "0:00";
}

function fmt(s) {
  if (!s || isNaN(s)) return "0:00";
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

/* ══════════════════════════════════════════════════════════
   Воспроизведение трека
══════════════════════════════════════════════════════════ */
function playSong(idx) {
  if (!artist) return;
  currentSong = idx;
  const song = artist.songs[idx];

  /* Заполнить UI плеера */
  const imgSrc   = `https://img.youtube.com/vi/${song.ytId}/hqdefault.jpg`;
  const thumbSrc = `https://img.youtube.com/vi/${song.ytId}/mqdefault.jpg`;

  const el = id => document.getElementById(id);
  if (el("barPlayerImg"))   { el("barPlayerImg").src = imgSrc; el("barPlayerImg").style.display = ""; }
  if (el("miniCoverBg"))    el("miniCoverBg").style.background = artist.bg;
  if (el("miniThumbImg"))   el("miniThumbImg").src = thumbSrc;
  if (el("barPlayerThumb")) el("barPlayerThumb").style.background = artist.bg;

  /* Чистый заголовок без feat. + ссылки на фит-артистов */
  const _pf = (typeof parseFeatGlobal === "function")
    ? parseFeatGlobal(song.title)
    : { cleanTitle: song.title, featHtml: "" };
  el("barPlayerTitle").textContent = _pf.cleanTitle;
  _applyPlayerArtist(artist.name, `artist.html?id=${artist.id}`, _pf.featHtml);

  /* Показать плеер немедленно */
  openPlayerUI();

  /* Запустить видео */
  ytDuration = 0;
  resetTimeline();

  if (ytReady && ytPlayer && ytPlayer.loadVideoById) {
    ytPlayer.loadVideoById({ videoId: song.ytId, startSeconds: 0 });
  } else {
    /* Сохраняем ID — загрузим в onReady */
    _pendingVideoId = song.ytId;
    console.log("[YT] Player not ready yet, queued:", song.ytId);
  }

  window._pp_ytId = song.ytId;
  updateHearts();
  if (typeof ppStartAutoSave === "function") ppStartAutoSave();
}

function openPlayerUI() {
  document.getElementById("barPlayer").classList.add("active");
  const overlay = document.getElementById("playerOverlay");
  if (overlay) overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ── Play / Pause ── */
function togglePlay() {
  if (!ytReady || !ytPlayer) return;
  try {
    ytPlayer.getPlayerState() === YT.PlayerState.PLAYING
      ? ytPlayer.pauseVideo()
      : ytPlayer.playVideo();
  } catch(e) { console.warn("[YT] togglePlay:", e); }
}

/* ── Закрыть плеер ── */
function closePlayer() {
  if (ytPlayer) { try { ytPlayer.stopVideo(); } catch(e){} }
  stopTimer();
  document.getElementById("barPlayer").classList.remove("active");
  const overlay = document.getElementById("playerOverlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "";
  window._pp_ytId = null;
  _pendingVideoId = null;
  resetTimeline();
  setPlayIcon(false);
}

function setPlayIcon(playing) {
  document.getElementById("barIconPlay").style.display  = playing ? "none" : "";
  document.getElementById("barIconPause").style.display = playing ? "" : "none";
  document.getElementById("barPlayBtn").classList.toggle("playing", playing);
}

/* ── Skip ±15 ── */
function skipBack()    {
  if (ytPlayer) ytPlayer.seekTo(Math.max(0, ytPlayer.getCurrentTime() - 15), true);
}
function skipForward() {
  if (ytPlayer) { const d = ytPlayer.getDuration(); if (d) ytPlayer.seekTo(Math.min(d, ytPlayer.getCurrentTime() + 15), true); }
}

/* ── Seek по прогресс-бару ── */
const barPB = document.getElementById("barProgressBar");
let bseeking = false;

function applyBSeek(clientX) {
  const r   = barPB.getBoundingClientRect();
  const pct = Math.min(1, Math.max(0, (clientX - r.left) / r.width));
  document.getElementById("barProgressFill").style.width = (pct * 100) + "%";
  document.getElementById("barProgressThumb").style.left = (pct * 100) + "%";
  if (ytPlayer && ytPlayer.getDuration) {
    const d = ytPlayer.getDuration();
    if (d) ytPlayer.seekTo(pct * d, true);
  }
}

barPB.addEventListener("mousedown",    e => { bseeking = true;  applyBSeek(e.clientX); });
document.addEventListener("mousemove", e => { if (bseeking) applyBSeek(e.clientX); });
document.addEventListener("mouseup",   () => { bseeking = false; });
barPB.addEventListener("touchstart",   e => { bseeking = true;  applyBSeek(e.touches[0].clientX); }, { passive: true });
document.addEventListener("touchmove", e => { if (bseeking) applyBSeek(e.touches[0].clientX); },    { passive: true });
document.addEventListener("touchend",  () => { bseeking = false; });

/* ══════════════════════════════════════════════════════════
   ЛАЙКИ
══════════════════════════════════════════════════════════ */
function toggleSongLike(btn, idx) {
  liked.has(idx) ? liked.delete(idx) : liked.add(idx);
  btn.classList.toggle("liked", liked.has(idx));
  btn.textContent = liked.has(idx) ? "♥" : "♡";
  if (typeof RBAuth !== "undefined" && artist) {
    const song = artist.songs[idx];
    const key  = artist.id + "__" + idx;
    if (liked.has(idx)) {
      const _pf = parseFeatGlobal(song.title);
      RBAuth.isLoggedIn()
        ? RBAuth.addLike({ key, title: song.title, cleanTitle: _pf.cleanTitle, featHtml: _pf.featHtml, artist: artist.name, ytId: song.ytId, artistPage: "artist.html?id=" + artist.id })
        : RBAuth.showLoginHint();
    } else {
      RBAuth.removeLike(key);
    }
  }
  if (currentSong === idx) updateHearts();
  syncPlaylist();
}

function toggleLikePlayer() {
  liked.has(currentSong) ? liked.delete(currentSong) : liked.add(currentSong);
  const btn = document.querySelector(`.like-btn[data-idx="${currentSong}"]`);
  if (btn) { btn.classList.toggle("liked", liked.has(currentSong)); btn.textContent = liked.has(currentSong) ? "♥" : "♡"; }
  if (typeof RBAuth !== "undefined" && artist) {
    const song = artist.songs[currentSong];
    const key  = artist.id + "__" + currentSong;
    if (liked.has(currentSong)) {
      const _pf = parseFeatGlobal(song.title);
      RBAuth.isLoggedIn()
        ? RBAuth.addLike({ key, title: song.title, cleanTitle: _pf.cleanTitle, featHtml: _pf.featHtml, artist: artist.name, ytId: song.ytId, artistPage: "artist.html?id=" + artist.id })
        : RBAuth.showLoginHint();
    } else {
      RBAuth.removeLike(key);
    }
  }
  updateHearts();
  syncPlaylist();
}

function updateHearts() {
  const is = liked.has(currentSong);
  document.getElementById("barHeartOutline").style.display = is ? "none" : "";
  document.getElementById("barHeartFilled").style.display  = is ? "" : "none";
  document.getElementById("barHeartBtn").classList.toggle("liked", is);
}

function removeLikeByIdx(idx) {
  liked.delete(idx);
  const btn = document.querySelector(`.like-btn[data-idx="${idx}"]`);
  if (btn) { btn.classList.remove("liked"); btn.textContent = "♡"; }
  if (typeof RBAuth !== "undefined" && artist) RBAuth.removeLike(artist.id + "__" + idx);
  updateHearts();
  syncPlaylist();
}

function syncPlaylist() {
  const list  = document.getElementById("playlistList");
  const empty = document.getElementById("playlistEmpty");
  const count = document.getElementById("likedCount");
  if (!artist || !list) return;
  list.innerHTML = "";
  liked.forEach(idx => {
    const song = artist.songs[idx];
    if (!song) return;
    const pf = parseFeatGlobal(song.title);
    const li = document.createElement("li");
    li.className = "playlist-item";
    li.innerHTML = `
      <div class="playlist-item__cover" style="background:${artist.bg}">
        <img src="https://img.youtube.com/vi/${song.ytId}/mqdefault.jpg"
             alt="${song.title}" onerror="this.style.display='none'"/>
      </div>
      <div class="playlist-item__info">
        <strong>${pf.cleanTitle}</strong>
        <span><a href="artist.html?id=${artist.id}" class="playlist-artist-link">${artist.name}</a>${pf.featHtml ? ` <span class="playlist-feat"> · ${pf.featHtml}</span>` : ""}</span>
      </div>
      <button class="btn btn--ghost btn--sm" onclick="playSong(${idx})">▶</button>
      <button class="like-btn liked" onclick="removeLikeByIdx(${idx})">♥</button>
    `;
    list.appendChild(li);
  });
  empty.style.display = liked.size === 0 ? "flex" : "none";
  count.textContent   = `${liked.size} трек${liked.size===1?"":liked.size>=2&&liked.size<=4?"а":"ов"}`;
}

/* ══════════════════════════════════════════════════════════
   RENDER
══════════════════════════════════════════════════════════ */
function render(a) {
  document.title = `${a.name} — R&B Archive`;
  document.getElementById("apMain").style.display = "block";
  document.getElementById("apHeroBg").style.background = a.bg;

  const photo = document.getElementById("apPhoto");
  photo.src = a.photo; photo.alt = a.name;
  photo.onerror = function () {
    this.style.display = "none";
    const fb = document.getElementById("apPhotoFb");
    fb.textContent = a.name.charAt(0); fb.style.background = a.bg; fb.style.display = "flex";
  };

  document.getElementById("apName").textContent    = a.name;
  document.getElementById("apGenre").textContent   = a.genre;
  document.getElementById("apCountry").textContent = "📍 " + a.country;
  document.getElementById("apYears").textContent   = "🗓 " + a.years;
  document.getElementById("apAwards").textContent  =
    a.awards > 0
      ? `🏆 ${a.awards} наград${a.awards===1?"а":a.awards<=4?"ы":""}`
      : "🎵 Восходящий артист";

  const bioEl = document.getElementById("apBio");
  a.bio.split(/\n\n+/).forEach(para => {
    const p = document.createElement("p"); p.textContent = para.trim();
    if (p.textContent) bioEl.appendChild(p);
  });

  const achList = document.getElementById("apAchList");
  a.achievements.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="ap-dot">◈</span>${item}`;
    achList.appendChild(li);
  });

  const grid = document.getElementById("apSongsGrid");
  a.songs.forEach((song, idx) => {
    const card = document.createElement("article");
    card.className = "album-card"; card.dataset.track = String(idx);
    const thumb = `https://img.youtube.com/vi/${song.ytId}/hqdefault.jpg`;

    /* Парсим feat. */
    const pf = parseFeatGlobal(song.title);
    const displayTitle = pf.cleanTitle;

    /* Строим строку feat. — каждый артист отдельно, со ссылкой если есть в базе */
    const featHtmlCard = pf.featHtml
      ? ` <span class="album-card__feat">${pf.featHtml}</span>`
      : "";

    card.innerHTML = `
      <div class="album-card__cover" style="background:${a.bg}">
        <img src="${thumb}" alt="${song.title}" class="album-card__cover-img"
             onerror="this.style.display='none'"/>
        <button class="album-card__play-btn" onclick="playSong(${idx})" aria-label="Слушать">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </button>
      </div>
      <div class="album-card__body">
        <h3 class="album-card__title">${displayTitle}${featHtmlCard}</h3>
        <a href="artist.html?id=${a.id}" class="album-card__artist-link">${a.name}</a>
        <p class="album-card__year">${song.year} · ${a.genre}</p>
        <div class="album-card__actions">
          <button class="btn btn--primary btn--sm" onclick="playSong(${idx})">▶ Слушать</button>
          <button class="like-btn" data-idx="${idx}" data-rba-key="${a.id}__${idx}"
                  onclick="toggleSongLike(this,${idx})">♡</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
    revealObserver.observe(card);
  });
}

/* ── Init ── */
if (!artist) {
  document.getElementById("apNotFound").style.display = "flex";
  document.title = "Артист не найден — R&B Archive";
} else {
  render(artist);
  if (typeof RBAuth !== "undefined" && RBAuth.isLoggedIn()) {
    RBAuth.getLiked().forEach(item => {
      const m = item.key.match(/^(.+)__(\d+)$/);
      if (!m || m[1] !== artist.id) return;
      const idx = parseInt(m[2]); liked.add(idx);
      const btn = document.querySelector(`.like-btn[data-idx="${idx}"]`);
      if (btn) { btn.classList.add("liked"); btn.textContent = "♥"; }
    });
    if (liked.size > 0) syncPlaylist();
  }
}

/* ── onLangChanged: обновить биографию, достижения, страну, награды ── */
function onLangChanged(lang) {
  if (!artist) return;

  // Получаем данные для нужного языка (фолбэк на русский)
  const i18nData = (typeof ARTIST_I18N !== "undefined" && ARTIST_I18N[artist.id] && ARTIST_I18N[artist.id][lang])
    ? ARTIST_I18N[artist.id][lang]
    : null;

  const bio          = i18nData?.bio          || artist.bio;
  const achievements = i18nData?.achievements || artist.achievements;
  const country      = i18nData?.country      || artist.country;

  // Биография
  const bioEl = document.getElementById("apBio");
  if (bioEl) {
    bioEl.innerHTML = "";
    bio.split(/\n\n+/).forEach(para => {
      const p = document.createElement("p");
      p.textContent = para.trim();
      if (p.textContent) bioEl.appendChild(p);
    });
  }

  // Достижения
  const achList = document.getElementById("apAchList");
  if (achList) {
    achList.innerHTML = "";
    achievements.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="ap-dot">◈</span>${item}`;
      achList.appendChild(li);
    });
  }

  // Страна
  const countryEl = document.getElementById("apCountry");
  if (countryEl) countryEl.textContent = "📍 " + country;

  // Год («наши дни» / present / şimdiki zaman / қазіргі уақыт)
  const presentLabels = { ru: "наши дни", en: "present", tr: "günümüz", kz: "қазіргі уақыт" };
  const presentLabel = presentLabels[lang] || presentLabels.ru;
  const yearsEl = document.getElementById("apYears");
  if (yearsEl) {
    // Берём год начала из artist.years (первые 4 цифры)
    const startYear = artist.years.match(/\d{4}/)?.[0] || "";
    const isOngoing = /—\s*(наши дни|present|günümüz|қазіргі|сейчас|\d{4}\s*$)/.test(artist.years) ||
                      artist.years.includes("—") && !artist.years.match(/—\s*\d{4}$/);
    if (startYear && isOngoing) {
      yearsEl.textContent = `🗓 ${startYear} — ${presentLabel}`;
    } else {
      yearsEl.textContent = "🗓 " + artist.years;
    }
  }

  // Награды — локализованный суффикс
  const awardsEl = document.getElementById("apAwards");
  if (awardsEl && artist.awards > 0) {
    const awardsLabels = {
      ru: (n) => `🏆 ${n} наград${n===1?"а":n<=4?"ы":""}`,
      en: (n) => `🏆 ${n} Grammy Award${n===1?"":"s"}`,
      tr: (n) => `🏆 ${n} Grammy Ödülü`,
      kz: (n) => `🏆 ${n} Grammy сыйлығы`,
    };
    awardsEl.textContent = (awardsLabels[lang] || awardsLabels.ru)(artist.awards);
  }
}

/* ── Header scroll + burger ── */
window.addEventListener("scroll", () => {
  document.getElementById("header").classList.toggle("scrolled", window.scrollY > 10);
});
document.getElementById("burger").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("open");
});

/* ── Клик на оверлей закрывает плеер ── */
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("playerOverlay");
  if (overlay) overlay.addEventListener("click", closePlayer);

  const bar = document.getElementById("barPlayer");
  if (bar && bar.classList.contains("active")) {
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }
});

/* ════════════════════════════════════════════════
   ГРОМКОСТЬ — горизонтальный слайдер
════════════════════════════════════════════════ */
if (window._vol === undefined) window._vol = 80;
if (window._muted === undefined) window._muted = false;
window._volDrag = false;

/* Логарифмическое преобразование: слайдер 0–100 → реальная громкость YT */
if (typeof _linearToLog === "undefined") {
  window._linearToLog = function(linear) {
    if (linear <= 0) return 0;
    if (linear >= 100) return 100;
    return Math.round(((Math.pow(10, linear / 100) - 1) / 9) * 100);
  };
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

window._volBound = window._volBound || false;
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
  document.addEventListener("mouseup", function() {
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
