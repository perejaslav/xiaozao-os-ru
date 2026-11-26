# Реестр локализации — Xiaozao OS RU

Машиночитаемый реестр пользовательских строк оригинала (upstream `6037615`).
Русский перевод намеренно не заполнен на этапе baseline: колонка `ru` = `TBD`.

## Правила ведения

- Один ряд = одна исходная строка файла, содержащая Han-символы (`\p{Script=Han}`).
- `path` — путь от корня репозитория; `line` — 1-based номер строки в оригинале.
- `category`: `ui-text` | `attribute` | `title` | `js-string` | `content-data` | `code-comment` | `code-string` | `doc` | `path`.
- `status`: `new` → `translated` → `verified` | `excluded` (с обоснованием в примечании).
- Не переводятся: программные идентификаторы, ключи, селекторы, имена собственные брендов (B站, 抖音, 小红书, 微信, 视频号), URL.
- Сторонние библиотеки (`os/case-sites/**/vendor/`, `*.min.js`) в реестр не входят и исключены из подсчёта.

## Глоссарий (единая терминология)

| EN | RU |
|---|---|
| Desktop | Рабочий стол |
| Settings | Настройки |
| Close | Закрыть |
| Minimize | Свернуть |
| Maximize | Развернуть |
| Loading | Загрузка |
| Gallery | Галерея |
| Projects | Проекты |
| Online users | Пользователи онлайн |
| About | О проекте |
| Finder | Файлы (访达) |
| Terminal | Терминал |
| Contacts | Контакты |
| Documents | Документы |
| Search | Поиск |
| Help | Справка |
| File | Файл |
| Edit | Правка |
| View | Вид |
| Go | Переход |
| Dock | Док |
| Lockscreen | Экран блокировки |
| Enter | Войти |
| Tutorials | Уроки |
| Videos | Видео |
| Cases | Кейсы |
| Team | Команда |
| Call | Вызов |
| Hang up | Завершить |
| QR code | QR-код |
| Scan | Сканировать |

## Статистика baseline

| Метрика | Значение |
|---|---|
| Файлов с Han (ядро, без case-sites) | 16 |
| Строк с Han (ядро) | 426 |
| Файлов с Han (case-sites, без vendor) | 36 |
| Строк с Han (case-sites) | 2495 |
| Всего строк с Han | 2921 |
| Рядов в реестре | 1365 |

### Подсчёт по файлам (ядро)

| Файл | Строк с Han |
|---|---|
| `README.md` | 21 |
| `index.html` | 3 |
| `ios/apps.js` | 72 |
| `ios/ios.css` | 13 |
| `ios/ios26.css` | 8 |
| `os/analytics.js` | 6 |
| `os/apps.js` | 79 |
| `os/appstyles.css` | 15 |
| `os/cases.js` | 20 |
| `os/content.js` | 70 |
| `os/desk.js` | 8 |
| `os/os.css` | 10 |
| `os/presence.js` | 4 |
| `os/wm.js` | 7 |
| `小灶 OS · 手机版.html` | 27 |
| `小灶 OS · 电脑版.html` | 63 |

### Подсчёт по файлам (case-sites, топ-20)

| Файл | Строк с Han |
|---|---|
| `os/case-sites/design/小红书分享/deck.html` | 312 |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 218 |
| `os/case-sites/fable/大师-打碟机/app.js` | 211 |
| `os/case-sites/fable/大师-海底1万米/index.html` | 178 |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 177 |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 164 |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 154 |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 112 |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 106 |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 106 |
| `os/case-sites/design/风格 2/index.html` | 84 |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 82 |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 76 |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 72 |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 66 |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 61 |
| `os/case-sites/fable/index.html` | 57 |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 36 |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 28 |
| `os/case-sites/fable/文奎-网站3/index.html` | 28 |

### Ограничение выборки case-sites

В реестр включено не более 40 строк на файл вложенных демо-проектов (остальное — backlog этапа полной русификации):

| Файл | В реестре | Всего |
|---|---|---|
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 40 | 61 |
| `os/case-sites/design/小红书分享/deck.html` | 40 | 312 |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 40 | 76 |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 40 | 164 |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 40 | 106 |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 40 | 106 |
| `os/case-sites/design/风格 2/index.html` | 40 | 84 |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 40 | 66 |
| `os/case-sites/fable/index.html` | 40 | 57 |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 40 | 177 |
| `os/case-sites/fable/大师-打碟机/app.js` | 40 | 211 |
| `os/case-sites/fable/大师-海底1万米/index.html` | 40 | 178 |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 40 | 112 |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 40 | 82 |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 40 | 218 |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 40 | 72 |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 40 | 154 |

## Реестр

