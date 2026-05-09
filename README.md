# portfolio-logistics

这是一个可本地运行、可修改、可分享、可部署到 GitHub Pages 的个人作品集网站，定位不是普通个人主页，而是面向「国际物流新媒体运营 / 品牌宣传 / 内容视觉设计 / AI提效型运营」岗位的解决方案型作品集。

网站核心表达是：

把国际物流专业知识，转化为客户看得懂、销售用得上的内容资产，帮助公司从品牌曝光走向客户咨询和销售成交。

## 项目介绍

项目使用纯 `HTML + CSS + 原生 JavaScript` 开发，不依赖 Node 环境，不依赖复杂框架。

你可以：

- 直接双击 `index.html` 打开
- 用 VS Code Live Server 运行
- 用 `python -m http.server 8000` 本地预览
- 打包成 zip 发给面试官
- 部署到 GitHub Pages、Netlify 或 Vercel

## 文件结构说明

```text
portfolio-logistics/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── works/
│   ├── posters/
│   ├── xiaohongshu/
│   ├── videos/
│   └── website/
├── resume/
│   ├── resume.pdf
│   └── portfolio.pdf
└── README.md
```

说明：

- `index.html`：页面主结构
- `css/style.css`：样式文件，颜色和布局变量集中管理
- `js/main.js`：页面交互和内容数据，作品库等内容主要在这里修改
- `images/`：作品图片目录，后续可以把真实图片按分类放进去
- `resume/resume.pdf`：简历 PDF
- `resume/portfolio.pdf`：作品集 PDF 占位文件，后续可替换

## 如何本地打开

方式一：
直接双击 `index.html` 打开。

方式二：
用 VS Code 安装 Live Server，右键 `index.html`，选择 `Open with Live Server`。

方式三：
在项目根目录运行：

```bash
python -m http.server 8000
```

然后浏览器打开：

```text
http://localhost:8000
```

## 如何用 VS Code Live Server 运行

1. 打开 VS Code。
2. 打开 `portfolio-logistics` 文件夹。
3. 安装插件 `Live Server`。
4. 右键 `index.html`。
5. 点击 `Open with Live Server`。

## 如何用 python -m http.server 8000 运行

1. 打开终端。
2. 进入项目目录：

```bash
cd portfolio-logistics
```

3. 运行：

```bash
python -m http.server 8000
```

4. 浏览器访问：

```text
http://localhost:8000
```

## 如何替换图片

当前作品区使用的是渐变占位图，所以即使没有真实图片也能直接展示。

如果你要替换成真实图片，建议这样做：

1. 把图片放到对应目录，例如：
   - 作品图放 `images/works/`
   - 海报图放 `images/posters/`
   - 小红书图放 `images/xiaohongshu/`
   - 视频封面放 `images/videos/`
   - 官网截图放 `images/website/`
2. 打开 `js/main.js`。
3. 给作品数据新增一个 `image` 字段，例如：

```js
{
  title: "欧洲物流渠道对比图",
  category: "销售物料",
  background: "客户不清楚海运、铁路、卡航、空运怎么选。",
  role: "内容整理、信息层级、视觉排版。",
  usage: "销售发给客户解释方案。",
  tag: "欧洲线 / 对比图",
  image: "images/works/europe-channel.jpg"
}
```

4. 再把 `renderWorks()` 里的 `.work-thumb` 渲染逻辑改成 `<img>` 或背景图即可。

如果你希望后续我继续帮你改成“真实图片优先，没有图片时自动显示占位图”的版本，也可以直接继续让我补。

## 如何修改作品库内容

作品库内容主要在 `js/main.js` 的 `works` 数组里。

你可以直接：

- 新增作品对象
- 删除某个作品对象
- 修改 `title`、`category`、`background`、`role`、`usage`、`tag`

分类筛选按钮在 `workFilters` 数组里。

如果你新增了新分类，例如 `展会活动`，记得：

1. 在 `workFilters` 里加上 `展会活动`
2. 在对应作品对象里把 `category` 写成 `展会活动`

## 如何在线编辑添加或删除内容

最推荐的在线编辑方式是：

### 方式一：直接在 GitHub 网页上改

适合改文案、增删作品、替换联系方式。

操作方法：

1. 先把项目上传到 GitHub 仓库。
2. 打开仓库里的文件。
3. 点击右上角编辑按钮。
4. 改完后提交。
5. 如果你开启了 GitHub Pages，网站会自动更新。

常改的文件：

- `index.html`：改文案、联系方式
- `css/style.css`：改颜色、排版、视觉
- `js/main.js`：增删作品、修改卡片内容、调整资料包和计划内容

### 方式二：用 GitHub 的网页版 VS Code

适合更舒服地在线改代码。

操作方法：

1. 打开你的 GitHub 仓库页面。
2. 键盘按 `.`。
3. GitHub 会直接打开网页版 VS Code。
4. 在线修改后提交即可。

### 方式三：手机上临时改

如果你只是临时改一句话、改一个电话、删一条作品，也可以直接用手机打开 GitHub 网页编辑文件。

