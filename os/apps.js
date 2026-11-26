// Сяоцзао OS · содержимое приложений (Терминал / список Файлов / стартовая Safari / тёмные карточки Контактов)
(function () {
  var CONTENT = window.XZContent || {};
  var BILI = 'https://space.bilibili.com/3537118131391269';
  var QUN = 'https://u.wechat.com/MEW2EgIp6wvap_Y8C3Zuzzk';
  var CALL_DIALING = 'os/media/call-dialing.m4a?v=20260612';
  var CALL_CONNECTED = 'os/media/call-connected.m4a?v=20260612';
  var CALL_DIALING_MS = 7660;
  var CALL_CONNECTED_MS = 6640;
  function escHtml(s) {
    return String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function escAttr(s) {
    return escHtml(s).replace(/"/g, '&quot;');
  }
  // tr(): перевод с исходной строкой как резервом. Возвращает plain text.
  function tr(key, fallback) {
    return window.xztr ? window.xztr(key, fallback) : fallback;
  }
  function pick(prefix, n) {
    return window.XZI18N ? window.XZI18N.pick(prefix, n) : String(n);
  }
  function toast(text) {
    var el = document.querySelector('.xz-toast');
    if (!el) {
      el = document.createElement('div');
      el.className = 'xz-toast';
      el.setAttribute('role', 'status');
      document.body.appendChild(el);
    }
    el.textContent = text;
    el.classList.add('on');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(function () { el.classList.remove('on'); }, 1400);
  }

  /* ---------- Файлы · документы ---------- */
  var DOCS = ((CONTENT.docs && CONTENT.docs.length) ? CONTENT.docs : [
    { title: 'Claude Design 可交互 PPT 实操手册', url: '#', source: '飞书' },
    { title: '三招去除图片 AI 味 操作清单', url: '#', source: '飞书' },
    { title: 'AI 配音活人感 参数模板', url: '#', source: '飞书' },
    { title: '高级大片感 PPT 三招清单', url: '#', source: '飞书' }
  ]).map(function (d, i) {
    return {
      title: tr('doc.title.' + (i + 1), d.title),
      source: tr('doc.source.' + (i + 1), d.source || ''),
      url: d.url
    };
  });
  // Метка документа: [тег] или 【тег】 в начале названия.
  function docTag(d) {
    var m = String(d.title || '').match(/^【([^】]+)】|^\[([^\]]+)\]/);
    return m ? (m[1] || m[2]) : tr('finder.tag.other', 'Прочее');
  }
  var DOC_TAGS = DOCS.reduce(function (tags, d) {
    var tag = docTag(d);
    if (tags.indexOf(tag) < 0) tags.push(tag);
    return tags;
  }, []);
  var finderBar = '<div class="finder-bar">' +
    '<span class="navs"><img src="os/icons/ctl/back.svg" alt="' + escAttr(tr('finder.nav.back', 'Назад')) + '" /><img class="dis" src="os/icons/ctl/forward.svg" alt="' + escAttr(tr('finder.nav.forward', 'Вперёд')) + '" /></span>' +
    '<span class="ttl">' + escHtml(tr('finder.title', 'Учебные материалы')) + '</span><span class="sp"></span>' +
    '<span class="seg"><span class="on"><img src="os/icons/ctl/view-2.svg" alt="' + escAttr(tr('finder.view.list', 'Список')) + '" /></span><span><img src="os/icons/ctl/view-1.svg" alt="' + escAttr(tr('finder.view.icons', 'Значки')) + '" /></span></span>' +
    '<span class="search">' + escHtml(tr('finder.search', 'Поиск')) + '</span></div>';
  function finderHtml() {
    var rows = DOCS.map(function (d) {
      return '<a class="fl-row" data-doc-tag="' + escAttr(docTag(d)) + '" href="' + escAttr(d.url) + '" target="_blank" rel="noopener">' +
        '<span class="nm"><span class="f-doc"></span><b>' + escHtml(d.title) + '.url</b></span>' +
        '<span class="c2">' + escHtml(d.source || tr('finder.source.feishu', 'Feishu')) + '</span>' +
        '<span class="c3">' + escHtml(tr('finder.kind.link', 'Ссылка')) + '</span>' +
        '<span class="c4">' + escHtml(tr('finder.kind.doc', 'Документ Feishu')) + '</span></a>';
    }).join('');
    var tagItems = DOC_TAGS.map(function (tag) {
      return '<button class="it" type="button" data-doc-filter="' + escAttr(tag) + '"><span class="f-folder"></span>' + escHtml(tag) + '</button>';
    }).join('');
    return '<div class="finder">' +
      '<nav class="finder-side">' +
      '<p class="grp">' + escHtml(tr('finder.fav', 'Избранное')) + '</p>' +
      '<button class="it on" type="button" data-doc-filter=""><span class="f-folder"></span>' + escHtml(tr('finder.all', 'Все')) + '</button>' +
      '<p class="grp">' + escHtml(tr('finder.tags', 'Теги')) + '</p>' +
      tagItems +
      '<p class="grp">' + escHtml(tr('finder.places', 'Места')) + '</p>' +
      '<span class="it"><span class="f-folder"></span>' + escHtml(tr('finder.shared', 'Общий диск')) + '</span>' +
      '<span class="it"><span class="f-folder"></span>' + escHtml(tr('finder.feishuSpace', 'Пространство Feishu')) + '</span>' +
      '</nav>' +
      '<div class="finder-list">' +
      '<div class="fl-head"><span>' + escHtml(tr('finder.col.name', 'Имя')) + '</span><span>' + escHtml(tr('finder.col.source', 'Источник')) + '</span><span>' + escHtml(tr('finder.col.size', 'Размер')) + '</span><span>' + escHtml(tr('finder.col.kind', 'Тип')) + '</span></div>' +
      rows +
      '</div></div>' +
      '<div class="finder-crumbs">' + escHtml(tr('finder.shared', 'Общий диск')) + ' <span class="sep">›</span> ' + escHtml(tr('finder.crumb.documents', 'Документы')) + ' <span class="sep">›</span> <span class="here">' + escHtml(tr('finder.title', 'Учебные материалы')) + '</span></div>' +
      '<p class="finder-status"><span class="doc-count">' + DOCS.length + '</span> ' + escHtml(pick('finder.items', DOCS.length)) + escHtml(tr('finder.statusSuffix', '')) + '</p>';
  }

  /* ---------- Safari · Кейсы (две вкладки + обложки проектов) ---------- */
  var CASES = window.XZCases || {};
  var FX_URLS = { fable: 'claude-fable.example.com/cases', design: 'claude-design.example.com/cases' };
  var webBar = '<div class="web-bar">' +
    '<span class="navs"><img src="os/icons/ctl/back.svg" alt="' + escAttr(tr('finder.nav.back', 'Назад')) + '" /><img class="dis" src="os/icons/ctl/forward.svg" alt="' + escAttr(tr('finder.nav.forward', 'Вперёд')) + '" /></span>' +
    '<input class="web-url" id="fx-url" type="text" value="' + escAttr(FX_URLS.fable) + '" readonly aria-label="' + escAttr(tr('web.address', 'Адрес')) + '" />' +
    '<span class="acts"><img src="os/icons/ctl/web-share.svg" alt="' + escAttr(tr('web.share', 'Поделиться')) + '" /><img src="os/icons/ctl/web-add.svg" alt="' + escAttr(tr('web.newTab', 'Новая вкладка')) + '" /><img src="os/icons/ctl/web-tabs.svg" alt="' + escAttr(tr('web.tabs', 'Обзор вкладок')) + '" /></span></div>';
  function localizeCases(list, ns) {
    return (list || []).map(function (c, i) {
      return { title: tr('case.' + ns + '.' + (i + 1), c.title), cover: c.cover, url: c.url };
    });
  }
  function csCase(c, idx) {
    var inner = '<span class="cov"><img src="' + escAttr(c.cover) + '" alt="" /></span>' +
      '<span class="cs-row">' +
      '<span class="cs-idx">CASE ' + idx + '</span>' +
      '<span class="nm">' + escHtml(c.title) + '</span>' +
      '<span class="cs-go">→</span></span>';
    return '<a class="cs-card" href="' + escAttr(c.url) + '" data-case-title="' + escAttr(c.title) + '">' + inner + '</a>';
  }
  var CS_CONF = {
    fable: {
      cls: '', wm: 'Claude Fable',
      heroA: 'web.hero.fable.a', heroB: 'web.hero.fable.b',
      heroFallback: ['用 Claude Fable，', '把故事做成作品'],
      cases: localizeCases(CASES.fable, 'fable')
    },
    design: {
      cls: ' design', wm: 'Claude Design',
      heroA: 'web.hero.design.a', heroB: 'web.hero.design.b',
      heroFallback: ['用 Claude Design，', '把灵感做成界面'],
      cases: localizeCases(CASES.design, 'design')
    }
  };
  function csSite(key) {
    var c = CS_CONF[key];
    return '<div class="web-pane" data-pane="' + key + '"' + (key === 'fable' ? '' : ' style="display:none"') + '>' +
      '<div class="cs-site' + c.cls + '">' +
      '<div class="cs-nav"><img src="os/icons/claude.svg" alt="" /><span class="wm">' + c.wm + '</span>' +
      '<span class="x">×</span><span class="by">' + escHtml(tr('web.by', 'AI-кухня мастера')) + '</span>' +
      '<span class="cs-pill">' + escHtml(tr('web.pill', 'Кейсы')) + '</span></div>' +
      '<h1 class="cs-h">' + escHtml(tr(c.heroA, c.heroFallback[0])) + '<em>' + escHtml(tr(c.heroB, c.heroFallback[1])) + '</em></h1>' +
      '<p class="cs-sub">' + escHtml(pick('web.sub', c.cases.length)) + '</p>' +
      '<div class="cs-grid">' +
      c.cases.map(function (item, i) { return csCase(item, String(i + 1).padStart(2, '0')); }).join('') +
      '</div></div></div>';
  }
  function browserHtml() {
    return '<div class="web-tabbar">' +
      '<button class="web-tab on" data-fx="fable"><img class="fav" src="os/icons/claude.svg" alt="" />Claude Fable</button>' +
      '<button class="web-tab" data-fx="design"><img class="fav" src="os/icons/claude.svg" alt="" />Claude Design</button>' +
      '</div>' +
      '<div class="web-page">' + csSite('fable') + csSite('design') + '</div>';
  }

  /* ---------- Контакты · команда ---------- */
  var TEAM_RAW = [
    { id: 'dashi', nm: '大师', role: '创始人 · AI 实战应用探索家', av: 'os/avatars/dashi.jpg',
      bio: '擅长将复杂技术转化为实用工作流，把「看不懂」变成「马上用」。' },
    { id: 'hongdou', nm: '红豆', role: '创始人 · 运营操盘手', av: 'os/avatars/hongdou.png',
      bio: '曾带领多个爆款产品从 0 到 1，最懂内容如何触达真实需求。' },
    { id: 'jadon7', nm: 'Jadon7', role: '合伙人 · 多面体技术极客', av: 'os/avatars/jadon7.png',
      bio: '热衷于全球 AI 工具的体验、测评与教程，新工具第一手开箱。' }
  ];
  var TEAM = TEAM_RAW.map(function (m) {
    return {
      id: m.id,
      av: m.av,
      nm: tr('team.' + m.id + '.name', m.nm),
      role: tr('team.' + m.id + '.role', m.role),
      bio: tr('team.' + m.id + '.bio', m.bio)
    };
  });
  var ctBar = '<div class="ct-bar"><span class="sp"></span>' +
    '<span class="pill">' + escHtml(tr('contacts.edit', 'Правка')) + '</span><span class="pill">' + escHtml(tr('contacts.add', '＋')) + '</span><span class="pill">' + escHtml(tr('contacts.search', 'Поиск')) + '</span></div>';
  function contactsHtml() {
    var list = TEAM.map(function (m, i) {
      return '<button class="ct-item' + (i === 0 ? ' on' : '') + '" data-ct="' + m.id + '">' +
        '<span class="mini"><img src="' + m.av + '" alt="" /></span>' +
        '<span class="nm-wrap">' + escHtml(m.nm) + '</span></button>';
    }).join('');
    var cards = TEAM.map(function (m, i) {
      var callAttr = m.id === 'dashi' ? ' data-call="' + m.id + '"' : '';
      return '<div class="ct-card" data-card="' + m.id + '"' + (i === 0 ? '' : ' style="display:none"') + '>' +
        '<img class="big-avatar" src="' + m.av + '" alt="' + escAttr(tr('contacts.avatarAlt', m.nm + ' — аватар')) + '" />' +
        '<h3>' + escHtml(m.nm) + '</h3><p class="role">' + escHtml(m.role) + '</p>' +
        '<div class="ct-actions">' +
        '<button class="ct-action" type="button" aria-label="' + escAttr(tr('contacts.aria.info', 'Информация')) + '"><img src="os/icons/ctl/ct-msg.svg" alt="" /></button>' +
        '<button class="ct-action ct-call-action" type="button" aria-label="' + escAttr(tr('contacts.aria.call', m.nm)) + '"' + callAttr + '><img src="os/icons/ctl/ct-call.svg" alt="" /></button>' +
        '<button class="ct-action" type="button" aria-label="' + escAttr(tr('contacts.aria.video', 'Видео')) + '"><img src="os/icons/ctl/ct-video.svg" alt="" /></button>' +
        '<button class="ct-action" type="button" aria-label="' + escAttr(tr('contacts.aria.mail', 'Почта')) + '"><img src="os/icons/ctl/ct-mail.svg" alt="" /></button>' +
        '</div>' +
        '<div class="ct-group">' +
        '<div class="fld"><span class="k">' + escHtml(tr('contacts.bio', 'О себе')) + '</span><span class="v">' + escHtml(m.bio) + '</span></div>' +
        '<div class="fld"><span class="k">' + escHtml(tr('contacts.location', 'Локация')) + '</span><span class="v">' + escHtml(tr('contacts.location.value', 'Пекин · топовая IT-компания')) + '</span></div>' +
        '</div></div>';
    }).join('');
    return '<div class="contacts">' +
      '<nav class="ct-list">' + list + '<p class="ct-count">' + escHtml(pick('contacts.count', TEAM.length)) + '</p></nav>' +
      '<div class="ct-detail">' + cards +
      '<div class="ct-call-screen" hidden>' +
      '<div class="ct-call-orb"><span></span><span></span><img class="ct-call-avatar" src="os/avatars/dashi.jpg" alt="" /></div>' +
      '<p class="ct-call-chip">' + escHtml(tr('contacts.call.chip', 'Аудиозвонок Сяоцзао')) + '</p>' +
      '<h3 class="ct-call-name">' + escHtml(tr('contacts.call.name', 'Даши')) + '</h3>' +
      '<p class="ct-call-status">' + escHtml(tr('contacts.call.status.dialing', 'Вызов…')) + '</p>' +
      '<button class="ct-hang" type="button" aria-label="' + escAttr(tr('contacts.call.hang', 'Завершить вызов')) + '"><img src="os/icons/ctl/ct-call.svg" alt="" /></button>' +
      '</div></div></div>';
  }

  /* ---------- Терминал · о Сяоцзао ---------- */
  function termHtml() {
    return '<div class="term-body">' +
      '<div class="term-out">' +
      '<p class="ln"><span class="prompt">xiaozao@os</span> <span class="dim">~</span> $ <span class="cmd">xiaozao --about</span></p>' +
      '<p class="term-logo">' + escHtml(tr('term.logo', '██ AI-кухня мастера ██  v2026.06')) + '</p>' +
      '<p class="ln">' + escHtml(tr('term.pos.label', 'Позиционирование')) + '      <span class="hl">' + escHtml(tr('term.pos.value', '')) + '</span></p>' +
      '<p class="ln">' + escHtml(tr('term.philosophy.label', 'Подход')) + '      ' + escHtml(tr('term.philosophy.value', '')) + '</p>' +
      '<p class="ln">          ' + escHtml(tr('term.philosophy.value2', '')) + '</p>' +
      '<p class="ln">&nbsp;</p>' +
      '<p class="ln"><span class="dim">' + escHtml(tr('term.hint', '')) + '</span></p>' +
      '</div>' +
      '<p class="ln term-inline"><span class="prompt">xiaozao@os</span>&nbsp;<span class="dim">~</span>&nbsp;$&nbsp;<input class="term-in" type="text" autocomplete="off" spellcheck="false" aria-label="' + escAttr(tr('term.aria.input', 'Ввод в терминале')) + '" /></p>' +
      '</div>';
  }

  function termEsc(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  var TERM_CMDS = {
    help: [tr('term.help.header', ''), tr('term.help.about', ''), tr('term.help.stats', ''), tr('term.help.roadmap', ''), tr('term.help.team', ''), tr('term.help.docs', ''), tr('term.help.cases', ''), tr('term.help.find', ''), tr('term.help.clear', '')],
    about: [escHtml(tr('term.pos.label', '')) + '  <span class="hl">' + escHtml(tr('term.pos.value', '')) + '</span>', escHtml(tr('term.philosophy.label', '')) + '  ' + escHtml(tr('term.philosophy.value2', '')) + '  <span class="hl">' + escHtml(tr('term.motto', '')) + '</span>'],
    stats: ['<span class="ok">✓</span> ' + escHtml(tr('term.stats.fans', '')), '<span class="ok">✓</span> ' + escHtml(tr('term.stats.tutorials', '')), '<span class="ok">✓</span> ' + escHtml(tr('term.stats.platforms', ''))],
    roadmap: [escHtml(tr('term.roadmap.1', '')), escHtml(tr('term.roadmap.2', ''))],
    find: [escHtml(tr('term.find.bilibili', '')) + '<a href="' + BILI + '" target="_blank" rel="noopener" class="hl">' + escHtml(tr('term.find.bilibili.link', '')) + '</a>', escHtml(tr('term.find.wechat', '')) + '<a href="' + QUN + '" target="_blank" rel="noopener" class="hl">' + escHtml(tr('term.find.wechat.link', '')) + '</a>']
  };

  function termRun(v, out) {
    var cmd = v.toLowerCase().replace(/^xiaozao\s+--?/, '');
    var lines;
    if (cmd === 'clear') { out.innerHTML = ''; return; }
    if (cmd === 'team') { lines = [escHtml(tr('term.opening.team', ''))]; setTimeout(function () { window.XZApps.open('team'); }, 250); }
    else if (cmd === 'docs') { lines = [escHtml(tr('term.opening.docs', ''))]; setTimeout(function () { window.XZApps.open('doc'); }, 250); }
    else if (cmd === 'cases') { lines = [escHtml(tr('term.opening.cases', ''))]; setTimeout(function () { window.XZApps.open('fx'); }, 250); }
    else if (/^sudo\b/.test(cmd)) { lines = [escHtml(tr('term.sudo', ''))]; }
    else if (TERM_CMDS[cmd]) { lines = TERM_CMDS[cmd]; }
    else { lines = [escHtml(window.XZI18N ? window.XZI18N.t('term.notfound', { cmd: v }) : 'zsh: command not found: ' + v) + '<span class="dim">' + escHtml(tr('term.hintShort', '')) + '</span>']; }
    lines.forEach(function (l) {
      var p = document.createElement('p');
      p.className = 'ln';
      p.innerHTML = l;
      out.appendChild(p);
    });
  }

  var APPS = {
    term: { title: tr('app.term.title', 'xiaozao —— -zsh —— 80×24'), klass: 'app-term', width: 600, height: 420, html: termHtml() },
    doc:  { title: tr('app.doc.title', 'Документы'), klass: 'app-finder', width: 780, height: 500, html: finderHtml(), barHtml: finderBar },
    fx:   { title: tr('app.fx.title', 'Кейсы'), klass: 'app-web', width: 980, height: 680, html: browserHtml(), barHtml: webBar },
    team: { title: tr('app.team.title', 'Контакты'), klass: 'app-ct', width: 680, height: 640, html: contactsHtml(), barHtml: ctBar },
    qrwx: { title: tr('app.qrwx.title', 'WeChat · Вход в группу'), width: 320, html: '<div class="qr-win"><img class="qr-img" src="os/qrs/wechat.png" alt="' + escAttr(tr('qr.wechat.alt', 'QR-код группы WeChat')) + '" /><p>' + escHtml(tr('qr.wechat.hint', '')) + '</p></div>' },
    qrsph: { title: tr('app.qrsph.title', 'Видеоканал · Подписка'), width: 320, html: '<div class="qr-win"><img class="qr-img" src="os/qrs/shipinhao.png" alt="' + escAttr(tr('qr.shipinhao.alt', 'QR-код видеоканала')) + '" /><p>' + escHtml(tr('qr.shipinhao.hint', '')) + '</p></div>' }
  };

  function wire(id, el) {
    if (id === 'term') {
      var out = el.querySelector('.term-out');
      var inp = el.querySelector('.term-in');
      var body = el.querySelector('.win-body');
      body.addEventListener('click', function (e) {
        if (!window.getSelection().toString()) inp.focus();
      });
      inp.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter') return;
        var v = inp.value.trim();
        var echo = document.createElement('p');
        echo.className = 'ln';
        echo.innerHTML = '<span class="prompt">xiaozao@os</span> <span class="dim">~</span> $ <span class="cmd">' + termEsc(inp.value) + '</span>';
        out.appendChild(echo);
        if (v) termRun(v, out);
        inp.value = '';
        body.scrollTop = body.scrollHeight;
      });
      setTimeout(function () { inp.focus(); }, 400);
    }
    if (id === 'doc') {
      el.querySelectorAll('[data-doc-filter]').forEach(function (b) {
        b.addEventListener('click', function () {
          var tag = b.getAttribute('data-doc-filter');
          var count = 0;
          el.querySelectorAll('[data-doc-filter]').forEach(function (x) { x.classList.toggle('on', x === b); });
          el.querySelectorAll('.fl-row[data-doc-tag]').forEach(function (row) {
            var show = !tag || row.getAttribute('data-doc-tag') === tag;
            row.style.display = show ? '' : 'none';
            if (show) count += 1;
          });
          var countEl = el.querySelector('.doc-count');
          if (countEl) countEl.textContent = count;
        });
      });
    }
    if (id === 'fx') {
      var tabbar = el.querySelector('.web-tabbar');
      var page = el.querySelector('.web-page');
      function displayUrl(url) {
        if (/^https?:\/\//.test(url) || /^[^/]+\.[^/]+/.test(url)) return url;
        return new URL(url, location.href).href;
      }
      function activateTab(tab, paneMatch, url) {
        el.querySelectorAll('.web-tab').forEach(function (x) { x.classList.toggle('on', x === tab); });
        el.querySelectorAll('.web-pane').forEach(function (p) { p.style.display = paneMatch(p) ? '' : 'none'; });
        var u = el.querySelector('#fx-url');
        if (u) {
          u.value = displayUrl(url);
          u.title = u.value;
        }
      }
      function tabPane(url) {
        return [].slice.call(page.querySelectorAll('.preview-pane')).find(function (p) {
          return p.getAttribute('data-preview-url') === url;
        });
      }
      function switchTab(tab) {
        var key = tab.getAttribute('data-fx');
        var previewUrl = tab.getAttribute('data-preview-url');
        if (key) {
          activateTab(tab, function (p) { return p.getAttribute('data-pane') === key; }, FX_URLS[key]);
        } else if (previewUrl) {
          activateTab(tab, function (p) { return p.getAttribute('data-preview-url') === previewUrl; }, previewUrl);
        }
      }
      function fallbackCopy(text) {
        var t = document.createElement('textarea');
        t.value = text;
        t.setAttribute('readonly', '');
        t.style.position = 'fixed';
        t.style.left = '-9999px';
        document.body.appendChild(t);
        t.select();
        document.execCommand('copy');
        t.remove();
      }
      function copyPreviewLink(btn, url) {
        var fullUrl = new URL(url, location.href).href;
        var done = function () {
          btn.classList.add('copied');
          setTimeout(function () { btn.classList.remove('copied'); }, 900);
          toast(tr('toast.copied', 'Ссылка скопирована'));
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(fullUrl).then(done).catch(function () { fallbackCopy(fullUrl); done(); });
        } else {
          fallbackCopy(fullUrl);
          done();
        }
      }
      function closePreviewTab(tab) {
        var url = tab.getAttribute('data-preview-url');
        var origin = tab.getAttribute('data-origin-fx');
        var wasActive = tab.classList.contains('on');
        var pane = tabPane(url);
        var prevPreview = tab.previousElementSibling && tab.previousElementSibling.hasAttribute('data-preview-url') ? tab.previousElementSibling : null;
        var next = prevPreview || (origin && tabbar.querySelector('[data-fx="' + origin + '"]')) || tab.previousElementSibling || tab.nextElementSibling || tabbar.querySelector('.web-tab');
        tab.remove();
        if (pane) pane.remove();
        if (wasActive && next) switchTab(next);
      }
      tabbar.addEventListener('click', function (e) {
        var copy = e.target.closest('.tab-copy');
        if (copy) {
          e.stopPropagation();
          copyPreviewLink(copy, copy.closest('.web-tab').getAttribute('data-preview-url'));
          return;
        }
        var close = e.target.closest('.tab-close');
        if (close) {
          e.stopPropagation();
          closePreviewTab(close.closest('.web-tab'));
          return;
        }
        var b = e.target.closest('.web-tab');
        if (!b) return;
        switchTab(b);
      });
      var urlInput = el.querySelector('#fx-url');
      if (urlInput) {
        urlInput.addEventListener('click', function () { urlInput.select(); });
        urlInput.addEventListener('focus', function () { urlInput.select(); });
      }
      el.querySelectorAll('.cs-card').forEach(function (card) {
        card.addEventListener('click', function (e) {
          e.preventDefault();
          var url = card.getAttribute('href');
          var title = card.getAttribute('data-case-title') || card.textContent.trim();
          var tab = [].slice.call(tabbar.querySelectorAll('[data-preview-url]')).find(function (x) {
            return x.getAttribute('data-preview-url') === url;
          });
          if (!tab) {
            var originPane = card.closest('.web-pane');
            var origin = originPane && originPane.getAttribute('data-pane');
            tab = document.createElement('button');
            tab.className = 'web-tab preview-tab';
            tab.type = 'button';
            tab.setAttribute('data-preview-url', url);
            if (origin) tab.setAttribute('data-origin-fx', origin);
            tab.innerHTML = '<span class="tab-title">' + escHtml(title) + '</span>' +
              '<span class="tab-copy" role="button" aria-label="' + escAttr(tr('web.tab.copy', 'Копировать ссылку')) + '" title="' + escAttr(tr('web.tab.copy', 'Копировать ссылку')) + '">⧉</span>' +
              '<span class="tab-close" role="button" aria-label="' + escAttr(tr('web.tab.close', 'Закрыть вкладку')) + '" title="' + escAttr(tr('web.tab.close', 'Закрыть вкладку')) + '">×</span>';
            tabbar.appendChild(tab);
            var pane = document.createElement('div');
            pane.className = 'web-pane preview-pane';
            pane.setAttribute('data-preview-url', url);
            pane.style.display = 'none';
            pane.innerHTML = '<iframe class="case-preview" src="' + escAttr(url) + '" title="' + escAttr(title) + '"></iframe>';
            page.appendChild(pane);
          }
          activateTab(tab, function (p) { return p.getAttribute('data-preview-url') === url; }, url);
          tabbar.scrollLeft = tab.offsetLeft;
        });
      });
    }
    if (id === 'team') {
      var callAudio = null;
      var callTimer = null;
      var callRun = 0;
      var callScreen = el.querySelector('.ct-call-screen');
      var callStatus = el.querySelector('.ct-call-status');
      function stopCallAudio() {
        if (callAudio) {
          try {
            callAudio.pause();
            callAudio.currentTime = 0;
            callAudio.muted = true;
            callAudio.removeAttribute('src');
            callAudio.load();
          } catch (e) {}
          callAudio = null;
        }
        if (callTimer) {
          clearTimeout(callTimer);
          callTimer = null;
        }
      }
      function showContactCard(key) {
        if (callScreen) callScreen.hidden = true;
        el.querySelectorAll('.ct-card').forEach(function (c) {
          c.style.display = c.getAttribute('data-card') === key ? '' : 'none';
        });
      }
      function setCallState(text, cls) {
        if (!callScreen || !callStatus) return;
        callScreen.classList.remove('dialing', 'connected', 'ended');
        callScreen.classList.add(cls);
        callStatus.textContent = text;
      }
      function hangUp(run) {
        if (run && run !== callRun) return;
        callRun += 1;
        stopCallAudio();
        setCallState(tr('contacts.call.status.ended', 'Завершён'), 'ended');
        callTimer = setTimeout(function () { showContactCard('dashi'); }, 900);
      }
      function scheduleClipEnd(run, done, ms) {
        if (callTimer) clearTimeout(callTimer);
        callTimer = setTimeout(function () {
          callTimer = null;
          if (run === callRun) done();
        }, ms);
      }
      function playClip(audio, run, ms, done) {
        callAudio = audio;
        audio.currentTime = 0;
        audio.addEventListener('ended', function () {
          if (callTimer) {
            clearTimeout(callTimer);
            callTimer = null;
          }
          if (run === callRun) done();
        }, { once: true });
        var p = audio.play();
        if (p && p.catch) p.catch(function () {
          if (run === callRun) scheduleClipEnd(run, done, ms);
        });
      }
      function startDashiCall() {
        callRun += 1;
        var run = callRun;
        stopCallAudio();
        showContactCard('');
        if (callScreen) {
          callScreen.hidden = false;
          callScreen.scrollIntoView({ block: 'start' });
        }
        setCallState(tr('contacts.call.status.dialing', 'Вызов…'), 'dialing');
        playClip(new Audio(CALL_DIALING), run, CALL_DIALING_MS, function () {
          setCallState(tr('contacts.call.status.connected', 'Соединено'), 'connected');
          playClip(new Audio(CALL_CONNECTED), run, CALL_CONNECTED_MS, function () { hangUp(run); });
        });
      }
      el.querySelectorAll('.ct-item').forEach(function (b) {
        b.addEventListener('click', function () {
          var key = b.getAttribute('data-ct');
          callRun += 1;
          stopCallAudio();
          if (callScreen) callScreen.hidden = true;
          el.querySelectorAll('.ct-item').forEach(function (x) { x.classList.toggle('on', x === b); });
          el.querySelectorAll('.ct-card').forEach(function (c) {
            c.style.display = c.getAttribute('data-card') === key ? '' : 'none';
          });
        });
      });
      el.querySelectorAll('[data-call="dashi"]').forEach(function (b) {
        b.addEventListener('click', function (e) {
          e.preventDefault();
          startDashiCall();
        });
      });
      var hang = el.querySelector('.ct-hang');
      if (hang) hang.addEventListener('click', function () { hangUp(); });
    }
  }

  window.XZApps = {
    open: function (id, pos) {
      var app = APPS[id];
      if (!app) return;
      var opts = pos ? Object.assign({}, app, pos) : app;
      var el = window.XZWM.open(id, app.title, app.html, opts);
      if (el && !el.__wired) { el.__wired = true; wire(id, el); }
      return el;
    }
  };
})();
