// Сяоцзао OS · минимальный оконный менеджер
(function () {
  function tr(key, fallback) {
    return window.xztr ? window.xztr(key, fallback) : fallback;
  }
  var desktop = null;
  var zTop = 10;
  var openCount = 0;
  var wins = {}; // id -> element
  var silent = 0;
  var lastLiveSync = 0;

  function focusWin(el) {
    zTop += 1;
    el.style.zIndex = zTop;
  }

  function withSilent(fn) {
    silent += 1;
    try { return fn(); }
    finally { silent -= 1; }
  }

  function winState(el) {
    desktop = desktop || document.querySelector('.desktop');
    var r = el.getBoundingClientRect();
    var dr = desktop.getBoundingClientRect();
    return {
      x: Math.max(0, el.offsetLeft) / Math.max(1, desktop.clientWidth),
      y: Math.max(0, el.offsetTop) / Math.max(1, desktop.clientHeight),
      w: r.width / Math.max(1, dr.width),
      h: r.height / Math.max(1, dr.height),
      min: !!el.__min,
      max: el.classList.contains('max')
    };
  }

  function emitWin(action, id, save) {
    if (silent || !window.XZPresence || !window.XZPresence.sendWindow) return;
    var el = wins[id];
    var state = el ? winState(el) : {};
    window.XZPresence.sendWindow(action, id, state, save !== false);
  }

  function emitLive(action, id) {
    var now = Date.now();
    if (now - lastLiveSync < 80) return;
    lastLiveSync = now;
    emitWin(action, id, false);
  }

  function makeDraggable(el, bar) {
    var sx, sy, ox, oy, dragging = false;
    bar.addEventListener('pointerdown', function (e) {
      if (e.target.closest('.traffic')) return;
      if (e.target.closest('input, textarea, select, [contenteditable="true"]')) return;
      if (el.classList.contains('max')) return;
      dragging = true;
      sx = e.clientX; sy = e.clientY;
      ox = el.offsetLeft; oy = el.offsetTop;
      bar.setPointerCapture(e.pointerId);
    });
    bar.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var x = ox + (e.clientX - sx);
      var y = oy + (e.clientY - sy);
      var maxX = desktop.clientWidth - 80;
      var maxY = desktop.clientHeight - 48;
      el.style.left = Math.min(Math.max(x, 80 - el.offsetWidth), maxX) + 'px';
      el.style.top = Math.min(Math.max(y, 0), maxY) + 'px';
      emitLive('move', el.__id);
    });
    bar.addEventListener('pointerup', function () {
      if (dragging) emitWin('move', el.__id, true);
      dragging = false;
    });
  }

  function addResizers(el) {
    var MIN_W = 340, MIN_H = 240;
    ['l', 'r', 'b', 'bl', 'br'].forEach(function (k) {
      var h = document.createElement('div');
      h.className = 'rz rz-' + k;
      el.appendChild(h);
      h.addEventListener('pointerdown', function (e) {
        if (el.classList.contains('max')) return;
        if (e.button !== 0) return;
        e.stopPropagation();
        e.preventDefault();
        focusWin(el);
        var sx = e.clientX, sy = e.clientY;
        var r = el.getBoundingClientRect();
        var sl = el.offsetLeft, st = el.offsetTop, sw = r.width, sh = r.height;
        el.style.maxHeight = 'none';
        h.setPointerCapture(e.pointerId);
        function mv(e2) {
          var dx = e2.clientX - sx, dy = e2.clientY - sy;
          var maxW = desktop.clientWidth, maxH = desktop.clientHeight - st;
          if (k.indexOf('r') >= 0) {
            el.style.width = Math.min(Math.max(MIN_W, sw + dx), maxW - sl) + 'px';
          }
          if (k.indexOf('l') >= 0) {
            var w = Math.min(Math.max(MIN_W, sw - dx), sl + sw);
            el.style.width = w + 'px';
            el.style.left = (sl + (sw - w)) + 'px';
          }
          if (k.indexOf('b') >= 0) {
            el.style.height = Math.min(Math.max(MIN_H, sh + dy), maxH) + 'px';
          }
          emitLive('resize', el.__id);
        }
        function up() {
          h.removeEventListener('pointermove', mv);
          h.removeEventListener('pointerup', up);
          emitWin('resize', el.__id, true);
        }
        h.addEventListener('pointermove', mv);
        h.addEventListener('pointerup', up);
      });
    });
  }

  function closeWin(id) {
    var el = wins[id];
    if (!el) return;
    el.classList.remove('open');
    setTimeout(function () { el.remove(); }, 180);
    delete wins[id];
    var d = document.querySelector('.dock-item[data-app="' + id + '"]');
    if (d) d.classList.remove('running');
    updateHint();
    emitWin('close', id, true);
  }

  function minimizeWin(id) {
    var el = wins[id];
    if (!el || el.__min) return;
    el.__min = true;
    var dock = document.querySelector('.dock');
    var r = el.getBoundingClientRect(), d = dock.getBoundingClientRect();
    var dx = (d.left + d.width / 2) - (r.left + r.width / 2);
    var dy = (d.top + 20) - (r.top + r.height / 2);
    el.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    el.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(0.04)';
    el.style.opacity = '0';
    setTimeout(function () { if (el.__min) el.style.visibility = 'hidden'; }, 300);
    emitWin('min', id, true);
  }

  function restoreWin(id) {
    var el = wins[id];
    if (!el) return;
    if (el.__min) {
      el.__min = false;
      el.style.visibility = '';
      void el.offsetWidth;
      el.style.transform = '';
      el.style.opacity = '';
      setTimeout(function () { el.style.transition = ''; }, 320);
    }
    focusWin(el);
    emitWin('restore', id, true);
  }

  function toggleMax(id) {
    var el = wins[id];
    if (!el) return;
    var desk = document.querySelector('.desktop');
    var deskRect = desk.getBoundingClientRect();
    var dock = document.querySelector('.dock');
    var dockRect = dock && dock.getBoundingClientRect();
    var maxH = dockRect ? Math.max(240, dockRect.top - deskRect.top - 10) : desk.clientHeight;
    var r = el.getBoundingClientRect();
    // Сначала фиксируем текущий размер в px, чтобы у перехода была начальная точка
    el.style.width = r.width + 'px';
    el.style.height = r.height + 'px';
    el.style.maxHeight = 'none';
    void el.offsetWidth;
    el.style.transition = 'left 0.32s ease, top 0.32s ease, width 0.32s ease, height 0.32s ease, border-radius 0.32s ease';
    if (!el.classList.contains('max')) {
      el.__rect = { l: el.offsetLeft + 'px', t: el.offsetTop + 'px', w: r.width + 'px', h: r.height + 'px' };
      el.classList.add('max');
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.width = desk.clientWidth + 'px';
      el.style.height = maxH + 'px';
    } else {
      el.classList.remove('max');
      var p = el.__rect || {};
      el.style.left = p.l; el.style.top = p.t;
      el.style.width = p.w; el.style.height = p.h;
    }
    setTimeout(function () { el.style.transition = ''; el.style.maxHeight = ''; }, 340);
    focusWin(el);
    emitWin('max', id, true);
  }

  function updateHint() {
    var hint = document.querySelector('.desktop-hint');
    if (hint) hint.classList.toggle('hide', Object.keys(wins).length > 0);
  }

  function openWin(id, title, html, opts) {
    opts = opts || {};
    if (wins[id]) {
      if (opts.silent) withSilent(function () { restoreWin(id); });
      else restoreWin(id);
      return wins[id];
    }
    desktop = desktop || document.querySelector('.desktop');

    var el = document.createElement('section');
    el.className = 'window' + (opts.klass ? ' ' + opts.klass : '');
    el.__id = id;
    el.dataset.app = id;
    el.setAttribute('data-screen-label', title);
    if (opts.width) el.style.width = 'min(' + opts.width + 'px, calc(100vw - 32px))';
    if (opts.height) el.style.height = 'min(' + opts.height + 'px, calc(100% - 80px))';

    var bar = document.createElement('header');
    bar.className = 'win-bar';
    var traffic = document.createElement('span');
    traffic.className = 'traffic';
    var bClose = document.createElement('button');
    bClose.className = 't-close'; bClose.title = tr('window.close', 'Закрыть');
    var bMin = document.createElement('button');
    bMin.className = 't-min'; bMin.title = tr('window.minimize', 'Свернуть');
    var bMax = document.createElement('button');
    bMax.className = 't-max'; bMax.title = tr('window.maximize', 'Развернуть');
    traffic.appendChild(bClose); traffic.appendChild(bMin); traffic.appendChild(bMax);
    bar.appendChild(traffic);
    if (opts.barHtml) {
      bar.insertAdjacentHTML('beforeend', opts.barHtml);
    } else {
      var tt = document.createElement('span');
      tt.className = 'win-title';
      tt.textContent = title;
      bar.appendChild(tt);
    }

    var body = document.createElement('div');
    body.className = 'win-body';
    body.innerHTML = html;

    el.appendChild(bar); el.appendChild(body);
    desktop.appendChild(el);

    // Каскадное позиционирование (переопределяется opts.x/opts.y)
    var n = openCount % 7;
    var baseX = (desktop.clientWidth - Math.min(opts.width || 720, desktop.clientWidth - 32)) / 2;
    el.style.left = Math.max(12, baseX + (n - 2) * 36) + 'px';
    el.style.top = Math.max(8, 48 + n * 30) + 'px';
    openCount += 1;
    if (opts.x != null) el.style.left = Math.max(0, Math.min(opts.x, desktop.clientWidth - el.offsetWidth - 8)) + 'px';
    if (opts.y != null) el.style.top = Math.max(0, Math.min(opts.y, desktop.clientHeight - 60)) + 'px';

    bClose.addEventListener('click', function (e) { e.stopPropagation(); closeWin(id); });
    bMin.addEventListener('click', function (e) { e.stopPropagation(); minimizeWin(id); });
    bMax.addEventListener('click', function (e) { e.stopPropagation(); toggleMax(id); });
    el.addEventListener('pointerdown', function () { focusWin(el); });
    makeDraggable(el, bar);
    addResizers(el);

    wins[id] = el;
    focusWin(el);
    void el.offsetWidth; // принудительный reflow, чтобы входная анимация сработала стабильно
    requestAnimationFrame(function () { el.classList.add('open'); });

    var d = document.querySelector('.dock-item[data-app="' + id + '"]');
    if (d) d.classList.add('running');
    updateHint();
    if (!opts.silent) emitWin('open', id, true);
    return el;
  }

  function applyState(id, state) {
    var el = wins[id];
    if (!el || !state) return;
    desktop = desktop || document.querySelector('.desktop');
    if (state.min) {
      minimizeWin(id);
      return;
    }
    if (el.__min) restoreWin(id);
    el.classList.toggle('max', !!state.max);
    el.style.maxHeight = 'none';
    el.style.transition = '';
    if (state.max) {
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.width = desktop.clientWidth + 'px';
      var dock = document.querySelector('.dock');
      var dockRect = dock && dock.getBoundingClientRect();
      var deskRect = desktop.getBoundingClientRect();
      var maxH = dockRect ? Math.max(240, dockRect.top - deskRect.top - 10) : desktop.clientHeight;
      el.style.height = maxH + 'px';
      return;
    }
    el.style.left = Math.round((Number(state.x) || 0) * desktop.clientWidth) + 'px';
    el.style.top = Math.round((Number(state.y) || 0) * desktop.clientHeight) + 'px';
    el.style.width = Math.round((Number(state.w) || 0.5) * desktop.clientWidth) + 'px';
    el.style.height = Math.round((Number(state.h) || 0.5) * desktop.clientHeight) + 'px';
  }

  function applyRemote(data) {
    if (!data || !data.id) return;
    withSilent(function () {
      if (data.action === 'close') {
        closeWin(data.id);
        return;
      }
      if (!wins[data.id] && window.XZApps) window.XZApps.open(data.id, { silent: true });
      if (!wins[data.id]) return;
      if (data.action === 'min') minimizeWin(data.id);
      else if (data.action === 'restore') restoreWin(data.id);
      applyState(data.id, data.state);
      focusWin(wins[data.id]);
    });
  }

  function applyRemoteState(windows) {
    if (!windows) return;
    Object.keys(windows).forEach(function (id) {
      applyRemote({ id: id, action: 'open', state: windows[id] });
    });
  }

  window.addEventListener('xz-presence-action', function (e) {
    var data = e.detail || {};
    if (data.type === 'window') applyRemote(data);
  });
  window.addEventListener('xz-presence-state', function (e) {
    applyRemoteState(e.detail && e.detail.windows);
  });

  window.XZWM = { open: openWin, close: closeWin, restore: restoreWin, applyRemote: applyRemote, applyRemoteState: applyRemoteState, silent: withSilent };
})();
