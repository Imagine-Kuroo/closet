#### 面试题

最近因为种种因素，所以开始出来找工作了。
不面不知道，一面就彻底的暴露了自己的无知。
写一个文件记录一下被问倒的，答得不咋样的问题。
毕竟，学习是一个持续不断的过程。

##### 11月的好几次面试（待）
+ 拿到静态资源后的，页面渲染顺序
+ js 的渲染堵塞 如何处理
+ jquery extend
+ nodejs的事件渲染机制
+ vue的10种组件通信方式
+ vuex
+ 小程序如何设置一个全局变量
+ CORS
+ vue 的双向绑定数据渲染

##### 10月的一次面试
+ 原型/原型链/构造函数/实例的关系图
+ 创建对象的几种方法
+ promise原理
+ vue的动态数据绑定
+ JS继承
+ 左右固定中间自适应布局的三种+的实现方法
+ div上下居中的方法
+ transfer和transition的使用区别
+ ajax跨域实践、axios的跨域实践
+ typescript

以下主要是一些学习代码。
```
// 实现原型链的基本模式
// 覆盖或增加 超类型中的方法

function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

// 继承SuperType
SubType.prototype = new SuperType();
// 添加新方法 instance.getSuperValue() //true
SubType.prototype.getSubValue = function () {
  return this.subproperty;
}
// 重新超类型里的方法 instance.getSuperValue() //false
SubType.prototype.getSuperValue = function () {
  return false;
}

// 字面量 添加新方法 instance.getSuperValue() //error
SubType.prototype = {
  getSubValue: function () {
    return this.subproperty;
  },
  someOtherMethod: function () {
    return false;
  }
}

var instance = new SubType();
alert(instance.getSuperValue());

```
从[es6的箭头函数和es5的function函数区别](https://blog.csdn.net/guxiansheng1991/article/details/80009144)中get了一个简单的方法大概了解一下箭头函数和function的区别
```
let obj = {
        aaa: '123',
        arrows : () => {
            console.log('arrows',this);
        },
        func : function () {
            console.log('func',this);
        }
    }

    obj.arrows();   // window
    obj.func();     // obj
```

今天使用了一下es6的filter

```
let arr = [{
  id:1,
  name:'111'
},{
  id:2,
  name:'222'
},{
  id:3,
  name:'333'
}]
console.log(arr.filter(itm => itm.id === 2));
```
>
> 参考附录
> + [详谈JavaScript原型链](https://www.cnblogs.com/chengzp/p/prototype.html)
> + [剖析Vue原理&实现双向绑定MVVM](https://segmentfault.com/a/1190000006599500)
> + [详解 JavaScript的 call() 和 apply()](https://www.cnblogs.com/qiaojie/p/5746688.html)
> + [es6的箭头函数和es5的function函数区别](https://blog.csdn.net/guxiansheng1991/article/details/80009144)
> + [理解Promise简单实现的背后原理](https://segmentfault.com/p/1210000008832836/read)
