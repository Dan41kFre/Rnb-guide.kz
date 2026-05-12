/* ============================================================
   rbauth.js — модуль авторизации R&B Archive
   Автоматически встраивается на любую страницу.

   При входе: заменяет кнопки «Вход» / «Регистрация»
   на аватар-кнопку с выпадающим профилем (имя, лайки, выход).
   При выходе: возвращает исходные кнопки.
   ============================================================ */

const RBA_DB_KEY      = "rbarchive_users";
const RBA_SESSION_KEY = "rbarchive_session";

const RBAuth = {

  /* ══ Хранилище ══ */
  getUsers()    { try { return JSON.parse(localStorage.getItem(RBA_DB_KEY) || "{}"); } catch { return {}; } },
  saveUsers(u)  { localStorage.setItem(RBA_DB_KEY, JSON.stringify(u)); },
  getSession()  { return localStorage.getItem(RBA_SESSION_KEY) || null; },
  setSession(e) { localStorage.setItem(RBA_SESSION_KEY, e); },
  clearSession(){ localStorage.removeItem(RBA_SESSION_KEY); },

  getCurrentUser() {
    const e = this.getSession();
    return e ? (this.getUsers()[e] || null) : null;
  },
  isLoggedIn() { return !!this.getSession() && !!this.getCurrentUser(); },

  /* ══ Лайки ══ */
  getLiked()   { return this.getCurrentUser()?.liked || []; },
  isLiked(key) { return this.getLiked().some(t => t.key === key); },

  addLike(track) {
    const email = this.getSession(); if (!email) return false;
    const users = this.getUsers();   const user = users[email]; if (!user) return false;
    if (!user.liked) user.liked = [];
    if (!user.liked.some(t => t.key === track.key)) {
      user.liked.push(track);
      this.saveUsers(users);
      this._refreshDropdown();
    }
    return true;
  },

  removeLike(key) {
    const email = this.getSession(); if (!email) return false;
    const users = this.getUsers();   const user = users[email]; if (!user) return false;
    user.liked = (user.liked || []).filter(t => t.key !== key);
    this.saveUsers(users);
    this._refreshDropdown();
    return true;
  },

  toggleLike(track) {
    if (this.isLiked(track.key)) { this.removeLike(track.key); return false; }
    this.addLike(track); return true;
  },

  /* ══ Подсказка гостю ══ */
  showLoginHint() {
    if (this.isLoggedIn()) return;
    let h = document.getElementById("rba-hint");
    if (!h) {
      h = document.createElement("div");
      h.id = "rba-hint";
      h.style.cssText = `position:fixed;bottom:96px;left:50%;transform:translateX(-50%);
        background:var(--bg-card,#111116);border:1px solid rgba(124,58,237,.4);
        color:var(--text,#f0eff5);font-size:.84rem;padding:10px 20px;border-radius:999px;
        z-index:9999;white-space:nowrap;box-shadow:0 8px 32px rgba(0,0,0,.4);
        opacity:0;transition:opacity .3s;font-family:'DM Sans',sans-serif;pointer-events:none;`;
      h.innerHTML = `♡ <a href="auth.html" style="color:var(--accent,#7c3aed);font-weight:600;pointer-events:all">Войди</a>, чтобы сохранить трек`;
      document.body.appendChild(h);
    }
    h.style.opacity = "1";
    clearTimeout(h._t);
    h._t = setTimeout(() => { h.style.opacity = "0"; }, 3000);
  },

  /* ══ Главный метод — обновить хедер ══ */
  updateHeaderUI() {
    const right = document.querySelector(".header__right");
    if (!right) return;
    if (this.isLoggedIn()) {
      this._injectAvatar(right);
    } else {
      this._restoreButtons(right);
    }
  },

  /* ══ Вставить аватар-кнопку и дропдаун ══ */
  _injectAvatar(right) {
    /* Скрыть кнопки «Вход»/«Регистрация» */
    right.querySelectorAll("button:not(#rba-avatar-btn):not(.lang-btn)").forEach(b => b.style.display = "none");

    /* Если враппер уже вставлен — только обновить данные */
    if (document.getElementById("rba-wrap")) { this._refreshDropdown(); return; }

    const user    = this.getCurrentUser();
    const initial = user.name.charAt(0).toUpperCase();
    const email   = this.getSession();

    /* ── Враппер ── */
    const wrap = document.createElement("div");
    wrap.id = "rba-wrap";
    wrap.style.cssText = "position:relative;display:flex;align-items:center;";

    wrap.innerHTML = `
      <!-- Аватар-кнопка -->
      <button id="rba-avatar-btn" aria-label="Профиль" title="${user.name}" style="
        width:36px;height:36px;border-radius:50%;
        background:linear-gradient(135deg,#7c3aed,#e91e8c);
        border:2px solid rgba(255,255,255,.18);
        display:flex;align-items:center;justify-content:center;
        font-family:'Syne',sans-serif;font-size:.9rem;font-weight:800;color:#fff;
        cursor:pointer;flex-shrink:0;
        transition:box-shadow .2s,transform .2s;
        box-shadow:0 4px 14px rgba(124,58,237,.4);
      ">${initial}</button>

      <!-- Дропдаун -->
      <div id="rba-dropdown" style="
        display:none;position:absolute;top:calc(100% + 12px);right:0;
        width:310px;
        background:var(--bg-card,#111116);
        border:1px solid rgba(255,255,255,.09);
        border-radius:18px;
        box-shadow:0 24px 64px rgba(0,0,0,.65),0 0 0 1px rgba(124,58,237,.1);
        z-index:9999;overflow:hidden;
        font-family:'DM Sans',sans-serif;
        animation:rbaFadeIn .18s ease;
      ">
        <!-- Шапка -->
        <div style="
          padding:18px 18px 14px;
          background:linear-gradient(135deg,rgba(124,58,237,.14),rgba(233,30,140,.07));
          border-bottom:1px solid rgba(255,255,255,.07);
          display:flex;align-items:center;gap:12px;
        ">
          <div style="
            width:46px;height:46px;border-radius:50%;flex-shrink:0;
            background:linear-gradient(135deg,#7c3aed,#e91e8c);
            display:flex;align-items:center;justify-content:center;
            font-family:'Syne',sans-serif;font-size:1.15rem;font-weight:800;color:#fff;
            box-shadow:0 4px 14px rgba(124,58,237,.45);
          ">${initial}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:.97rem;
                        white-space:nowrap;overflow:hidden;text-overflow:ellipsis;
                        color:var(--text,#f0eff5);">${user.name}</div>
            <div style="font-size:.74rem;color:var(--text-muted,#6b6a78);margin-top:2px;
                        white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${email}</div>
          </div>
        </div>

        <!-- Лайки -->
        <div style="padding:14px 16px 10px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
            <span style="font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
                         color:var(--text-muted,#6b6a78);">♡ Мне нравится</span>
            <span id="rba-liked-count" style="
              font-size:.68rem;font-weight:700;
              background:rgba(124,58,237,.15);color:var(--accent,#7c3aed);
              border-radius:999px;padding:2px 8px;
            ">0</span>
          </div>
          <ul id="rba-liked-list" style="
            list-style:none;display:flex;flex-direction:column;gap:6px;
            max-height:200px;overflow-y:auto;
            scrollbar-width:thin;scrollbar-color:rgba(124,58,237,.3) transparent;
          "></ul>
          <div id="rba-liked-empty" style="
            display:none;text-align:center;
            color:var(--text-muted,#6b6a78);font-size:.82rem;padding:14px 0 6px;
          ">Пока нет сохранённых треков</div>
        </div>

        <!-- Действия -->
        <div style="padding:10px 16px 16px;display:flex;flex-direction:column;gap:7px;
                    border-top:1px solid rgba(255,255,255,.06);margin-top:4px;">
          <a href="auth.html" id="rba-profile-link" style="
            display:block;text-align:center;padding:8px;
            background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.22);
            color:var(--accent,#7c3aed);font-size:.83rem;font-weight:600;
            border-radius:10px;text-decoration:none;transition:background .2s;
          ">Открыть профиль</a>
          <button id="rba-logout-btn" style="
            width:100%;padding:8px;
            background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.18);
            color:#f87171;font-size:.83rem;font-weight:600;
            font-family:'DM Sans',sans-serif;border-radius:10px;cursor:pointer;
            transition:background .2s;
          ">Выйти из аккаунта</button>
        </div>
      </div>
    `;

    right.appendChild(wrap);

    /* ── Анимация появления дропдауна ── */
    if (!document.getElementById("rba-keyframes")) {
      const s = document.createElement("style");
      s.id = "rba-keyframes";
      s.textContent = `
        @keyframes rbaFadeIn {
          from { opacity:0; transform:translateY(-6px); }
          to   { opacity:1; transform:translateY(0); }
        }
        #rba-avatar-btn:hover {
          transform:scale(1.08) !important;
          box-shadow:0 6px 22px rgba(124,58,237,.65) !important;
        }
        #rba-liked-list::-webkit-scrollbar { width:4px; }
        #rba-liked-list::-webkit-scrollbar-track { background:transparent; }
        #rba-liked-list::-webkit-scrollbar-thumb { background:rgba(124,58,237,.35);border-radius:2px; }
        #rba-profile-link:hover { background:rgba(124,58,237,.2) !important; }
        #rba-logout-btn:hover   { background:rgba(239,68,68,.16) !important; }
        #rba-liked-list .playlist-feat-link {
          color:var(--accent,#7c3aed);text-decoration:none;font-weight:600;pointer-events:all;
        }
        #rba-liked-list .playlist-feat-link:hover { text-decoration:underline; }
      `;
      document.head.appendChild(s);
    }

    /* ── Клики ── */
    wrap.querySelector("#rba-avatar-btn").addEventListener("click", e => {
      e.stopPropagation();
      const dd = document.getElementById("rba-dropdown");
      const open = dd.style.display === "block";
      dd.style.display = open ? "none" : "block";
      if (!open) { dd.style.animation = "none"; dd.offsetHeight; dd.style.animation = "rbaFadeIn .18s ease"; this._refreshDropdown(); }
    });

    wrap.querySelector("#rba-logout-btn").addEventListener("click", () => this._logout());

    document.addEventListener("click", e => {
      const w = document.getElementById("rba-wrap");
      const d = document.getElementById("rba-dropdown");
      if (w && d && !w.contains(e.target)) d.style.display = "none";
    });

    this._refreshDropdown();
  },

  /* ══ Обновить список лайков в дропдауне ══ */
  _refreshDropdown() {
    const list    = document.getElementById("rba-liked-list");
    const empty   = document.getElementById("rba-liked-empty");
    const countEl = document.getElementById("rba-liked-count");
    if (!list) return;

    const liked = this.getLiked();
    if (countEl) countEl.textContent = liked.length;
    list.innerHTML = "";

    if (liked.length === 0) {
      if (empty) empty.style.display = "block";
      return;
    }
    if (empty) empty.style.display = "none";

    liked.forEach(item => {
      const li = document.createElement("li");
      li.style.cssText = `
        display:flex;align-items:center;gap:9px;
        padding:6px 8px 6px 6px;border-radius:10px;
        background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.055);
        transition:background .15s;
      `;
      li.innerHTML = `
        <div style="width:32px;height:32px;border-radius:7px;flex-shrink:0;overflow:hidden;
                    background:linear-gradient(135deg,#7c3aed,#e91e8c);">
          <img src="https://img.youtube.com/vi/${item.ytId}/mqdefault.jpg" alt=""
               style="width:100%;height:100%;object-fit:cover;display:block;"
               onerror="this.style.display='none'"/>
        </div>
        <div style="flex:1;min-width:0;">
          <div style="font-size:.82rem;font-weight:600;color:var(--text,#f0eff5);
                      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.cleanTitle || item.title}</div>
          <div style="font-size:.71rem;color:var(--text-muted,#6b6a78);
                      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.artist}${item.featHtml ? ` <span style="color:var(--text-muted,#6b6a78)"> · </span>${item.featHtml}` : ""}</div>
        </div>
        <button data-rba-del="${item.key}" title="Убрать" style="
          flex-shrink:0;width:20px;height:20px;border-radius:50%;
          background:rgba(239,68,68,.1);border:none;cursor:pointer;
          color:#f87171;font-size:.7rem;line-height:1;
          display:flex;align-items:center;justify-content:center;transition:background .15s;
        ">✕</button>
      `;
      li.addEventListener("mouseenter", () => li.style.background = "rgba(255,255,255,.07)");
      li.addEventListener("mouseleave", () => li.style.background = "rgba(255,255,255,.03)");
      li.querySelector("[data-rba-del]").addEventListener("mouseenter", function(){ this.style.background="rgba(239,68,68,.25)"; });
      li.querySelector("[data-rba-del]").addEventListener("mouseleave", function(){ this.style.background="rgba(239,68,68,.1)"; });
      li.querySelector("[data-rba-del]").addEventListener("click", e => {
        e.stopPropagation();
        this._unlikeFromDropdown(item.key);
      });
      list.appendChild(li);
    });
  },

  /* ══ Убрать лайк из дропдауна ══ */
  _unlikeFromDropdown(key) {
    this.removeLike(key);
    /* Обновить кнопку-сердечко на карточке (если страница с треками) */
    document.querySelectorAll(`.like-btn[data-rba-key="${key}"]`).forEach(b => {
      b.classList.remove("liked"); b.textContent = "♡";
    });
    if (typeof syncPlaylistSection === "function") syncPlaylistSection();
    if (typeof syncPlaylist        === "function") syncPlaylist();
  },

  /* ══ Выход ══ */
  _logout() {
    this.clearSession();
    const wrap = document.getElementById("rba-wrap");
    if (wrap) wrap.remove();
    const right = document.querySelector(".header__right");
    if (right) this._restoreButtons(right);
    /* Если мы на auth.html — вернуть форму входа */
    if (typeof handleLogout === "function") handleLogout();
  },

  /* ══ Восстановить оригинальные кнопки ══ */
  _restoreButtons(right) {
    right.querySelectorAll("button").forEach(b => b.style.display = "");
  },
};

/* ── Авто-запуск ── */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => RBAuth.updateHeaderUI());
} else {
  RBAuth.updateHeaderUI();
}
