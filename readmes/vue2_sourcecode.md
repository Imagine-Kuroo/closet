### VueJs源码阅读记录摘要-1
---
> 读[Vue.js技术揭秘](https://ustbhuangyi.github.io/vue-analysis/prepare/flow.html)


<details>
<summary>导航：</summary>
    
- [VueJs源码阅读记录摘要-1](#vuejs-1)
  - [2 数据驱动](#2)
  - [1 Prepare](#1-prepare)
  - [3 组件化](#3)
  - [4 深入响应式原理](#4)
  - [5 编译](#5)
  - [6 扩展](#6)
  - [7 Vue Router](#7-vue-router)
  - [8 Vuex](#8-vuex)
</details>

#### 2 数据驱动
1. new Vue
2. Vue实例挂载
3. render
4. virtual DOM
5. createElement
6. update

#### 1 Prepare
1. Flow => JavaScript 静态类型检查工具
  1. 类型检查
    1. 类型推断
    2. 类型注释
  2. vue.js源码目录设计
    1. compiler => 编译
      1. 把模板解析成ast语法树，ast语法树优化，代码生成等
    2. core => 核心代码
      1. 内置组件，全局API封装，Vue实例化，观察者，虚拟DOM，工具函数
    3. platforms => 不同平台的支持
        1. vuejs是一个跨平台的MVVM框架，可在web上运行，也可配合weex在native客户端上运行
    4. server => 服务端渲染
      1. vuejs2.0支持服务端渲染
      2. 该部分代码是在服务端运行的nodejs
      3. 把组件渲染为服务器端的html字符串，将它们直接发送到浏览器，最后将静态标记为“混合”为客户端上完全交互的应用程序
    5. sfc => .vue文件解析
      1. 把.vue文件内容解析成为一个JavaScript的对象
    6. shared => 共享代码
      1. 定义了一些被浏览器端vuejs和服务端vuejs所共享的工具方法
  3. (略)vue.js源码构建
    1. 源码基于Rollup构建
    2. Vue的定义

#### 3 组件化
#### 4 深入响应式原理
#### 5 编译
#### 6 扩展
#### 7 Vue Router
#### 8 Vuex