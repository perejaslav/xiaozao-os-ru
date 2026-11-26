// Сяоцзао · совместные курсоры и легкая координация
(function () {
  if (!("WebSocket" in window)) return;

  // ?presence=0 полностью отключает подключение (например, для демо/офлайна).
  var ENABLED = !/[?&]presence=0\b/.test(location.search);
  // Лимит попыток переподключения: без него страница бесконечно долбит сервер.
  var MAX_RETRIES = 10;

  var STORE_KEY = "xz-presence-profile";
  var SEND_MS = 70;
  var STALE_MS = 9000;
  var RECONNECT_MS = [900, 1800, 3500, 6000];
  var endpoint = window.XZ_PRESENCE_WS ||
    (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)
      ? "ws://127.0.0.1:8787/ws"
      : "wss://presence.dsxzai.com/ws");
  var room = "dsxzai-site";
  var ws = null;
  var selfId = "";
  var reconnectTry = 0;
  var lastSend = 0;
  var connected = false;
  var onlineCount = 1;
  var pointer = { x: 0.5, y: 0.5, down: false };
  var peers = {};
  var nodes = {};
  var cleanupTimer = null;
  var pingTimer = null;
  var profile = loadProfile();

  function loadProfile() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    var id = (crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()).replace(/-/g, "");
    var colors = ["#4f8cff", "#ff5c8a", "#24c486", "#ffb020", "#8c6cff", "#00a8c8"];
    var p = {
      id: id,
      name: "Гость " + id.slice(0, 2).toUpperCase(),
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
    return p;
  }

  function pagePath() {
    return decodeURIComponent(location.pathname || "/").slice(0, 80);
  }

  function send(data) {
    if (!ws || ws.readyState !== WebSocket.OPEN) return false;
    try {
      ws.send(JSON.stringify(data));
      return true;
    } catch (e) {
      return false;
    }
  }

  function hello() {
    send({
      type: "hello",
      name: profile.name,
      color: profile.color,
      path: pagePath()
    });
  }

  function connect() {
    if (ws && (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING)) return;
    try {
      ws = new WebSocket(endpoint + "?room=" + encodeURIComponent(room));
    } catch (e) {
      scheduleReconnect();
      return;
    }
    ws.addEventListener("open", function () {
      connected = true;
      reconnectTry = 0;
      hello();
      sendCursor(true);
      clearInterval(pingTimer);
      pingTimer = setInterval(function () { send({ type: "ping" }); }, 12000);
    });
    ws.addEventListener("message", function (event) {
      var data;
      try { data = JSON.parse(event.data); } catch (e) { return; }
      handleMessage(data);
    });
    ws.addEventListener("close", onDisconnect);
    ws.addEventListener("error", onDisconnect);
  }

  function onDisconnect() {
    if (!connected && ws && ws.readyState === WebSocket.CONNECTING) return;
    connected = false;
    clearInterval(pingTimer);
    scheduleReconnect();
  }

  function scheduleReconnect() {
    if (!ENABLED) return;
    if (reconnectTry >= MAX_RETRIES) {
      window.dispatchEvent(new CustomEvent("xz-presence-offline", { detail: { tries: reconnectTry } }));
      return;
    }
    var wait = RECONNECT_MS[Math.min(reconnectTry, RECONNECT_MS.length - 1)];
    reconnectTry += 1;
    setTimeout(connect, wait);
  }

  function layer() {
    var el = document.querySelector(".xz-presence-layer");
    if (el) return el;
    injectStyle();
    el = document.createElement("div");
    el.className = "xz-presence-layer";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);
    cleanupTimer = setInterval(cleanupPeers, 2000);
    return el;
  }

  function injectStyle() {
    if (document.getElementById("xz-presence-style")) return;
    var style = document.createElement("style");
    style.id = "xz-presence-style";
    style.textContent =
      ".xz-presence-layer{position:fixed;inset:0;z-index:6500;pointer-events:none;overflow:hidden;user-select:none;-webkit-user-select:none;}" +
      ".xz-peer-cursor{position:absolute;left:0;top:0;opacity:0;transform:translate3d(-100px,-100px,0);transition:transform .08s linear,opacity .2s ease;will-change:transform;}" +
      ".xz-peer-cursor.on{opacity:1;}" +
      ".xz-peer-cursor .arrow{width:18px;height:22px;display:block;background:var(--c);clip-path:polygon(0 0,0 18px,5px 14px,8px 22px,12px 20px,9px 12px,17px 12px);filter:drop-shadow(0 2px 4px rgba(0,0,0,.35));}" +
      ".xz-peer-cursor .tag{position:absolute;left:16px;top:16px;max-width:110px;padding:4px 8px;border-radius:999px;background:var(--c);color:#fff;font-size:12px;font-weight:800;line-height:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;box-shadow:0 4px 14px rgba(0,0,0,.2);}" +
      ".xz-peer-cursor.down .arrow{transform:scale(.86);}" +
      ".xz-peer-cursor.down .tag{filter:brightness(.95);}";
    document.head.appendChild(style);
  }

  function cursorNode(peer) {
    if (nodes[peer.id]) return nodes[peer.id];
    var node = document.createElement("div");
    node.className = "xz-peer-cursor";
    node.style.setProperty("--c", peer.color || "#4f8cff");
    node.innerHTML = '<span class="arrow"></span><span class="tag"></span>';
    node.querySelector(".tag").textContent = peer.name || "Гость";
    layer().appendChild(node);
    nodes[peer.id] = node;
    return node;
  }

  function renderPeer(peer) {
    if (!peer || !peer.id || peer.id === selfId) return;
    peer.at = Date.now();
    peers[peer.id] = peer;
    var node = cursorNode(peer);
    node.style.setProperty("--c", peer.color || "#4f8cff");
    node.querySelector(".tag").textContent = peer.name || "Гость";
    node.classList.toggle("down", !!peer.down);
    node.style.transform = "translate3d(" + Math.round(peer.x * window.innerWidth) + "px," + Math.round(peer.y * window.innerHeight) + "px,0)";
    node.classList.add("on");
  }

  function removePeer(id) {
    delete peers[id];
    if (nodes[id]) {
      nodes[id].remove();
      delete nodes[id];
    }
  }

  function fallbackOnline() {
    return Math.max(1, Object.keys(peers).length + 1);
  }

  function setOnline(value) {
    var n = Math.round(Number(value) || 0);
    onlineCount = Math.max(1, n || fallbackOnline());
    window.dispatchEvent(new CustomEvent("xz-presence-online", { detail: { online: onlineCount } }));
  }

  function cleanupPeers() {
    var now = Date.now();
    var changed = false;
    Object.keys(peers).forEach(function (id) {
      if (now - peers[id].at > STALE_MS) {
        removePeer(id);
        changed = true;
      }
    });
    if (changed) setOnline(fallbackOnline());
  }

  function handleState(state) {
    if (!state) return;
    window.dispatchEvent(new CustomEvent("xz-presence-state", { detail: state }));
  }

  function handleMessage(data) {
    if (data.type === "welcome") {
      selfId = data.id || selfId;
      (data.peers || []).forEach(renderPeer);
      setOnline(data.online);
      handleState(data.state);
      return;
    }
    if (data.type === "join" || data.type === "peer") {
      renderPeer(data.peer);
      if (data.type === "join") setOnline(data.online);
      return;
    }
    if (data.type === "leave") {
      removePeer(data.id);
      setOnline(data.online);
      return;
    }
    if (data.type === "video-delete") {
      window.dispatchEvent(new CustomEvent("xz-presence-action", { detail: data }));
      return;
    }
    if (data.type === "window") {
      window.dispatchEvent(new CustomEvent("xz-presence-action", { detail: data }));
    }
  }

  function sendCursor(force) {
    var now = Date.now();
    if (!force && now - lastSend < SEND_MS) return;
    lastSend = now;
    send({
      type: "cursor",
      x: pointer.x,
      y: pointer.y,
      down: pointer.down,
      path: pagePath()
    });
  }

  function updatePointer(e, down) {
    pointer.x = Math.max(0, Math.min(1, e.clientX / Math.max(1, window.innerWidth)));
    pointer.y = Math.max(0, Math.min(1, e.clientY / Math.max(1, window.innerHeight)));
    if (typeof down === "boolean") pointer.down = down;
    sendCursor(false);
  }

  window.addEventListener("pointermove", function (e) { updatePointer(e); }, { passive: true });
  window.addEventListener("pointerdown", function (e) { updatePointer(e, true); sendCursor(true); }, { passive: true });
  window.addEventListener("pointerup", function (e) { updatePointer(e, false); sendCursor(true); }, { passive: true });
  window.addEventListener("pointercancel", function (e) { updatePointer(e, false); sendCursor(true); }, { passive: true });
  window.addEventListener("pagehide", function () {
    clearInterval(cleanupTimer);
    clearInterval(pingTimer);
    if (ws) ws.close(1000, "pagehide");
  });
  window.addEventListener("resize", function () {
    Object.keys(peers).forEach(function (id) { renderPeer(peers[id]); });
  });

  window.XZPresence = {
    sendVideoDelete: function (ids) {
      ids = Array.isArray(ids) ? ids : [ids];
      return send({ type: "video-delete", ids: ids });
    },
    sendWindow: function (action, id, state, save) {
      return send({ type: "window", action: action, id: id, state: state || {}, save: save !== false });
    },
    online: function () {
      return onlineCount;
    },
    send: send
  };

  if (ENABLED) connect();
})();
