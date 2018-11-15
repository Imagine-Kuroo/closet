npm run build时报错如下：
```
ERROR in app.bundle.js from UglifyJs
Unexpected token: name (element) [./src/index.js:6,0][app.bundle.js:17920,6]

```
因为：webpack打包时无法转换index.js里的es6语法(可能是import?)
解决：安装babel-loader,babel-core,babel-preset-es2015，并配置.babelrc和webpack.config.js里js的rules

#### webpack 基本配置
+ src 源码 目录
+ dist 分发 目录
+ 加载图片时， **publicPath必须配置**，否则编译后的图片路径默认是根目录，可能会出现找不到资源的情况
```
npm i css-loader style-loader --save-dev //加载css
npm i file-loader --save-dev // 加载图片  
npm i url-loader --save-dev // 处理图片：小于limit设置的图片会用base64处理 
npm i html-webpack-plugin --save-dev // 自动生成一个index.html,所有的bundle会自动添加进去
npm i clean-webpack-plugin --save-dev // 构建前清理指定文件夹 dist

npm i webpack-dev-server --save-dev // 提供一个简单的web服务器，并且能够实时重新加载(live reloading)

npm i webpack-dev-middleware --save-dev  // 容器wrapper。把webpack处理后的文件传递给一个服务器（server）

npm i webpack-merge --save-dev // 合并不同的配置文件

```

```
//webpack.config.js
devtool: 'inline-source-map' // 定位 错误出错的位置和文件
devServer: {                 // 配合webpack-dev-server使用，效果更佳
  contentBase: './dist'
},
output:{
  ...
  publicPath: '/'           // 配合webpack-dev-middleware使用，效果更佳
}

```

```
//package.json

"scripts": {
    "watch": "webpack --watch" ,          //webpack的watch模式会在代码变动后自动编译，但是无法主动刷新页面
    "start": "webpack-dev-server --open"  // 配合webpack-dev-server使用，效果更佳
    "server": "node server.js",
  },

```

```
// server.js  配合webpack-dev-middleware+express+webpack 使用
// server.js内未安装express，但是运行却没问题？？？

```



#### webpack4 基本打包命令

`
 webpack hello.js -o hello.bundle.js
`
+ 没有任何配置情况下引入css文件

`
 require('css-loader!./style.css')
`

+ 手动绑定css-loader
+ --watch 检测并自动更新
+ --progress 百分比读条
+ --display-modules 打包的模块
+ --display-reasons 打包的原因

```

 webpack ./tSrc/hello.js -o ./tBuild/hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch

```



> 参考
> + [webpack入门](https://www.webpackjs.com/guides/getting-started/)
> + [webpack配置](https://www.webpackjs.com/configuration/)
> + [webpack-dev-server](https://www.webpackjs.com/configuration/dev-server/)
> + [webpack深入与实战](https://www.imooc.com/learn/802)
>
