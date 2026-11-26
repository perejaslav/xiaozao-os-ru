// Сяоцзао OS · значки рабочего стола: рендер контента + рамка выделения + перетаскивание + Quick Look
(function () {
  function tr(key, fallback) {
    return window.xztr ? window.xztr(key, fallback) : fallback;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  var PLATFORM_KEYS = { 'B站': 'platform.bilibili', '抖音': 'platform.douyin', '小红书': 'platform.xiaohongshu', '飞书': 'platform.feishu' };
  function platformLabel(p) {
    var key = PLATFORM_KEYS[p];
    return key ? tr(key, p) : (p || tr('desk.platform.video', 'Видео'));
  }
  var layer = document.querySelector('.desk-icons');
  var desk = document.querySelector('.desktop');
  if (!layer || !desk) return;

  document.addEventListener('dragstart', function (e) {
    if (e.target && e.target.closest('img, image-slot, .desk-file')) e.preventDefault();
  });

  var videos = (window.XZContent && window.XZContent.videos) || [];
  if (videos.length) {
    layer.innerHTML = '';
    videos.forEach(function (v, i) {
      var cleanTitle = (v.title || '').replace(/^【商】/, '');
      var label = tr('video.' + (i + 1), cleanTitle);
      var a = document.createElement('a');
      a.className = 'desk-file';
      a.href = v.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.tabIndex = 0;
      a.dataset.id = 'v' + (i + 1);
      a.dataset.title = label;
      a.dataset.cover = v.cover;
      a.dataset.embed = v.embed || '';
      a.dataset.platform = v.platform || '视频';

      var thumb = document.createElement('span');
      thumb.className = 'desk-thumb';
      var img = document.createElement('img');
      img.src = v.cover;
      img.alt = '';
      var play = document.createElement('span');
      play.className = 'pl';
      play.textContent = '▶';
      var plat = document.createElement('span');
      plat.className = 'dur';
      plat.textContent = platformLabel(v.platform);
      thumb.appendChild(img);
      thumb.appendChild(play);
      thumb.appendChild(plat);

      var name = document.createElement('span');
      name.className = 'fname';
      name.textContent = label + '.mp4';

      a.appendChild(thumb);
      a.appendChild(name);
      layer.appendChild(a);
    });
  }

  var files = [].slice.call(layer.querySelectorAll('.desk-file'));
  var CELL_W = 116, CELL_H = 122, M = 16;
  var dirty = false;

  function layout(force) {
    if (dirty && !force) return;
    var W = desk.clientWidth, H = desk.clientHeight;
    var perCol = Math.max(1, Math.floor((H - 130) / CELL_H));
    files.forEach(function (f, i) {
      var col = Math.floor(i / perCol), row = i % perCol;
      f.style.left = Math.max(0, Math.min(M + col * CELL_W, W - CELL_W)) + 'px';
      f.style.top = Math.max(0, Math.min(M + row * CELL_H, H - 135)) + 'px';
    });
  }

  function selectedFiles() {
    return files.filter(function (x) { return x.classList.contains('sel'); });
  }
  function clearSel() {
    files.forEach(function (x) { x.classList.remove('sel'); });
  }

  var filesById = {};
  var restoreTimers = {};
  files.forEach(function (f, i) {
    filesById[f.dataset.id] = f;
    f.dataset.order = String(i);
  });

  function sortFiles() {
    files.sort(function (a, b) { return Number(a.dataset.order) - Number(b.dataset.order); });
  }

  function restoreVideos(ids) {
    ids.forEach(function (id) {
      var f = filesById[id];
      if (!f || f.isConnected) return;
      f.classList.remove('sel', 'drag');
      layer.appendChild(f);
      if (files.indexOf(f) < 0) files.push(f);
    });
    sortFiles();
    if (!dirty) layout(true);
  }

  function scheduleVideoRestore(ids, restoreAt) {
    ids.forEach(function (id) {
      if (restoreTimers[id]) clearTimeout(restoreTimers[id]);
      var wait = Math.max(0, (restoreAt || Date.now() + 30000) - Date.now());
      restoreTimers[id] = setTimeout(function () {
        delete restoreTimers[id];
        restoreVideos([id]);
      }, wait);
    });
  }

  function deleteVideos(targets, opts) {
    opts = opts || {};
    var ids = [];
    targets.forEach(function (f) {
      if (!f || !f.isConnected) return;
      ids.push(f.dataset.id);
      f.remove();
      files = files.filter(function (x) { return x !== f; });
    });
    if (!ids.length) return;
    closeQuick();
    hideMenu();
    if (!dirty) layout(true);
    var restoreAt = opts.restoreAt || Date.now() + 30000;
    scheduleVideoRestore(ids, restoreAt);
    if (!opts.remote && window.XZPresence && window.XZPresence.sendVideoDelete) {
      window.XZPresence.sendVideoDelete(ids);
    }
  }

  var quick = null;
  function quickEl() {
    if (quick) return quick;
    quick = document.createElement('div');
    quick.className = 'quicklook ql-effect-4';
    quick.innerHTML =
      '<div class="ql-card">' +
      '<button class="ql-close" type="button" aria-label="' + esc(tr('desk.ql.close', 'Закрыть')) + '">×</button>' +
      '<div class="ql-stage"></div>' +
      '<div class="ql-meta"><b></b><span></span></div>' +
      '</div>';
    quick.addEventListener('click', function (e) {
      if (e.target === quick || e.target.closest('.ql-close')) closeQuick();
    });
    document.body.appendChild(quick);
    return quick;
  }
  function openQuick(file) {
    var q = quickEl();
    var stage = q.querySelector('.ql-stage');
    stage.innerHTML = '';
    if (file.dataset.embed) {
      var frame = document.createElement('iframe');
      frame.src = file.dataset.embed;
      frame.allow = 'fullscreen; autoplay; encrypted-media; picture-in-picture';
      frame.allowFullscreen = true;
      stage.appendChild(frame);
    } else {
      var img = document.createElement('img');
      img.src = file.dataset.cover;
      img.alt = '';
      stage.appendChild(img);
    }
    q.querySelector('.ql-meta b').textContent = file.dataset.title || file.querySelector('.fname').textContent;
    q.querySelector('.ql-meta span').textContent = platformLabel(file.dataset.platform);
    q.classList.add('open');
  }
  function closeQuick() {
    if (quick) quick.classList.remove('open');
  }

  var menu = null, menuTarget = null;
  function menuEl() {
    if (menu) return menu;
    menu = document.createElement('div');
    menu.className = 'desk-menu';
    menu.innerHTML = '<button type="button" data-act="delete">' + esc(tr('desk.menu.delete', 'Удалить')) + '</button>';
    menu.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act="delete"]');
      if (!b || !menuTarget) return;
      var targets = menuTarget.classList.contains('sel') ? selectedFiles() : [menuTarget];
      deleteVideos(targets);
    });
    document.body.appendChild(menu);
    return menu;
  }
  function showMenu(file, x, y) {
    if (!file.classList.contains('sel')) {
      files.forEach(function (f) { f.classList.toggle('sel', f === file); });
    }
    file.focus({ preventScroll: true });
    menuTarget = file;
    var m = menuEl();
    m.classList.add('open');
    var left = Math.min(x, window.innerWidth - 120);
    var top = Math.min(y, window.innerHeight - 44);
    m.style.left = Math.max(8, left) + 'px';
    m.style.top = Math.max(40, top) + 'px';
  }
  function hideMenu() {
    if (menu) menu.classList.remove('open');
    menuTarget = null;
  }

  function initStickerDrag() {
    var sticker = document.querySelector('.desktop-sticker');
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

  function startDanmaku() {
    var texts = (window.XZContent && window.XZContent.danmaku) || [];
    if (!texts.length) return;
    var wrap = document.createElement('div');
    wrap.className = 'desktop-danmaku';
    wrap.setAttribute('aria-hidden', 'true');
    desk.appendChild(wrap);
    var lanes = [10, 50, 90, 130].map(function (top) { return { top: top, availableAt: 0 }; });
    function spawn() {
      var now = performance.now();
      var open = lanes.filter(function (lane) { return lane.availableAt <= now; });
      if (!open.length) return;
      var lane = open[Math.floor(Math.random() * open.length)];
      var item = document.createElement('span');
      item.className = 'danmaku-item';
      item.textContent = texts[Math.floor(Math.random() * texts.length)];
      var duration = 22 + Math.random() * 10;
      item.style.top = lane.top + 'px';
      item.style.animationDuration = duration.toFixed(1) + 's';
      item.style.opacity = (0.72 + Math.random() * 0.22).toFixed(2);
      wrap.appendChild(item);
      var width = item.getBoundingClientRect().width;
      var travel = window.innerWidth + width * 1.2;
      var safeDelay = duration * 1000 * Math.min(0.7, (width + 96) / travel);
      lane.availableAt = now + safeDelay;
      item.addEventListener('animationend', function () { item.remove(); });
    }
    for (var i = 0; i < 4; i += 1) setTimeout(spawn, i * 850);
    setInterval(spawn, 1800);
  }

  files.forEach(function (f) {
    var moved = false;
    f.addEventListener('pointerdown', function (e) {
      if (e.button !== 0) return;
      if (e.shiftKey) {
        f.classList.toggle('sel');
      } else if (!f.classList.contains('sel')) {
        files.forEach(function (x) { x.classList.toggle('sel', x === f); });
      }
      f.focus({ preventScroll: true });
      var group = selectedFiles();
      if (group.indexOf(f) < 0) group = [f];
      moved = false;
      var sx = e.clientX, sy = e.clientY;
      var starts = group.map(function (g) { return { el: g, x: g.offsetLeft, y: g.offsetTop }; });
      f.setPointerCapture(e.pointerId);
      function mv(e2) {
        var dx = e2.clientX - sx, dy = e2.clientY - sy;
        if (Math.abs(dx) + Math.abs(dy) > 6) moved = true;
        if (!moved) return;
        starts.forEach(function (s) {
          s.el.classList.add('drag');
          s.el.style.left = Math.min(Math.max(s.x + dx, 0), desk.clientWidth - CELL_W) + 'px';
          s.el.style.top = Math.min(Math.max(s.y + dy, 0), desk.clientHeight - 135) + 'px';
        });
      }
      function up() {
        f.removeEventListener('pointermove', mv);
        f.removeEventListener('pointerup', up);
        starts.forEach(function (s) { s.el.classList.remove('drag'); });
        if (moved) dirty = true;
      }
      f.addEventListener('pointermove', mv);
      f.addEventListener('pointerup', up);
    });
    f.addEventListener('click', function (e) {
      if (moved || f.dataset.platform === 'B站') {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);
    f.addEventListener('dblclick', function (e) {
      e.preventDefault();
      window.open(f.href, '_blank', 'noopener');
    });
    f.addEventListener('contextmenu', function (e) {
      e.preventDefault();
      e.stopPropagation();
      showMenu(f, e.clientX, e.clientY);
    });
  });

  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    if (!e.target.closest('.desk-file')) hideMenu();
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.desk-menu')) hideMenu();
  });

  window.addEventListener('xz-presence-action', function (e) {
    var data = e.detail || {};
    if (data.type !== 'video-delete') return;
    var targets = (data.ids || []).map(function (id) { return filesById[id]; }).filter(Boolean);
    deleteVideos(targets, { remote: true, restoreAt: data.restoreAt });
  });

  window.addEventListener('xz-presence-state', function (e) {
    var deleted = (e.detail && e.detail.deletedVideos) || [];
    deleted.forEach(function (item) {
      var f = filesById[item.id];
      if (f) deleteVideos([f], { remote: true, restoreAt: item.restoreAt });
    });
  });

  desk.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    if (e.target.closest('.desk-file') || e.target.closest('.window') || e.target.closest('.dock')) return;
    var dr = desk.getBoundingClientRect();
    var x0 = e.clientX - dr.left, y0 = e.clientY - dr.top;
    var box = null, dragged = false;
    function mv(e2) {
      var x1 = e2.clientX - dr.left, y1 = e2.clientY - dr.top;
      if (!dragged && Math.abs(x1 - x0) + Math.abs(y1 - y0) < 4) return;
      dragged = true;
      if (!box) {
        box = document.createElement('div');
        box.className = 'marquee-sel';
        desk.appendChild(box);
      }
      var l = Math.min(x0, x1), t = Math.min(y0, y1);
      var w = Math.abs(x1 - x0), h = Math.abs(y1 - y0);
      box.style.left = l + 'px'; box.style.top = t + 'px';
      box.style.width = w + 'px'; box.style.height = h + 'px';
      files.forEach(function (f) {
        var fl = f.offsetLeft, ft = f.offsetTop;
        var hit = fl < l + w && fl + f.offsetWidth > l && ft < t + h && ft + f.offsetHeight > t;
        f.classList.toggle('sel', hit);
      });
    }
    function up() {
      window.removeEventListener('pointermove', mv);
      window.removeEventListener('pointerup', up);
      if (box) box.remove();
      if (!dragged) clearSel();
    }
    window.addEventListener('pointermove', mv);
    window.addEventListener('pointerup', up);
  });

  window.addEventListener('keydown', function (e) {
    var sel = selectedFiles()[0];
    if (e.target && /input|textarea|select/i.test(e.target.tagName) && !sel) return;
    if (e.key === 'Escape') { closeQuick(); hideMenu(); return; }
    if (e.key !== ' ') return;
    if (!sel) return;
    e.preventDefault();
    if (quick && quick.classList.contains('open')) closeQuick();
    else openQuick(sel);
  });

  layout();
  initStickerDrag();
  startDanmaku();
  window.addEventListener('resize', layout);
  window.addEventListener('scroll', hideMenu, true);
})();
