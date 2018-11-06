#### webpack 基本配置
+ src 源码 目录
+ dist 分发 目录

(```)

npm i css-loader style-loader --save-dev //加载css
npm i file-loader --save-dev //加载图片
npm i url-loader --save-dev // 处理图片：小于limit设置的图片会用base64处理
npm i html-webpack-plugin --save-dev // 自动生成一个index.html,所有的bundle会自动添加进去
npm i clean-webpack-plugin --save-dev // 构建前清理指定文件夹 dist


//webpack.config.js
devtool: 'inline-source-map' //定位 错误出错的位置和文件
(```)



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

(```)
 webpack ./tSrc/hello.js -o ./tBuild/hello.bundle.js --module-bind 'css=style-loader!css-loader' --watch
(```)



> 参考
> [webpack入门](https://www.webpackjs.com/guides/getting-started/)
> [webpack配置](https://www.webpackjs.com/configuration/)
> [webpack深入与实战](https://www.imooc.com/learn/802)
