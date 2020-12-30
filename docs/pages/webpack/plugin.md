# webpack 插件

> webpack 插件是一个具有 apply 属性的 JavaScript 对象,apply 属性会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问。Webpack 在运行过程中会广播事件，插件只需要监听它所关心的事件

```js
class InkePlugin {
  apply(compiler) {
    compiler.hooks.run.tap("InkePlugin", (compilation) => {
      console.log("webpack 构建开始了！");
    });
  }
}
```
