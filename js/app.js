/* Chuong US Games — shared Supabase client, auth UI, scores & leaderboard */
(function () {
  const SUPABASE_URL = 'https://lvirausgablhtmcqdblj.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_qcNXOOBcJIvf0mEki-1JnQ_00Jzb5lp';
  const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

  const GAME_META = {
    flappy:  { name: 'Flappy Neon',    icon: '🐤', unit: 'pts' },
    dodge:   { name: 'Hardest Dodge',  icon: '🔵', unit: 'wins' },
    reaction:{ name: 'Reaction Test',  icon: '⚡', unit: 'ms', lowerBetter: true },
    timer:   { name: 'Perfect Second', icon: '⏱️', unit: 'streak' },
    memory:  { name: 'Simon Memory',   icon: '🧠', unit: 'rounds' },
    avoid:   { name: 'Meteor Rain',   icon: '☄️', unit: 's' },
    stack:   { name: 'Neon Stack',     icon: '🧱', unit: 'blocks' },
    aim:     { name: 'Aim Trainer',    icon: '🎯', unit: 's', lowerBetter: true },
    maze:    { name: 'Wire Maze',      icon: '🌀', unit: 'wins' },
    runner:  { name: 'Spike Runner',   icon: '🏃', unit: 'm' },
    colorrush: { name: 'Color Rush',   icon: '🎨', unit: 'streak' },
    numrush:   { name: 'Number Rush',  icon: '🔢', unit: 's', lowerBetter: true }
  };

  const CUG = {
    sb, user: null, profile: null, meta: GAME_META,

    async init() {
      const { data } = await sb.auth.getSession();
      CUG.user = data.session ? data.session.user : null;
      if (CUG.user) await CUG.loadProfile();
      CUG.renderAuth();
      CUG.gateGames();
      CUG.renderFavButton();
      CUG.renderLeaderboardWidget();
      sb.auth.onAuthStateChange(async (_e, session) => {
        const had = !!CUG.user;
        CUG.user = session ? session.user : null;
        if (CUG.user && !CUG.profile) await CUG.loadProfile();
        if (!CUG.user) CUG.profile = null;
        if (had !== !!CUG.user) CUG.renderAuth();
      });
      document.dispatchEvent(new Event('cug-ready'));
    },

    async loadProfile() {
      const { data } = await sb.from('profiles').select('*').eq('id', CUG.user.id).single();
      CUG.profile = data || null;
    },

    /* Google Identity Services: sign-in happens on OUR domain (popup shows chuong.us,
       not supabase.co). Fallback to classic OAuth redirect if the GIS script is blocked. */
    GOOGLE_CLIENT_ID: '900700248109-qm940jnv21lgmbf31gdmtg7rkbqcs98r.apps.googleusercontent.com',
    _gis: null,
    loadGIS() {
      if (CUG._gis) return CUG._gis;
      CUG._gis = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'https://accounts.google.com/gsi/client';
        s.async = true; s.defer = true;
        s.onload = () => {
          google.accounts.id.initialize({
            client_id: CUG.GOOGLE_CLIENT_ID,
            use_fedcm_for_prompt: true,
            callback: async (resp) => {
              const { error } = await sb.auth.signInWithIdToken({ provider: 'google', token: resp.credential });
              if (error) alert('Sign-in error: ' + error.message);
              else location.reload();
            }
          });
          resolve();
        };
        s.onerror = reject;
        document.head.appendChild(s);
      });
      return CUG._gis;
    },
    renderGoogleButton(el) {
      CUG.loadGIS().then(() => {
        google.accounts.id.renderButton(el, { theme: 'filled_black', text: 'signin_with', shape: 'pill', size: 'medium' });
      }).catch(() => {
        el.innerHTML = '<button class="cug-btn cug-google">' + I18N.t('common.signInGoogleFallback') + '</button>';
        el.firstChild.onclick = CUG.signIn;
      });
    },
    signIn() { /* fallback only (GIS blocked) */
      sb.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: location.href } });
    },
    async signOut() {
      await sb.auth.signOut();
      location.reload();
    },

    renderAuth() {
      let host = document.getElementById('cug-auth');
      if (!host) {
        host = document.createElement('div');
        host.id = 'cug-auth';
        const top = document.querySelector('.game-top') || document.querySelector('header.site .wrap');
        if (!top) return;
        top.appendChild(host);
      }
      if (CUG.user) {
        const name = CUG.profile ? CUG.profile.username : I18N.t('common.player');
        host.innerHTML =
          '<a class="cug-user" href="' + CUG.rel('profile.html') + '">👤 ' + CUG.esc(name) + '</a>' +
          '<button class="cug-btn cug-out" title="' + I18N.t('common.signOutTitle') + '">⏻</button>';
        host.querySelector('.cug-out').onclick = CUG.signOut;
      } else {
        host.innerHTML = '';
        CUG.renderGoogleButton(host);
      }
    },

    rel(p) {
      return location.pathname.indexOf('/games/') >= 0 ? '../' + p : p;
    },
    esc(s) {
      return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    },

    logPlay(game) {
      try { sb.rpc('log_play', { p_game: game }).then(() => {}); } catch (e) {}
    },
    async submitScore(game, score) {
      if (!CUG.user || !(score > 0)) return;
      try { await sb.rpc('submit_score', { p_game: game, p_score: score }); } catch (e) {}
    },
    async leaderboard(game, limit) {
      const { data, error } = await sb.rpc('leaderboard', { p_game: game, p_limit: limit || 10 });
      return error ? [] : (data || []);
    },
    async myStats() {
      const { data, error } = await sb.rpc('my_stats');
      return error ? [] : (data || []);
    },

    /* favorite games: stored locally per browser, no sign-in required */
    FAV_KEY: 'cug_favorites',
    getFavorites() {
      try { return JSON.parse(localStorage.getItem(CUG.FAV_KEY) || '[]'); } catch (e) { return []; }
    },
    isFavorite(game) { return CUG.getFavorites().indexOf(game) !== -1; },
    toggleFavorite(game) {
      let favs = CUG.getFavorites();
      favs = favs.indexOf(game) !== -1 ? favs.filter(g => g !== game) : favs.concat([game]);
      localStorage.setItem(CUG.FAV_KEY, JSON.stringify(favs));
      return favs.indexOf(game) !== -1;
    },
    /* pin/unpin button on game pages, next to the leaderboard button */
    renderFavButton() {
      const game = document.body.dataset.game;
      if (!game) return;
      const top = document.querySelector('.game-top');
      if (!top) return;
      const btn = document.createElement('button');
      btn.className = 'cug-btn cug-fav-btn';
      const refresh = () => {
        const on = CUG.isFavorite(game);
        btn.textContent = on ? '★' : '☆';
        btn.classList.toggle('on', on);
        btn.title = I18N.t(on ? 'common.unpin' : 'common.pin');
      };
      refresh();
      btn.onclick = () => { CUG.toggleFavorite(game); refresh(); };
      top.insertBefore(btn, top.querySelector('.cug-lb-btn') || document.getElementById('cug-auth'));
    },

    /* login required to play: overlay + input blocker on game pages */
    gateGames() {
      const game = document.body.dataset.game;
      if (!game || CUG.user) return;
      const ov = document.createElement('div');
      ov.className = 'cug-gate';
      ov.innerHTML =
        '<div class="cug-gate-box">' +
        '<div class="gicon">🔒</div>' +
        '<h2>' + I18N.t('common.signInToPlayTitle') + '</h2>' +
        '<p>' + I18N.t('common.signInToPlayBody', { game: GAME_META[game] ? GAME_META[game].name : 'this game' }) + '</p>' +
        '<div class="gbtn"></div>' +
        '<a class="ghome" href="../index.html">' + I18N.t('common.backAll') + '</a>' +
        '</div>';
      document.body.appendChild(ov);
      CUG.renderGoogleButton(ov.querySelector('.gbtn'));
      const block = e => {
        if (!ov.contains(e.target)) { e.stopPropagation(); e.preventDefault(); }
      };
      addEventListener('keydown', block, true);
      addEventListener('pointerdown', block, true);
    },

    /* leaderboard button + slide panel on game pages (body[data-game]) */
    renderLeaderboardWidget() {
      const game = document.body.dataset.game;
      if (!game) return;
      /* count one play per visit on first interaction */
      const once = () => {
        CUG.logPlay(game);
        removeEventListener('pointerdown', once); removeEventListener('keydown', once);
      };
      addEventListener('pointerdown', once); addEventListener('keydown', once);
      const top = document.querySelector('.game-top');
      if (!top) return;
      const btn = document.createElement('button');
      btn.className = 'cug-btn cug-lb-btn';
      btn.textContent = I18N.t('common.leaderboard');
      top.insertBefore(btn, document.getElementById('cug-auth'));
      const panel = document.createElement('div');
      panel.className = 'cug-lb-panel';
      panel.innerHTML = '<button class="cug-lb-close" title="' + I18N.t('common.close') + '">✕</button>' +
        '<h2>' + I18N.t('common.top10', { game: GAME_META[game].name }) + '</h2><div class="cug-lb-list">' + I18N.t('common.loading') + '</div><p class="cug-lb-note"></p>';
      document.body.appendChild(panel);
      const close = () => panel.classList.remove('open');
      panel.querySelector('.cug-lb-close').onclick = close;
      addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
      addEventListener('pointerdown', e => {
        if (panel.classList.contains('open') && !panel.contains(e.target) && e.target !== btn) close();
      });
      btn.onclick = async () => {
        panel.classList.toggle('open');
        if (!panel.classList.contains('open')) return;
        const list = panel.querySelector('.cug-lb-list');
        const rows = await CUG.leaderboard(game, 10);
        if (!rows.length) { list.innerHTML = '<div class="cug-lb-row">' + I18N.t('common.noScoresYet') + '</div>'; }
        else {
          list.innerHTML = rows.map((r, i) =>
            '<div class="cug-lb-row"><span class="r">' + (i < 3 ? ['🥇', '🥈', '🥉'][i] : (i + 1)) + '</span>' +
            '<span class="n">' + CUG.esc(r.username) + '</span>' +
            '<span class="s">' + r.best + ' ' + GAME_META[game].unit + '</span></div>').join('');
        }
        panel.querySelector('.cug-lb-note').textContent =
          CUG.user ? I18N.t('common.scoreSavedAuto') : I18N.t('common.signInToBoard');
      };
    }
  };

  window.CUG = CUG;
  document.addEventListener('DOMContentLoaded', CUG.init);
})();
