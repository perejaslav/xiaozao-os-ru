# HANDOFF — Xiaozao OS RU

Журнал работ по русификации форка. Ведётся по сессиям.

## Сессия 2026-11-26 — baseline (ветка `feat/russian-localization`)

Цель сессии: зафиксировать базовую линию по SPEC — реестр локализации, скелет i18n, эталонный
запуск оригинала. Перевод строк и правки страниц в эту сессию не входят.

### Состояние репозитория

- Рабочая копия: `D:/github/xiaozao-os-ru` (форк `perejaslav/xiaozao-os-ru`).
- Upstream: `chuspeeism/xiaozao-os`, SHA `6037615` (не изменялся).
- Ветка: `feat/russian-localization`, создана от `main` (main = 6037615).
- Рабочее дерево на момент коммита: только добавленные `docs/`, `os/i18n/`, `HANDOFF.md`.

### Выполненные команды и коды возврата

| Команда | Код | Результат |
|---|---|---|
| `git checkout feat/russian-localization` | 0 | ветка активна, дерево чистое |
| `git log --oneline -3` | 0 | `6037615 小灶 OS 首次开源` |
| `node gen-registry.mjs ...` (node 24.21.0) | 0 | `rows=1365 filesWithHan=52 hanLines=2921` |
| `node --check os/i18n/dict.ru.js` | 0 | синтаксис OK |
| `node --check os/i18n/dict.zh.js` | 0 | синтаксис OK |
| `node --check os/i18n/i18n.js` | 0 | синтаксис OK |
| `node i18n-smoke.cjs` (заглушки DOM/Intl) | 0 | `t()`, `plural()`, `num()`, `date()`, `rel()`, `setLang('zh')` работают |
| `python -m http.server 8000 --bind 127.0.0.1` | — | запущен, `GET /` → 200 |
| `node baseline-capture.cjs ...` (Playwright, Chrome stable, headless) | 0 | 3 URL, отчёт + 3 скриншота |

### Извлечение строк (SPEC §2), результат

Метод: `rg --pcre2 '\p{Script=Han}'` + скрипт `gen-registry.mjs` (разметка комментариев и категорий).
Всего файлов с Han: **52**; строк с Han: **2921** (ядро 426 / case-sites 2495).

| Рецепт | Что покрывает | Результат |
|---|---|---|
| H | видимый HTML-текст | 93 строки в 3 HTML (index 3, desktop 63, mobile 27) |
| M | `<title>`, `lang`, метаданные | 3 `<title>` + `lang="zh-CN"` в 3 HTML |
| J | строковые литералы JS | 266 строк (apps 79, ios/apps 72, content 70, cases 20, desk 8, wm 7, presence 4, analytics 6) |
| D | динамический DOM (`innerHTML`, шаблоны) | входит в J: `os/apps.js`, `ios/apps.js`, `os/wm.js`, `os/desk.js` |
| T | `title` / `alt` / `placeholder` / `aria-label` | 39 рядов категории `attribute` + 28 `title` |
| E | `\uXXXX`, HTML-entities с Han | **0** — экранированных Han не найдено |
| U | URL-encoded китайские пути (`%E5...`) | 20 строк (`os/cases.js`, ссылки на case-sites) |
| C | CSS-комментарии / `content:` | 36 строк во всех комментариях (`os.css` 10, `appstyles` 15, `ios.css` 13, `ios26` 8); Han в `content:` нет |
| S | SVG-текст, `aria-label` в SVG | `aria-label="logo"` и подписи иконок — покрыты T; текстовых узлов SVG с Han нет |
| case-sites | вложенные демо-проекты | 36 файлов, 2495 строк; `vendor/` и `*.min.js` исключены (echarts и т.п.) |
| network | внешние запросы | см. ниже |

### Внешние зависимости, найденные статически

- `wss://presence.dsxzai.com/ws`, `https://presence.dsxzai.com/track` (`os/presence.js`, `os/analytics.js`); на localhost подменяются на `ws://127.0.0.1:8787` — на локальном запуске данные наружу не уходят.
- `https://fonts.googleapis.com` / `https://fonts.gstatic.com` (Noto Sans SC, Noto Serif SC) — внешние шрифты без кириллицы в запросе.
- Контентные ссылки: bilibili, douyin, xiaohongshu, feishu, wechat, b23.tv.

### Реестр

`docs/localization-registry.md` — 1365 рядов, формат `path | line | original | ru(TBD) | context | category | status=new`.
Полностью покрыты все файлы ядра; для case-sites — до 40 строк на файл (остаток перечислен в разделе «Ограничение выборки»). Глоссарий — 31 термин.

### Эталонный запуск (baseline)

| URL | Итоговый адрес | title | console errors | page errors |
|---|---|---|---|---|
| `/` | `小灶 OS · 电脑版.html` | 小灶 OS · 大师的AI小灶 | 4 | 0 |
| `/小灶 OS · 电脑版.html?mac=1` | тот же | 小灶 OS · 大师的AI小灶 | 5 | 0 |
| `/小灶 OS · 手机版.html?ios=1` | тот же | 小灶 iOS · 大师的AI小灶 | 5 | 0 |

- Ошибки консоли — только отключённый локальный backend: `ws://127.0.0.1:8787/ws` (ERR_CONNECTION_REFUSED) и `http://127.0.0.1:8787/track`. Элементы интерфейса при этом работают.
- Внешние origin'ы: только `fonts.googleapis.com`, `fonts.gstatic.com`. HTTP 4xx/5xx: 0.
- Скриншоты (вне репозитория, не коммитятся):
  - `D:/Temp/sys/opencode/baseline/baseline-desktop.png`
  - `D:/Temp/sys/opencode/baseline/baseline-mobile.png`
  - (дубль `baseline-root.png`)
- Полный отчёт: `D:/Temp/sys/opencode/baseline/baseline-report.json`.

### Найденные проблемы (не блокируют baseline)

1. `os/presence.js` переподключается бесконечно (цикл `RECONNECT_MS` 900/1800/3500/6000 мс без предела) — нарушает требование «без бесконечных циклов переподключения». Нужен флаг отключения и лимит попыток.
2. `os/analytics.js` глушит трекинг по Han-имени пути (`数据看板`) — при нормализации имён файлов проверку нужно переписать.
3. Китайские имена HTML-файлов и URL-encoded пути в `os/cases.js` — при переименовании нужна карта редиректов и обновление 20 ссылок.
4. Внешние шрифты Noto Sans/Serif SC не содержат кириллицы — для RU потребуются fallback-шрифты (этап адаптации кириллицы).
5. Точный текст SPEC (разделы §2–§4) в репозитории отсутствует; реализация baseline опирается на явный перечень рецептов и требований из задачи. Маппинг рецептов зафиксирован выше — при расхождении с SPEC уточнить нумерацию.

### Следующие шаги

1. Заполнить переводы в реестре (`ru`), начиная с ядра UI.
2. Подключить `os/i18n/i18n.js` к обеим страницам, заменить строки на `t()`.
3. Исправить переподключение presence, добавить конфиг отключения аналитики/presence.
4. Проверить кириллические шрифты и переполнение вёрстки.
