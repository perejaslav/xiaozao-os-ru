// Сяоцзао iOS · экраны приложений и навигация (стиль iOS 26)
(function () {
  var CONTENT = window.XZContent || {};
  var BILI = 'https://space.bilibili.com/3537118131391269';
  var CALL_DIALING = 'os/media/call-dialing.m4a?v=20260612';
  var CALL_CONNECTED = 'os/media/call-connected.m4a?v=20260612';
  var CALL_DIALING_MS = 7660;
  var CALL_CONNECTED_MS = 6640;
  function tr(key, fallback) {
    return window.xztr ? window.xztr(key, fallback) : fallback;
  }
  function pick(prefix, n) {
    return window.XZI18N ? window.XZI18N.pick(prefix, n) : String(n);
  }
  var PLATFORM_KEYS = { 'B站': 'platform.bilibili', '抖音': 'platform.douyin', '小红书': 'platform.xiaohongshu', '飞书': 'platform.feishu' };
  function platformLabel(p) {
    var key = PLATFORM_KEYS[p];
    return key ? tr(key, p) : (p || tr('desk.platform.video', 'Видео'));
  }

  /* ---------- Мелкие иконки (currentColor SVG) ---------- */
  var SVG = {
    mag: '<svg viewBox="0 0 20 20" fill="none"><circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.8"></circle><path d="M13.5 13.5L18 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"></path></svg>',
    mic: '<svg viewBox="0 0 20 20" fill="none"><rect x="7" y="2" width="6" height="10" rx="3" fill="currentColor"></rect><path d="M4.5 9.5a5.5 5.5 0 0 0 11 0M10 15v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" fill="none"></path></svg>',
    cloud: '<svg viewBox="0 0 28 22" fill="none"><path d="M8 18.5h11.5a4.8 4.8 0 0 0 .8-9.54A7 7 0 0 0 7.2 6.9 5.3 5.3 0 0 0 8 18.5z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><path d="M14 8.5v6.5m0 0-2.4-2.4M14 15l2.4-2.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
    clock: '<svg viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" fill="currentColor"></circle><path d="M11 6v5l3.2 2" stroke="#fff" stroke-width="1.8" stroke-linecap="round" fill="none"></path></svg>',
    folderP: '<svg viewBox="0 0 24 20"><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h4l2 2.5h8A2.5 2.5 0 0 1 21 7v8.5a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 2 15.5z" fill="currentColor"></path><circle cx="9.5" cy="11" r="2" fill="#fff"></circle><path d="M5.5 16c.5-1.7 2.2-2.6 4-2.6s3.5.9 4 2.6z" fill="#fff"></path></svg>',
    folder: '<svg viewBox="0 0 24 20"><path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h4l2 2.5h8A2.5 2.5 0 0 1 21 7v8.5a2.5 2.5 0 0 1-2.5 2.5h-14A2.5 2.5 0 0 1 2 15.5z" fill="currentColor"></path></svg>',
    phone: '<svg viewBox="0 0 22 22"><path d="M6.6 3.2 8.4 6c.4.6.3 1.3-.2 1.8L6.9 9.1a13 13 0 0 0 6 6l1.3-1.3c.5-.5 1.2-.6 1.8-.2l2.8 1.8c.7.5.8 1.5.2 2.1l-1.4 1.4c-.7.7-1.7 1-2.6.7C9.8 18 4 12.2 2.4 7c-.3-1 0-2 .7-2.6l1.4-1.4c.6-.6 1.6-.5 2.1.2z" fill="currentColor"></path></svg>',
    person: '<svg viewBox="0 0 22 22"><circle cx="11" cy="7.5" r="4" fill="currentColor"></circle><path d="M3.5 19c.8-3.6 4-5.5 7.5-5.5s6.7 1.9 7.5 5.5z" fill="currentColor"></path></svg>',
    keypad: (function () {
      var s = '<svg viewBox="0 0 22 22">';
      [4, 11, 18].forEach(function (y, yi) {
        [4, 11, 18].forEach(function (x) {
          if (yi === 2 && x !== 11) return;
          s += '<circle cx="' + x + '" cy="' + y + '" r="2.2" fill="currentColor"></circle>';
        });
      });
      return s + '</svg>';
    })()
  };

  var VIDEOS = ((CONTENT.videos && CONTENT.videos.length) ? CONTENT.videos : [
    { title: 'Claude design 可交互 PPT', url: BILI, cover: '', platform: 'B站' },
    { title: '三招去除图片 AI 味', url: BILI, cover: '', platform: 'B站' }
  ]).map(function (v, i) {
    return { title: tr('video.' + (i + 1), v.title), url: v.url, cover: v.cover, platform: v.platform };
  });
  var DOCS = ((CONTENT.docs && CONTENT.docs.length) ? CONTENT.docs : [
    { title: 'Claude Design 可交互 PPT 实操手册', url: '#', source: '飞书' },
    { title: '三招去除图片 AI 味 操作清单', url: '#', source: '飞书' }
  ]).map(function (d, i) {
    return {
      title: tr('doc.title.' + (i + 1), d.title),
      url: d.url,
      source: tr('doc.source.' + (i + 1), d.source || '')
    };
  });
  var CASES = window.XZCases || {};
  var TEAM_RAW = [
    { id: 'dashi', nm: '大师', letter: 'D', role: '创始人 · AI 实战应用探索家', av: 'os/avatars/dashi.jpg',
      bio: '擅长将复杂技术转化为实用工作流，把「看不懂」变成「马上用」。' },
    { id: 'hongdou', nm: '红豆', letter: 'H', role: '创始人 · 运营操盘手', av: 'os/avatars/hongdou.png',
      bio: '曾带领多个爆款产品从 0 到 1，最懂内容如何触达真实需求。' },
    { id: 'jadon7', nm: 'Jadon7', letter: 'J', role: '合伙人 · 多面体技术极客', av: 'os/avatars/jadon7.png',
      bio: '热衷于全球 AI 工具的体验、测评与教程，新工具第一手开箱。' }
  ];
  var TEAM = TEAM_RAW.map(function (m) {
    return {
      id: m.id,
      letter: m.letter,
      av: m.av,
      nm: tr('team.' + m.id + '.name', m.nm),
      role: tr('team.' + m.id + '.role', m.role),
      bio: tr('team.' + m.id + '.bio', m.bio)
    };
  });
  var FX = {
    fable: {
      wm: 'Claude Fable',
      heroA: 'web.hero.fable.a', heroB: 'web.hero.fable.b',
      heroFallback: ['用 Claude Fable，', '把故事做成作品'],
      cases: (CASES.fable || []).map(function (c, i) { return { title: tr('case.fable.' + (i + 1), c.title), cover: c.cover, url: c.url }; })
    },
    design: {
      wm: 'Claude Design',
      heroA: 'web.hero.design.a', heroB: 'web.hero.design.b',
      heroFallback: ['用 Claude Design，', '把灵感做成界面'],
      cases: (CASES.design || []).map(function (c, i) { return { title: tr('case.design.' + (i + 1), c.title), cover: c.cover, url: c.url }; })
    }
  };
  var QRS = {
    wechat: { t: tr('app.qrwx.title', 'WeChat · Вход в группу'), img: 'os/qrs/wechat.png', hint: tr('qr.wechat.hint', '') },
    shipinhao: { t: tr('dock.shipinhao.alt', 'Видеоканал'), img: 'os/qrs/shipinhao.png', hint: tr('qr.shipinhao.hint', '') }
  };

  /* ---------- Шаблоны ---------- */
  function nav(backLabel, title) {
    return '<header class="nav"><button class="back" data-back><span class="chev">‹</span> ' + backLabel + '</button><b class="ttl">' + title + '</b></header>';
  }
  function attr(s) { return esc(s).replace(/"/g, '&quot;'); }
  function videosScr() {
    var rows = VIDEOS.map(function (v) {
      return '<a class="grow" href="' + attr(v.url) + '" target="_blank" rel="noopener">' +
        '<span class="vthumb">' + (v.cover ? '<img src="' + attr(v.cover) + '" alt="" />' : '') + '<span class="play">▶</span></span>' +
        '<span><span class="fn">' + esc(v.title) + '</span><span class="fmeta">' + esc(window.XZI18N ? window.XZI18N.t('ios.videos.meta', { platform: platformLabel(v.platform) }) : platformLabel(v.platform)) + '</span></span>' +
        '<span class="chev">›</span></a>';
    }).join('');
    return '<div class="scr" id="scr-videos">' + nav(tr('ios.nav.home', 'Главный экран'), tr('ios.videos.title', 'Уроки')) +
      '<div class="scr-body"><h1 class="big-title">' + esc(tr('ios.videos.title', 'Уроки')) + '</h1>' +
      '<p class="glabel">' + esc(pick('ios.videos.count', VIDEOS.length)) + '</p>' +
      '<div class="glist">' + rows + '</div></div></div>';
  }
  /* Документы → приложение «Файлы» */
  function docScr() {
    var rows = DOCS.map(function (d) {
      return '<a class="fl-row" href="' + attr(d.url) + '" target="_blank" rel="noopener">' +
        '<span class="fl-doc"></span>' +
        '<span class="col"><span class="fn">' + esc(d.title) + '</span><span class="fmeta">' + esc(window.XZI18N ? window.XZI18N.t('ios.docs.meta', { source: d.source || tr('finder.source.feishu', 'Feishu') }) : d.source) + '</span></span>' +
        '<span class="dl">' + SVG.cloud + '</span></a>';
    }).join('');
    return '<div class="scr files" id="scr-doc">' +
      '<button class="fl-float lft" data-back>‹</button>' +
      '<button class="fl-float rgt" type="button">⋯</button>' +
      '<div class="scr-body">' +
      '<h1 class="fl-title">' + esc(tr('ios.docs.title', 'Документы')) + '</h1>' +
      '<div class="fl-search">' + SVG.mag + ' ' + esc(tr('ios.docs.search', 'Поиск')) + ' <span class="mic">' + SVG.mic + '</span></div>' +
      rows +
      '<p class="fl-count">' + esc(pick('ios.docs.count', DOCS.length)) + '</p>' +
      '</div>' +
      '<div class="fl-tabwrap"><div class="fl-tabbar">' +
      '<button class="fl-tab" type="button">' + SVG.clock + esc(tr('ios.docs.tab.recent', 'Недавние')) + '</button>' +
      '<button class="fl-tab on" type="button">' + SVG.folderP + esc(tr('ios.docs.tab.docs', 'Документы')) + '</button>' +
      '<button class="fl-tab" type="button">' + SVG.folder + esc(tr('ios.docs.tab.browse', 'Обзор')) + '</button>' +
      '</div></div></div>';
  }
  /* Команда → список контактов */
  function teamScr() {
    var body = TEAM.map(function (m) {
      return '<p class="sec-letter">' + m.letter + '</p>' +
        '<button class="cts-row" data-member="' + m.id + '"><img src="' + m.av + '" alt="" /><span class="nm">' + esc(m.nm) + '</span></button>';
    }).join('');
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('').join('<br>');
    return '<div class="scr cts" id="scr-team">' +
      '<button class="fl-float lft" data-back>‹</button>' +
      '<p class="cts-title">' + esc(tr('ios.team.title', 'Контакты')) + '</p>' +
      '<button class="fl-float rgt" type="button">＋</button>' +
      '<div class="scr-body">' +
      '<div class="me-row"><img src="os/avatars/dashi.jpg" alt="" /><span><span class="nm">' + esc(tr('ios.team.me', 'AI-кухня мастера')) + '</span><span class="sub">' + esc(tr('ios.team.meSub', 'Моя карточка')) + '</span></span></div>' +
      body +
      '<p class="fl-count">' + esc(pick('ios.team.count', TEAM.length)) + '</p></div>' +
      '<div class="alpha-index">' + alpha + '</div>' +
      '<div class="fl-tabwrap"><div class="fl-tabbar">' +
      '<button class="fl-tab" type="button">' + SVG.phone + esc(tr('ios.team.tab.calls', 'Звонки')) + '</button>' +
      '<button class="fl-tab on" type="button">' + SVG.person + esc(tr('ios.team.tab.contacts', 'Контакты')) + '</button>' +
      '<button class="fl-tab" type="button">' + SVG.keypad + esc(tr('ios.team.tab.keypad', 'Клавиатура')) + '</button>' +
      '</div><button class="fl-circle" type="button">' + SVG.mag + '</button></div></div>';
  }
  /* Карточка → «жидкое стекло» */
  function teamDetailScr() {
    return '<div class="scr ct-glass" id="scr-team-d">' +
      '<button class="fl-float lft" data-back>‹</button>' +
      '<button class="fl-float rgt pill" type="button">' + esc(tr('contacts.edit', 'Правка')) + '</button>' +
      '<div class="cg-body" id="ct-detail-body"></div></div>';
  }
  function fillDetail(m) {
    var body = document.getElementById('ct-detail-body');
    body.classList.remove('is-calling');
    var callAttr = m.id === 'dashi' ? ' data-ios-call="' + m.id + '"' : '';
    body.innerHTML =
      '<img class="cg-avatar" src="' + m.av + '" alt="' + attr(m.nm) + '" />' +
      '<h2 class="cg-name">' + esc(m.nm) + '</h2><p class="cg-role">' + esc(m.role) + '</p>' +
      '<div class="cg-acts">' +
      '<button type="button" aria-label="' + attr(tr('contacts.aria.info', 'Информация')) + '"><img src="os/icons/ctl/ct-msg.svg" alt="" /></button>' +
      '<button type="button" aria-label="' + attr(tr('contacts.aria.call', m.nm)) + '"' + callAttr + '><img src="os/icons/ctl/ct-call.svg" alt="" /></button>' +
      '<button type="button" aria-label="' + attr(tr('contacts.aria.video', 'Видео')) + '"><img src="os/icons/ctl/ct-video.svg" alt="" /></button>' +
      '<button type="button" aria-label="' + attr(tr('contacts.aria.mail', 'Почта')) + '"><img src="os/icons/ctl/ct-mail.svg" alt="" /></button>' +
      '</div>' +
      '<div class="cg-card"><div class="cg-photo"><img src="' + m.av + '" alt="" /><span class="t">' + esc(tr('contacts.photoPoster', 'Фото и постер контакта')) + '</span><span class="chev">›</span></div></div>' +
      '<div class="cg-card">' +
      '<div class="cg-kv"><p class="k">' + esc(tr('contacts.bio', 'О себе')) + '</p><p class="v">' + esc(m.bio) + '</p></div>' +
      '<div class="cg-kv"><p class="k">' + esc(tr('contacts.location', 'Локация')) + '</p><p class="v">' + esc(tr('contacts.location.value', '')) + '</p></div>' +
      '</div>';
  }
  var iosCallAudio = null;
  var iosCallTimer = null;
  var iosCallRun = 0;
  var iosCallMember = null;
  function stopIOSCall() {
    if (iosCallAudio) {
      try {
        iosCallAudio.pause();
        iosCallAudio.currentTime = 0;
        iosCallAudio.muted = true;
        iosCallAudio.removeAttribute('src');
        iosCallAudio.load();
      } catch (e) {}
      iosCallAudio = null;
    }
    if (iosCallTimer) {
      clearTimeout(iosCallTimer);
      iosCallTimer = null;
    }
  }
  function fillCall(m, statusText, cls) {
    var body = document.getElementById('ct-detail-body');
    body.classList.add('is-calling');
    body.innerHTML =
      '<div class="cg-call ' + cls + '">' +
      '<div class="cg-call-orb"><span></span><span></span><img src="' + m.av + '" alt="" /></div>' +
      '<p class="cg-call-chip">' + esc(tr('contacts.call.chip', 'Аудиозвонок Сяоцзао')) + '</p>' +
      '<h2>' + esc(m.nm) + '</h2>' +
      '<p class="cg-call-status">' + esc(statusText) + '</p>' +
      '<button class="cg-hang" type="button" data-ios-hang aria-label="' + attr(tr('contacts.call.hang', 'Завершить вызов')) + '">' + SVG.phone + '</button>' +
      '</div>';
  }
  function hangUpIOS(run) {
    if (run && run !== iosCallRun) return;
    iosCallRun += 1;
    stopIOSCall();
    if (iosCallMember) {
      fillCall(iosCallMember, tr('contacts.call.status.ended', 'Завершён'), 'ended');
      iosCallTimer = setTimeout(function () { fillDetail(iosCallMember); }, 900);
    }
  }
  function scheduleIOSClipEnd(run, done, ms) {
    if (iosCallTimer) clearTimeout(iosCallTimer);
    iosCallTimer = setTimeout(function () {
      iosCallTimer = null;
      if (run === iosCallRun) done();
    }, ms);
  }
  function playIOSClip(audio, run, ms, done) {
    iosCallAudio = audio;
    audio.currentTime = 0;
    audio.addEventListener('ended', function () {
      if (iosCallTimer) {
        clearTimeout(iosCallTimer);
        iosCallTimer = null;
      }
      if (run === iosCallRun) done();
    }, { once: true });
    var p = audio.play();
    if (p && p.catch) p.catch(function () {
      if (run === iosCallRun) scheduleIOSClipEnd(run, done, ms);
    });
  }
  function startIOSCall(id) {
    var m = TEAM.filter(function (x) { return x.id === id; })[0];
    if (!m) return;
    iosCallRun += 1;
    var run = iosCallRun;
    iosCallMember = m;
    stopIOSCall();
    fillCall(m, tr('contacts.call.status.dialing', 'Вызов…'), 'dialing');
    playIOSClip(new Audio(CALL_DIALING), run, CALL_DIALING_MS, function () {
      fillCall(m, tr('contacts.call.status.connected', 'Соединено'), 'connected');
      playIOSClip(new Audio(CALL_CONNECTED), run, CALL_CONNECTED_MS, function () { hangUpIOS(run); });
    });
  }
  function fxPane(key) {
    var f = FX[key];
    var cases = f.cases.map(function (c, i) {
      return '<a class="mcase" href="' + attr(c.url) + '" target="_blank" rel="noopener">' +
        '<span class="cov"><img src="' + attr(c.cover) + '" alt="" /></span>' +
        '<span class="row"><span class="idx">CASE ' + String(i + 1).padStart(2, '0') + '</span><span class="nm">' + esc(c.title) + '</span><span class="go">→</span></span></a>';
    }).join('');
    return '<div class="cs-wrap pane-' + key + '" data-pane="' + key + '"' + (key === 'fable' ? '' : ' style="display:none"') + '>' +
      '<div class="cs-brand"><img src="os/icons/claude.svg" alt="" /><b>' + f.wm + '</b><span class="x">×</span><span class="by">' + esc(tr('web.by', 'AI-кухня мастера')) + '</span></div>' +
      '<h1 class="cs-h-m">' + esc(tr(f.heroA, f.heroFallback[0])) + '<em>' + esc(tr(f.heroB, f.heroFallback[1])) + '</em></h1>' + cases + '</div>';
  }
  function fxScr() {
    return '<div class="scr safari" id="scr-fx">' + nav(tr('ios.nav.home', 'Главный экран'), tr('ios.fx.title', 'Кейсы')) +
      '<div class="scr-body">' +
      '<div class="seg"><button class="on" data-seg="fable">Claude Fable</button><button data-seg="design">Claude Design</button></div>' +
      fxPane('fable') + fxPane('design') +
      '</div></div>';
  }
  function termScr() {
    return '<div class="scr term" id="scr-term">' + nav(tr('ios.nav.home', 'Главный экран'), tr('ios.term.title', 'xiaozao —— -zsh')) +
      '<div class="scr-body term-out-m" id="term-out">' +
      '<p class="ln"><span class="prompt">xiaozao@os</span> <span class="dim">~</span> $ <span class="cmd">xiaozao --about</span></p>' +
      '<p class="term-logo">' + esc(tr('term.logo', '')) + '</p>' +
      '<p class="ln">' + esc(tr('term.pos.label', '')) + '  <span class="hl">' + esc(tr('term.pos.value', '')) + '</span></p>' +
      '<p class="ln">' + esc(tr('term.philosophy.label', '')) + '  ' + esc(tr('term.philosophy.value', '')) + '</p>' +
      '<p class="ln">      ' + esc(tr('term.philosophy.value2', '')) + '</p>' +
      '<p class="ln">&nbsp;</p>' +
      '<p class="ln"><span class="dim">' + esc(tr('term.hint', '')) + '</span></p>' +
      '</div>' +
      '<div class="term-line-m"><span class="prompt">xiaozao@os</span><span class="dim">&nbsp;~ $</span><input id="term-in" type="text" autocomplete="off" spellcheck="false" aria-label="' + attr(tr('term.aria.input', '')) + '" /></div></div>';
  }

  /* ---------- Команды терминала ---------- */
  function esc(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var QUN = 'https://u.wechat.com/MEW2EgIp6wvap_Y8C3Zuzzk';
  var CMDS = {
    help: [tr('term.help.header', ''), tr('term.help.about', ''), tr('term.help.stats', ''), tr('term.help.roadmap', ''), tr('term.help.find', ''), tr('term.help.clear', '')],
    about: [esc(tr('term.pos.label', '')) + '  <span class="hl">' + esc(tr('term.pos.value', '')) + '</span>', esc(tr('term.philosophy.label', '')) + '  ' + esc(tr('term.philosophy.value2', '')) + '  <span class="hl">' + esc(tr('term.motto', '')) + '</span>'],
    stats: ['<span class="ok">✓</span> ' + esc(tr('term.stats.fans', '')), '<span class="ok">✓</span> ' + esc(tr('term.stats.tutorials', '')), '<span class="ok">✓</span> ' + esc(tr('term.stats.platforms', ''))],
    roadmap: [esc(tr('term.roadmap.1', '')), esc(tr('term.roadmap.2', ''))],
    find: [esc(tr('term.find.bilibili', '')) + '<a class="hl" href="' + BILI + '" target="_blank" rel="noopener">' + esc(tr('term.find.bilibili.link', '')) + '</a>', esc(tr('term.find.wechat', '')) + '<a class="hl" href="' + QUN + '" target="_blank" rel="noopener">' + esc(tr('term.find.wechat.link', '')) + '</a>']
  };
  function runCmd(v, out) {
    var cmd = v.toLowerCase().replace(/^xiaozao\s+--?/, '');
    if (cmd === 'clear') { out.innerHTML = ''; return; }
    var lines = /^sudo\b/.test(cmd) ? [esc(tr('term.sudo', ''))] :
      CMDS[cmd] || [esc(window.XZI18N ? window.XZI18N.t('term.notfound', { cmd: v }) : 'zsh: command not found: ' + v) + '<span class="dim">' + esc(tr('term.hintShort', '')) + '</span>'];
    lines.forEach(function (l) {
      var p = document.createElement('p');
      p.className = 'ln';
      p.innerHTML = l;
      out.appendChild(p);
    });
  }

  /* ---------- Слой QR-кода (WeChat / видеоканал) ---------- */
  function showQr(key) {
    var q = QRS[key];
    if (!q) return;
    var mask = document.createElement('div');
    mask.className = 'qr-mask';
    mask.innerHTML = '<div class="qr-card">' +
      '<h3>' + esc(q.t) + '</h3>' +
      '<img class="qr-img" src="' + q.img + '" alt="' + attr(q.t + tr('qr.altSuffix', '')) + '" />' +
      '<p class="hint">' + esc(q.hint) + '</p>' +
      '<button class="close" type="button">' + esc(tr('qr.close', 'Закрыть')) + '</button></div>';
    mask.addEventListener('click', function (e) {
      if (e.target === mask || e.target.closest('.close')) mask.remove();
    });
    document.body.appendChild(mask);
  }

  /* ---------- Монтирование экранов и стек навигации ---------- */
  var screens = document.getElementById('screens');
  screens.innerHTML = videosScr() + docScr() + teamScr() + teamDetailScr() + fxScr() + termScr();

  function startDanmaku() {
    var texts = CONTENT.danmaku || [];
    var home = document.querySelector('.home');
    if (!texts.length || !home) return;
    var wrap = document.createElement('div');
    wrap.className = 'ios-danmaku';
    wrap.setAttribute('aria-hidden', 'true');
    home.appendChild(wrap);
    var lanes = [0, 34, 68].map(function (top) { return { top: top, availableAt: 0 }; });
    function spawn() {
      var now = performance.now();
      var open = lanes.filter(function (lane) { return lane.availableAt <= now; });
      if (!open.length) return;
      var lane = open[Math.floor(Math.random() * open.length)];
      var item = document.createElement('span');
      item.className = 'ios-danmaku-item';
      item.textContent = texts[Math.floor(Math.random() * texts.length)];
      var duration = 20 + Math.random() * 8;
      item.style.top = lane.top + 'px';
      item.style.animationDuration = duration.toFixed(1) + 's';
      item.style.opacity = (0.76 + Math.random() * 0.18).toFixed(2);
      wrap.appendChild(item);
      var width = item.getBoundingClientRect().width;
      var travel = window.innerWidth + width * 1.2;
      var safeDelay = duration * 1000 * Math.min(0.72, (width + 72) / travel);
      lane.availableAt = now + safeDelay;
      item.addEventListener('animationend', function () { item.remove(); });
    }
    for (var i = 0; i < 3; i += 1) setTimeout(spawn, i * 900);
    setInterval(spawn, 1800);
  }
  startDanmaku();

  function initStickerDrag() {
    var sticker = document.querySelector('.ios-sticker');
    if (!sticker) return;
    document.body.appendChild(sticker);
    var dragging = false, sx = 0, sy = 0, startLeft = 0, startTop = 0;
    function clamp(v, min, max) {
      return Math.max(min, Math.min(max, v));
    }
    sticker.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      e.preventDefault();
      e.stopPropagation();
      var r = sticker.getBoundingClientRect();
      startLeft = r.left;
      startTop = r.top;
      sticker.style.left = startLeft + 'px';
      sticker.style.top = startTop + 'px';
      sticker.style.right = 'auto';
      sticker.style.bottom = 'auto';
      sx = e.clientX;
      sy = e.clientY;
      dragging = true;
      sticker.classList.add('dragging');
      sticker.setPointerCapture(e.pointerId);
      window.addEventListener('pointermove', moveSticker);
      window.addEventListener('pointerup', endDrag);
      window.addEventListener('pointercancel', endDrag);
    });
    function moveSticker(e) {
      if (!dragging) return;
      e.preventDefault();
      e.stopPropagation();
      var maxLeft = window.innerWidth - sticker.offsetWidth;
      var maxTop = window.innerHeight - sticker.offsetHeight;
      sticker.style.left = clamp(startLeft + e.clientX - sx, 0, maxLeft) + 'px';
      sticker.style.top = clamp(startTop + e.clientY - sy, 0, maxTop) + 'px';
    }
    function endDrag(e) {
      if (!dragging) return;
      if (e) e.stopPropagation();
      dragging = false;
      sticker.classList.remove('dragging');
      window.removeEventListener('pointermove', moveSticker);
      window.removeEventListener('pointerup', endDrag);
      window.removeEventListener('pointercancel', endDrag);
    }
  }
  initStickerDrag();

  var stack = [];
  var status = document.querySelector('.status');
  function syncStatus() {
    var top = stack[stack.length - 1];
    status.classList.toggle('ink', !!top && !top.classList.contains('term') && !top.classList.contains('ct-glass'));
  }
  function clearAnimTimer(el) {
    if (el._iosAnimTimer) {
      clearTimeout(el._iosAnimTimer);
      el._iosAnimTimer = null;
    }
  }
  function setLaunchFrame(el, origin) {
    var r;
    if (origin && origin.getBoundingClientRect) {
      r = origin.getBoundingClientRect();
      el._iosLaunchOrigin = origin;
    } else if (el._iosLaunchOrigin && el._iosLaunchOrigin.getBoundingClientRect) {
      r = el._iosLaunchOrigin.getBoundingClientRect();
    }
    if (!r || !r.width || !r.height) {
      r = { left: window.innerWidth / 2 - 32, top: window.innerHeight * 0.68, width: 64, height: 64 };
    }
    el.style.setProperty('--launch-x', r.left + 'px');
    el.style.setProperty('--launch-y', r.top + 'px');
    el.style.setProperty('--launch-scale-x', Math.max(0.08, r.width / window.innerWidth));
    el.style.setProperty('--launch-scale-y', Math.max(0.06, r.height / window.innerHeight));
    el.style.setProperty('--launch-radius', Math.min(28, Math.max(18, r.width * 0.24)) + 'px');
  }
  function openScr(id, origin) {
    var el = document.getElementById(id);
    if (!el || stack.indexOf(el) >= 0) return;
    var top = stack[stack.length - 1];
    if (top) { top.classList.add('under'); top.classList.remove('open'); }
    if (!top) {
      clearAnimTimer(el);
      el.classList.remove('closing', 'under', 'open');
      el.classList.add('prelaunch');
      el.classList.add('zoom');
      setLaunchFrame(el, origin);
      el.offsetWidth;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.classList.remove('prelaunch');
          el.classList.add('open');
        });
      });
    } else {
      el.classList.remove('closing');
      el.classList.add('open');
      el.classList.remove('under');
    }
    stack.push(el);
    syncStatus();
  }
  function back() {
    var el = stack.pop();
    if (el) {
      if (el.classList.contains('zoom') && stack.length === 0) {
        clearAnimTimer(el);
        setLaunchFrame(el);
        el.classList.add('closing');
        el.classList.remove('open');
        el._iosAnimTimer = setTimeout(function () {
          el.classList.remove('closing', 'under', 'prelaunch');
          el._iosAnimTimer = null;
        }, 500);
      } else {
        el.classList.remove('open');
      }
    }
    var top = stack[stack.length - 1];
    if (top) { top.classList.remove('under'); top.classList.add('open'); }
    syncStatus();
  }
  function goHome() { while (stack.length) back(); }

  document.body.addEventListener('click', function (e) {
    var b;
    if ((b = e.target.closest('[data-back]'))) { stopIOSCall(); back(); return; }
    if ((b = e.target.closest('[data-qr]'))) { showQr(b.getAttribute('data-qr')); return; }
    if ((b = e.target.closest('[data-ios-call]'))) { startIOSCall(b.getAttribute('data-ios-call')); return; }
    if ((b = e.target.closest('[data-ios-hang]'))) { hangUpIOS(); return; }
    if ((b = e.target.closest('[data-act]'))) { openScr('scr-' + b.getAttribute('data-act'), b); return; }
    if ((b = e.target.closest('[data-member]'))) {
      var m = TEAM.filter(function (x) { return x.id === b.getAttribute('data-member'); })[0];
      if (m) { stopIOSCall(); fillDetail(m); openScr('scr-team-d'); }
      return;
    }
    if ((b = e.target.closest('[data-seg]'))) {
      var key = b.getAttribute('data-seg');
      var scr = document.getElementById('scr-fx');
      scr.querySelectorAll('[data-seg]').forEach(function (x) { x.classList.toggle('on', x === b); });
      scr.querySelectorAll('[data-pane]').forEach(function (p) {
        p.style.display = p.getAttribute('data-pane') === key ? '' : 'none';
      });
      return;
    }
  });

  // 终端输入
  var tin = document.getElementById('term-in');
  var tout = document.getElementById('term-out');
  tin.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var v = tin.value.trim();
    var echo = document.createElement('p');
    echo.className = 'ln';
    echo.innerHTML = '<span class="prompt">xiaozao@os</span> <span class="dim">~</span> $ <span class="cmd">' + esc(tin.value) + '</span>';
    tout.appendChild(echo);
    if (v) runCmd(v, tout);
    tin.value = '';
    tout.scrollTop = tout.scrollHeight;
  });

  window.XZIOS = { openScr: openScr, back: back, goHome: goHome, showQr: showQr };
})();
