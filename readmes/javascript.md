### 一、基本语法与结构
---

  1. 基本类型/引用类型/堆/栈
      - 基本类型：
        - Undefined\Null\Boolean\Number\String 
        - 存放在栈内存中的简单数据段，数据大小确定，内存空间大小可分配
      - 引用类型：Object\Array\Function 
        - 栈中存该对象的地址指针，堆内存中取得该指针指向的数据
        - 空间大小不确定，根据实际情况进行特定分配
  1. js如何判断一个类型
      ``` javascript
      var str = 'this is a string'
      var num = 122
      var arr = ['ss','ds','asd']
      var func = function(){console.log('this is a function')}

      // 1-typeof
      console.log(typeof str)   // string
      console.log(typeof num)   // number
      console.log(typeof arr)   // object
      console.log(typeof func)  // function
      // * typeof返回的类型都是字符串形式
      console.log(typeof num == 'number')  // true
      console.log(typeof num == Number)    // false

      // 2-instanceof
      console.log(str instanceof String)   // false
      console.log(num instanceof Number)   // false
      console.log(arr instanceof Object)   // true
      console.log(func instanceof Object)  // true
      console.log(func instanceof Function)  // true

      // 3-constructor
      console.log(str.constructor)   // String
      console.log(num.constructor)   // Number
      console.log(arr.constructor)   // Array
      console.log(func.constructor)  // Function

      ```

  1. 事件机制（nodejs事件机制又是什么）

  1. 正则基本入门

  1. 严格模式、非严格模式



### 二、Javascript引擎
---

  1. 闭包
      ``` javascript
        function a() {
            var ins = 54;
            var ops = {
                add: function () {
                    console.log(ins, ' --- > ', ++ins)
                },
                minus: function () {
                    console.log(ins, ' --- > ', --ins)
                },
            }
            return ops
        }

        var ap = a()
        ap.minus()
        ap.add()
      ```

  1. 宏任务和微任务EventLoop

  1. 内存管理——内存泄漏的概念？



### 三、ES演进
---
  1. js
    + 七种原始数据类型：undefined\null\Boolean\String\Number\Object\Symbol
    + 表示"集合"的数据结构：Array\Object\Map\Set
  1. ES5
  1. ES6
    + Iterator(迭代器)
      + for...of
    + Symbol(需要搭配Iterator一起食用)
      + 相同参数的Symbol函数的返回值不相等
        ``` javascript
          let s1 = Symbol()
          let s2 = Symbol()
          s1 === s2 // false

          let s3 = Symbol('foo')
          let s4 = Symbol('foo')
          s3 === s4 // false
        ```
      + 不能与其他类型的值进行运算，会报错
        ``` javascript
          let sym = Symbol('My symbol')
          console.log('your '+sym)   // Uncaught TypeError: Cannot convert a Symbol value to a string
          console.log(`your ${sym}`)   // Uncaught TypeError: Cannot convert a Symbol value to a string
        ```
      + 可以显式转为String\Boolean,但不可以转成Number
        ``` javascript
          let sym = Symbol('isSymbol')
          String(sym) // "Symbol(isSymbol)"
          sym.toString() // "Symbol(isSymbol)"

          let sym1 = Symbol()
          Boolean(sym1) //  true
          !sym1 //  false
          
          let sym2 = Symbol() 
          Number(sym2)  // Uncaught TypeError: Cannot convert a Symbol value to a number
          sym2+2  // Uncaught TypeError: Cannot convert a Symbol value to a number
        ```
      + Symbol.prototype.description ES2019
        ``` javascript
          const sym = Symbol('foo')
          sym.description // "foo"
        ```
    + Generator(需要搭配Iterator一起食用)
    + 集合：Map\Set
    + map\forEach\some\every\filter\reduce使用 打断
      + map 返回一个新数组
      + forEach 对自身进行操作 无法中止/跳出，除非抛异常
      + every
      + some
      + filter
      + reduce
    + promise
      + promise原理及实现
      + promise.all/promise.race
s    

  1. ES7

  1. AMD\CMD\UMD


### 四、异步机制
---

  1. 回调函数
  1. generator
  1. 发布订阅模式
  1. async/await
  1. Promise
  1. XHR和fetch
  1. 网络相关
    + cookie 
      + cookie有哪些字段：key\value\expires
      + cookie\session\localStorage
    + 缓存
    + 强缓存\协商缓存
    + 网络安全
    + http/https

### 五、Javascript编程思想
---

  1. 面向过程
  1. 深浅拷贝
  1. 面向对象OO
      ``` javascript
      // 创建对象的方式
      // 继承的几种方法
      // 原型、原型链
      ```
  1. 设计模式
  1. 函数式编程
      ``` javascript
      // 高阶函数
      // curry化
      // compose
      ```
  1. AST
  
### 六、性能优化
---

  1. 节流(throttle)&防抖(debounce)/读lodash源码
      ``` javascript
        function debounce(func, secs) {
          var timeSet = null;
            return function () {
                if (timeSet != null) {
                    clearTimeout(timeSet)
                }
                timeSet = setTimeout(func, secs)
            }
        }
        function throttleScroll(func, secs) {
            var prev = Date.now()
            return function () {
                var now = Date.now()
                if (now - prev >= secs) {
                    prev = Date.now()
                    func()
                }
            }
        }
      ```
