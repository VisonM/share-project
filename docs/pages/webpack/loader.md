# webpack loader

> loader 用于对模块的源代码进行转换

### intro

loader 支持链式传递。一组链式的 loader 将按照相反的顺序执行。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。


### usage

- 配置（推荐）：在 webpack.config.js 文件中指定 loader。

```js
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ] // 从右到左
      }
    ]
  }
```

- 内联：在每个 import 语句中显式指定 loader。

```js
//使用 ! 将资源中的 loader 分开。分开的每个部分都相对于当前目录解析。
import Styles from "style-loader!css-loader?modules!./styles.css";
```

- CLI：在 shell 命令中指定它们。

```
webpack --module-bind 'css=style-loader!css-loader'
```


