// Xiaozao OS RU — минимальный рантайм локализации (без сборки и зависимостей).
//
// Подключение (относительные пути, работает и в корне домена, и в подкаталоге):
//   <script src="os/i18n/dict.ru.js"></script>   // загружается всегда: язык по умолчанию
//   <script src="os/i18n/dict.zh.js"></script>   // оригинал, нужен для сверки/переключения
//   <script src="os/i18n/i18n.js"></script>
//
// API: t(key, params), XZI18N.lang / setLang / plural / num / date / rel / missing()
(function () {
  'use strict';

  var DICTS = { ru: window.XZI18N_DICT_RU || {}, zh: window.XZI18N_DICT_ZH || {} };
  var DEFAULT_LANG = 'ru';
  var FALLBACK_LANG = 'zh'; // оригинальные строки как последний резерв
  var LS_KEY = 'xz-lang';
  var SUPPORTED = Object.keys(DICTS);
  var missingKeys = {};
  var formatters = {};

  function normalize(code) {
    var c = String(code || '').toLowerCase();
    if (!c) return '';
    if (c.indexOf('zh') === 0) return 'zh';
    if (c.indexOf('ru') === 0) return 'ru';
    return '';
  }

  function detect() {
    var fromQuery = '';
    try { fromQuery = normalize(new URLSearchParams(location.search).get('lang')); } catch (e) {}
    if (fromQuery) return fromQuery;
    var stored = '';
    try { stored = normalize(localStorage.getItem(LS_KEY)); } catch (e) {}
    if (stored) return stored;
    var nav = normalize(navigator.language || (navigator.languages && navigator.languages[0]));
    if (nav) return nav;
    return normalize(document.documentElement.lang) || DEFAULT_LANG;
  }

  var lang = SUPPORTED.indexOf(detect()) >= 0 ? detect() : DEFAULT_LANG;

  function lookup(dict, key) {
    var v = dict && dict[key];
    return typeof v === 'string' ? v : null;
  }

  function interpolate(str, params) {
    if (!params) return str;
    return str.replace(/\{(\w+)\}/g, function (m, name) {
      return Object.prototype.hasOwnProperty.call(params, name) ? String(params[name]) : m;
    });
  }

  // t(): текущий язык → ru → zh → сам ключ. Отсутствующие ключи собираются для CI-проверки.
  function t(key, params) {
    var chain = [lang, DEFAULT_LANG, FALLBACK_LANG];
    for (var i = 0; i < chain.length; i += 1) {
      var v = lookup(DICTS[chain[i]], key);
      if (v != null) return interpolate(v, params);
    }
    missingKeys[key] = true;
    return key;
  }

  function has(key) {
    for (var i = 0; i < SUPPORTED.length; i += 1) {
      if (lookup(DICTS[SUPPORTED[i]], key) != null) return true;
    }
    return false;
  }

  function plural(n, one, few, many) {
    var v = Number(n);
    var rule = pluralRule().select(v);
    if (rule === 'one') return one;
    if (rule === 'few') return few;
    return many;
  }

  function pluralRule() {
    if (!formatters.plural) {
      formatters.plural = new Intl.PluralRules(localeTag());
    }
    return formatters.plural;
  }

  function localeTag(l) {
    return { ru: 'ru-RU', zh: 'zh-CN' }[l || lang] || 'ru-RU';
  }

  function num(value, opts) {
    var k = 'n:' + localeTag() + ':' + JSON.stringify(opts || {});
    if (!formatters[k]) formatters[k] = new Intl.NumberFormat(localeTag(), opts || {});
    return formatters[k].format(value);
  }

  function date(value, opts) {
    var o = opts || { dateStyle: 'medium', timeStyle: 'short' };
    var k = 'd:' + localeTag() + ':' + JSON.stringify(o);
    if (!formatters[k]) formatters[k] = new Intl.DateTimeFormat(localeTag(), o);
    return formatters[k].format(value instanceof Date ? value : new Date(value));
  }

  // rel(): относительное время, например rel(-3, 'minute') → «3 минуты назад».
  function rel(value, unit) {
    var k = 'r:' + localeTag();
    if (!formatters[k]) formatters[k] = new Intl.RelativeTimeFormat(localeTag(), { numeric: 'auto' });
    return formatters[k].format(value, unit);
  }

  function setLang(next) {
    var n = normalize(next);
    if (SUPPORTED.indexOf(n) < 0) return lang;
    lang = n;
    try { localStorage.setItem(LS_KEY, n); } catch (e) {}
    document.documentElement.lang = n === 'zh' ? 'zh-CN' : 'ru-RU';
    window.dispatchEvent(new CustomEvent('xz-lang', { detail: { lang: n } }));
    return lang;
  }

  // apply(): проставляет переводы в DOM по data-i18n / data-i18n-attr.
  //   <span data-i18n="menubar.file"></span>
  //   <img data-i18n-attr="alt:dock.docs">
  function apply(root) {
    var scope = root || document;
    scope.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    scope.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var bits = pair.split(':');
        if (bits.length === 2 && bits[0].trim()) el.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });
  }

  function missing() {
    return Object.keys(missingKeys);
  }

  window.XZI18N = {
    t: t,
    has: has,
    apply: apply,
    plural: plural,
    num: num,
    date: date,
    rel: rel,
    missing: missing,
    supported: SUPPORTED.slice(),
    defaultLang: DEFAULT_LANG,
    get lang() { return lang; },
    setLang: setLang
  };
  // Короткий алиас для удобства в шаблонах страниц.
  window.t = t;
})();
