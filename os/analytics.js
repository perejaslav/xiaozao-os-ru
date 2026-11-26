// Сяоцзао · анонимная агрегированная аналитика
(function () {
  // ?analytics=0 (или XZ_ANALYTICS_ENDPOINT = '') полностью отключает отправку.
  var ENABLED = !/[?&]analytics=0\b/.test(location.search);
  if (!ENABLED) {
    window.XZAnalytics = { track: function () {} };
    return;
  }

  var STORE_KEY = "xz-analytics-sid";
  function tr(key, fallback) {
    return window.xztr ? window.xztr(key, fallback) : fallback;
  }
  var endpoint = window.XZ_ANALYTICS_ENDPOINT ||
    (/^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname)
      ? "http://127.0.0.1:8787/track"
      : "https://presence.dsxzai.com/track");

  function sid() {
    try {
      var old = localStorage.getItem(STORE_KEY);
      if (old) return old;
      var id = (crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random()).replace(/-/g, "");
      localStorage.setItem(STORE_KEY, id);
      return id;
    } catch (e) {
      return "anon";
    }
  }

  function pagePath() {
    return decodeURIComponent(location.pathname || "/").slice(0, 120);
  }

  function referrerHost() {
    if (!document.referrer) return "direct";
    try {
      var u = new URL(document.referrer);
      return u.hostname || "direct";
    } catch (e) {
      return "direct";
    }
  }

  function device() {
    return /iPhone|iPod|Android.*Mobile/i.test(navigator.userAgent) || window.matchMedia("(max-width: 740px)").matches ? "mobile" : "desktop";
  }

  function cleanText(s) {
    return String(s || "").replace(/\s+/g, " ").trim().slice(0, 90);
  }

  function labelOf(el) {
    if (!el) return "";
    return cleanText(
      el.getAttribute("data-title") ||
      el.getAttribute("aria-label") ||
      el.getAttribute("title") ||
      (el.querySelector(".tip") && el.querySelector(".tip").textContent) ||
      (el.querySelector(".fname") && el.querySelector(".fname").textContent) ||
      (el.querySelector(".fn") && el.querySelector(".fn").textContent) ||
      (el.querySelector(".nm") && el.querySelector(".nm").textContent) ||
      (el.querySelector(".lb") && el.querySelector(".lb").textContent) ||
      (el.querySelector(".tab-title") && el.querySelector(".tab-title").textContent) ||
      el.textContent
    );
  }

  function track(event, info) {
    info = info || {};
    var payload = {
      event: event,
      sid: sid(),
      page: pagePath(),
      title: document.title,
      device: device(),
      referrer: referrerHost(),
      target: cleanText(info.target || ""),
      label: cleanText(info.label || ""),
      width: window.innerWidth,
      height: window.innerHeight
    };
    var body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      try {
        if (navigator.sendBeacon(endpoint, new Blob([body], { type: "text/plain" }))) return;
      } catch (e) {}
    }
    try {
      fetch(endpoint, {
        method: "POST",
        body: body,
        headers: { "content-type": "text/plain" },
        mode: "cors",
        keepalive: true
      }).catch(function () {});
    } catch (e) {}
  }

  function trackClick(e) {
    var el;
    if ((el = e.target.closest(".lock-enter"))) {
      track("unlock", { target: "lockscreen", label: labelOf(el) });
      return;
    }
    if ((el = e.target.closest("[data-ios-call], .ct-call-action[data-call]"))) {
      track("call_start", { target: "dashi", label: labelOf(el) || tr('analytics.label.callStart', 'Позвонить Даши') });
      return;
    }
    if ((el = e.target.closest("[data-ios-hang], .ct-hang"))) {
      track("call_hang", { target: "dashi", label: tr('analytics.label.callHang', 'Завершить') });
      return;
    }
    if ((el = e.target.closest(".tab-copy, .tab-close, .web-tab"))) {
      track("tab_action", { target: el.className, label: labelOf(el) || tr('analytics.label.browserTab', 'Вкладка браузера') });
      return;
    }
    if ((el = e.target.closest(".desk-file"))) {
      var platform = el.getAttribute("data-platform") || "";
      track(platform === "B站" && e.type !== "dblclick" ? "video_select" : "video_open", {
        target: el.getAttribute("data-id") || "video",
        label: labelOf(el)
      });
      return;
    }
    if ((el = e.target.closest(".fl-row[href], .grow[href]"))) {
      track(el.classList.contains("fl-row") || el.querySelector(".fl-doc") ? "doc_open" : "video_open", {
        target: el.getAttribute("href") || "",
        label: labelOf(el)
      });
      return;
    }
    if ((el = e.target.closest(".cs-card, .mcase"))) {
      track("case_open", { target: el.getAttribute("href") || "", label: labelOf(el) });
      return;
    }
    if ((el = e.target.closest("[data-qr], [data-app='qrwx'], [data-app='qrsph']"))) {
      track("qr_open", { target: el.getAttribute("data-qr") || el.getAttribute("data-app") || "qr", label: labelOf(el) });
      return;
    }
    if ((el = e.target.closest(".dock-item[data-app], [data-act]"))) {
      track("app_open", { target: el.getAttribute("data-app") || el.getAttribute("data-act") || "app", label: labelOf(el) });
      return;
    }
    if ((el = e.target.closest(".dock-item[href], .app[href]"))) {
      track("external_open", { target: el.getAttribute("href") || "", label: labelOf(el) });
    }
  }

  window.XZAnalytics = { track: track };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { track("page_view", { target: "page", label: document.title }); });
  } else {
    track("page_view", { target: "page", label: document.title });
  }
  document.addEventListener("click", trackClick, true);
  document.addEventListener("dblclick", trackClick, true);
})();
