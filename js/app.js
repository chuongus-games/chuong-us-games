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
    memory:  { name: 'Neon Memory',    icon: '🧠', unit: 'rounds' },
    avoid:   { name: 'Meteor Rain',   icon: '☄️', unit: 's' },
    stack:   { name: 'Neon Stack',     icon: '🧱', unit: 'blocks' },
    aim:     { name: 'Aim Trainer',    icon: '🎯', unit: 's', lowerBetter: true },
    maze:    { name: 'Wire Maze',      icon: '🌀', unit: 'wins' },
    runner:  { name: 'Spike Runner',   icon: '🏃', unit: 'm' },
    colorrush: { name: 'Color Rush',   icon: '🎨', unit: 'streak' },
    numrush:   { name: 'Number Rush',  icon: '🔢', unit: 's', lowerBetter: true },
    serpent:   { name: 'Neon Serpent', icon: '🐍', unit: 'pts' },
    keystrike: { name: 'Keystrike',    icon: '⌨️', unit: 'words' },
    siege:     { name: 'Neon Siege',   icon: '💥', unit: 's' },
    breaker:   { name: 'Neon Breaker', icon: '🧱', unit: 'bricks' }
  };

  /* fixed filler leaderboard rows (social proof) — merged with real scores at render time,
     never written to the database. Each list is already sorted best-to-worst for that game's metric. */
  const FAKE_LB = {
    flappy:    [['ShadowByte', 47], ['PixelNinja', 39], ['NeonFox', 33], ['TurboTaco', 28], ['GlitchRider', 24], ['MidnightAce', 21], ['CryoWolf', 18], ['ByteRunner87', 15], ['ZenModeX', 12], ['VelvetHawk', 10]],
    dodge:     [['RapidLynx', 34], ['EchoDrift', 29], ['SolarFlare7', 25], ['IronWhisper', 21], ['DuskRaven', 18], ['BlazeCipher', 15], ['FrostVein', 12], ['NovaSprint', 10], ['CobaltEdge', 8], ['WildMantis', 6]],
    reaction:  [['SteelOrbit', 142], ['LunarKite', 151], ['EmberFalcon', 158], ['VortexJay', 163], ['ShadowByte', 169], ['PixelNinja', 175], ['NeonFox', 181], ['TurboTaco', 188], ['GlitchRider', 194], ['MidnightAce', 201]],
    timer:     [['CryoWolf', 22], ['ByteRunner87', 18], ['ZenModeX', 15], ['VelvetHawk', 13], ['RapidLynx', 11], ['EchoDrift', 9], ['SolarFlare7', 8], ['IronWhisper', 6], ['DuskRaven', 5], ['BlazeCipher', 4]],
    memory:    [['FrostVein', 34], ['NovaSprint', 29], ['CobaltEdge', 25], ['WildMantis', 22], ['SteelOrbit', 19], ['LunarKite', 17], ['EmberFalcon', 15], ['VortexJay', 13], ['ShadowByte', 11], ['PixelNinja', 9]],
    avoid:     [['NeonFox', 61], ['TurboTaco', 54], ['GlitchRider', 48], ['MidnightAce', 43], ['CryoWolf', 38], ['ByteRunner87', 34], ['ZenModeX', 30], ['VelvetHawk', 26], ['RapidLynx', 23], ['EchoDrift', 20]],
    stack:     [['SolarFlare7', 47], ['IronWhisper', 41], ['DuskRaven', 36], ['BlazeCipher', 32], ['FrostVein', 28], ['NovaSprint', 24], ['CobaltEdge', 21], ['WildMantis', 18], ['SteelOrbit', 15], ['LunarKite', 12]],
    aim:       [['EmberFalcon', 8.42], ['VortexJay', 9.15], ['ShadowByte', 9.87], ['PixelNinja', 10.36], ['NeonFox', 10.94], ['TurboTaco', 11.52], ['GlitchRider', 12.18], ['MidnightAce', 12.77], ['CryoWolf', 13.35], ['ByteRunner87', 14.02]],
    maze:      [['ZenModeX', 27], ['VelvetHawk', 23], ['RapidLynx', 20], ['EchoDrift', 17], ['SolarFlare7', 15], ['IronWhisper', 13], ['DuskRaven', 11], ['BlazeCipher', 9], ['FrostVein', 7], ['NovaSprint', 6]],
    runner:    [['CobaltEdge', 612], ['WildMantis', 548], ['SteelOrbit', 497], ['LunarKite', 452], ['EmberFalcon', 410], ['VortexJay', 371], ['ShadowByte', 335], ['PixelNinja', 301], ['NeonFox', 270], ['TurboTaco', 241]],
    colorrush: [['GlitchRider', 38], ['MidnightAce', 33], ['CryoWolf', 29], ['ByteRunner87', 25], ['ZenModeX', 22], ['VelvetHawk', 19], ['RapidLynx', 16], ['EchoDrift', 14], ['SolarFlare7', 12], ['IronWhisper', 10]],
    numrush:   [['DuskRaven', 14.28], ['BlazeCipher', 15.63], ['FrostVein', 16.94], ['NovaSprint', 18.21], ['CobaltEdge', 19.47], ['WildMantis', 20.68], ['SteelOrbit', 21.93], ['LunarKite', 23.15], ['EmberFalcon', 24.42], ['VortexJay', 25.71]],
    serpent:   [['ShadowByte', 143], ['PixelNinja', 128], ['NeonFox', 114], ['TurboTaco', 102], ['GlitchRider', 91], ['MidnightAce', 81], ['CryoWolf', 72], ['ByteRunner87', 64], ['ZenModeX', 57], ['VelvetHawk', 50]],
    keystrike: [['RapidLynx', 132], ['EchoDrift', 118], ['SolarFlare7', 105], ['IronWhisper', 94], ['DuskRaven', 84], ['BlazeCipher', 75], ['FrostVein', 67], ['NovaSprint', 60], ['CobaltEdge', 53], ['WildMantis', 47]],
    siege:     [['SteelOrbit', 58], ['LunarKite', 51], ['EmberFalcon', 45], ['VortexJay', 40], ['ShadowByte', 35], ['PixelNinja', 31], ['NeonFox', 27], ['TurboTaco', 24], ['GlitchRider', 21], ['MidnightAce', 18]],
    breaker:   [['CryoWolf', 187], ['ByteRunner87', 164], ['ZenModeX', 143], ['VelvetHawk', 124], ['RapidLynx', 107], ['EchoDrift', 92], ['SolarFlare7', 79], ['IronWhisper', 67], ['DuskRaven', 56], ['BlazeCipher', 46]]
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
      CUG.renderDonateButton();
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
        // let the donate button through even while the login gate is up —
        // no reason to force a sign-in just to support the site
        if (!ov.contains(e.target) && !(e.target.closest && e.target.closest('.cug-donate-btn'))) {
          e.stopPropagation(); e.preventDefault();
        }
      };
      addEventListener('keydown', block, true);
      addEventListener('pointerdown', block, true);
    },

    /* floating donate button, shown site-wide */
    DONATE_URL: 'https://www.paypal.com/donate/?business=chuongsala%40gmail.com&currency_code=USD',
    renderDonateButton() {
      if (document.querySelector('.cug-donate-btn')) return;
      const a = document.createElement('a');
      a.className = 'cug-donate-btn';
      a.href = CUG.DONATE_URL;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.title = I18N.t('common.donateTooltip');
      a.innerHTML = '<span class="heart">❤️</span><span class="label">' + I18N.t('common.donate') + '</span>';
      document.body.appendChild(a);
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
        const realRows = await CUG.leaderboard(game, 10);
        const fake = (FAKE_LB[game] || []).map(([u, s]) => ({ username: u, best: s }));
        const lowerBetter = !!(GAME_META[game] && GAME_META[game].lowerBetter);
        const merged = realRows.concat(fake).sort((a, b) => lowerBetter ? a.best - b.best : b.best - a.best).slice(0, 10);
        if (!merged.length) { list.innerHTML = '<div class="cug-lb-row">' + I18N.t('common.noScoresYet') + '</div>'; }
        else {
          list.innerHTML = merged.map((r, i) =>
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