| path | line | original | ru | context | category | status |
|---|---|---|---|---|---|---|
| `README.md` | 1 | `# 小灶 OS` | TBD | документация проекта | doc | new |
| `README.md` | 3 | `「大师的AI小灶」官网：一个模拟桌面操作系统的个人主页，分电脑版和手机版，访客可以像用电脑一样打开窗口、看视频作品和案例，并能实时看到其他在线访客的光标。` | TBD | документация проекта | doc | new |
| `README.md` | 5 | `本仓库只包含前端。多人在线和访问统计用到的后端服务没有开源，前端在连不上后端时会自动跳过这两项功能，其余功能都能正常使用。` | TBD | документация проекта | doc | new |
| `README.md` | 7 | `## 目录结构` | TBD | документация проекта | doc | new |
| `README.md` | 10 | `index.html               入口，按设备跳转到电脑版或手机版` | TBD | документация проекта | doc | new |
| `README.md` | 11 | `小灶 OS · 电脑版.html     桌面版（窗口管理、Dock、多人在线）` | TBD | документация проекта | doc | new |
| `README.md` | 12 | `小灶 OS · 手机版.html     手机版（iOS 风格主屏）` | TBD | документация проекта | doc | new |
| `README.md` | 13 | `os/                      桌面版脚本、样式与素材` | TBD | документация проекта | doc | new |
| `README.md` | 14 | `content.js             视频作品列表` | TBD | документация проекта | doc | new |
| `README.md` | 15 | `cases.js               案例列表` | TBD | документация проекта | doc | new |
| `README.md` | 16 | `case-sites/            案例作品（design：演示文稿类；fable：网页/游戏类）` | TBD | документация проекта | doc | new |
| `README.md` | 17 | `ios/                     手机版脚本与样式` | TBD | документация проекта | doc | new |
| `README.md` | 20 | `## 本地运行` | TBD | документация проекта | doc | new |
| `README.md` | 22 | `纯静态页面，不需要构建。在项目根目录起一个静态服务器即可：` | TBD | документация проекта | doc | new |
| `README.md` | 28 | `然后打开 <http://localhost:8000>。` | TBD | документация проекта | doc | new |
| `README.md` | 30 | `## 部署` | TBD | документация проекта | doc | new |
| `README.md` | 32 | `把根目录的页面和 \`os/\`、\`ios/\`、\`image-slot.js\` 部署到任意静态托管即可。如果要接入自己的在线状态/统计服务，修改 \`os/presence.js\` 和 \`os/analytics.js\` 里的服务地址。` | TBD | документация проекта | doc | new |
| `README.md` | 34 | `## 案例作者` | TBD | документация проекта | doc | new |
| `README.md` | 36 | `\`os/case-sites/\` 中的案例由小灶团队成员制作，目录名前缀即作者（大师、文奎、汤帅等）。` | TBD | документация проекта | doc | new |
| `README.md` | 38 | `## 开源协议` | TBD | документация проекта | doc | new |
| `README.md` | 40 | `[MIT](LICENSE)。项目内置的第三方库（three.js、ECharts、echarts-gl、simplex-noise、Unicorn Studio 等）遵循各自的协议。` | TBD | документация проекта | doc | new |
| `index.html` | 6 | `<title>大师的AI小灶</title>` | TBD | точка входа: редирект desktop/mobile, title, ссылка | title | new |
| `index.html` | 11 | `location.replace(mobile ? '小灶 OS · 手机版.html' : '小灶 OS · 电脑版.html');` | TBD | точка входа: редирект desktop/mobile, title, ссылка | path | new |
| `index.html` | 16 | `<p><a href="小灶 OS · 电脑版.html">进入大师的AI小灶</a></p>` | TBD | точка входа: редирект desktop/mobile, title, ссылка | path | new |
| `ios/apps.js` | 1 | `// 小灶 iOS · App 视图与导航（iOS 26 风格）` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 10 | `/* ---------- 小图标（currentColor SVG） ---------- */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 33 | `{ title: 'Claude design 可交互 PPT', url: BILI, cover: '', platform: 'B站' },` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 34 | `{ title: '三招去除图片 AI 味', url: BILI, cover: '', platform: 'B站' }` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 37 | `{ title: 'Claude Design 可交互 PPT 实操手册', url: '#', source: '飞书' },` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 38 | `{ title: '三招去除图片 AI 味 操作清单', url: '#', source: '飞书' }` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 42 | `{ id: 'dashi', nm: '大师', letter: 'D', role: '创始人 · AI 实战应用探索家', av: 'os/avatars/dashi.jpg',` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 43 | `bio: '擅长将复杂技术转化为实用工作流，把「看不懂」变成「马上用」。' },` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 44 | `{ id: 'hongdou', nm: '红豆', letter: 'H', role: '创始人 · 运营操盘手', av: 'os/avatars/hongdou.png',` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 45 | `bio: '曾带领多个爆款产品从 0 到 1，最懂内容如何触达真实需求。' },` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 46 | `{ id: 'jadon7', nm: 'Jadon7', letter: 'J', role: '合伙人 · 多面体技术极客', av: 'os/avatars/jadon7.png',` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 47 | `bio: '热衷于全球 AI 工具的体验、测评与教程，新工具第一手开箱。' }` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 52 | `h: '用 Claude Fable，<em>把故事做成作品</em>',` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 57 | `h: '用 Claude Design，<em>把灵感做成界面</em>',` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 62 | `wechat: { t: '微信 · 进群', img: 'os/qrs/wechat.png', hint: '微信扫一扫，进群开小灶' },` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 63 | `shipinhao: { t: '视频号', img: 'os/qrs/shipinhao.png', hint: '微信扫一扫，关注视频号' }` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 66 | `/* ---------- 模板 ---------- */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 75 | `'<span><span class="fn">' + esc(v.title) + '</span><span class="fmeta">' + esc(v.platform \|\| '视频') + ' · 完整教程</span></span>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 78 | `return '<div class="scr" id="scr-videos">' + nav('主屏', '教程视频') +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 79 | `'<div class="scr-body"><h1 class="big-title">教程视频</h1>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 80 | `'<p class="glabel">' + VIDEOS.length + ' 个视频 · 原始平台链接</p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 83 | `/* 文档 → 文件 App */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 88 | `'<span class="col"><span class="fn">' + esc(d.title) + '</span><span class="fmeta">飞书文档 · ' + esc(d.source \|\| '教程') + '</span></span>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 95 | `'<h1 class="fl-title">文档</h1>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 96 | `'<div class="fl-search">' + SVG.mag + ' 搜索 <span class="mic">' + SVG.mic + '</span></div>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 98 | `'<p class="fl-count">' + DOCS.length + ' 项</p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 101 | `'<button class="fl-tab" type="button">' + SVG.clock + '最近项目</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 102 | `'<button class="fl-tab on" type="button">' + SVG.folderP + '文档</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 103 | `'<button class="fl-tab" type="button">' + SVG.folder + '浏览</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 106 | `/* 团队 → 联系人列表 */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 115 | `'<p class="cts-title">联系人</p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 118 | `'<div class="me-row"><img src="os/avatars/dashi.jpg" alt="" /><span><span class="nm">大师的AI小灶</span><span class="sub">我的名片</span></span></div>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 120 | `'<p class="fl-count">3 张名片</p></div>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 123 | `'<button class="fl-tab" type="button">' + SVG.phone + '通话</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 124 | `'<button class="fl-tab on" type="button">' + SVG.person + '通讯录</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 125 | `'<button class="fl-tab" type="button">' + SVG.keypad + '拨号键盘</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 128 | `/* 名片 → 液态玻璃 */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 132 | `'<button class="fl-float rgt pill" type="button">编辑</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 143 | `'<button type="button" aria-label="信息"><img src="os/icons/ctl/ct-msg.svg" alt="" /></button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 144 | `'<button type="button" aria-label="拨打' + attr(m.nm) + '"' + callAttr + '><img src="os/icons/ctl/ct-call.svg" alt="" /></button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 145 | `'<button type="button" aria-label="视频"><img src="os/icons/ctl/ct-video.svg" alt="" /></button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 146 | `'<button type="button" aria-label="邮件"><img src="os/icons/ctl/ct-mail.svg" alt="" /></button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 148 | `'<div class="cg-card"><div class="cg-photo"><img src="' + m.av + '" alt="" /><span class="t">联系人照片与海报</span><span class="chev">›</span></div></div>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 150 | `'<div class="cg-kv"><p class="k">简介</p><p class="v">' + m.bio + '</p></div>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 151 | `'<div class="cg-kv"><p class="k">坐标</p><p class="v">北京 · 来自头部互联网大厂</p></div>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 180 | `'<p class="cg-call-chip">小灶音频通话</p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 183 | `'<button class="cg-hang" type="button" data-ios-hang aria-label="挂断">' + SVG.phone + '</button>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 191 | `fillCall(iosCallMember, '已挂断', 'ended');` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 224 | `fillCall(m, '正在呼叫...', 'dialing');` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 226 | `fillCall(m, '已接通', 'connected');` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 238 | `'<div class="cs-brand"><img src="os/icons/claude.svg" alt="" /><b>' + f.wm + '</b><span class="x">×</span><span class="by">大师的AI小灶</span></div>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 242 | `return '<div class="scr safari" id="scr-fx">' + nav('主屏', '上线效果') +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 249 | `return '<div class="scr term" id="scr-term">' + nav('主屏', 'xiaozao —— -zsh') +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 252 | `'<p class="term-logo">██ 大师的AI小灶 ██  v2026.06</p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 253 | `'<p class="ln">定位  <span class="hl">面向职场人群的 AI 实战内容品牌</span></p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 254 | `'<p class="ln">理念  我们不是理论派，而是实战派。</p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 255 | `'<p class="ln">      不教大道理，<span class="hl">只传实用技</span>。</p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 257 | `'<p class="ln"><span class="dim"># 输入 help 查看可用命令，回车执行。</span></p>' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 259 | `'<div class="term-line-m"><span class="prompt">xiaozao@os</span><span class="dim">&nbsp;~ $</span><input id="term-in" type="text" autocomplete="off" spellcheck="false" aria-label="终端输入" /></div></div>';` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 262 | `/* ---------- 终端命令 ---------- */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 266 | `help: ['可用命令：', '  about    品牌定位与理念', '  stats    关键数据', '  roadmap  2026 关键目标', '  find     各平台入口', '  clear    清屏'],` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 267 | `about: ['定位  <span class="hl">面向职场人群的 AI 实战内容品牌</span>', '理念  不教大道理，<span class="hl">只传实用技</span>。', '<span class="dim"># 只要敢突破，就是了不起。</span>'],` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 268 | `stats: ['<span class="ok">✓</span> 全网粉丝      50,000+', '<span class="ok">✓</span> 精选实战教程  10+', '<span class="ok">✓</span> 同步更新平台  5 个'],` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 269 | `roadmap: ['[1] 完整的「AI小灶」内容体系 — 覆盖 12+ 职场场景', '[2] 知识共创社区 — 经验交流与能力进阶'],` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 270 | `find: ['B站   <a class="hl" href="' + BILI + '" target="_blank" rel="noopener">完整视频教程</a>', '微信   <a class="hl" href="' + QUN + '" target="_blank" rel="noopener">和我们一起开小灶</a>']` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 275 | `var lines = /^sudo\b/.test(cmd) ? ['权限不足：灶台只有大师能动。'] :` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 276 | `CMDS[cmd] \|\| ['zsh: command not found: ' + esc(v) + '<span class="dim">（试试 help）</span>'];` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 285 | `/* ---------- 二维码弹层（微信 / 视频号） ---------- */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 293 | `'<img class="qr-img" src="' + q.img + '" alt="' + q.t + ' 二维码" />' +` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 295 | `'<button class="close" type="button">关闭</button></div>';` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | js-string | new |
| `ios/apps.js` | 302 | `/* ---------- 装载 & 导航栈 ---------- */` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/apps.js` | 488 | `// 终端输入` | TBD | мобильные экраны: видео, документы, контакты, Safari, терминал | code-comment | new |
| `ios/ios.css` | 2 | `小灶 iOS · 手机端原生视图` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 3 | `锁屏 / 主屏 / 全屏 App（文件·通讯录·Safari·终端·视频）` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 36 | `/* ---------- 状态栏 ---------- */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 59 | `/* ---------- 锁屏 ---------- */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 96 | `/* ---------- 主屏 ---------- */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 194 | `/* ---------- App 全屏视图 ---------- */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 214 | `/* 主屏启动的 App：iOS 式从图标缩放弹出/收回 */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 269 | `/* iOS 分组卡片列表 */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 297 | `/* 文档（文件 App） */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 330 | `/* 视频列表 */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 369 | `/* 通讯录 */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 394 | `/* Safari（上线效果） */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios.css` | 467 | `/* 终端（关于小灶） */` | TBD | мобильные стили (комментарии) | code-comment | new |
| `ios/ios26.css` | 2 | `iOS 26 风格：文件 App（文档）/ 联系人列表 / 液态玻璃名片` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `ios/ios26.css` | 3 | `追加于 ios.css 之后` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `ios/ios26.css` | 6 | `/* ---------- 通用浮动控件 ---------- */` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `ios/ios26.css` | 26 | `/* ---------- 浮动底部 Tab 栏 ---------- */` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `ios/ios26.css` | 76 | `/* ---------- 文件 App（文档） ---------- */` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `ios/ios26.css` | 146 | `/* ---------- 联系人列表 ---------- */` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `ios/ios26.css` | 202 | `/* ---------- 液态玻璃名片 ---------- */` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `ios/ios26.css` | 355 | `/* ---------- 二维码弹层 ---------- */` | TBD | мобильные стили iOS26 (комментарии) | code-comment | new |
| `os/analytics.js` | 1 | `// 小灶官网 · 匿名聚合埋点` | TBD | аналитика (события и подписи) | code-comment | new |
| `os/analytics.js` | 3 | `if (/数据看板/.test(decodeURIComponent(location.pathname))) return;` | TBD | аналитика (события и подписи) | code-string | new |
| `os/analytics.js` | 99 | `track("call_start", { target: "dashi", label: labelOf(el) \|\| "拨打大师" });` | TBD | аналитика (события и подписи) | code-string | new |
| `os/analytics.js` | 103 | `track("call_hang", { target: "dashi", label: "挂断" });` | TBD | аналитика (события и подписи) | code-string | new |
| `os/analytics.js` | 107 | `track("tab_action", { target: el.className, label: labelOf(el) \|\| "浏览器标签" });` | TBD | аналитика (события и подписи) | code-string | new |
| `os/analytics.js` | 112 | `track(platform === "B站" && e.type !== "dblclick" ? "video_select" : "video_open", {` | TBD | аналитика (события и подписи) | code-string | new |
| `os/apps.js` | 1 | `// 小灶 OS · 应用内容（终端 / 访达列表 / Safari 起始页 / 通讯录暗色名片）` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | code-comment | new |
| `os/apps.js` | 17 | `/* ---------- 访达 · 文档 ---------- */` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | code-comment | new |
| `os/apps.js` | 19 | `{ title: 'Claude Design 可交互 PPT 实操手册', url: '#', source: '飞书' },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 20 | `{ title: '三招去除图片 AI 味 操作清单', url: '#', source: '飞书' },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 21 | `{ title: 'AI 配音活人感 参数模板', url: '#', source: '飞书' },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 22 | `{ title: '高级大片感 PPT 三招清单', url: '#', source: '飞书' }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 26 | `return m ? m[1] : '其他';` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 34 | `'<span class="navs"><img src="os/icons/ctl/back.svg" alt="后退" /><img class="dis" src="os/icons/ctl/forward.svg" alt="前进" /></span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 35 | `'<span class="ttl">教程文档</span><span class="sp"></span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 36 | `'<span class="seg"><span class="on"><img src="os/icons/ctl/view-2.svg" alt="列表" /></span><span><img src="os/icons/ctl/view-1.svg" alt="图标" /></span></span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 37 | `'<span class="search">搜索</span></div>';` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 42 | `'<span class="c2">' + escHtml(d.source \|\| '飞书') + '</span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 43 | `'<span class="c3">链接</span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 44 | `'<span class="c4">飞书文档</span></a>';` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 51 | `'<p class="grp">个人收藏</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 52 | `'<button class="it on" type="button" data-doc-filter=""><span class="f-folder"></span>全部</button>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 53 | `'<p class="grp">标签</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 55 | `'<p class="grp">位置</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 56 | `'<span class="it"><span class="f-folder"></span>大师的AI小灶 共享盘</span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 57 | `'<span class="it"><span class="f-folder"></span>飞书空间</span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 60 | `'<div class="fl-head"><span>名称</span><span>来源</span><span>大小</span><span>种类</span></div>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 63 | `'<div class="finder-crumbs">大师的AI小灶 共享盘 <span class="sep">›</span> 文稿 <span class="sep">›</span> <span class="here">教程文档</span></div>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 64 | `'<p class="finder-status"><span class="doc-count">' + DOCS.length + '</span> 个项目 · 来自飞书教程文档</p>';` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 67 | `/* ---------- Safari · 上线效果（双标签页 + 封面案例） ---------- */` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | code-comment | new |
| `os/apps.js` | 71 | `'<span class="navs"><img src="os/icons/ctl/back.svg" alt="后退" /><img class="dis" src="os/icons/ctl/forward.svg" alt="前进" /></span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 72 | `'<input class="web-url" id="fx-url" type="text" value="' + escAttr(FX_URLS.fable) + '" readonly aria-label="地址" />' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 73 | `'<span class="acts"><img src="os/icons/ctl/web-share.svg" alt="分享" /><img src="os/icons/ctl/web-add.svg" alt="新建标签页" /><img src="os/icons/ctl/web-tabs.svg" alt="标签页概览" /></span></div>';` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 85 | `h: '用 Claude Fable，<em>把故事做成作品</em>',` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 90 | `h: '用 Claude Design，<em>把灵感做成界面</em>',` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 99 | `'<span class="x">×</span><span class="by">大师的AI小灶</span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 100 | `'<span class="cs-pill">案例集</span></div>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 102 | `'<p class="cs-sub">' + c.cases.length + ' 个真实工程效果，来自小灶实测项目。</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 115 | `/* ---------- 通讯录 · 团队 ---------- */` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | code-comment | new |
| `os/apps.js` | 117 | `{ id: 'dashi', nm: '大师', role: '创始人 · AI 实战应用探索家', av: 'os/avatars/dashi.jpg',` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 118 | `bio: '擅长将复杂技术转化为实用工作流，把「看不懂」变成「马上用」。' },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 119 | `{ id: 'hongdou', nm: '红豆', role: '创始人 · 运营操盘手', av: 'os/avatars/hongdou.png',` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 120 | `bio: '曾带领多个爆款产品从 0 到 1，最懂内容如何触达真实需求。' },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 121 | `{ id: 'jadon7', nm: 'Jadon7', role: '合伙人 · 多面体技术极客', av: 'os/avatars/jadon7.png',` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 122 | `bio: '热衷于全球 AI 工具的体验、测评与教程，新工具第一手开箱。' }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 125 | `'<span class="pill">编辑</span><span class="pill">＋</span><span class="pill">搜索</span></div>';` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 135 | `'<img class="big-avatar" src="' + m.av + '" alt="' + m.nm + ' 头像" />' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 138 | `'<button class="ct-action" type="button" aria-label="信息"><img src="os/icons/ctl/ct-msg.svg" alt="" /></button>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 139 | `'<button class="ct-action ct-call-action" type="button" aria-label="拨打' + escAttr(m.nm) + '"' + callAttr + '><img src="os/icons/ctl/ct-call.svg" alt="" /></button>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 140 | `'<button class="ct-action" type="button" aria-label="视频"><img src="os/icons/ctl/ct-video.svg" alt="" /></button>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 141 | `'<button class="ct-action" type="button" aria-label="邮件"><img src="os/icons/ctl/ct-mail.svg" alt="" /></button>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 144 | `'<div class="fld"><span class="k">简介</span><span class="v">' + m.bio + '</span></div>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 145 | `'<div class="fld"><span class="k">坐标</span><span class="v">北京 · 来自头部互联网大厂</span></div>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 149 | `'<nav class="ct-list">' + list + '<p class="ct-count">3 张名片</p></nav>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 153 | `'<p class="ct-call-chip">小灶音频通话</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 154 | `'<h3 class="ct-call-name">大师</h3>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 155 | `'<p class="ct-call-status">正在呼叫...</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 156 | `'<button class="ct-hang" type="button" aria-label="挂断"><img src="os/icons/ctl/ct-call.svg" alt="" /></button>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 160 | `/* ---------- 终端 · 关于小灶 ---------- */` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | code-comment | new |
| `os/apps.js` | 165 | `'<p class="term-logo">██ 大师的AI小灶 ██  v2026.06</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 166 | `'<p class="ln">定位      <span class="hl">面向职场人群的 AI 实战内容品牌</span></p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 167 | `'<p class="ln">理念      我们不是理论派，而是实战派。</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 168 | `'<p class="ln">          不教大道理，<span class="hl">只传实用技</span>。</p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 170 | `'<p class="ln"><span class="dim"># 输入 help 查看可用命令，回车执行。</span></p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 172 | `'<p class="ln term-inline"><span class="prompt">xiaozao@os</span>&nbsp;<span class="dim">~</span>&nbsp;$&nbsp;<input class="term-in" type="text" autocomplete="off" spellcheck="false" aria-label="终端输入" /></p>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 181 | `help: ['可用命令：', '  about     品牌定位与理念', '  stats     关键数据', '  roadmap   2026 关键目标', '  team      打开通讯录', '  docs      打开文档（访达）', '  cases     打开上线效果（Safari）', '  find      各平台入口', '  clear     清屏'],` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 182 | `about: ['定位      <span class="hl">面向职场人群的 AI 实战内容品牌</span>', '理念      我们不是理论派，而是实战派。不教大道理，<span class="hl">只传实用技</span>。', '<span class="dim"># 只要敢突破，就是了不起。</span>'],` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 183 | `stats: ['<span class="ok">✓</span> 全网粉丝        50,000+', '<span class="ok">✓</span> 精选实战教程    10+', '<span class="ok">✓</span> 同步更新平台    5 个'],` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 184 | `roadmap: ['[1] 完整的「AI小灶」内容体系 — 覆盖 12+ 职场场景', '[2] 知识共创社区 — 经验交流与能力进阶'],` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 185 | `find: ['B站     <a href="' + BILI + '" target="_blank" rel="noopener" class="hl">完整视频教程</a>', '微信     <a href="' + QUN + '" target="_blank" rel="noopener" class="hl">和我们一起开小灶</a>']` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 192 | `if (cmd === 'team') { lines = ['正在打开 通讯录…']; setTimeout(function () { window.XZApps.open('team'); }, 250); }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 193 | `else if (cmd === 'docs') { lines = ['正在打开 访达…']; setTimeout(function () { window.XZApps.open('doc'); }, 250); }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 194 | `else if (cmd === 'cases') { lines = ['正在打开 Safari…']; setTimeout(function () { window.XZApps.open('fx'); }, 250); }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 195 | `else if (/^sudo\b/.test(cmd)) { lines = ['权限不足：灶台只有大师能动。']; }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 197 | `else { lines = ['zsh: command not found: ' + termEsc(v) + '<span class="dim">（试试 help）</span>']; }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 208 | `doc:  { title: '文档', klass: 'app-finder', width: 780, height: 500, html: finderHtml(), barHtml: finderBar },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 209 | `fx:   { title: '上线效果', klass: 'app-web', width: 980, height: 680, html: browserHtml(), barHtml: webBar },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 210 | `team: { title: '通讯录', klass: 'app-ct', width: 680, height: 640, html: contactsHtml(), barHtml: ctBar },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 211 | `qrwx: { title: '微信 · 扫码进群', width: 320, html: '<div class="qr-win"><img class="qr-img" src="os/qrs/wechat.png" alt="微信群二维码" /><p>手机微信扫一扫，进群开小灶</p></div>' },` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 212 | `qrsph: { title: '视频号 · 扫码关注', width: 320, html: '<div class="qr-win"><img class="qr-img" src="os/qrs/shipinhao.png" alt="视频号二维码" /><p>微信扫一扫，关注视频号</p></div>' }` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 356 | `'<span class="tab-copy" role="button" aria-label="复制链接" title="复制链接">⧉</span>' +` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 357 | `'<span class="tab-close" role="button" aria-label="关闭标签" title="关闭标签">×</span>';` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 409 | `setCallState('已挂断', 'ended');` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 443 | `setCallState('正在呼叫...', 'dialing');` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/apps.js` | 445 | `setCallState('已接通', 'connected');` | TBD | окна приложений: терминал,访达, Safari, контакты, QR | js-string | new |
| `os/appstyles.css` | 2 | `小灶 OS · App 专属样式（对照 macOS 原生截图）` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 3 | `终端 / 访达列表视图 / Safari 起始页 / 通讯录暗色名片` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 6 | `/* ============ 终端 · 关于小灶 ============ */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 39 | `/* 终端输入行 */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 53 | `/* ============ 访达 · 文档（列表视图） ============ */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 112 | `.f-folder { /* 小文件夹图标 */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 229 | `/* ============ Safari · 上线效果（起始页） ============ */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 256 | `/* 标签页栏（Safari 式：整行等宽，激活白色圆角块） */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 338 | `/* ---- 案例集站点（Claude 质感） ---- */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 370 | `/* 特写案例 */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 408 | `/* 三列案例卡片 */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 435 | `/* Claude Design 变体：紫调 */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 445 | `/* ============ 通讯录 · 团队（暗色名片） ============ */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 492 | `/* 右侧暗色名片 */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/appstyles.css` | 610 | `/* ---------- 二维码小窗 ---------- */` | TBD | стили приложений (комментарии) | code-comment | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 574 | `<div class="line"><span class="model">TP-7</span><span class="cn">无线收音机</span></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 589 | `<span class="k" style="margin-left:14px;">录制中</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 592 | `<span class="k">型号</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 596 | `<span class="k">渲染</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 600 | `<span class="k">视角</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 607 | `<span class="strong">一台口袋大小的录音机。</span><br/>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 608 | `把日常的声音留在掌心 —— 街角掠过的风、一段未完的对话、深夜独自的呼吸，与一首尚未命名的旋律。随身、随时，伸手即录，让转瞬即逝的声响成为可以反复回放的记忆。` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 610 | `铝合金一体机身，单手可握；2.8 英寸触控屏配实体推杆，盲操也精准。内置三振膜高保真麦克风阵列，支持外接话筒与多轨叠录；从清晨的鸟鸣到深夜的灵感，整日续航足以陪你走完每一段路。` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 612 | `录完即传 —— USB-C 直连、无线同步到手机与桌面，剪辑、命名、归档一气呈成。从灵感闪现到成品输出，只需要这一台。` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 613 | `<span class="meta">采样 <b>96kHz / 24bit</b> &nbsp;·&nbsp; 续航 <b>7h</b> &nbsp;·&nbsp; 重量 <b>82g</b></span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 618 | `<div class="spec-head"><span class="ln"></span>技术规格 / SPEC</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 619 | `<div class="spec-row"><span class="k">采样精度</span><span class="v">96<span class="u">kHz / 24bit</span></span></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 620 | `<div class="spec-row"><span class="k">麦克风</span><span class="v">三振膜阵列</span></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 621 | `<div class="spec-row"><span class="k">存储</span><span class="v">128<span class="u">GB</span></span></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 622 | `<div class="spec-row"><span class="k">接口</span><span class="v">USB-C<span class="u">/ 3.5mm</span></span></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 623 | `<div class="spec-row"><span class="k">机身</span><span class="v">阳极氧化铝</span></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 624 | `<div class="spec-row"><span class="k">尺寸</span><span class="v">76·77·15<span class="u">mm</span></span></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 625 | `<div class="spec-foot">SN&nbsp;2604·21 &nbsp;·&nbsp; 限定档案 <b>No.04</b></div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 641 | `<span class="pill">实时 3D</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 642 | `<span>便携 · 现场录音器</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/TP-7.html` | 644 | `<span>拖动旋转</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 5 | `<title>数据可视化三重奏</title>` | TBD | вложенный демо-проект: design/产品渲染 | title | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 472 | `数据洞察实验室` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 482 | `<div class="section-label">专题研究 · 2026 年度数据设计报告</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 485 | `<h1 class="main">世界各国<span class="accent">GDP产值变化</span><span class="num">· 03</span></h1>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 486 | `<p class="subtitle">从原始数据到决策洞察，三个核心环节决定一张图表能否讲好故事。本页介绍我们在数据采集、图形编码与叙事呈现上遵循的方法论。</p>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 493 | `<div class="lbl">三阶段 · 七原则</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 517 | `<button class="modal-close" id="modal-close" aria-label="关闭">×</button>` | TBD | вложенный демо-проект: design/产品渲染 | attribute | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 518 | `<div class="modal-bg-title" id="modal-bg-title">数据筑基</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 523 | `<span>国家数据</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 524 | `<span>三维展示</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 532 | `<div>数据洞察实验室 · 专题页</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 561 | `数据洞察实验室` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 573 | `<div class="section-label" style="position:static;margin-bottom:24px;">深度解析 · GDP 三维柱状图</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 574 | `<h1 class="main" style="white-space:normal;">各国经济增长全景</h1>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 578 | `<div class="lbl">国家 · 200年跨度</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 590 | `<div>数据洞察实验室 · 深度解析</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 614 | `// ─── Chart option builders (mirrored from /引用图表) ──────────────` | TBD | вложенный демо-проект: design/产品渲染 | code-comment | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 730 | `{ tag: '01 / FOUNDATION', title: '数据筑基', sideTitle: ['国家数据'] },` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 731 | `{ tag: '02 / ENCODING',   title: '图形编码', sideTitle: ['城市数据'] },` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 732 | `{ tag: '03 / NARRATIVE',  title: '叙事呈现', sideTitle: ['趋势分析'] }` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 962 | `'Australia': '澳大利亚', 'Canada': '加拿大', 'China': '中国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 963 | `'Cuba': '古巴', 'Finland': '芬兰', 'France': '法国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 964 | `'Germany': '德国', 'Iceland': '冰岛', 'India': '印度',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 965 | `'Japan': '日本', 'North Korea': '朝鲜', 'South Korea': '韩国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 966 | `'New Zealand': '新西兰', 'Norway': '挪威', 'Poland': '波兰',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 967 | `'Russia': '俄罗斯', 'Turkey': '土耳其', 'United Kingdom': '英国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/data-visualization.html` | 968 | `'United States': '美国'` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/引用图表/图表 1.html` | 2 | `此示例下载自 https://echarts.apache.org/examples/zh/editor.html?c=bar3d-dataset&gl=1&code=lVPRTsIwFH3nK-6DySAOEPHBQHwgYKKJBqK8GELMZStQs7VL2xkG2b97O6Db1Ji4l3XnnnPbc3Z70dkw02wAvEyn8_fZaP4Al-B1QzTYRa2ZOS4jvmZttktYYFAEWdvgKmKdDy2F55N4nYrAcCmgadktOBAGIJMCuzt9AmwUD_uTARxyK7KPkTIyPKlCu9GO64J1AoiVJWwAXoCGbaTKvFPBSbL_S_ZO4qBPrlOMntGexvWJcTeAHrs9kwBCHjOhyRi1n8kkjdC6_LGBDYLiq_ZySj2AhUMBvEcRyJgVSTrsiRKHe5d4vVjZt4aP…` | TBD | вложенный демо-проект: design/产品渲染 | path | new |
| `os/case-sites/design/产品渲染/引用图表/图表 1.html` | 3 | `⚠ 请注意，该图表不是 Apache ECharts 官方示例，而是由用户代码生成的。请注意鉴别其内容。` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/引用图表/图表 2.html` | 2 | `此示例下载自 https://echarts.apache.org/examples/zh/editor.html?c=bar3d-simplex-noise&gl=1&theme=dark` | TBD | вложенный демо-проект: design/产品渲染 | path | new |
| `os/case-sites/design/产品渲染/引用图表/图表 3.html` | 2 | `此示例下载自 https://echarts.apache.org/examples/zh/editor.html?c=line3d-orthographic&gl=1` | TBD | вложенный демо-проект: design/产品渲染 | path | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 5 | `<title>数据可视化三重奏</title>` | TBD | вложенный демо-проект: design/产品渲染 | title | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 472 | `数据洞察实验室` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 482 | `<div class="section-label">专题研究 · 2026 年度数据设计报告</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 485 | `<h1 class="main">世界各国<span class="accent">GDP产值变化</span><span class="num">· 03</span></h1>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 486 | `<p class="subtitle">从原始数据到决策洞察，三个核心环节决定一张图表能否讲好故事。本页介绍我们在数据采集、图形编码与叙事呈现上遵循的方法论。</p>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 493 | `<div class="lbl">三阶段 · 七原则</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 517 | `<button class="modal-close" id="modal-close" aria-label="关闭">×</button>` | TBD | вложенный демо-проект: design/产品渲染 | attribute | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 518 | `<div class="modal-bg-title" id="modal-bg-title">数据筑基</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 523 | `<span>国家数据</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 524 | `<span>三维展示</span>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 532 | `<div>数据洞察实验室 · 专题页</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 561 | `数据洞察实验室` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 573 | `<div class="section-label" style="position:static;margin-bottom:24px;">深度解析 · GDP 三维柱状图</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 574 | `<h1 class="main" style="white-space:normal;">各国经济增长全景</h1>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 578 | `<div class="lbl">国家 · 200年跨度</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 590 | `<div>数据洞察实验室 · 深度解析</div>` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 614 | `// ─── Chart option builders (mirrored from /引用图表) ──────────────` | TBD | вложенный демо-проект: design/产品渲染 | code-comment | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 730 | `{ tag: '01 / FOUNDATION', title: '数据筑基', sideTitle: ['国家数据'] },` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 731 | `{ tag: '02 / ENCODING',   title: '图形编码', sideTitle: ['Bar3D'] },` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 732 | `{ tag: '03 / NARRATIVE',  title: '叙事呈现', sideTitle: ['正交投影'] }` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 962 | `'Australia': '澳大利亚', 'Canada': '加拿大', 'China': '中国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 963 | `'Cuba': '古巴', 'Finland': '芬兰', 'France': '法国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 964 | `'Germany': '德国', 'Iceland': '冰岛', 'India': '印度',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 965 | `'Japan': '日本', 'North Korea': '朝鲜', 'South Korea': '韩国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 966 | `'New Zealand': '新西兰', 'Norway': '挪威', 'Poland': '波兰',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 967 | `'Russia': '俄罗斯', 'Turkey': '土耳其', 'United Kingdom': '英国',` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/产品渲染/数据可视化.html` | 968 | `'United States': '美国'` | TBD | вложенный демо-проект: design/产品渲染 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 5 | `<title>四页演示 · 地图 / K线 / 代码 / 公式</title>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | title | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 672 | `<section class="s1" data-label="上海·陆家嘴" data-screen-label="01 Map">` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | attribute | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 676 | `<h1 class="s1-title" style="margin-top:36px;">上海<br/><span class="accent">陆家嘴</span></h1>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 678 | `<p class="s1-body">黄浦江拐了一个弯，把一片滩涂留给了世界。三十年后，那里长出了中国最高的几栋楼。这是它今天的样子。</p>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 680 | `<div><strong>632 m</strong>上海中心高度</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 681 | `<div><strong>1.7 km²</strong>核心区面积</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 682 | `<div><strong>1993</strong>开发元年</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 683 | `<div><strong>31.24° N</strong>北纬</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 686 | `<span class="s1-pill">实地走读中</span>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 693 | `◎ 上海中心 &nbsp;<span>● 632 m</span><br/>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 694 | `◎ 环球金融中心 &nbsp;<span>● 492 m</span><br/>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 695 | `◎ 金茂大厦 &nbsp;<span>● 421 m</span><br/>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 696 | `◎ 东方明珠 &nbsp;<span>● 468 m</span>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 704 | `<section class="s2" data-label="A股实时行情" data-screen-label="02 KLine">` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | attribute | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 707 | `<div class="s2-id">02 / MARKET WATCH · 上海证券交易所</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 708 | `<h2 style="margin-top:12px;"><span class="code">600519</span>贵州茅台</h2>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 711 | `<div class="live">实时数据流</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 720 | `<span>K · 日线</span>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 736 | `<div class="s2-edit-cny">CNY · 人民币</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 746 | `一杯酒里<br/>装下了一个<em>绿名单</em>。` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 748 | `<div class="s2-edit-byline">市场记 · 2025 Q1 / VOL.07</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 754 | `<div class="lbl">振幅</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 758 | `<div class="lbl">量比</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 762 | `<div class="lbl">换手</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 777 | `<section class="s3" data-label="算法的优雅" data-screen-label="03 Code">` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | attribute | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 779 | `<div class="s3-tag">03 — Algorithm · 算法笔记</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 782 | `<h2 class="s3-title">写一段，<br/>会自己<br/>解释的<br/>代码。</h2>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 783 | `<p class="s3-body" style="margin-top:36px;">优雅不是少写一行，而是让下一个看到它的人，会心一笑。这里是一个 Node.js 的内存 LRU 缓存。</p>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 805 | `* 一个简单的内存 LRU 缓存。` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | code-comment | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 806 | `* 利用 Map 的插入顺序来追踪“最近使用”。` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | code-comment | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 824 | `// 命中后把它移到“最新”的位置。` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | code-comment | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 836 | `// Map 的第一个 key 就是最久没用的。` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | code-comment | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 862 | `<section class="s4" data-label="数学之美" data-screen-label="04 Math">` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | attribute | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 865 | `<div class="s4-lesson">第四讲 · Lecture 04 · 90 min</div>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 866 | `<h2 class="s4-title">从弯曲的时空说起：<br/>广义相对论<span class="chalk">入门</span></h2>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 869 | `课程 · PHYS&nbsp;<span class="key">541</span><br/>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 870 | `教师 · 陈 · 春季学期<br/>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 871 | `参考 · MTW § 8.4 / Wald § 4.3` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 877 | `<h3><span class="num">①</span>先看一下这个方程</h3>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/地图、k 线、代码、公式/四页演示.html` | 878 | `<p>同学们，上课我们谈了黎曼几何。今天主角来了——爱因斯坦场方程。他说：物质告诉时空如何弯曲，时空告诉物质如何运动。</p>` | TBD | вложенный демо-проект: design/地图、k 线、代码、公式 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 5 | `<title>大师的 AI 小灶 — 账号愿景</title>` | TBD | вложенный демо-проект: design/小灶账号愿景 | title | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 110 | `<window.TweakSection title="背景色调">` | TBD | вложенный демо-проект: design/小灶账号愿景 | attribute | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 112 | `label="主色"` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 118 | `<window.TweakSection title="信息密度">` | TBD | вложенный демо-проект: design/小灶账号愿景 | attribute | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 120 | `label="密度"` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 124 | `{ value: 'low', label: '简洁' },` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 125 | `{ value: 'standard', label: '标准' },` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 126 | `{ value: 'high', label: '满格' },` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 131 | `<window.TweakSection title="字体替换">` | TBD | вложенный демо-проект: design/小灶账号愿景 | attribute | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 133 | `label="字族"` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 137 | `{ value: 'sans',  label: '默认' },` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 138 | `{ value: 'serif', label: '衬线' },` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 139 | `{ value: 'cute',  label: '俏皮' },` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小灶账号愿景/index.html` | 140 | `{ value: 'mono',  label: '等宽' },` | TBD | вложенный демо-проект: design/小灶账号愿景 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 5 | `<title>AI 狂奔时，普通人需要知道的真相</title>` | TBD | вложенный демо-проект: design/小红书分享 | title | new |
| `os/case-sites/design/小红书分享/deck.html` | 229 | `content: "拖拽 / 点击替换图片";` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 346 | `<span>大师的 AI 小灶</span>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 348 | `<div class="kicker hl-cream" style="opacity:.7; font-size:26px;">小红书 AI 治理开放日 · 2025</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 354 | `AI 狂奔时，<br/>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 355 | `普通人需要知道的<br/>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 356 | `<span class="hl-lime">真相。</span>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 370 | `<span>@大师的 AI 小灶</span>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 378 | `<div class="eyebrow hl-lime">/ 我是谁</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 380 | `深耕 AI 行业的<br/>自媒体创作者。` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 384 | `<span class="tag solid">AI 行业 · 长期观察</span>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 385 | `<span class="tag" style="color:var(--cream);">6 条破万赞长视频教程</span>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 386 | `<span class="tag" style="color:var(--cream);">小红书科普创作者</span>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 392 | `<div class="placeholder" style="aspect-ratio: 3/4; font-size:24px;">封面 1<br/>6:45</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 393 | `<div class="mono" style="font-size:26px; color:var(--cream);"><span class="hl-lime">3.9w</span> 赞 · 4.9w 藏</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 396 | `<div class="placeholder" style="aspect-ratio: 3/4; font-size:24px;">封面 2<br/>11:21</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 397 | `<div class="mono" style="font-size:26px; color:var(--cream);"><span class="hl-lime">1.0w</span> 赞 · 1.1w 藏</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 400 | `<div class="placeholder" style="aspect-ratio: 3/4; font-size:24px;">封面 3<br/>4:38</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 401 | `<div class="mono" style="font-size:26px; color:var(--cream);"><span class="hl-lime">3.0w</span> 赞 · 3.5w 藏</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 404 | `<div class="placeholder" style="aspect-ratio: 3/4; font-size:24px;">封面 4<br/>3:48</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 405 | `<div class="mono" style="font-size:26px; color:var(--cream);"><span class="hl-lime">1.5w</span> 赞 · 1.6w 藏</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 408 | `<div class="placeholder" style="aspect-ratio: 3/4; font-size:24px;">封面 5<br/>2:51</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 409 | `<div class="mono" style="font-size:26px; color:var(--cream);"><span class="hl-lime">2.1w</span> 赞 · 2.7w 藏</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 412 | `<div class="placeholder" style="aspect-ratio: 3/4; font-size:24px;">封面 6<br/>5:30</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 413 | `<div class="mono" style="font-size:26px; color:var(--cream);"><span class="hl-lime">3.0w</span> 赞 · 1.6w 藏</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 417 | `<div class="chrome"><span>关于我</span><span>02 / 26</span></div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 420 | `<!-- 03 AI 反焦虑 -->` | TBD | вложенный демо-проект: design/小红书分享 | code-comment | new |
| `os/case-sites/design/小红书分享/deck.html` | 421 | `<section class="slide bg-lime" data-label="03 AI 反焦虑">` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 423 | `<div class="eyebrow hl-navy">/ 我的 AI 理念</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 426 | `<div class="title-sm hl-navy" style="font-size:60px; font-weight:600;">我崇尚</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 428 | `AI <span style="color:var(--cream); -webkit-text-stroke:3px var(--navy);">反焦虑</span>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 434 | `AI 的使命应该是让人的生活更好，让工作更有效。<br/>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 435 | `它诞生的初衷，<u>不是为了让人产生焦虑</u>。` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 447 | `<div class="chrome dark"><span>理念</span><span>03 / 26</span></div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 450 | `<!-- 04 逆潮流的选题 -->` | TBD | вложенный демо-проект: design/小红书分享 | code-comment | new |
| `os/case-sites/design/小红书分享/deck.html` | 451 | `<section class="slide" data-label="04 逆潮流选题">` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 453 | `<div class="eyebrow hl-lime">/ 选题方向</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 454 | `<h2 class="title-md" style="margin-top:24px;">所以我会做一些<br/>逆潮流的选题。</h2>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 458 | `<div class="kicker hl-lime">/ 选题 01</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/小红书分享/deck.html` | 459 | `<div class="title-sm" style="font-size:42px;">《OpenClaw 的安全风险》</div>` | TBD | вложенный демо-проект: design/小红书分享 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 6 | `<title>NEXBOT · 概念展示</title>` | TBD | вложенный демо-проект: design/机器人 | title | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 369 | `<section class="s-cover" data-label="封面">` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 372 | `<nav><span class="active">概念</span><span>实验室</span><span>索引</span><span>联系</span></nav>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 373 | `<div>第 07 号 / 共 12</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 379 | `<div class="eyebrow" style="margin-bottom:34px">机器角色研究 · 第七辑</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 381 | `合成的<br>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 382 | `<span class="small" style="font-family: -apple-system">在场</span>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 384 | `<p class="sub">一项关于柔软几何、安静运动，<br>以及某种近乎活着的低鸣的研究。</p>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 387 | `<div><b>编号</b>NX-07 / Bot</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 388 | `<div><b>类型</b>角色概念</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 389 | `<div><b>引擎</b>Spline · WebGL</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 390 | `<div><b>发布</b>v0.7 — Beta</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 398 | `<div class="rec-badge"><span class="rec"></span><span>实时 · 第 03 号机位</span></div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 441 | `<section class="s-concept" data-label="概念">` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 444 | `<nav><span>概念</span><span class="active">理念</span><span>索引</span><span>联系</span></nav>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 445 | `<div>章节 · 一</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 450 | `<div class="eyebrow">章节 一 · 关于这台机器</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 451 | `<h2>我们想造一个<br><span class="it">安静</span>的同伴</h2>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 456 | `<h4>— 01 形态</h4>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 457 | `<h3>柔和的几何</h3>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 458 | `<p>不再棱角分明。圆润的曲面、过渡的高光，让它在房间里像一只熟睡的猫，而不是一台冷冰冰的机器。</p>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 461 | `<h4>— 02 行为</h4>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 462 | `<h3>克制的回应</h3>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 463 | `<p>它不会主动打扰你。它会等你看它，再缓慢地、像被风吹动一样，转过身来。</p>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 466 | `<h4>— 03 声音</h4>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 467 | `<h3>低于呼吸</h3>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 468 | `<p>没有提示音，没有铃声。只有一种几乎听不见的电流声，像老式收音机在深夜里温柔地工作。</p>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 474 | `<div>章节 · 一</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 480 | `<section class="s-hero" data-label="主视觉">` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 486 | `<div><span class="rec"></span>实时捕捉 · NX-07</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 487 | `<div>拖拽 · 旋转 · 凝视</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 493 | `"它不需要解释自己。<br>当你看着它时，<br>它会用最微小的方式，<br>承认你的存在。"` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 494 | `<span class="sig">— 设计手记 · 2049 春</span>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 500 | `<section class="s-mod" data-label="模块">` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 503 | `<nav><span>概念</span><span class="active">模块</span><span>索引</span><span>联系</span></nav>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 504 | `<div>章节 · 二</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 510 | `<div class="eyebrow" style="margin-bottom:30px">章节 二 · 它由什么组成</div>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 511 | `<h2>四个<br><span class="it">器官</span>，<br>一个灵魂。</h2>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 517 | `<span class="name">光学核心</span>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/机器人/Nexbot Deck.html` | 518 | `<span class="desc">双层散光镜片，<br>看见也被看见。</span>` | TBD | вложенный демо-проект: design/机器人 | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 5 | `<title>2025 年度复盘 — 市场营销</title>` | TBD | вложенный демо-проект: design/汇报 PPT | title | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 407 | `<section data-label="封面">` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 412 | `<div class="eyebrow" style="opacity:.8;margin-bottom:32px;">市场营销 · 年终复盘</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 415 | `<div class="cover-review">年度复盘</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 417 | `<div class="sub">Northwind Labs 品牌重塑、管道扩张与社区建设的一年。</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 421 | `<div>MARA OKONKWO · 市场负责人</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 451 | `<section data-label="一览">` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 455 | `<div class="eyebrow">章节 · 01</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 458 | `<h1 class="title" style="margin-top:40px;max-width:1400px;">全年概览。</h1>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 462 | `<div class="lbl">营销来源管道额</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 464 | `<div class="note">同比 +38%</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 467 | `<div class="lbl">合格线索（MQL）</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 469 | `<div class="note">同比 +61%</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 472 | `<div class="lbl">品牌搜索量</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 474 | `<div class="note">较 2025 年 1 月</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 477 | `<div class="lbl">CAC 回收期</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 478 | `<div class="num" style="color:var(--amber);">9.1个月</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 479 | `<div class="note" style="opacity:.7;">从 14.2 个月降至</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 484 | `<div>01 · 全年概览</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 485 | `<div>市场营销 · 2025 年终</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 494 | `<section data-label="议程">` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 498 | `<div class="eyebrow">议程</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 501 | `<h1 class="title" style="margin-top:40px;max-width:1400px;">四个季度，<br/>四个重点。</h1>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 504 | `<div class="row"><span>Q1 — 品牌重启</span><span class="num">/ 01</span></div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 505 | `<div class="row"><span>Q2 — 需求引擎</span><span class="num">/ 02</span></div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 506 | `<div class="row"><span>Q3 — 内容与社区</span><span class="num">/ 03</span></div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 507 | `<div class="row"><span>Q4 — 留存与扩张</span><span class="num">/ 04</span></div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 511 | `<div>02 · 议程</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 512 | `<div>市场营销 · 2025 年终</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 521 | `<section data-label="Q1 品牌">` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 526 | `<div class="eyebrow" style="opacity:.85;">Q1 · 1月 – 3月</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 530 | `<h1 class="title" style="font-size:120px;">品牌<br/>重启。</h1>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 532 | `全新的识别体系、更聚焦的叙事，以及面向规模化的系统。` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 533 | `11 周内上线 12 个触点。` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 537 | `<div>投入 · $480K</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 538 | `<div>团队 · 6</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 539 | `<div>上线 · 3月4日</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 566 | `<section data-label="Q2 需求">` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 571 | `<div class="eyebrow" style="opacity:.85;">Q2 · 4月 – 6月</div>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/Year End Review v1.html` | 575 | `<h1 class="title" style="font-size:120px;">需求<br/>引擎。</h1>` | TBD | вложенный демо-проект: design/汇报 PPT | ui-text | new |
| `os/case-sites/design/汇报 PPT/index.html` | 6 | `<title>2025 年度复盘</title>` | TBD | вложенный демо-проект: design/汇报 PPT | title | new |
| `os/case-sites/design/汇报 PPT/index.html` | 9 | `<p><a href="Year%20End%20Review%20v1.html">打开 2025 年度复盘</a></p>` | TBD | вложенный демо-проект: design/汇报 PPT | path | new |
| `os/case-sites/design/物理课/index.html` | 6 | `<title>物理课 · 三则原理演示</title>` | TBD | вложенный демо-проект: design/物理课 | title | new |
| `os/case-sites/design/物理课/index.html` | 14 | `<a href="./%E7%89%A9%E7%90%86%E8%AF%BE.html">打开物理课演示</a>` | TBD | вложенный демо-проект: design/物理课 | path | new |
| `os/case-sites/design/物理课/物理课.html` | 5 | `<title>物理课 · 三则原理演示</title>` | TBD | вложенный демо-проект: design/物理课 | title | new |
| `os/case-sites/design/物理课/物理课.html` | 323 | `<section class="slide" data-label="01 重力 · 自由落体">` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 326 | `<span class="course">PHYS · 101 &nbsp;/&nbsp; 经典力学</span>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 327 | `<span class="num">第一讲  ·  01 / 03</span>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 333 | `<h1 class="cover-title">重力与<br><em>自由落体</em></h1>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 338 | `<div class="corner">长按 · 扣越久 · 球越大</div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 345 | `<div class="tocitem"><span class="n">01</span>重力 / Gravity</div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 346 | `<div class="tocitem"><span class="n">02</span>碰撞 / Collision</div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 347 | `<div class="tocitem"><span class="n">03</span>单摆 / Pendulum</div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 349 | `<div>讲师 · 物理教研组 &nbsp;·&nbsp; 2026</div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 355 | `<section class="slide" data-label="02 碰撞 · 动量守恒">` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 364 | `<h1 class="title">碰撞中，<em>动量守恒</em></h1>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 368 | `<p class="lede">封闭系统内，<br>碰撞前后总动量不变。</p>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 375 | `<div class="row"><span class="key">m</span><span class="val">物体质量 · mass</span></div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 376 | `<div class="row"><span class="key">v</span><span class="val">瞬时速度 · velocity</span></div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 377 | `<div class="row"><span class="key">e</span><span class="val">恢复系数 · 0.9（近弹性）</span></div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 383 | `<span>DEMO · 弹性碰撞</span>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 387 | `<div class="hint">拖拽<span class="kbd">左侧小球</span>释放</div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 400 | `<section class="slide" data-label="03 单摆 · 简谐运动">` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 409 | `<h1 class="title">单摆的<em>简谐运动</em></h1>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 413 | `<p class="lede">小角度摆动下，<br>周期只与摆长有关。</p>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 420 | `<div class="row"><span class="key">T</span><span class="val">周期 · period (s)</span></div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 421 | `<div class="row"><span class="key">L</span><span class="val">摆长 · length</span></div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 422 | `<div class="row"><span class="key">θ</span><span class="val">摆角 · 小于 15°</span></div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 428 | `<span>DEMO · 耦合摆</span>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/物理课/物理课.html` | 432 | `<div class="hint">拖拽<span class="kbd">摆锤</span>改变角度</div>` | TBD | вложенный демо-проект: design/物理课 | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 5 | `<title>认识春天 · 小学课堂 PPT</title>` | TBD | вложенный демо-проект: design/课堂ppt | title | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 166 | `<!-- 01 · COVER 认识春天 -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 168 | `<section class="cover" data-label="认识春天 · 封面">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 186 | `<span>小学自然课</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 188 | `<span>第三单元</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 192 | `<h1 class="cover-title anim-pop">认识春天</h1>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 218 | `<div class="en-label">三年级 · 第三单元</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 220 | `授课 · 李老师<br>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 221 | `时长 · 40 分钟` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 229 | `<!-- 02 · 今天学什么 · AGENDA -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 231 | `<section data-label="今天学什么">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 233 | `<span>认识春天</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 234 | `<span>今天学什么</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 235 | `<span>课堂目录</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 239 | `<h2 class="title-zh" style="font-size:110px; margin:0; line-height:1;">今天学什么</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 245 | `<span class="cn">春天来了</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 250 | `<span class="cn">三个关键词</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 255 | `<span class="cn">春天的朋友</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 260 | `<span class="cn">观察小任务</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 265 | `<span class="cn">画一画春天</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 270 | `<span class="cn">课后小作业</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 290 | `<!-- 03 · 春天来了 — story opener with scene -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 292 | `<section data-label="春天来了" style="background:#BFE0F2;">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 293 | `<div class="chrome"><span>认识春天</span><span>第一部分</span><span>春天来了</span><span>03</span></div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 359 | `<h2 class="title-zh" style="font-size:180px; line-height:.9; margin:10px 0 20px 0; color:var(--ink);">春天<br>来了</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 360 | `<p class="title-zh" style="font-size:34px; line-height:1.5; color:var(--ink); margin:0; max-width:460px;">冰雪融化，小草钻出泥土，<br>温柔的风把花香送到窗前。</p>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 368 | `<!-- 04 · 三个关键词 section poster -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 370 | `<section data-label="三个关键词" style="background:var(--green);">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 371 | `<div class="chrome" style="color:var(--cream);"><span style="color:var(--cream);">认识春天</span><span style="color:var(--cream);">第二部分</span><span style="color:var(--cream);">三个关键词</span><span style="color:var(--cream);">04</span></div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 377 | `<h2 style="margin-top:12px;">三个<br>关键词</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 378 | `<p>用三个词，记住春天的样子。<br>先读一读，再看一看，最后跟着老师说出来。</p>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 381 | `<span>→</span><span>翻到下一页</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 387 | `<div class="display" style="font-size:220px; color:var(--cream); line-height:.95;" class2="anim-pop">发芽</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 388 | `<div class="display" style="font-size:220px; color:var(--yellow); line-height:.95;">开花</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 389 | `<div class="display" style="font-size:220px; color:var(--pink); line-height:.95;">下雨</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 399 | `<!-- 05 · POSTER TRIO — 发芽 · 开花 · 下雨 -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 401 | `<section data-label="关键词海报" style="background:var(--cream-2);">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 402 | `<div class="chrome"><span>认识春天</span><span>三个关键词</span><span>海报式记忆法</span><span>05</span></div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 405 | `<h2 class="title-zh" style="font-size:76px; margin:0; white-space:nowrap;">用一个字，记住春天</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt - 静态版.html` | 411 | `<!-- 发 · sprout poster -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 5 | `<title>认识春天 · 小学课堂 PPT</title>` | TBD | вложенный демо-проект: design/课堂ppt | title | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 165 | `<!-- 01 · COVER 认识春天 -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 167 | `<section class="cover" data-label="认识春天 · 封面">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 185 | `<span>小学自然课</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 187 | `<span>第三单元</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 191 | `<h1 class="cover-title anim-pop">认识春天</h1>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 217 | `<div class="en-label">三年级 · 第三单元</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 219 | `授课 · 李老师<br>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 220 | `时长 · 40 分钟` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 228 | `<!-- 02 · 今天学什么 · AGENDA -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 230 | `<section data-label="今天学什么">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 232 | `<span>认识春天</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 233 | `<span>今天学什么</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 234 | `<span>课堂目录</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 238 | `<h2 class="title-zh" style="font-size:110px; margin:0; line-height:1;">今天学什么</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 244 | `<span class="cn">春天来了</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 249 | `<span class="cn">三个关键词</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 254 | `<span class="cn">春天的朋友</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 259 | `<span class="cn">观察小任务</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 264 | `<span class="cn">画一画春天</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 269 | `<span class="cn">课后小作业</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 289 | `<!-- 03 · 春天来了 — story opener with scene -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 291 | `<section data-label="春天来了" style="background:#BFE0F2;">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 292 | `<div class="chrome"><span>认识春天</span><span>第一部分</span><span>春天来了</span><span>03</span></div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 358 | `<h2 class="title-zh" style="font-size:180px; line-height:.9; margin:10px 0 20px 0; color:var(--ink);">春天<br>来了</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 359 | `<p class="title-zh" style="font-size:34px; line-height:1.5; color:var(--ink); margin:0; max-width:460px;">冰雪融化，小草钻出泥土，<br>温柔的风把花香送到窗前。</p>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 367 | `<!-- 04 · 三个关键词 section poster -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 369 | `<section data-label="三个关键词" style="background:var(--green);">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 370 | `<div class="chrome" style="color:var(--cream);"><span style="color:var(--cream);">认识春天</span><span style="color:var(--cream);">第二部分</span><span style="color:var(--cream);">三个关键词</span><span style="color:var(--cream);">04</span></div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 376 | `<h2 style="margin-top:12px;">三个<br>关键词</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 377 | `<p>用三个词，记住春天的样子。<br>先读一读，再看一看，最后跟着老师说出来。</p>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 380 | `<span>→</span><span>翻到下一页</span>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 386 | `<div class="display" style="font-size:220px; color:var(--cream); line-height:.95;" class2="anim-pop">发芽</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 387 | `<div class="display" style="font-size:220px; color:var(--yellow); line-height:.95;">开花</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 388 | `<div class="display" style="font-size:220px; color:var(--pink); line-height:.95;">下雨</div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 398 | `<!-- 05 · POSTER TRIO — 发芽 · 开花 · 下雨 -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 400 | `<section data-label="关键词海报" style="background:var(--cream-2);">` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 401 | `<div class="chrome"><span>认识春天</span><span>三个关键词</span><span>海报式记忆法</span><span>05</span></div>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 404 | `<h2 class="title-zh" style="font-size:76px; margin:0; white-space:nowrap;">用一个字，记住春天</h2>` | TBD | вложенный демо-проект: design/课堂ppt | ui-text | new |
| `os/case-sites/design/课堂ppt/认识春天 课堂ppt.html` | 410 | `<!-- 发 · sprout poster -->` | TBD | вложенный демо-проект: design/课堂ppt | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 5 | `<title>2026 潮流色彩报告 · 果冻研究所</title>` | TBD | вложенный демо-проект: design/风格 2 | title | new |
| `os/case-sites/design/风格 2/index.html` | 53 | `/* ===== 通用 ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 81 | `/* ===== 光晕背景（径向同心环） ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 108 | `/* 网格底纹 */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 118 | `/* ===== SLIDE 01 · 封面 ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 186 | `/* ===== SLIDE 02 · 数据 ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 281 | `/* ===== SLIDE 03 · 复杂排版 ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 386 | `/* ===== SLIDE 04 · 品牌矩阵 ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 469 | `/* ===== SLIDE 05 · 角色合影 ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 572 | `/* ===== SLIDE 06 · 结语 ===== */` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 657 | `<!-- 角色 SVG sprites（原创：云朵、水滴、星、心、波浪圆） -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 660 | `<!-- 云朵 -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 674 | `<!-- 水滴 -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 687 | `<!-- 星 -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 705 | `<!-- 心 -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 720 | `<!-- 波浪圆（花朵） -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 742 | `<!-- 品牌 mark：果冻字 J 形小光晕（不要文字） -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 756 | `fill="#F2EFE8">果</text>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 763 | `<!-- ====== SLIDE 01 · 封面 ====== -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 764 | `<section data-label="01 封面" class="s-cover">` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 771 | `<span>果冻研究所</span>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 780 | `<h1>潮流<span class="it">color</span>报告</h1>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 781 | `<div class="sub">五种颜色，五种心情。</div>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 786 | `<span style="letter-spacing:0.2em; text-transform: uppercase;">果冻研究所 出品</span>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 801 | `<!-- ====== SLIDE 02 · 数据图表 ====== -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 802 | `<section data-label="02 数据" class="s-data">` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 806 | `<h2 class="heading">设计师最常使用的<br/>五种<span class="accent">color</span>。</h2>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 808 | `n = 2,847 设计师<br/>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 809 | `2026 / Q1 调研<br/>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 819 | `<div class="name">电光青</div>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 826 | `<div class="name">果冻粉</div>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 833 | `<div class="name">草坪绿</div>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 840 | `<div class="name">落日橙</div>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 847 | `<div class="name">葡萄紫</div>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 855 | `<span>Fig. 01 · 多选题，受访者可选 1-3 项</span>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 856 | `<span>果冻研究所 / 2026 潮流色彩报告 · 02</span>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 860 | `<!-- ====== SLIDE 03 · 复杂排版 ====== -->` | TBD | вложенный демо-проект: design/风格 2 | code-comment | new |
| `os/case-sites/design/风格 2/index.html` | 861 | `<section data-label="03 命名" class="s-type">` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 867 | `<span>果冻研究所</span>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 2/index.html` | 879 | `电光<span class="it">Cyan</span>` | TBD | вложенный демо-проект: design/风格 2 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 5 | `<title>幕間 — 2026 影像年鑑</title>` | TBD | вложенный демо-проект: design/风格 3 | title | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 442 | `<section class="s-cover" data-label="01 封面">` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 446 | `<div class="corner-meta tl">幕間 / INTERMISSION</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 452 | `<span class="ch">幕間</span>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 453 | `<span class="en">INTERMISSION · 影像年鑑</span>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 458 | `<span>二〇二六　年度影像觀察</span><br>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 459 | `<span>編號 第六輯　／　二月發行</span>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 462 | `<div class="corner-meta bl">編輯部・台北 — 京都 — 香港</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 463 | `<div class="corner-meta br">非賣品 · NOT FOR SALE</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 467 | `<section class="s-manifesto" data-label="02 引言">` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 468 | `<div class="corner-meta tl" style="color:#6a6558">02 — 引言　PREFACE</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 469 | `<div class="corner-meta tr" style="color:#6a6558">幕間 / 2026</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 475 | `我們不再只是<em>觀看影像</em>，<br>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 476 | `而是在影像之中<span class="stroke">緩慢地、</span>習慣性地<br>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 477 | `<span class="stroke">棲居下來</span>。` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 481 | `<div class="name">陳維安</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 482 | `<div class="role">EDITOR-IN-CHIEF · 主編</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 487 | `<div class="corner-meta br" style="color:#6a6558">— 序　言　—</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 491 | `<section class="s-data" data-label="03 數據">` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 492 | `<div class="corner-meta tl">03 — 數據　DATA</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 497 | `<h2>影像消費的<span class="accent">五種去處</span></h2>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 499 | `樣本：14,820 名受訪者<br>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 500 | `區域：兩岸三地 + 日韓<br>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 501 | `採集：2025.06 — 2025.12` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 505 | `每人每週平均影像消費時長 23.4 小時，較 2024 年增長 11.6%。下圖為各場景時長占比。` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 509 | `<div class="label">短影音平台<span class="en">SHORT-FORM</span></div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 513 | `<div class="label">串流長片<span class="en">STREAMING</span></div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 517 | `<div class="label">直播<span class="en">LIVE</span></div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 521 | `<div class="label">影院觀影<span class="en">CINEMA</span></div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 525 | `<div class="label">電視 / 其他<span class="en">TV / OTHER</span></div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 532 | `短影音與直播合計占去 <b>53%</b> 注意力——影院首次跌破日均 0.4 小時。` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 534 | `<div>來源：幕間編輯部　／　INTERMISSION DATA LAB</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 540 | `<section class="s-editorial" data-label="04 文章">` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 544 | `<div class="ed-kicker">04 — 主題報導　FEATURE</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 545 | `<h1 class="ed-title">三種<span class="blue">取景視角</span>，<br>正在重寫鏡頭語言。</h1>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 552 | `<span class="drop">過</span>去十年間，鏡頭的位置一直由攝影機決定；如今，它由演算法、無人機與觀眾的指尖共同決定。我們挑出三個正在改變影像語法的取景視角，試圖回答一個問題——當任何人都能成為攝影機時，「畫面」這件事還剩下什麼。` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 555 | `這不是一份完整的清單，而是一份可以爭辯的觀察。三段短文之後，我們把判斷留給讀者；讀者也許正坐在某個鏡頭之外，也許正坐在某個鏡頭之內。` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 562 | `<h3>俯瞰，但不再上帝</h3>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 563 | `<p>無人機鏡頭從奇觀工具退為敘事配料。導演們開始用它代替空鏡，讓城市從「景觀」變回「背景」——一種被刻意降溫的鳥瞰。</p>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/风格 3/幕間 2026 影像年鑑.html` | 564 | `<div class="pin">— 俯瞰 / OVERHEAD</div>` | TBD | вложенный демо-проект: design/风格 3 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/styles.css` | 1 | `/* 黑科技技能分享 deck styles */` | TBD | вложенный демо-проект: design/黑科技技能分享 | code-comment | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 5 | `<title>黑科技技能分享 — Shader-Space Rendering</title>` | TBD | вложенный демо-проект: design/黑科技技能分享 | title | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 44 | `<div class="eyebrow" style="margin-bottom:36px;">黑科技 技能分享 · INTERNAL SESSION</div>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 92 | `本次分享探讨一种非主流渲染路径：不追求更高分辨率，<br/>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 93 | `而是通过 <strong style="color:#fff;">shader 层面的扰动、抖动与半调网点</strong>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 94 | `，让视觉信号穿透噪声而存在。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 132 | `GPU 每秒丢弃数十亿像素——被量化、被截断、被抖动。<br/>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 133 | `留下的，才是被看见的东西。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 246 | `把亮度映射成「点的直径」，让眼睛自己完成插值。<br/>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 247 | `既是最老的印刷工艺，也是最便宜的 anti-alias。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 253 | `<div class="d">单通道映射，每个 cell 一个点；对比度由 cell 尺寸决定。</div>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 257 | `<div class="d">15° / 45° / 75° 三色角度；单色时走 45°，视觉最稳。</div>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 261 | `<div class="d">不消除摩尔纹；让它成为材质语言的一部分。</div>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 265 | `<div class="d">纯 fragment，无 pass，无 buffer。移动端 60fps 起步。</div>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 313 | `Bayer 矩阵给予每个像素一个稳定的偏置阈值——<br/>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 314 | `相同亮度，位置决定「黑还是白」。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 346 | `对 UV 坐标自身做 fBm 扰动——<br/>材质保持不变，只是「地图」被揉皱。<br/>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 347 | `低成本获得有机、不可预测的形态。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 423 | `阈值抖动会吞掉笔画——中文尤甚。<br/>解决：局部关闭 dither，走 MSDF。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 430 | `静态抖动在 &lt; 12 fps 下出现「爬虫感」。<br/>解决：以帧号做时间扰动。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 437 | `高光被量化成大黑点，显得脏。<br/>解决：亮度 &gt; 0.92 时切回 raw。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 460 | `当图像被压缩到仅剩「点」与「空」，<br/>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 461 | `剩下的究竟是内容，还是观察者？` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 492 | `dither &rarr; halftone 过场；把等待变成表达。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 501 | `静态 noise field 填补「什么都没有」的焦虑。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 510 | `Key visual &amp; 发布会 opening；shader 比 MG 更轻、可交互。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 519 | `用抖动作隐私遮罩——可读，不可识别。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 547 | `所有 shader 源码、benchmark 数据 &amp; 案例包，<br/>` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/design/黑科技技能分享/黑科技技能分享.html` | 548 | `将同步至 <span class="small" style="color:#f2f1ee;">/anomaly-lab/render-v04</span>。` | TBD | вложенный демо-проект: design/黑科技技能分享 | ui-text | new |
| `os/case-sites/fable/index.html` | 6 | `<title>Claude Fable 实测作品入口</title>` | TBD | вложенный демо-проект: fable/index.html | title | new |
| `os/case-sites/fable/index.html` | 154 | `<h1>Claude Fable 实测作品入口</h1>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 155 | `<p class="intro">这个页面汇总当前文件夹里的所有 HTML 作品，点击任一项目即可进入对应页面。</p>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 157 | `<div class="count">11 个页面</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 160 | `<section class="grid" aria-label="HTML 页面导航">` | TBD | вложенный демо-проект: fable/index.html | attribute | new |
| `os/case-sites/fable/index.html` | 161 | `<a class="card" href="大师-海底1万米/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 163 | `<span class="eyebrow">模拟器</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 164 | `<h2>深潜 10,000 米</h2>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 166 | `<div class="path">大师-海底1万米/index.html</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 167 | `<span class="open">打开页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 170 | `<a class="card" href="大师-2D互动游戏/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 172 | `<span class="eyebrow">互动游戏</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 173 | `<h2>相位跃迁 PHASE RUNNER</h2>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 175 | `<div class="path">大师-2D互动游戏/index.html</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 176 | `<span class="open">打开页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 179 | `<a class="card" href="大师-打碟机/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 181 | `<span class="eyebrow">音乐互动</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 184 | `<div class="path">大师-打碟机/index.html</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 185 | `<span class="open">打开页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 188 | `<a class="card" href="文奎-游戏-纪念碑谷/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 190 | `<span class="eyebrow">互动游戏</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 191 | `<h2>纪念碑谷 · 第一章 花园</h2>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 193 | `<div class="path">文奎-游戏-纪念碑谷/index.html</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 194 | `<span class="open">打开页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 197 | `<a class="card" href="文奎-真实天气模拟/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 199 | `<span class="eyebrow">WebGL 模拟</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 200 | `<h2>ATMOS 天气光影模拟</h2>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 202 | `<div class="path">文奎-真实天气模拟/index.html</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 203 | `<span class="open">打开页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 206 | `<a class="card" href="文奎-网站 1/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 208 | `<span class="eyebrow">网站复刻</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 211 | `<div class="path">文奎-网站 1/index.html</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 212 | `<span class="open">打开页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 215 | `<a class="card" href="文奎-网站 2/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 217 | `<span class="eyebrow">WebGL 网站</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 220 | `<div class="path">文奎-网站 2/index.html</div>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 221 | `<span class="open">打开页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 224 | `<a class="card" href="文奎-网站3/index.html">` | TBD | вложенный демо-проект: fable/index.html | path | new |
| `os/case-sites/fable/index.html` | 226 | `<span class="eyebrow">视觉页面</span>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/index.html` | 227 | `<h2>無中生有 · EX NIHILO</h2>` | TBD | вложенный демо-проект: fable/index.html | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 6 | `<title>相位跃迁 PHASE RUNNER · DELUXE</title>` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | title | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 19 | `//  相位跃迁 PHASE RUNNER —— 像素风横版太空射击` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 20 | `//  核心机制: E/Shift 在三颗平行星球间跃迁(位置不变, 世界改变)` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 27 | `let PW = 10, PH = 14, RUN = 110;   // 随形态变化` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 36 | `//---------------- 精致渲染辅助 ----------------` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 38 | `function glow(x, y, r, col, a){            // 加色辉光(缓存径向渐变精灵)` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 54 | `const overlayCv = document.createElement('canvas');   // 暗角 + 扫描线(预渲染)` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 64 | `const amb = [];                            // 环境氛围粒子(灰尘/雾泡/余烬)` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 78 | `//---------------- 三颗平行星球 ----------------` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 80 | `{name:'灰晶星', tag:'高重力', g:1400, jv:310, maxFall:470,` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 83 | `{name:'蓝雾星', tag:'低重力', g:430,  jv:300, maxFall:255,` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 86 | `{name:'红磁星', tag:'磁暴',   g:950,  jv:330, maxFall:420,` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 92 | `//---------------- 三种形态: 星球决定机体与武器 ----------------` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 94 | `{name:'重装坦克', wpn:'重型霰弹', w:22, h:15, run:84,  fire:.5,  gy:4},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 95 | `{name:'轻型游侠', wpn:'贯穿激光', w:10, h:14, run:124, fire:.34, gy:6},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 96 | `{name:'磁能机甲', wpn:'磁暴速射', w:12, h:17, run:100, fire:.09, gy:7},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 100 | `//---------------- 关卡构建 ----------------` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 102 | `const stones = [[],[],[]];          // 浮石(单向平台) {x,y,w}` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 111 | `// —— 序章平地 + 教学 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 112 | `pitAll(31,33);                                  // 小裂谷: 任何星球都能跳过` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 113 | `// —— 裂谷一: 必须用蓝星低重力 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 115 | `// —— 尖刺高台 + 红盾炮手 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 117 | `// —— 大裂谷: 蓝星浮石链 / 红星低处磁桥 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 120 | `// —— 竞技场(100~122 平地) ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 121 | `// —— 磁暴走廊: 灰=刺+短坑 蓝=坑+浮石 红=雷阵 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 122 | `pit(0,132,133); pit(0,141,142);             // 坦克碾刺无伤, 但这些短坑必须起跳` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 126 | `// —— 阶梯高地 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 129 | `// —— 连环裂谷 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 134 | `// —— 终局考验 ——` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 138 | `// 尖刺(只存在于灰晶星)` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 141 | `// 磁暴雷柱(只在红磁星生效) {x中心,gy落地,p周期,o相位}` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | code-comment | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 153 | `{c:6,  lines:['A/D 或 ←/→ 移动','W/空格 跳跃']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 154 | `{c:14, lines:['鼠标瞄准 · 点击射击']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 155 | `{c:22, lines:['E / Shift 相位跃迁','切换平行星球']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 156 | `{c:28, lines:['坦克车体沉重跳不远','遇裂谷请跃迁!']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 157 | `{c:41, lines:['前方宽裂谷','蓝雾星重力低, 跳得远']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 158 | `{c:54, lines:['护盾与星球同色时失效']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 159 | `{c:78, lines:['大裂谷: 蓝星走浮石','或 红星走低处磁桥']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 160 | `{c:100,lines:['竞技场: 切换星球破盾']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-2D互动游戏/index.html` | 161 | `{c:126,lines:['磁暴走廊 · 注意节奏']},` | TBD | вложенный демо-проект: fable/大师-2D互动游戏 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 2 | `DJ LOOP BATTLE · Style Morph 引擎` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 3 | `双 Deck / 16 Loop Pad / EQ·滤波 / FX / Hot Cue / 录制 / 计分` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 10 | `/* ---------------- DOM 构建 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 48 | `<div class="knob-unit"><div class="knob fx-knob" data-min="0" data-max="1" data-val="0.35"><div class="cap"></div></div><span>FX 量</span></div>` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 85 | `/* ---------------- 通用拖拽：旋钮 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 107 | `/* ---------------- 通用拖拽：推子（垂直/水平） ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 110 | `let val = init; // 0..1（垂直：1=顶）` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 131 | `/* ---------------- 搓碟（jog wheel） ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 154 | `deck.angle += d * 57.29578;             // 视觉角度` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 162 | `音频引擎` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 174 | `// 噪声源缓冲` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 178 | `// 混响脉冲响应` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 184 | `// 主总线` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 189 | `engine.monMaster = ctx.createGain();           // 监听（主路）` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 190 | `engine.monCue = ctx.createGain(); engine.monCue.gain.value = 0;  // 监听（耳机预听路）` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 196 | `engine.comp.connect(engine.recDest);           // 录音走主路，不含耳机预听` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 262 | `/* ---------------- 合成音源原语 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 288 | `/* ---------------- 风格化乐器 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 306 | `if (fl === "guofeng") tone(t, o, { type: "square", f0: 1250, f1: 900, fd: 0.02, dur: 0.05, g: 0.3 }); // 木鱼` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 320 | `pluck(t, o, fl, f, dur) { // 古筝 / 琵琶质感` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 328 | `else if (fl === "guofeng") tone(t, o, { type: "sine", f0: f, dur, g: 0.4, vib: 22, vibF: 5.5, att: 0.05 }); // 笛箫` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 340 | `vox(t, o, fl, f, dur) { // 虚拟歌姬式元音颗粒（共振峰）` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 359 | `gliss(t, o) { // 古筝刮奏（固定五声音阶，不随半音谱面变化）` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 369 | `/* 观众欢呼（合成） */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 380 | `for (let i = 0; i < 5; i++) { // 口哨 & 呐喊` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 386 | `四种曲风：音阶 / BPM / 16 个 Loop Pad（A 0-7 节奏 · B 8-15 旋律）` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 393 | `function parseN(s) { // "步:度[+度…][~时值]，…"` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 407 | `name: "8-BIT 像素", bpm: 118, root: 36, scale: [0, 2, 4, 7, 9],` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 409 | `{ l: "KICK", i: "像素底鼓", t: "kick", p: "x...x...x...x..." },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 410 | `{ l: "SNARE", i: "军鼓", t: "snare", p: "....x.......x..." },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 411 | `{ l: "HAT", i: "踩镲", t: "hat", p: "x.x.x.x.x.x.x.x." },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 412 | `{ l: "BLIP", i: "电子音粒", t: "perc", p: "..x...x...x..x.." },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 413 | `{ l: "BASS", i: "三角波贝斯", t: "bass", n: "0:0,2:0,4:2,6:0,8:3,10:0,12:2,14:1", dr: 2 },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 414 | `{ l: "ARP", i: "琶音器", t: "chip", n: "0:0,1:2,2:4,3:5,4:0,5:2,6:4,7:5,8:1,9:3,10:5,11:6,12:0,13:2,14:4,15:5", dr: 1 },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 415 | `{ l: "LEAD", i: "冒险主题", t: "lead", n: "0:4,3:5,6:4,8:2,11:1,14:0", dr: 2, up2: 1 },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 416 | `{ l: "STAB", i: "和弦", t: "stab", n: "0:0,8:3", dr: 4 },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 417 | `{ l: "KICK·B", i: "切分底鼓", t: "kick", p: "x..x..x.x..x..x." },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 418 | `{ l: "FILL", i: "军鼓填充", t: "snare", p: "....x..x..x.x.xx" },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 419 | `{ l: "O-HAT", i: "开镲", t: "hat", p: "..o...o...o...o." },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/app.js` | 420 | `{ l: "SWEEP", i: "上升音效", t: "riser", p: "x..............." },` | TBD | вложенный демо-проект: fable/大师-打碟机 | js-string | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 6 | `<title>DJ Loop Battle · 名曲演奏版</title>` | TBD | вложенный демо-проект: fable/大师-打碟机 | title | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 30 | `<button id="morphBtn" title="一键切换曲风（8-bit / 赛博朋克 / 国风电子 / 虚拟歌姬）">` | TBD | вложенный демо-проект: fable/大师-打碟机 | attribute | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 42 | `<option value="">自由 LOOP 模式</option>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 43 | `<option value="pvz">植物大战僵尸 Grasswalk</option>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 44 | `<option value="hfh">男儿当自强（黄飞鸿）</option>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 45 | `<option value="ygxy">云宫迅音（西游记）</option>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 46 | `<option value="molihua">茉莉花</option>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 47 | `<option value="saima">赛马</option>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 49 | `<span class="tag">曲目 SONG</span>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 59 | `<a id="dlBtn" class="dl-btn" hidden download="dj-loop-battle.webm">⬇ 导出</a>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/index.html` | 79 | `<button id="bootBtn"><b>⏻</b><span>启动 DJ 引擎</span><em>点击解锁音频 · 建议佩戴耳机</em></button>` | TBD | вложенный демо-проект: fable/大师-打碟机 | ui-text | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 1 | `/* ============ DJ LOOP BATTLE · 拟物控制台 ============ */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 12 | `/* ---------------- 主题变量 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 13 | `body{ /* 默认 = cyber */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 71 | `/* ---------------- 舞台场景 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 88 | `/* cyber 场景 */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 105 | `/* 8-bit 场景 */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 123 | `/* 国风 场景 */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 140 | `/* 虚拟歌姬 场景 */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 162 | `/* ---------------- 顶栏 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 253 | `/* ---------------- 控制台布局 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 264 | `/* 面板螺丝 */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-打碟机/style.css` | 398 | `/* ---------------- 开机遮罩 ---------------- */` | TBD | вложенный демо-проект: fable/大师-打碟机 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 7 | `<meta name="description" content="向下滚动，从海面一路下潜至 10,909 米的马里亚纳海沟，沿途遇见蓝鲸、巨型乌贼、深海鮟鱇、冥河水母、巨型端足虫与奋斗者号潜水器。">` | TBD | вложенный демо-проект: fable/大师-海底1万米 | attribute | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 8 | `<title>深潜 10,000 米 · 深海生物尺寸对比模拟器</title>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | title | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 63 | `/* ---------- 右侧深度标尺 ---------- */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 88 | `/* ---------- 通用 section ---------- */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 107 | `/* 入场动画 */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 113 | `/* ---------- 生物 ---------- */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 129 | `/* 鮟鱇拟饵发光 */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 133 | `/* 水母伞盖搏动 */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 139 | `/* 潜水器灯光 */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 151 | `/* ---------- 信息卡 ---------- */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 168 | `/* 比例尺 */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 180 | `/* ---------- 首屏 ---------- */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 194 | `/* ---------- 终点 ---------- */` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 236 | `<!-- 共享小人图标 -->` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 245 | `<div class="hud-brand">Abyss Dive · 深潜模拟器</div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 248 | `<div class="hud-row"><span>压强</span><b id="pressure">1 atm</b></div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 249 | `<div class="hud-row"><span>水温</span><b id="temp">23.0 ℃</b></div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 250 | `<div class="hud-row"><span>阳光</span><b id="light">100%</b></div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 252 | `<div class="hud-zone z0" id="zoneChip">透光带 · EPIPELAGIC</div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 268 | `<!-- ======================= 海面 ======================= -->` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 270 | `<h1>深潜 <em>10,000</em> 米</h1>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 271 | `<p class="sub">深海生物尺寸对比模拟器</p>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 273 | `向下滚动，从阳光摇曳的海面一路下潜至马里亚纳海沟。<br>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 274 | `沿途你将依次遇见六位深海居民——` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 275 | `它们的体型、栖息深度与生存方式，远比传说更奇异。` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 277 | `<div class="scroll-hint">↓ 滚动开始下潜</div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 280 | `<!-- ======================= 蓝鲸 · 300 m ======================= -->` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 282 | `<div class="depth-tag reveal">水深 300 米 · 暮光带上缘</div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 284 | `<figure class="creature whale reveal" aria-label="蓝鲸剪影">` | TBD | вложенный демо-проект: fable/大师-海底1万米 | attribute | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 317 | `<h2>蓝鲸<span class="latin">Balaenoptera musculus</span></h2>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 319 | `<div><label>体长</label><b>24 – 33 米</b></div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 320 | `<div><label>体重</label><b>可达 180 吨</b></div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 321 | `<div><label>活动水层</label><b>0 – 500 米</b></div>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 324 | `地球已知历史上最大的动物，比任何恐龙都重。它靠滤食磷虾为生，盛食季每天能吞下约` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 325 | `4 吨；觅食下潜通常在 100–300 米水层，一次闭气 10–20 分钟。` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 326 | `它的心脏重约 180 公斤，鸣声能传播数百公里——是海洋中最响亮的声音之一。` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 330 | `<span class="sname"><svg class="hico"><use href="#icon-human"/></svg>人类</span>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 334 | `<span class="sname">蓝鲸</span>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 337 | `<p class="scap">同一比例下，一头蓝鲸约等于 16 个成年人首尾相连；仅舌头就接近一头大象的重量。</p>` | TBD | вложенный демо-проект: fable/大师-海底1万米 | ui-text | new |
| `os/case-sites/fable/大师-海底1万米/index.html` | 342 | `<!-- ======================= 大王乌贼 · 800 m ======================= -->` | TBD | вложенный демо-проект: fable/大师-海底1万米 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 6 | `<title>纪念碑谷 · 第一章 花园</title>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | title | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 47 | `<div class="diamond"><span>壹</span></div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 48 | `<div class="chapter">第 一 章</div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 49 | `<div class="title">花 园</div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 50 | `<div class="quote">沉默的公主艾达，<br>在此踏上她的赎罪之旅。</div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 51 | `<div class="tap">轻 触 屏 幕</div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 54 | `<div class="diamond"><span>壹</span></div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 55 | `<div class="chapter">第 一 章 · 终</div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 56 | `<div class="quote">神圣几何已然归位，<br>而艾达的旅程，才刚刚开始。</div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 57 | `<button id="restart" onclick="location.reload()">重 新 开 始</button>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 59 | `<div id="hint">点击路径行走 · 机关与升降台可直接拖动 · 拖动空白处旋转世界</div>` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 65 | `纪念碑谷 · 第一章 — 等距视错觉解谜` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 66 | `核心规则：可行走图的连通性由「屏幕投影相邻」决定，而非三维相邻。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 67 | `相机方向严格为 (1,1,1) 正交投影，因此 Δ(1,1,1) 的整数倍在屏幕上` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 68 | `完全不可见 —— 两格若满足 v - u = 单位步长 + k·(1,1,1)，` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 69 | `即构成一条「不可能路径」（彭罗斯错觉连接）。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 73 | `const SHOT = Q.has('shot');            // 截图调试模式：跳过开场动画` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 75 | `// ---------- 调色板（贴近原作第一章：奶油天空、橙粉高塔、青绿点缀） ----------` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 77 | `sideRot:  0xd88a72,   // 旋转机关侧面` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 78 | `topWalk:  0xf5e3c3,   // 机关行走面（奶油）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 79 | `teal:     0x3f8f88,   // 青绿点缀（升降台 / 机关饰带）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 80 | `tealDark: 0x1d5a5e,   // 深青绿（门洞 / 窗）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 82 | `gold:     0xe3a94f,   // 穹顶金` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 86 | `// 分区色系（顶面均偏浅以保持「可行走」的可读性）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 88 | `sand:   { side:0xdfae7e, top:0xf6e3bd },   // 起点栈道 / 西侧地面（沙金）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 89 | `rose:   { side:0xd98a93, top:0xf4dcd6 },   // 西塔上层（玫粉）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 90 | `salmon: { side:0xe09781, top:0xf5e3c3 },   // 中层平台（橙粉）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 91 | `teal:   { side:0x55989b, top:0xddeede },   // 环塔回廊（青绿）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 92 | `violet: { side:0x9384bd, top:0xe9e2f4 },   // 幻影石（雾紫）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 93 | `coral:  { side:0xd87f63, top:0xeec9a0 },   // 终点尖塔（珊瑚）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 96 | `const BASE = -2;                       // 所有塔体向下延伸到的基底高度` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 97 | `const SPEED = 2.3;                     // 行走速度（格/秒）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | ui-text | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 100 | `// ---------- 关卡数据 ----------` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 101 | `// 坐标约定：格 (x,y,z) 表示「站立面高度为 y」。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 102 | `// style: 'col' = 砖柱从 BASE 垒到 y；'slab' = 单层悬板（厚 1）。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 104 | `// 起点栈道` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 106 | `// 西侧地面` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 109 | `// 西塔上层` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 111 | `// 中层平台（旋臂@90° 的错觉步落点：悬空薄板，衔接处下方是天空）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/index.html` | 113 | `// 环塔回廊：下层 (y=7) 与上层 (y=8) 相差 Δ(1,1,1)，屏幕上重叠衔接；` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 1 | `// 关卡逻辑校验 v5：与 index.html 相同的连通规则。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 2 | `// 视错觉相邻随世界视角变化（0°/90°）；升降台为机械结构，不参与视错觉连接。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 3 | `// 2 号升降台即门前石板：底端嵌入回廊缺口（y=7），顶端与门槛齐平（y=8）。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 4 | `// 穷举 2 视角 × 4×4 机关 × 2×2 升降台 = 128 组合。` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 79 | `// ---- 1. 全状态扫描 ----` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 80 | `console.log('— 全状态扫描（2 视角 × 4×4 机关 × 2×2 升降台 = 128 组合）—');` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 82 | `0: new Set([ pairKey([3,4,1],[6,7,3]),      // 旋臂@90° → 中层平台（错觉步，悬空衔接）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 83 | `pairKey([5,7,-1],[7,8,0]) ]),  // 回廊暗面 → 上层（塔后接缝，隐藏环路）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 84 | `1: new Set([ pairKey([5,7,3],[4,8,3]),      // 中层 → 幻影石（仅 90° 视角）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 85 | `pairKey([4,8,3],[5,7,1]) ]),   // 幻影石 → 回廊` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 100 | `for(let y=BASE+1;y<=11;y++) solid.add([6,y,0].join());   // 尖塔` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 115 | `assert(overlapBad===0, \`无方块重叠（违例 ${overlapBad}）\`);` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 116 | `assert(buriedBad===0, \`无节点被砖体掩埋（违例 ${buriedBad}）\`);` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 117 | `assert(doorBad===0, \`门只连接门前石板位置（违例 ${doorBad}）\`);` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 118 | `assert(extra.length===0, \`无白名单之外的魔法边（多余 ${extra.length}）\`);` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 119 | `extra.slice(0,12).forEach(e=>console.log('    多余: '+e));` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 122 | `assert(missing.length===0, \`视角 ${v}：预期魔法边全部出现（缺 ${missing.join(' ; ')\|\|'无'}）\`);` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 125 | `// ---- 2. 流程校验 ----` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 126 | `console.log('— 流程校验 —');` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 129 | `assert(!r([-1,0,9]) && !r(DOOR), '初始：转桥未对齐，西侧与门均不可达'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 131 | `assert(r([-2,0,5]), '转桥@0°：可走到 1 号升降台'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 133 | `assert(r([0,4,3]) && !r([3,4,3]), '升至西塔上层；旋臂@0° 无法登臂'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 135 | `assert(r([3,4,3]) && !r([5,7,3]), '旋臂@180°：可登轴心；中层平台仍不可达'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 137 | `assert(r([3,4,1]) && r([6,7,3]) && r([5,7,3]), '乘臂转到 90°：错觉步可达中层平台');` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 138 | `assert(!r([5,7,1]) && !r(DOOR), '默认视角：回廊与门不可达（中层是死路）'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 140 | `assert(r([4,8,3]) && r([5,7,1]), '世界→90°：幻影石接通，可进入回廊');` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 141 | `assert(r([6,7,1]) && !r(DOOR), '可踏上 2 号升降台（底端嵌于回廊缺口）；门仍不可达'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 143 | `assert(r(DOOR), '2 号升降台拖到顶：与门槛齐平 → 终点门');` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 144 | `assert(r([7,8,1]) && r([5,7,-1]), '顶端亦接通回廊上层与塔后暗面（隐藏环路）'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 145 | `// 强不变量：任何固定状态下，从起点都无法直达门` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 152 | `assert(bad===0, \`强不变量：128 种固定状态下起点均无法直达门（违例 ${bad}）\`); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 153 | `// 防卡死：回廊一侧总能返回（90° 视角幻影石双向通行）` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 155 | `assert(r([5,7,3]), '回廊可经幻影石原路返回，不会卡死'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 156 | `// 升降台不参与视错觉：门前石板（2号台）与回廊砖之间不得有魔法边` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | code-comment | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 160 | `assert(!linked, '回廊砖与 2 号升降台顶部之间无视错觉连接（纯机械衔接）'); }` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-游戏-纪念碑谷/verify.mjs` | 162 | `console.log(fail===0 ? '\n全部通过 ✓' : \`\n${fail} 项失败 ✗\`);` | TBD | вложенный демо-проект: fable/文奎-游戏-纪念碑谷 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 6 | `<title>ATMOS · WebGL 天气光影模拟</title>` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | title | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 22 | `/* 顶部标题 */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 37 | `/* 天气 Tab */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 74 | `/* 左下信息卡 */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 111 | `/* 右下操作提示 */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 120 | `/* 暗角 */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 126 | `/* 时间轴 */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 181 | `<div id="brand">ATMOS<span>◆</span><small>WEBGL 天气光影模拟</small></div>` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | ui-text | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 191 | `<button id="tplay" title="播放昼夜循环">▶</button>` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | attribute | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 197 | `拖动环视 · 滚轮缩放视野<br>` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | ui-text | new |
| `os/case-sites/fable/文奎-真实天气模拟/index.html` | 198 | `数字键 1 – 8 切换天气 · Q 渲染精度` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | ui-text | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 4 | `* ATMOS v3 —— Shadertoy 风格全屏 raymarching 天气模拟` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 6 | `* 「时间 × 天气」二维大气系统：` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 7 | `*   - 时间轴驱动太阳/月亮弧线，天空颜色由太阳高度角实时推导` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 8 | `*     （白昼蓝天 → 金色时段 → 暮色 → 星空 + 月光）` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 9 | `*   - 天气预设只做调制（去饱和/压暗/染色、云雾雨雪参数）` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 10 | `*   - 八种天气：晴 / 阴 / 雷雨 / 沙尘暴 / 雾霾 / 雪 / 龙卷风 / 彩虹` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 11 | `* 渲染：侵蚀 fbm 山体行进、体积云、体积尘雾、体积龙卷风漏斗、` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 12 | `*       角度空间彩虹（主虹 42°/副虹 51°）、亮度感知雨幕、` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 13 | `*       Heartfelt 式镜头水珠滑落、星空、程序化闪电。` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 16 | `/* ---------------- 调试：shader 错误显示到页面 ---------------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 69 | `const vec2 TPOS = vec2(-60.0, -190.0);   // 龙卷风地面落点` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 71 | `/* ---------- 噪声 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 105 | `/* ---------- 地形（iq "Elevated" 式带导数侵蚀 fbm） ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 134 | `// 森林分布：谷底缓坡的噪声斑块（海拔 1~30m）` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 148 | `// 树冠层：第二高度场叠加（iq "Rainforest" 做法），剪影/阴影/法线自动成立` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 199 | `/* ---------- 大气 / 天空 / 星空 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 207 | `// 星空` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 224 | `/* ---------- 体积云 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 268 | `/* ---------- 体积沙尘 / 雾霾 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 294 | `/* ---------- 龙卷风（体积漏斗步进） ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 296 | `const float TSCALE = 3.0;                  // 龙卷风横向体量放大系数（大小 ×3）` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 310 | `den += exp(-pow(rr/((30.0+14.0*sw)*TSCALE), 2.0))*smoothstep(26.0,0.0,p.y)*0.9;  // 地面碎屑云` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 320 | `float C = dot(oc,oc) - 17000.0*TSCALE*TSCALE;   // 包围圆柱半径同步 ×3（半径² ×9）` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 348 | `/* ---------- 地表着色 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 364 | `// 树冠着色：与高度场里的树冠层对应` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 370 | `treeCol *= 0.75 + 0.5*noise2(p.xz*3.1);   // 冠层明暗起伏` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 373 | `// 雪：海拔雪线 + 雪天全局覆盖` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 396 | `// 雨点打在湿地上的高光闪烁` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 407 | `/* ---------- 水面着色 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 435 | `/* ---------- 屏幕空间：雨 / 雪 / 沙尘 / 镜头水珠 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 437 | `// 短划痕雨丝：每条粗细、亮度、相位随机，两端运动模糊` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 451 | `float slant = uWind*(0.14+0.05*sin(uTime*0.83));   // 阵风摆动` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 484 | `// Heartfelt 式镜头水珠：主滴周期滑落 + 蜿蜒 + 上方尾迹微滴` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 505 | `/* ---------- 彩虹（角度空间，主虹 42° / 副虹 51°） ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 507 | `vec3 spectral(float x){  // 0=紫 → 1=红` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | js-string | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 515 | `/* ---------- 色调 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 521 | `/* ---------- 主函数 ---------- */` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 528 | `// 镜头水珠 + 雨中空气扰动` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 556 | `// 空气透视` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-真实天气模拟/main.js` | 564 | `// 体积云 → 龙卷风 → 体积尘雾` | TBD | вложенный демо-проект: fable/文奎-真实天气模拟 | code-comment | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 38 | `<p class="ja blend">線とかたちで、あそぶ。夢を食べて、未来を描く。</p>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 44 | `<p class="ja blend">やわらかく、すきとおる。かたちは自由のまま。</p>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 50 | `<p class="ja blend">テクノロジーで、夢を組み立てる。</p>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 62 | `<p class="ja blend">まだ見ぬ未来を、まっすぐに見る。</p>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 67 | `<p class="ja blend">さあ、次の夢へ。</p>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 81 | `<div class="sidelabel blend">BAKU — A WEBGL TRIBUTE ✳ 夢を食べて、未来を描く</div>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 82 | `<div class="credit blend">TRIBUTE STUDY — inspired by <em>next.junni.co.jp</em> · 复刻练习 · not affiliated</div>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/index.html` | 101 | `<div class="loading-note">A WEBGL TRIBUTE — 夢を食べるバク</div>` | TBD | вложенный демо-проект: fable/文奎-网站 2 | ui-text | new |
| `os/case-sites/fable/文奎-网站 2/js/sections.js` | 264 | `this.ring2 = mkRing(2.6, 0.26, makeRingTex("まだ見ぬ未来へ — KEEP GOING — ", 64), 0.4);` | TBD | вложенный демо-проект: fable/文奎-网站 2 | js-string | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 7 | `<title>無中生有 · EX NIHILO</title>` | TBD | вложенный демо-проект: fable/文奎-网站3 | title | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 93 | `<header id="brand">無中生有<span>EX NIHILO</span></header>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 97 | `<div class="act" data-i="0"><span class="num">壹</span><h2>混沌</h2><p>CHAOS · INK BEFORE FORM</p></div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 98 | `<div class="act" data-i="1"><span class="num">貳</span><h2>星塵</h2><p>STARDUST · 262,144 PARTICLES</p></div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 99 | `<div class="act" data-i="2"><span class="num">叁</span><h2>山海</h2><p>MOUNTAINS &amp; SEAS · FIRST DAWN</p></div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 100 | `<div class="act" data-i="3"><span class="num">肆</span><h2>生靈</h2><p>LIVING LIGHT · THE DEEP</p></div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 101 | `<div class="act" data-i="4"><span class="num">伍</span><h2>歸一</h2><p>RETURN TO ONE · ENSŌ</p></div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 105 | `<div class="l1">萬物皆由代碼而生</div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 110 | `<button data-i="0"><span>混沌</span><i></i></button>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 111 | `<button data-i="1"><span>星塵</span><i></i></button>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 112 | `<button data-i="2"><span>山海</span><i></i></button>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 113 | `<button data-i="3"><span>生靈</span><i></i></button>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 114 | `<button data-i="4"><span>歸一</span><i></i></button>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 117 | `<div id="hint">滾動 · SCROLL</div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 118 | `<button id="mute" title="声音">音</button>` | TBD | вложенный демо-проект: fable/文奎-网站3 | attribute | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 121 | `<div class="g-title">無中生有</div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 123 | `<button id="enter">入</button>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 124 | `<div class="g-note">無圖片 · 無模型 · 無音頻文件 · 無第三方庫 · 唯代碼</div>` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 133 | `無中生有 · EX NIHILO` | TBD | вложенный демо-проект: fable/文奎-网站3 | code-comment | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 169 | `if (!gl) fail('此页面需要 WebGL2 支持（建议 Chrome / Edge / Safari 17+）');` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 171 | `fail('缺少浮点渲染目标扩展 EXT_color_buffer_float');` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 314 | `ACT I · 混沌 — GPU fluid (stable fluids + vorticity confinement)` | TBD | вложенный демо-проект: fable/文奎-网站3 | code-comment | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 549 | `ACT II · 星塵 — GPGPU particles (262,144) forming glyphs` | TBD | вложенный демо-проект: fable/文奎-网站3 | code-comment | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 721 | `tgtTex = makeStateTex(glyphTargets('無中生有'));` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 786 | `ACT III · 山海 — raymarched ink-wash mountains at first dawn` | TBD | вложенный демо-проект: fable/文奎-网站3 | code-comment | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 922 | `ACT IV · 生靈 — SDF-raymarched bioluminescent medusa` | TBD | вложенный демо-проект: fable/文奎-网站3 | code-comment | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 1052 | `ACT V · 歸一 — a single brush stroke: the ensō` | TBD | вложенный демо-проект: fable/文奎-网站3 | code-comment | new |
| `os/case-sites/fable/文奎-网站3/index.html` | 1331 | `const HINTS  = ['滾動 · 聚星塵','滾動 · 開山海','滾動 · 訪生靈','滾動 · 歸於一','圓滿 · 亦可回首'];` | TBD | вложенный демо-проект: fable/文奎-网站3 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 6 | `<title>全球航班吞吐量互动可视化 · Global Air Traffic Intelligence Dashboard</title>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | title | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 9 | `AERO·VIZ GLOBE — 全球航班吞吐量互动可视化（3D 地球 · 美国焦点）` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 10 | `深色科技风 / 航空指挥中心 / 数字孪生大屏` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 36 | `/* ---------- 顶部标题区 ---------- */` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 64 | `/* ---------- 中央 3D 地球 ---------- */` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 86 | `/* ---------- 玻璃卡片通用 ---------- */` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 95 | `/* ---------- 右侧仪表盘 ---------- */` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 145 | `/* ---------- 底部:时间轴 + 排行榜 ---------- */` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 193 | `/* ---------- 悬停卡片 ---------- */` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | code-comment | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 231 | `<h1>全球航班吞吐量互动可视化</h1>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 235 | `<div class="chip">统计周期 <b id="periodLabel">2025 年 1 月 – 12 月</b></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 236 | `<div class="chip demo" id="dataBadge"><span class="dot"></span>示例数据演示 · 可替换为真实 data.json / CSV</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 238 | `<div id="filterSummary">全部航线 · 全年 · 美国国内 + 国际 + 北美地区</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 246 | `<div><span class="sw" style="background:var(--cyan);box-shadow:0 0 6px var(--cyan)"></span>美国国内航线</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 247 | `<div><span class="sw" style="background:var(--purple);box-shadow:0 0 6px var(--purple)"></span>国际航线</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 248 | `<div><span class="sw" style="background:var(--orange);box-shadow:0 0 6px var(--orange)"></span>北美地区航线</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 249 | `<div><span class="nd" style="background:var(--cyan2);box-shadow:0 0 8px var(--cyan)"></span>机场节点 · 大小=吞吐量</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 251 | `<div id="mapHint">拖动旋转地球 · 滚轮缩放 · 悬停查看详情 · 点击锁定机场 / 航线 · 点击空白取消</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 254 | `<div class="g-head"><span class="tick"></span>月度趋势 · 全美航班量 / 旅客吞吐 <span class="x" id="trendClose">✕</span></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 260 | `<div class="sec-title">年度航空流量总览 · KEY METRICS</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 262 | `<div class="kpi"><div class="k-label" id="kFlightsLb">全年航班量</div><div class="k-val"><span id="kFlights">0</span><small>架次</small></div></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 263 | `<div class="kpi"><div class="k-label" id="kPaxLb">全年旅客吞吐量</div><div class="k-val"><span id="kPax">0</span><small>人次</small></div></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 264 | `<div class="kpi org"><div class="k-label" id="kCargoLb">全年货邮吞吐量</div><div class="k-val"><span id="kCargo">0</span><small>吨</small></div></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 265 | `<div class="kpi pur"><div class="k-label">覆盖机场 / 航线</div><div class="k-val"><span id="kAirports">0</span><small>座</small> · <span id="kRoutes">0</span><small>条</small></div></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 266 | `<div class="kpi wide"><div class="k-label">最繁忙机场</div><div class="k-val" id="kTopAirport" style="color:var(--cyan2)">—</div><div class="k-sub" id="kTopAirportV"></div></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 267 | `<div class="kpi wide org"><div class="k-label">最繁忙航线</div><div class="k-val" id="kTopRoute" style="color:#ffd9a8">—</div><div class="k-sub" id="kTopRouteV"></div></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 270 | `<div class="sec-title">筛选器 · FILTERS</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 271 | `<div class="f-row"><div class="f-label">年份选择</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 272 | `<select id="fYear"><option value="2025">2025（示例数据）</option></select></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 273 | `<div class="f-row"><div class="f-label">月份范围 <b id="fMonthLb">全年 1–12 月</b></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 275 | `<button data-r="0,0" class="on">全年</button><button data-r="1,3">Q1</button>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 278 | `<div class="f-row"><div class="f-label">航线类型筛选</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 280 | `<button data-v="all" class="on">全部</button><button data-v="domestic">国内</button>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 281 | `<button data-v="international">国际</button><button data-v="regional">地区</button>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 283 | `<div class="f-row"><div class="f-label">机场等级筛选</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 285 | `<button data-v="all" class="on">全部机场</button><button data-v="mega">大型枢纽</button>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 286 | `<button data-v="hub">中型枢纽</button><button data-v="normal">普通机场</button>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 288 | `<div class="f-row"><div class="f-label">州 / 城市筛选</div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 289 | `<select id="fProvince"><option value="all">全部州 / 城市</option></select></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-全球航班可视化/全球航班吞吐量互动可视化-3D地球.html` | 290 | `<div class="f-row"><div class="f-label">航线航班量阈值 <b id="fThLb">≥ 0 班/年</b></div>` | TBD | вложенный демо-проект: fable/汤帅-全球航班可视化 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 6 | `<title>赤壁之战模拟 · 建安十三年</title>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | title | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 96 | `/* ================= DUEL (武将单挑) ================= */` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | code-comment | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 208 | `<div class="eyebrow">三国战场复原 · 第一集</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 209 | `<h1>赤壁之战模拟</h1>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 210 | `<div class="date-line">建安十三年 · 公元208年 · 长江</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 212 | `<div class="leg-item cao"><span class="leg-swatch" style="background:var(--cao)"></span>曹操水军</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 213 | `<div class="leg-item wu"><span class="leg-swatch" style="background:var(--wu)"></span>孙刘联军</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 219 | `<span class="ctl-cap">地图</span>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 221 | `<button data-v="standard" class="on">标准</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 222 | `<button data-v="real">实景</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 223 | `<button data-v="scroll">古卷</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 227 | `<span class="ctl-cap">视角</span>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 229 | `<button data-v="god" class="on">上帝视角</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 230 | `<button data-v="cao">曹军</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 231 | `<button data-v="wu">联军</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 247 | `<div class="narr-phase" id="narrPhase">布阵</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 253 | `<div class="phases" id="phases" role="tablist" aria-label="战役阶段"></div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | attribute | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 255 | `<button class="play-btn" id="playBtn" aria-label="播放 / 暂停">` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | attribute | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 265 | `<div class="duel-kicker">两军接战 · 阵前斗将</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 266 | `<div class="duel-title">武将单挑</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 267 | `<div class="duel-loc" id="duelLoc">赤壁水道</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 274 | `<div class="duel-log" id="duelLog">两将策马而出，阵前对峙——</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 275 | `<button class="duel-skip" id="duelSkip">跳过 ›</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 283 | `赤壁之战 — true-perspective 3D tactical simulation (16:9)` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | code-comment | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 365 | `{key:'布阵',en:'PHASE 01 — DEPLOYMENT',dur:13, cam:{x:0,y:-20,dist:1600,yaw:0},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 366 | `narr:'建安十三年冬，曹操统北方既定之众二十余万，旌旗蔽空，水军沿长江北岸大举展开。孙权、刘备合纵结盟，周瑜督三万精锐于南岸列阵，楼船斗舰，隔江对峙，战云密布。'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 367 | `{key:'连环船阵',en:'PHASE 02 — CHAINED FLEET',dur:11, cam:{x:-30,y:-150,dist:1080,yaw:-.16},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 368 | `narr:'曹军多为北方士卒，不习水战，舟船颠簸，士卒呕眩。曹操遂令以铁索连舟、上铺木板，千艘战船连成巨阵，行走如履平地——船阵固若磐石，却也埋下致命的隐患。'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 369 | `{key:'东风起',en:'PHASE 03 — THE EAST WIND',dur:11, cam:{x:90,y:40,dist:1300,yaw:.14},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 370 | `narr:'隆冬时节，江面骤起东南大风，雾散云走，风向直指北岸曹营。周瑜与黄盖定苦肉之计，黄盖遣使诈降。风助火势，天赐良机——火攻之计，悄然启动。'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 371 | `{key:'火攻开始',en:'PHASE 04 — FIRE ATTACK',dur:14, cam:{x:-20,y:-40,dist:1000,yaw:-.12},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 372 | `narr:'黄盖率蒙冲斗舰数十艘，满载薪草、灌以膏油，乘东南风直冲曹军船阵。中江举帆，同时发火。铁索连环之下，烈焰瞬息蔓延，烟炎张天，江面尽赤。'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 373 | `{key:'曹军溃败',en:'PHASE 05 — ROUT OF CAO CAO',dur:14, cam:{x:10,y:-60,dist:1650,yaw:.10},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 374 | `narr:'大火延及北岸营寨，曹军人马烧溺死者甚众。曹操率残部弃船登岸，经华容道仓皇北撤。联军水陆并进，乘胜追击。赤壁一炬，遂定三分天下之势。'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 387 | `{icon:'cloud',main:'阴云 · 江雾渐起',sub:'VISIBILITY MODERATE',wind:'西北风 二级',deg:135,mood:''},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 388 | `{icon:'fog',main:'大雾 · 视野不良',sub:'HEAVY RIVER FOG',wind:'西北风 一级',deg:135,mood:''},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 389 | `{icon:'wind',main:'东南风骤起',sub:'WIND SHIFT — SE GALE',wind:'东南风 六级',deg:-45,mood:'alert'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 390 | `{icon:'flame',main:'烈火 · 东南风助燃',sub:'FIRESTORM CONDITIONS',wind:'东南风 六级',deg:-45,mood:'danger'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 391 | `{icon:'smoke',main:'浓烟蔽江',sub:'SMOKE OVER THE RIVER',wind:'东南风 四级',deg:-45,mood:'danger'},` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第一轮-复杂提示词）.html` | 677 | `武将单挑 — general duel card battles (三国志 style)` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | code-comment | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 6 | `<title>赤壁之战 · 长江火攻战役推演 \| 历史特番</title>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | title | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 197 | `<div class="big">赤壁之戰</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 198 | `<div class="sub">長江・烏林水域 戰役推演</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 199 | `<div class="seal">建安十三年</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 205 | `<div class="row1"><span class="nm">曹军 · 北府水陆</span><span class="cnt" id="caoCnt">约 208,000</span></div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 208 | `<div class="vsmark">对峙</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 210 | `<div class="row1"><span class="nm">孙刘联军</span><span class="cnt" id="allyCnt">约 50,000</span></div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 216 | `<div id="broadcast"><span class="tag">战报</span><span id="bcText"></span></div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 219 | `<div class="ctl"><h4>地图主题</h4>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 221 | `<button data-v="std" class="on">标准</button><button data-v="real">实景</button><button data-v="scroll">古卷</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 224 | `<div class="ctl"><h4>两军视图</h4>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 226 | `<button data-v="ally" class="on">联军视角</button><button data-v="cao">曹军视角</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 230 | `<div class="ctl"><h4>机位</h4>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 232 | `<button data-v="god" class="on">上帝视角</button><button data-v="low">低机位</button><button data-v="free">自由</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 235 | `<div class="ctl"><h4>天气</h4>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 237 | `<button data-v="clear" class="on">晴</button><button data-v="cloud">阴</button><button data-v="rain">雨</button><button data-v="wind">东南风</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 240 | `<button id="duelBtn">武将单挑</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 243 | `<div id="warlog"><h4>战报实录</h4><div id="loglist"></div></div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 245 | `<div id="hint">拖拽旋转 · 滚轮缩放<br>北岸乌林 — 曹军水寨<br>南岸赤壁 — 联军大营</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 250 | `<button id="playBtn" title="播放/暂停">❚❚</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | attribute | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 252 | `<button id="spdBtn" title="演示速度">1×</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | attribute | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 258 | `<div class="era">歷史特番 · 三國戰役全紀錄</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 259 | `<h1>赤壁<span>之戰</span></h1>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 260 | `<div class="ribbon">公元二〇八年 · 冬</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 261 | `<div class="desc">二十万对五万 —— 一场东南风改写的天下格局</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 262 | `<button class="bigbtn" id="startBtn">开始推演</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 268 | `<div class="era">戰役終章</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 269 | `<h1 style="font-size:4.6em">火燒赤壁 <span>以少勝多</span></h1>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 271 | `<div><b id="esCao">—</b>曹军残部</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 272 | `<div><b>83%</b>北军战损</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 273 | `<div><b>三分</b>天下格局初定</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 275 | `<div class="desc" style="margin-top:1.4em">曹操北归，孙权固守江东，刘备进取荆益 —— 三国鼎立自此而始。</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 276 | `<button class="bigbtn" id="replayBtn">重新推演</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 283 | `<h2>武將單挑</h2>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 284 | `<div class="dsub">阵前搦战 · 各遣一员大将 · 卡牌决斗定军心</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 287 | `<div class="pickcol cao"><h3>曹 营 出 将</h3><div class="glist" id="listCao"></div></div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 288 | `<div class="pickcol ally"><h3>联 军 出 将</h3><div class="glist" id="listAlly"></div></div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 290 | `<button class="bigbtn" id="pickGo" style="margin-top:1.2em;font-size:.9em">擂鼓 · 开战</button>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 296 | `<div id="roundNo">第 一 回 合</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/case-sites/fable/汤帅-赤壁之战模拟器/赤壁之战-3D战役模拟（第二轮-简单提示词）.html` | 297 | `<div class="vs">對決</div>` | TBD | вложенный демо-проект: fable/汤帅-赤壁之战模拟器 | ui-text | new |
| `os/cases.js` | 1 | `// 从本地 Claude Fable / Claude Design 工程提取的上线案例。` | TBD | каталог кейсов (подписи карточек) | code-comment | new |
| `os/cases.js` | 5 | `{ title: "相位跃迁 PHASE RUNNER · DELUXE", cover: "os/cases/fable-02-phase-runner-deluxe.jpg?v=20260612-cover", url: "os/case-sites/fable/%E5%A4%A7%E5%B8%88-2D%E4%BA%92%E5%8A%A8%E6%B8%B8%E6%88%8F/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 6 | `{ title: "DJ Loop Battle · 名曲演奏版", cover: "os/cases/fable-03-dj-loop-battle.jpg?v=20260612-cover", url: "os/case-sites/fable/%E5%A4%A7%E5%B8%88-%E6%89%93%E7%A2%9F%E6%9C%BA/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 7 | `{ title: "深潜 10,000 米 · 深海生物尺寸对比模拟器", cover: "os/cases/fable-04-10-000.jpg?v=20260612-cover", url: "os/case-sites/fable/%E5%A4%A7%E5%B8%88-%E6%B5%B7%E5%BA%951%E4%B8%87%E7%B1%B3/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 8 | `{ title: "纪念碑谷 · 第一章 花园", cover: "os/cases/fable-05-case.jpg?v=20260612-cover", url: "os/case-sites/fable/%E6%96%87%E5%A5%8E-%E6%B8%B8%E6%88%8F-%E7%BA%AA%E5%BF%B5%E7%A2%91%E8%B0%B7/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 9 | `{ title: "ATMOS · WebGL 天气光影模拟", cover: "os/cases/fable-06-atmos-webgl.jpg?v=20260612-cover", url: "os/case-sites/fable/%E6%96%87%E5%A5%8E-%E7%9C%9F%E5%AE%9E%E5%A4%A9%E6%B0%94%E6%A8%A1%E6%8B%9F/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 12 | `{ title: "無中生有 · EX NIHILO", cover: "os/cases/fable-09-ex-nihilo.jpg?v=20260612-cover", url: "os/case-sites/fable/%E6%96%87%E5%A5%8E-%E7%BD%91%E7%AB%993/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 13 | `{ title: "全球航班吞吐量互动可视化 · Global Air Traffic Intelligence Dashboard", cover: "os/cases/fable-10-global-air-traffic-intelligence-dashboard.jpg?v=20260612-cover", url: "os/case-sites/fable/%E6%B1%A4%E5%B8%85-%E5%85%A8%E7%90%83%E8%88%AA%E7%8F%AD%E5%8F%AF%E8%A7%86%E5%8C%96/%E5%85%A8%E7%90%83%E8%88%AA%E7%8F%AD%E5%90%9E%E5%90%90%E9%87%8F%E4%BA%92%E5%8A%A8%E5%8F%AF%E8%A7%86%E5%8C%96-3D%E5%9C%B0%E7%90%83.h…` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 14 | `{ title: "赤壁之战模拟 · 建安十三年", cover: "os/cases/fable-11-case.jpg?v=20260612-cover", url: "os/case-sites/fable/%E6%B1%A4%E5%B8%85-%E8%B5%A4%E5%A3%81%E4%B9%8B%E6%88%98%E6%A8%A1%E6%8B%9F%E5%99%A8/%E8%B5%A4%E5%A3%81%E4%B9%8B%E6%88%98-3D%E6%88%98%E5%BD%B9%E6%A8%A1%E6%8B%9F%EF%BC%88%E7%AC%AC%E4%B8%80%E8%BD%AE-%E5%A4%8D%E6%9D%82%E6%8F%90%E7%A4%BA%E8%AF%8D%EF%BC%89.html" }` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 18 | `{ title: "数据可视化三重奏", cover: "os/cases/design-02-case.jpg", url: "os/case-sites/design/%E4%BA%A7%E5%93%81%E6%B8%B2%E6%9F%93/data-visualization.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 19 | `{ title: "四页演示 · 地图 / K线 / 代码 / 公式", cover: "os/cases/design-05-k.jpg", url: "os/case-sites/design/%E5%9C%B0%E5%9B%BE%E3%80%81k%20%E7%BA%BF%E3%80%81%E4%BB%A3%E7%A0%81%E3%80%81%E5%85%AC%E5%BC%8F/%E5%9B%9B%E9%A1%B5%E6%BC%94%E7%A4%BA.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 20 | `{ title: "大师的 AI 小灶 — 账号愿景", cover: "os/cases/design-06-ai.jpg?v=20260612-cover2", url: "os/case-sites/design/%E5%B0%8F%E7%81%B6%E8%B4%A6%E5%8F%B7%E6%84%BF%E6%99%AF/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 21 | `{ title: "AI 狂奔时，普通人需要知道的真相", cover: "os/cases/design-07-ai.jpg", url: "os/case-sites/design/%E5%B0%8F%E7%BA%A2%E4%B9%A6%E5%88%86%E4%BA%AB/deck.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 22 | `{ title: "NEXBOT · 概念展示", cover: "os/cases/design-08-nexbot.jpg", url: "os/case-sites/design/%E6%9C%BA%E5%99%A8%E4%BA%BA/Nexbot%20Deck.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 24 | `{ title: "2025 年度复盘 — 市场营销", cover: "os/cases/design-10-2025.jpg", url: "os/case-sites/design/%E6%B1%87%E6%8A%A5%20PPT/Year%20End%20Review%20v1.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 25 | `{ title: "物理课 · 三则原理演示", cover: "os/cases/design-12-case.jpg", url: "os/case-sites/design/%E7%89%A9%E7%90%86%E8%AF%BE/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 26 | `{ title: "认识春天 · 小学课堂 PPT", cover: "os/cases/design-14-ppt.jpg", url: "os/case-sites/design/%E8%AF%BE%E5%A0%82ppt/%E8%AE%A4%E8%AF%86%E6%98%A5%E5%A4%A9%20%E8%AF%BE%E5%A0%82ppt%20-%20%E9%9D%99%E6%80%81%E7%89%88.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 27 | `{ title: "2026 潮流色彩报告 · 果冻研究所", cover: "os/cases/design-16-2026.jpg", url: "os/case-sites/design/%E9%A3%8E%E6%A0%BC%202/index.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 28 | `{ title: "幕間 — 2026 影像年鑑", cover: "os/cases/design-17-2026.jpg", url: "os/case-sites/design/%E9%A3%8E%E6%A0%BC%203/%E5%B9%95%E9%96%93%202026%20%E5%BD%B1%E5%83%8F%E5%B9%B4%E9%91%91.html" },` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/cases.js` | 29 | `{ title: "黑科技技能分享 — Shader-Space Rendering", cover: "os/cases/design-18-shader-space-rendering.jpg", url: "os/case-sites/design/%E9%BB%91%E7%A7%91%E6%8A%80%E6%8A%80%E8%83%BD%E5%88%86%E4%BA%AB/%E9%BB%91%E7%A7%91%E6%8A%80%E6%8A%80%E8%83%BD%E5%88%86%E4%BA%AB.html" }` | TBD | каталог кейсов (подписи карточек) | content-data | new |
| `os/content.js` | 1 | `// 从飞书「小灶官网」多维表格整理的视频与教程链接。` | TBD | данные контента: видео, документы, данмаку | code-comment | new |
| `os/content.js` | 5 | `{ title: "Claude Design做PPT", url: "https://www.bilibili.com/video/BV12HEz6KE4m/?spm_id_from=333.1387.homepage.video_card.click&vd_source=6dd8a7dce890c9f3727844c3d44e9060", cover: "os/covers/a99.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV12HEz6KE4m&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 6 | `{ title: "Duct-Tape /GPT image V2", url: "https://www.bilibili.com/video/BV1a1R1BDEB1/?spm_id_from=333.1387.homepage.video_card.click", cover: "os/covers/a97.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1a1R1BDEB1&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 7 | `{ title: "如何显著减少AI抽卡", url: "https://www.bilibili.com/video/BV1gsopB9ET1/?spm_id_from=333.1387.homepage.video_card.click", cover: "os/covers/a87.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1gsopB9ET1&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 8 | `{ title: "Google Cloud Next 26 【现场活动】+【视频】", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7634170035669437738&showSubTab=video&showTab=post", cover: "os/covers/a85.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 9 | `{ title: "Openclaw的安全风险", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7621126509763300643&showSubTab=video&showTab=post", cover: "os/covers/a84.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 10 | `{ title: "消失的年俗-抖音春节", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7606912618569288986&showSubTab=video&showTab=post", cover: "os/covers/a77.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 11 | `{ title: "Vidu主体库", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7600721240365600034&showSubTab=video&showTab=post", cover: "os/covers/a76.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 12 | `{ title: "可灵APP动作控制", url: "https://www.xiaohongshu.com/explore/6969fb37000000002103f1e0?xsec_token=YBoZdBEKnCcfttG1kwcryPf7NSWgE3_RgwIiYg-BqSY9I%3D&xsec_source=pc_creatormng", cover: "os/covers/a63.jpg", embed: "", platform: "小红书" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 13 | `{ title: "海螺-AI前景-用这2类前景，去视频AI味儿，搞定电影感！", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7591781121260670243&showSubTab=video&showTab=post", cover: "os/covers/a56.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 14 | `{ title: "lovart", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7594110636263525670&showSubTab=video&showTab=post", cover: "os/covers/a54.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 15 | `{ title: "提示词不是越长越好", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7587225361230974260&showSubTab=video&showTab=post", cover: "os/covers/a50.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 16 | `{ title: "豆包APP-vlog中应用", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7584114921781071144&showSubTab=video&showTab=post", cover: "os/covers/a45.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 17 | `{ title: "如何避免AI视频的摆拍感", url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7585740056904650036&showSubTab=video&showTab=post", cover: "os/covers/a41.jpg", embed: "", platform: "抖音" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 18 | `{ title: "海螺AI-表情管理", url: "https://www.bilibili.com/video/BV1ERqZBHEhW/?spm_id_from=333.1387.homepage.video_card.click", cover: "os/covers/a38.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1ERqZBHEhW&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 19 | `{ title: "即梦AI青导计划-狗王传说", url: "https://www.bilibili.com/video/BV1yj2vBHE5E/?spm_id_from=333.1387.homepage.video_card.click", cover: "os/covers/a36.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1yj2vBHE5E&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 20 | `{ title: "即梦AI青导计划-影视飓风", url: "https://www.bilibili.com/video/BV1eZU5BDEgw/?spm_id_from=333.1387.homepage.video_card.click", cover: "os/covers/a35.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1eZU5BDEgw&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 21 | `{ title: "AI分镜-Lovart", url: "https://www.bilibili.com/video/BV182CNBBEgJ/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a34.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV182CNBBEgJ&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 22 | `{ title: "Sora2尝鲜", url: "https://www.bilibili.com/video/BV1zk4Jz6EXT/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a31.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1zk4Jz6EXT&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 23 | `{ title: "MiniMax语⾳", url: "https://www.bilibili.com/video/BV13hswzTEC5/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a29.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV13hswzTEC5&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 24 | `{ title: "豆包Seedream4.0做PPT", url: "https://www.bilibili.com/video/BV1cc4hzMEny/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a28.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1cc4hzMEny&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 25 | `{ title: "动态PPT 3.0&马年主题PPT", url: "https://www.bilibili.com/video/BV1Yo5D6TENc/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a27.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1Yo5D6TENc&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 26 | `{ title: "去除文章AI味", url: "https://www.bilibili.com/video/BV1kvB5BuEtH/?spm_id_from=333.1387.homepage.video_card.click", cover: "os/covers/a24.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1kvB5BuEtH&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 27 | `{ title: "稿定AI", url: "https://www.bilibili.com/video/BV15vptzkEKN/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a20.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV15vptzkEKN&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 28 | `{ title: "豆包面试", url: "https://www.bilibili.com/video/BV19mp1z4EWS/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a19.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV19mp1z4EWS&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 29 | `{ title: "三招去除图片AI味儿", url: "https://www.bilibili.com/video/BV1xipMzgErS/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a17.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1xipMzgErS&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 30 | `{ title: "10分钟邪修AI，扫盲你看不懂的AI专业词汇", url: "https://www.bilibili.com/video/BV1tMHYzkEnY/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a16.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1tMHYzkEnY&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 31 | `{ title: "视频横向大评测", url: "https://www.bilibili.com/video/BV1qup7zSEBP/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a15.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1qup7zSEBP&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 32 | `{ title: "runway", url: "https://www.bilibili.com/video/BV1NaYmzkEFo/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a14.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1NaYmzkEFo&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 33 | `{ title: "开学第一课", url: "https://www.bilibili.com/video/BV1wkaCzxE7v/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a12.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1wkaCzxE7v&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 34 | `{ title: "【3步搞定】丑PPT有救了！AI一键3D化效果碾压99%同事", url: "https://www.bilibili.com/video/BV1atg3zFE9L/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a09.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1atg3zFE9L&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 35 | `{ title: "测评Lovart", url: "https://www.bilibili.com/video/BV1Z9M7zUEzq/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a07.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1Z9M7zUEzq&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 36 | `{ title: "GPT4o生成图表", url: "https://www.bilibili.com/video/BV1HkG9zqEhp/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a06.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1HkG9zqEhp&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 37 | `{ title: "AI做PPT1", url: "https://www.bilibili.com/video/BV1HMXWYgE5E/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a05.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1HMXWYgE5E&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 38 | `{ title: "deepseek", url: "https://www.bilibili.com/video/BV1YcRGYAE1j/?spm_id_from=333.1387.upload.video_card.click", cover: "os/covers/a04.jpg", embed: "https://player.bilibili.com/player.html?bvid=BV1YcRGYAE1j&page=1&autoplay=0", platform: "B站" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 39 | `{ title: "千问APP-快乐小马模型", url: "https://www.xiaohongshu.com/explore/6a142c76000000003700d3a4?xsec_token=YBxFzCePHz93vIbrS41-gn_KbER3LgwdJpZ9184y3JMgI%3D&xsec_source=pc_creatormng", cover: "os/covers/a106.jpg", embed: "", platform: "小红书" }` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 42 | `"把 AI 用到真实工作里",` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 43 | `"先跑通，再优化",` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 44 | `"不教大道理，只传实用技",` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 45 | `"从案例里学，最快",` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 46 | `"把灵感做成作品",` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 47 | `"看得懂，用得上",` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 48 | `"今天也有新工具值得试",` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 49 | `"复杂流程拆成一招"` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 52 | `{ title: "【AI教程】Claude design 实现可交互可编辑PPT", url: "https://vupyskvyxk.feishu.cn/wiki/IouWw3ihmihAsXkNILdc6DZ2nhc", source: "Claude Design做PPT" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 53 | `{ title: "【AI生图 NEW!】Chatgpt Image 2-案例库", url: "https://vupyskvyxk.feishu.cn/wiki/UraUwNhEyiOWxpkfWR7cwn4MnMc", source: "Duct-Tape /GPT image V2" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 54 | `{ title: "【AI漫剧】换个思路上手AI漫剧-主体库功能", url: "https://vupyskvyxk.feishu.cn/wiki/AP4VwmSbxiaUK1kGBSwcW57Xnoc", source: "Vidu主体库" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 55 | `{ title: "【AI动作迁移】实用教程及案例", url: "https://vupyskvyxk.feishu.cn/wiki/CiwDwWZ0hizssckXBfxczR6bnGg", source: "可灵APP动作控制" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 56 | `{ title: "【AI视频】用AI前景搞定视频大片感", url: "https://vupyskvyxk.feishu.cn/wiki/KkQUwhEasiWvryktGzmcTtDknE4", source: "海螺-AI前景-用这2类前景，去视频AI味儿，搞定电影感！" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 57 | `{ title: "【AI视频】1张图1部动画片，AI做动画的3步流程揭秘", url: "https://vupyskvyxk.feishu.cn/wiki/KTbCwdce3iL0TNkCNhsce4QUnFg", source: "lovart" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 58 | `{ title: "【AI提示词】不是越长越好", url: "https://vupyskvyxk.feishu.cn/wiki/Mpy3wdFNPiwDekkczp6cGohOnwh", source: "提示词不是越长越好" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 59 | `{ title: "【AI视频】素材不够，AI来凑，3招拯救你的片子", url: "https://vupyskvyxk.feishu.cn/wiki/XYIWwfGGjiHJPvkloBMcXdAunRV", source: "豆包APP-vlog中应用" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 60 | `{ title: "【AI视频】如何去除“摆拍感”？", url: "https://vupyskvyxk.feishu.cn/wiki/FEKtwrn1sivPU9krGL8c9FKpnMg", source: "如何避免AI视频的摆拍感" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 61 | `{ title: "【AI视频】3招教会你，原来AI的情绪是这么表达的！", url: "https://vupyskvyxk.feishu.cn/wiki/H61SwTdgjiBnnZkTEMockrUPndc", source: "海螺AI-表情管理" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 62 | `{ title: "【AI视频】用分镜搞定“影视感”", url: "https://vupyskvyxk.feishu.cn/wiki/EwGlwWKkziBe37kbzJVcBSfQnDh", source: "AI分镜-Lovart" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 63 | `{ title: "【AI生音频】提示词公式+提示词库", url: "https://vupyskvyxk.feishu.cn/wiki/SxWkwdXq5iP8ajkeq0ucYZPvnAh", source: "MiniMax语⾳" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 64 | `{ title: "【AI做PPT 2.0】3 招搞定高级大片感PPT🔥", url: "https://vupyskvyxk.feishu.cn/wiki/HDQbwQGkCiW6O9kGMQQcdcUMnme", source: "豆包Seedream4.0做PPT" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 65 | `{ title: "【AI做PPT 3.0】2 招搞定动态PPT封面🔥", url: "https://vupyskvyxk.feishu.cn/wiki/RgzVwAMJnidwGckSTRpcZgxCnGc", source: "动态PPT 3.0&马年主题PPT" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 66 | `{ title: "【AI写作】4招去除写作AI味儿", url: "https://vupyskvyxk.feishu.cn/wiki/SIXJw0q7nihzEDkOPnFckkXYnF8", source: "去除文章AI味" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 67 | `{ title: "【稿定AI】案例提示词分享", url: "https://vupyskvyxk.feishu.cn/wiki/VtiVw2IA0ialKUkvH6dcOgH9nlf", source: "稿定AI" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 68 | `{ title: "【AI模拟面试】4个技巧助你轻松拿下offer", url: "https://vupyskvyxk.feishu.cn/wiki/Tjnrwb4C4iO6w6kpfCbciyUTnEg", source: "豆包面试" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 69 | `{ title: "【AI生图】三招去除图片的AI味儿", url: "https://vupyskvyxk.feishu.cn/wiki/M8vdwUJw0itUvik1sYbcKlXjn1e", source: "三招去除图片AI味儿" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 70 | `{ title: "【AI提效】如何100%利用AI提高学习效率", url: "https://vupyskvyxk.feishu.cn/wiki/Ebeqwe2r4iPGBxktCfmcLxeonFh", source: "开学第一课" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 71 | `{ title: "【速读】GPT-4o还能做什么?-职场图表篇", url: "https://vupyskvyxk.feishu.cn/wiki/ZHUEwlH9EiqscUkPNTCc7gxlnPb", source: "【3步搞定】丑PPT有救了！AI一键3D化效果碾压99%同事" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 72 | `{ title: "Lovart创作案例（50个）-人人都是设计师", url: "https://vupyskvyxk.feishu.cn/wiki/HCqwwudYFisftqkCIf0ccPdsnfh", source: "测评Lovart" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 73 | `{ title: "【速读】GPT-4o还能做什么?-职场图表篇", url: "https://vupyskvyxk.feishu.cn/wiki/ZHUEwlH9EiqscUkPNTCc7gxlnPb", source: "GPT4o生成图表" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 74 | `{ title: "【速读】Deepseek做出全网最好看的PPT-🔥AI小灶", url: "https://vupyskvyxk.feishu.cn/wiki/H7rFwb8v6i3KB4kcVcBcm3bNn8d", source: "AI做PPT1" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 75 | `{ title: "【速读】Deepseek做出全网最好看的PPT-🔥AI小灶", url: "https://vupyskvyxk.feishu.cn/wiki/H7rFwb8v6i3KB4kcVcBcm3bNn8d", source: "deepseek" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 76 | `{ title: "【AI视频】去假指南，4招搞定影视感✨", url: "https://vupyskvyxk.feishu.cn/wiki/UWHjwdbaCiy4Y6kufsVcA3aFnmg", source: "千问APP-快乐小马模型" },` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/content.js` | 77 | `{ title: "【AI教程】Claude Fable 5 测评🔥", url: "https://vupyskvyxk.feishu.cn/wiki/PkKVwFoX1iSDSNkUVdYcvBfwnMe", source: "Claude Fable 5" }` | TBD | данные контента: видео, документы, данмаку | content-data | new |
| `os/desk.js` | 1 | `// 小灶 OS · 桌面图标：内容渲染 + 框选 + 拖拽 + Quick Look` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | code-comment | new |
| `os/desk.js` | 15 | `var cleanTitle = (v.title \|\| '').replace(/^【商】/, '');` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | js-string | new |
| `os/desk.js` | 26 | `a.dataset.platform = v.platform \|\| '视频';` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | js-string | new |
| `os/desk.js` | 38 | `plat.textContent = v.platform \|\| '视频';` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | js-string | new |
| `os/desk.js` | 136 | `'<button class="ql-close" type="button" aria-label="关闭">×</button>' +` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | js-string | new |
| `os/desk.js` | 163 | `q.querySelector('.ql-meta span').textContent = file.dataset.platform \|\| '视频';` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | js-string | new |
| `os/desk.js` | 175 | `menu.innerHTML = '<button type="button" data-act="delete">删除</button>';` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | js-string | new |
| `os/desk.js` | 318 | `if (moved \|\| f.dataset.platform === 'B站') {` | TBD | иконки рабочего стола, контекстное меню, Quick Look, данмаку | js-string | new |
| `os/os.css` | 2 | `小灶 OS · 系统外壳（菜单栏 / 桌面 / 桌面图标 / Dock / 窗口骨架）` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 3 | `App 专属样式见 appstyles.css` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 141 | `/* ---------- 桌面 ---------- */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 229 | `/* ---------- 桌面视频图标（绝对定位，可拖拽） ---------- */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 422 | `/* 框选矩形 */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 496 | `/* App 图标（真实 PNG）：容器与图片同尺寸，保证与圆点同轴 */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 505 | `/* 字母图标（无素材的平台） */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 508 | `/* ---------- 窗口骨架 ---------- */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 530 | `/* 边缘缩放热区（不可见，macOS 风格无角标） */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/os.css` | 582 | `margin-right: 55px; /* 平衡红绿灯宽度 */` | TBD | стили shell (комментарии) | code-comment | new |
| `os/presence.js` | 1 | `// 小灶官网 · 多人鼠标与轻量协同` | TBD | многопользовательский режим (WebSocket) | code-comment | new |
| `os/presence.js` | 36 | `name: "访客 " + id.slice(0, 2).toUpperCase(),` | TBD | многопользовательский режим (WebSocket) | code-string | new |
| `os/presence.js` | 137 | `node.querySelector(".tag").textContent = peer.name \|\| "访客";` | TBD | многопользовательский режим (WebSocket) | code-string | new |
| `os/presence.js` | 149 | `node.querySelector(".tag").textContent = peer.name \|\| "访客";` | TBD | многопользовательский режим (WebSocket) | code-string | new |
| `os/wm.js` | 1 | `// 小灶 OS · 极简窗口管理器` | TBD | оконный менеджер: заголовки, кнопки, контекст | code-comment | new |
| `os/wm.js` | 171 | `// 先把当前尺寸固化为 px，确保过渡有起点` | TBD | оконный менеджер: заголовки, кнопки, контекст | code-comment | new |
| `os/wm.js` | 222 | `bClose.className = 't-close'; bClose.title = '关闭';` | TBD | оконный менеджер: заголовки, кнопки, контекст | js-string | new |
| `os/wm.js` | 224 | `bMin.className = 't-min'; bMin.title = '最小化';` | TBD | оконный менеджер: заголовки, кнопки, контекст | js-string | new |
| `os/wm.js` | 226 | `bMax.className = 't-max'; bMax.title = '最大化';` | TBD | оконный менеджер: заголовки, кнопки, контекст | js-string | new |
| `os/wm.js` | 245 | `// 级联定位（可被 opts.x/opts.y 覆盖）` | TBD | оконный менеджер: заголовки, кнопки, контекст | code-comment | new |
| `os/wm.js` | 263 | `void el.offsetWidth; // 强制 reflow，确保入场过渡稳定触发` | TBD | оконный менеджер: заголовки, кнопки, контекст | js-string | new |
| `小灶 OS · 手机版.html` | 6 | `<title>小灶 iOS · 大师的AI小灶</title>` | TBD | mobile shell: status bar, lockscreen, home, dock | title | new |
| `小灶 OS · 手机版.html` | 13 | `// 设备路由：桌面访问时回到 macOS 版（加 ?ios=1 可强制留在手机版）` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 手机版.html` | 17 | `location.replace('小灶 OS · 电脑版.html?mac=1');` | TBD | mobile shell: status bar, lockscreen, home, dock | path | new |
| `小灶 OS · 手机版.html` | 24 | `<!-- ===================== 状态栏 ===================== -->` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 手机版.html` | 33 | `<!-- ===================== 锁屏 ===================== -->` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 手机版.html` | 34 | `<div class="lockscreen" id="lockscreen" data-screen-label="锁屏">` | TBD | mobile shell: status bar, lockscreen, home, dock | attribute | new |
| `小灶 OS · 手机版.html` | 38 | `<img src="os/avatars/dashi.jpg" alt="大师" />` | TBD | mobile shell: status bar, lockscreen, home, dock | attribute | new |
| `小灶 OS · 手机版.html` | 39 | `<p>大师的AI小灶</p>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 40 | `<button class="lock-enter" id="lock-enter" type="button">进入小灶</button>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 44 | `<!-- ===================== 主屏 ===================== -->` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 手机版.html` | 45 | `<main class="home" data-screen-label="iOS 主屏">` | TBD | mobile shell: status bar, lockscreen, home, dock | attribute | new |
| `小灶 OS · 手机版.html` | 49 | `<span class="lb">教程视频</span>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 53 | `<span class="lb">抖音</span>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 57 | `<span class="lb">小红书</span>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 61 | `<span class="lb">B站</span>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 65 | `<span class="lb">视频号</span>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 69 | `<span class="lb">微信</span>` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 77 | `<button data-act="term"><img src="os/icons/terminal.png" alt="关于小灶" /></button>` | TBD | mobile shell: status bar, lockscreen, home, dock | attribute | new |
| `小灶 OS · 手机版.html` | 78 | `<button data-act="doc"><img src="os/icons/finder.png" alt="文档" /></button>` | TBD | mobile shell: status bar, lockscreen, home, dock | attribute | new |
| `小灶 OS · 手机版.html` | 79 | `<button data-act="fx"><img src="os/icons/safari.png" alt="上线效果" /></button>` | TBD | mobile shell: status bar, lockscreen, home, dock | attribute | new |
| `小灶 OS · 手机版.html` | 80 | `<button data-act="team"><img src="os/icons/contacts.png" alt="团队" /></button>` | TBD | mobile shell: status bar, lockscreen, home, dock | attribute | new |
| `小灶 OS · 手机版.html` | 83 | `<!-- ===================== App 视图 ===================== -->` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 手机版.html` | 86 | `<!-- ===================== 脚本 ===================== -->` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 手机版.html` | 94 | `// 时钟（状态栏 + 锁屏）` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 手机版.html` | 99 | `var wd = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()];` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 105 | `if (ld) ld.textContent = (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + wd;` | TBD | mobile shell: status bar, lockscreen, home, dock | ui-text | new |
| `小灶 OS · 手机版.html` | 111 | `// 锁屏解锁` | TBD | mobile shell: status bar, lockscreen, home, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 6 | `<title>小灶 OS · 大师的AI小灶</title>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | title | new |
| `小灶 OS · 电脑版.html` | 13 | `// 设备路由：手机访问时进入 iOS 版（加 ?mac=1 可强制留在桌面版）` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 17 | `location.replace('小灶 OS · 手机版.html');` | TBD | desktop shell: lockscreen, menubar, desktop, dock | path | new |
| `小灶 OS · 电脑版.html` | 24 | `<!-- ===================== 锁屏 ===================== -->` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 25 | `<div class="lockscreen" id="lockscreen" data-screen-label="锁屏">` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 29 | `<img src="os/avatars/dashi.jpg" alt="大师" />` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 30 | `<p>大师的AI小灶</p>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 31 | `<button class="lock-enter" id="lock-enter" type="button">进入小灶</button>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 35 | `<!-- ===================== 菜单栏 ===================== -->` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 36 | `<header class="menubar" data-screen-label="菜单栏">` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 38 | `<span class="app-name">小灶 OS</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 39 | `<span class="menu">文件</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 40 | `<span class="menu">编辑</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 41 | `<span class="menu">显示</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 42 | `<span class="menu">前往</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 43 | `<span class="menu">帮助</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 49 | `<span class="online" id="os-online">在线 1</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 53 | `<!-- ===================== 桌面 ===================== -->` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 54 | `<main class="desktop" data-screen-label="桌面">` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 56 | `<!-- 视频教程 · 桌面图标 -->` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 57 | `<div class="desk-icons" data-screen-label="桌面视频">` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 60 | `<span class="fname">Claude design 可交互 PPT.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 64 | `<span class="fname">三招去除图片 AI 味.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 68 | `<span class="fname">AI 配音活人感 3 招.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 72 | `<span class="fname">高级大片感 PPT.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 76 | `<span class="fname">Deepseek 职场七大场景.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 80 | `<span class="fname">GPT-4o 数据图表.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 84 | `<span class="fname">用分镜搞定影视感.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 88 | `<span class="fname">Deepseek 最好看 PPT.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 92 | `<span class="fname">AI 学习提效 8 法.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 96 | `<span class="fname">Lovart 设计不求人.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 100 | `<span class="fname">教程标题待补 01.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 104 | `<span class="fname">教程标题待补 02.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 108 | `<span class="fname">教程标题待补 03.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 112 | `<span class="fname">教程标题待补 04.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 116 | `<span class="fname">教程标题待补 05.mp4</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 128 | `<span class="tip">关于小灶 · 终端</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 129 | `<span class="dock-icon img"><img src="os/icons/terminal.png" alt="终端" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 133 | `<span class="tip">文档 · 访达</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 134 | `<span class="dock-icon img"><img src="os/icons/finder.png" alt="访达" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 138 | `<span class="tip">上线效果 · 浏览器</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 143 | `<span class="tip">团队 · 通讯录</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 144 | `<span class="dock-icon img"><img src="os/icons/contacts.png" alt="通讯录" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 149 | `<span class="tip">抖音</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 150 | `<span class="dock-icon img"><img src="os/icons/douyin.png" alt="抖音" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 154 | `<span class="tip">小红书</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 155 | `<span class="dock-icon img"><img src="os/icons/redbook.png" alt="小红书" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 159 | `<span class="tip">B站 · 完整教程</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 160 | `<span class="dock-icon img"><img src="os/icons/bilibili.png" alt="B站" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 164 | `<span class="tip">视频号 · 扫码</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 165 | `<span class="dock-icon img"><img src="os/icons/shipinhao.png" alt="视频号" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 169 | `<span class="tip">微信 · 扫码进群</span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 170 | `<span class="dock-icon img"><img src="os/icons/wechat.png" alt="微信" /></span>` | TBD | desktop shell: lockscreen, menubar, desktop, dock | attribute | new |
| `小灶 OS · 电脑版.html` | 175 | `<!-- ===================== 脚本 ===================== -->` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 185 | `// 锁屏：时钟 + 解锁` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 193 | `var wd = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()];` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 195 | `ld.textContent = (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + wd;` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 208 | `// 依次打开：终端 → 访达 → 浏览器 → 微信，位置岔开` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 223 | `// 菜单栏时钟` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 228 | `var wd = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][d.getDay()];` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 230 | `el.textContent = (d.getMonth() + 1) + '月' + d.getDate() + '日 ' + wd + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
| `小灶 OS · 电脑版.html` | 236 | `// 当前在线人数` | TBD | desktop shell: lockscreen, menubar, desktop, dock | code-comment | new |
| `小灶 OS · 电脑版.html` | 240 | `el.textContent = '在线 ' + Math.max(1, Math.round(Number(n) \|\| 1));` | TBD | desktop shell: lockscreen, menubar, desktop, dock | ui-text | new |
