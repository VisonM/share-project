# 当前广分h5项目的webpack配置

> 项目传承：vue-cli2 -> xx -> xx -> vins -> shayla

### base

```js
HappyPack // 通过 node 的多进程来实现打包加速,他只作用于loader,需要注意的是，创建子进程和子进程和主进程之间通信也是有开销的.
html-webpack-plugin // html 模版插件
sw-precache-webpack-plugin //  使用service worker来缓存外部项目依赖项。 它将使用sw-precache生成service worker文件并将其添加到您的构建目录。为了在service worker中生成预缓存的名单, 这个插件必须应用在assets已经被webpack打包之后。只能在HTTPS协议中应用
DefinePlugin // 允许在 编译时 创建配置的全局常量
DllPlugin //独立的webpack.dll.config.js配置文件 作用是把所有的第三方库依赖打包到一个bundle的dll文件里面，还会生成一个名为 manifest.json文件
DllReferencePlugin // 作用是把在webpack.dll.config.js中打包生成的dll文件引用到需要的预编译的依赖上来
```

### dev

```js
express //node 服务器
express-http-proxy //http 代理
connect-history-api-fallback //解决history路由模式404的node中间价
// webpack-hot-middleware 是和webpack-dev-middleware配套使用的,webpack-dev-server的原理
webpack-dev-middleware //通过watch mode，监听资源的变更，然后自动打包；快速编译读取，走内存；
webpack-hot-middleware // 帮助浏览器热更新，eventStream，结合dev-client
HotModuleReplacementPlugin
friendly-errors-webpack-plugin // just colorful output
```

### prod

```js
UglifyJsPlugin // 单线程压缩丑化代码 
ParallelUglifyPlugin //单线程压缩丑化代码 
ExtractTextPlugin //将所有的入口 chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。
OptimizeCSSPlugin //will optimize \ minimize the CSS (by default it uses cssnano
CommonsChunkPlugin // 提取第三方库和公共模块，避免首屏加载的bundle文件或者按需加载的bundle文件体积过大，从而导致首屏加载时间过长
CopyWebpackPlugin // 复制粘贴
CompressionWebpackPlugin //提供带 Content-Encoding 编码的压缩版的资源 e.g:gzip
```

### analyzer
```js
webpack-bundle-analyzer // 一个分析包体结构的可视化插件
```