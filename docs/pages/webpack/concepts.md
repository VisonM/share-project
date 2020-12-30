# webpack 基本概念

### mode

- production
- development

### entry

> 打包的入口

### output

- defult: <code>./dist</code>

### loader

> loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）

### plugins

> webpack 的支柱功能

### resolve

> 模块如何被解析

### modules

- ES2015 import 语句
- CommonJS require() 语句
- AMD define 和 require 语句
- css/sass/less 文件中的 @import 语句。
- 样式(url(...))或 HTML 文件(img src)中的图片链接(image url)

### target

> webpack 的构建目标

| target | desc |
| ------ | ---- |
| async-node | 编译为类 Node.js 环境可用（使用 fs 和 vm 异步加载分块） |
| node|编译为类 Node.js 环境可用（使用 Node.js require 加载 chunk）|
| node-webkit|编译为 Webkit 可用，并且使用 jsonp 去加载分块。支持 Node.js 内置模块和 nw.gui 导入（实验性质）|
| electron-main|编译为 Electron 主进程|
| electron-renderer|编译为 Electron 渲染进程，使用 JsonpTemplatePlugin, FunctionModulePlugin 来为浏览器环境提供目标，使用 NodeTargetPlugin 和 ExternalsPlugin 为 CommonJS 和 Electron 内置模块提供目标。|
| web|编译为类浏览器环境里可用（默认）|
| webworker|编译成一个 WebWorker|
|custom|自定义|

### devtool

> 控制是否生成，以及如何生成 source map

### stats

> 统计信息

### hmr 

> 热更新
