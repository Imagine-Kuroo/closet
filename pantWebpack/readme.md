+ [webpack深入与实战](https://www.imooc.com/learn/802)

#### webpack 基本配置


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