但如果你要改很多内容，还是建议用电脑端的 GitHub 网页或网页版 VS Code。

## 如何做到“在线编辑，同时方便增删内容”

这个项目已经尽量把内容集中到 `js/main.js` 的数组里了。

你后续最方便的做法是：

1. 把项目部署到 GitHub Pages。
2. 把作品库、资料包、知识模块、计划卡片都继续放在 `main.js` 的数组里维护。
3. 以后要新增或删除内容，就只改数组，不用到处改 HTML。

这样你既能在线编辑，也不会把页面结构改乱。

## 如何替换简历 PDF

1. 准备好你的正式简历 PDF。
2. 文件名改成 `resume.pdf`。
3. 替换 `resume/` 目录里的 `resume.pdf`。

页面里的“下载简历”按钮会自动指向这个文件，不需要额外改代码。

## 如何替换作品集 PDF

1. 准备好你的作品集 PDF。
2. 文件名改成 `portfolio.pdf`。
3. 替换 `resume/` 目录里的 `portfolio.pdf`。

页面里的“下载作品集PDF”按钮会自动指向这个文件。

## 如何修改联系方式

联系方式在 `index.html` 的联系我模块里，重点修改这几个位置：

- `id="phone-text"` 对应电话
- `id="wechat-text"` 对应微信
- 邮箱文本位置

示例：

```html
<strong id="phone-text">13800000000</strong>
<strong id="wechat-text">your-wechat-id</strong>
<strong>your@email.com</strong>
```

复制按钮会自动读取 `phone-text` 和 `wechat-text` 的内容。

## 如何部署到 GitHub Pages

1. 注册或登录 GitHub。
2. 新建一个仓库，例如 `portfolio-logistics`。
3. 把整个项目文件上传到仓库根目录。
4. 进入仓库页面，点击 `Settings`。
5. 点击左侧 `Pages`。
6. 在 `Build and deployment` 中选择：
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - 文件夹选择 `/root`
7. 保存后等待几十秒到几分钟。
8. GitHub Pages 会生成一个公开链接，例如：

```text
https://你的用户名.github.io/portfolio-logistics/
```

如果页面样式没立刻刷新，等 1 到 3 分钟后再打开。

## 如何保证手机端和电脑端尽量不卡顿

这个项目已经做了几件轻量化处理：

- 不依赖框架，不加载第三方脚本
- 不依赖外链图片
- 大部分内容是静态渲染
- 手机端自动单列布局
- 表格在手机端转卡片
- 减少了手机端的模糊和高成本视觉效果
- 支持 `prefers-reduced-motion`，低动态环境下会自动减少动画
- 长页面启用了 `content-visibility` 优化首屏加载

如果你后续继续加内容，建议：

1. 图片尽量压缩后再上传，不要直接放超大原图。
2. 视频不要直接嵌入首页，优先放封面图和外链。
3. 单张图片建议控制在 `300KB` 到 `800KB` 内。
4. 同一个模块不要一次塞入过多超长文字。
5. 如果将来作品特别多，可以把作品库拆成分页或“点击加载更多”。

## 如何分享给面试官

1. 可以把整个 `portfolio-logistics` 文件夹压缩成 zip 发给别人。
2. 可以部署到 GitHub Pages 后生成在线链接。
3. 可以部署到 Netlify 或 Vercel。
4. 面试展示建议使用 GitHub Pages 或 Netlify 生成公开链接。

建议实际投递时这样分享：

- 简历里放 GitHub Pages 在线链接
- 微信或邮件里附一句“作品集可在线查看，也可下载 PDF”
- 面试时优先演示首页、作品库、销售素材系统、90天计划和 AI 提效模块

## 常见问题排查

### 1. 双击打开后样式没问题，但图片不显示

先确认图片路径是否写对，建议使用相对路径，例如：

```text
images/works/demo.jpg
```

### 2. 作品筛选没反应

先检查 `js/main.js` 里：

- `workFilters` 是否有这个分类
- 对应作品的 `category` 是否拼写完全一致

### 3. 点击复制没有反应

如果是直接双击打开 `index.html`，某些浏览器环境下 `navigator.clipboard` 可能受限制。

这个项目已经做了兼容处理，但如果仍然失败，建议：

- 改用 Live Server
- 或改用 `python -m http.server 8000`

### 4. GitHub Pages 打开后是 404

检查：

- 仓库是否已经成功上传
- `Settings > Pages` 是否开启
- 分支是否选对
- `index.html` 是否在仓库根目录

### 5. 手机端显示拥挤

如果你后续增加了很长的标题或很多文字，可以适当：

- 缩短卡片标题
- 精简段落
- 在 `css/style.css` 的移动端媒体查询里调整间距

### 6. 我想继续新增模块怎么办

建议优先复用现有结构：

- 卡片模块参考 `renderSimpleCards()`
- 可展开模块参考 `renderKnowledge()` 和 `renderScriptLibrary()`
- 表格模块参考 `renderTable()`

这样改动最少，也最不容易出错。
