### ES6阅读记录摘要-1
---
> 读[ECMAScript 6 入门](http://es6.ruanyifeng.com/)

<details>
<summary>导航：</summary>
    
- [ES6阅读记录摘要-1](#es6-1)
    - [End Questions](#end-questions)
    - [15 Module的加载实现](#15-module)
    - [14 Module的语法](#14-module)
    - [13 Class的继承](#13-class)
    - [12 Class的基本语法](#12-class)
    - [11 async函数](#11-async)
    - [10 Generator函数的异步应用](#10-generator)
    - [9 Generator](#9-generator)
    - [8 Iterator和for...of循环](#8-iteratorforof)
    - [6 Reflect](#6-reflect)
    - [5 Proxy](#5-proxy)
    - [4 Set和Map](#4-setmap)
    - [3 Symbol](#3-symbol)
    - [7 Promise对象](#7-promise)
    - [2 变量的解构赋值](#2)
    - [1 let和const](#1-letconst)
</details>

#### End Questions
1. 使用扩展运算符(...)拷贝数组
2. ???只有模拟现实世界的实体对象时，才使用 Object???

#### 15 Module的加载实现
1. 浏览器加载
    1. HTML 网页中，浏览器通过`<script>`标签加载 JavaScript 脚本
        1. `<script>`标签打开`defer`或`async`属性，脚本就会异步加载
            1. `defer` => “渲染完再执行” => 要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行
            2. `async` => “下载完就执行” => 一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染
    2. (略)加载规则
        1. 浏览器加载 ES6 模块，也使用`<script>`标签，但是要加入`type="module"`属性
2. (略)ES6模块与CommonJS模块的差异
    1. 两个重要差异
        1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用
        2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口
3. (略)Node加载
    1. CommonJS模块的输出都定义在`module.exports`这个属性上
4. (略)循环加载 => a脚本的执行依赖b脚本，而b脚本的执行又依赖a脚本 => 存在强耦合
    1. CommonJS 输入的是被输出值的拷贝，不是引用
5. (略)ES6模块的转码
    1. Babel
    2. ES6 module transpiler
    3. SystemJS

#### 14 Module的语法
1. 概述
    1. ES6之前的模块加载方案有CommonJS和AMD，前者用于服务器，后者用于浏览器
    2. ES6实现了模块功能，取代了CommonJS和AMD规范，成为浏览器和服务器通用的模块解决方案
    3. ES6通过`export`命令显示指定输出的代码，再通过`import`命令输入
    4. ES6模块是编译时加载，使得静态分析成为可能 => 可进一步拓宽Javascript的语法，比如引入宏(macro)和类型检验(type system)
2. 严格模式
    1. ES6的模块自动采用严格模式
    2. ES6模块中，顶层的`this`指向`undefined` => 不应该在顶层使用`this`
    3. 严格模式的限制如下
        1. 变量必须声明后再使用
        2. 函数的参数不能有同名属性，否则报错
        3. 不能使用with语句
        4. 不能对只读属性赋值，否则报错
        5. 不能使用前缀 0 表示八进制数，否则报错
        6. 不能删除不可删除的属性，否则报错
        7. 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
        8. eval不会在它的外层作用域引入变量
        9. eval和arguments不能被重新赋值
        10. arguments不会自动反映函数参数的变化
        11. 不能使用arguments.callee
        12. 不能使用arguments.caller
        13. 禁止this指向全局对象
        14. 不能使用fn.caller和fn.arguments获取函数调用的堆栈
        15. 增加了保留字（比如protected、static和interface）
3. export命令
    1. 模块功能主要由两个命令构成：
        1. `export`：用于规定模块的对外接口
        2. `import`：用于输入其他模块提供的功能
    2. 一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取
    3. `as`关键字可以将输出的变量重命名
    4. `export`可输出变量，函数，类
    5. `export`输出的接口，与其对应的值是动态绑定的关系，即通过该接口，可以去到模块内部实时的值
    6. (略)`export`的使用方法
    7. `export`命令可以出现在模块的任何位置，只要处于模块顶层即可；否则报错
4. import命令
    1. 其他JS文件可以通过`import`命令加载这个模块
    2. `as`关键字可以将输入的变量重命名
    3. `import`命令输入的变量都是只读
    4. `import`命令具有提升效果，会提升到整个模块的头部，首先执行
    5. `import`是静态执行，不能使用表达式和变量(这些只有在运行时才能得到结果的语法结构)
    6. `import`在静态解析阶段执行，它是一个模块中最早执行的(比CommonJS模块的`require`命令快)
5. 模块的整体加载
    1. 整体加载 => 即用星号（*）指定一个对象，所有输出值都加载在这个对象上面
6. (略)export default命令
    1. `export default`指定默认输出
7. (略)export与import的复合写法
8. (略)模块的继承
9. (略)跨模块常量
10. (略)import()
    1. 提案 => 引入`import()`函数，完成动态加载

#### 13 Class的继承
1. 简介
    1. Class通过`extends`关键字实现继承
    2. 继承
        1. ES5：先创造子类的实例对象`this`，然后再将父类的方法添加到`this`上面 => `Parent.apply(this)`
        2. ES6：先将父类实例对象的属性和方法，加到`this`上面，然后在用子类的构造函数修改`this`
    3. 不管有没有显式定义，任何一个子类都有`constructor`方法
    4. 在子类的构造函数中，只有调用`super`之后，才可以使用`this`关键字
    5. 父类的静态方法，会被子类继承
    6. 子类生成的实例a，在使用`instanceof`判断时，对父类和子类的判断都为true
2. Object.getPrototypeOf() => 可以从子类上获取父类 => 判断：一个类是否继承了另一个类
3. (略)super关键字
    1. 作为函数 => 子类的构造函数之中的`super()`,代表调用父类的构造函数
    2. 作为方法 => 
4. (略)类的prototype属性和__proto__属性
    1. 子类的`__proto__`属性，表示构造函数的继承，总是指向父类
    2. 子类的`prototype`属性的`__proto__`属性，表示方法的继承，总是指向父类的`prototype`属性
    ``` javascript
    class A {
    }

    class B extends A {
    }

    B.__proto__ === A
    B.prototype.__proto__ === A.prototype
    // true
    // true
    ```
    3. (略)类的继承如下
    ``` javascript
    class A {
    }
    class B {
    }
    Object.setPrototypeOf(B.prototype, A.prototype); // B 的实例继承 A 的实例

    Object.setPrototypeOf(B, A); // B 继承 A 的静态属性

    const b = new B();

    Object.setPrototypeOf = function (obj, proto) {
        obj.__proto__ = proto;
        return obj;
    }



    class A {
    }
    A.__proto__ === Function.prototype 
    A.prototype.__proto__ === Object.prototype
    // true
    // true
    ```
    4. (略)实例的__proto__属性
        1. 子类的原型的原型，是父类的原型
        2. 通过子类实例的__proto__.__proto__属性，可以修改父类实例的行为
    ``` javascript
    class A { }
    class B extends A { }

    let a = new A(),
    b = new B()

    console.log(b.__proto__ === a.__proto__)
    console.log(b.__proto__.__proto__ === a.__proto__)
    // false
    // true
    ```
5. (略)原生构造函数的继承
    1. ECMAScript的原生构造函数大致有
        1. Boolean()
        2. Number()
        3. String()
        4. Array()
        5. Date()
        6. Function()
        7. Object()
        8. RegExp()
        9. Error()
6. Mixin模式的实现
    1. Mixin => 多个对象合成一个新的对象，新对象具有各个组成成员的接口

#### 12 Class的基本语法
1. 简介
    1. 类的内部所定义的方法，都是不可枚举的 => 不同于ES5
    2. 可以使用 Object.getPrototypeOf 方法来获取实例对象的原型
    3. 类的内部可以使用`set`和`get`关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为
    4. 类不存在变量提升
    5. `name`属性返回紧跟在`class`关键字后面的类名
    6. (略-三种方法)`this`的指向
   ``` javascript
   Point.prototype.constructor === Point


    class MyClass {
        constructor() {
        // ...
        }
        get prop() {
        return 'getter';
        }
        set prop(value) {
        console.log('setter: '+value);
        }
    }
    let inst = new MyClass();
    inst.prop = 123;    // setter: 123
    inst.prop   // 'getter'


    class Foo {
        constructor(...args) {
            this.args = args;
        }
        * [Symbol.iterator]() {
            for (let arg of this.args) {
            yield arg;
            }
        }
    }

    for (let x of new Foo('hello', 'world')) {
        console.log(x);
    }
    // hello
    // world
   ```
2. 静态方法
    1. 如果静态方法包含this关键字，这个this指的是类，而不是实例
    2. 子类可以调用父类的静态方法，也可以从`super`对象上调用
3. 实例属性的新写法 => 实例属性可以定义在`constructor()`方法里，也可以定义在类的最顶层
4. 静态属性 => Class本身的属性，即`Class.propName`
    1. ES6规定，Class内部只有静态方法，没有静态属性
    2. 有一个提案提供了类的静态属性：在实例属性的前面，加上`static`关键字
5. (略)私有方法和私有属性 => 只能在类的内部访问的方法和属性 => ES6不提供
    1. 有提案，为class加私有属性：在属性名前，使用# => 私有方法，同左侧操作
6. new.target属性
    1. `new`是从构造函数生成实例对象的命令，ES6为new命令引入了一个`new.target`属性
    2. 一般用于构造函数中，返回`new`命令作用于的那个构造函数 => 本属性用来确定构造函数如何调用
    3. 如果构造函数不是通过`new`命令或`Reflect.construct()`调用的，`new.target`会返回`undefined`
    4. Class内部调用new.target，返回当前Class
    5. 子类继承父类时，  => 利用这个特性，可以写出 不能独立使用，必须继承后才能使用的类
        1. 子类生成实例时，父类中的new.target会返回子类
        2. 父类生成实例时，父类中的new.target会返回父类

#### 11 async函数
1. 含义
    1. async是Generator函数的语法糖
        1. 将Generator函数的星号`*`替换成`async`
        2. 将`yield`替换成`await`
    2. async函数对Generator函数的改进，有以下四点
        1. 内置执行器
            1. Generator函数的执行必须靠执行器 (eg: co模块)
            2. async函数自带执行器
        2. 更好的语义 => async和await比星号和yield更加清楚
        3. 更广的适用性 => (略)
        4. 返回值是Promise => Generator函数返回Iterator对象，async函数返回Promise对象
2. 基本用法
3. 语法
    1. 难点是错误处理机制
    2. `async`函数内部`return`语句返回的值，会成为`then`方法回调函数的参数
    3. `async`函数内部抛出错误，会导致返回的Promise对象变为`reject`状态，抛出的错误对象会被`catch`方法回调函数接收到
    4. `await`命令 
        1. + Promise对象 => 返回该对象的结果
        2. + 值 => 返回该值
        3. + thenable对象 => 同Promise对象一样的处理
        4. 任何一个`await`语句后面的Promise对象变为`reject`状态，整个`async`函数都会中断执行
            1. 用`try...catch`包裹可能会出现`reject`的`await`，即使该`await`出现`reject`，剩下的`await`也会继续执行
            2. (略)`await`的Promise增加一个`catch`方法去捕获错误
            3. 可将多个`await`操作放在一个`try...catch`中
        5. `await`只能用于`async`函数中
        6. (略)`async`函数可以保留运行堆栈
        7. 当两个方法为继发关系时，可以同时触发它们
            1. 继发关系：两个独立的异步操作，互不依赖
                ``` javascript
                let [foo, bar] = await Promise.all([getFoo(), getBar()]);

                let fooPromise = getFoo();
                let barPromise = getBar();
                let foo = await fooPromise;
                let bar = await barPromise;
                ```
4. (略)async函数的实现原理 => 将Generator函数和自动执行器，包装在一个函数里
5. (略)与其他异步处理方法的比较 => async与Generator，Promise的代码量比较 
6. (略)实例：按顺序完成异步操作
7. 顶层await => 交出代码的执行权给其他的模块加载，等异步操作完成后，在拿回执行权，继续向下执行

#### 10 Generator函数的异步应用
1. 传统方法
    1. ES6之前的异步编程方法
        1. 回调函数
        2. 事件监听
        3. 发布/订阅
        4. Promise对象
2. 基本概念
    1. 异步：一个任务不是连续完成的，中间可以插入其他任务
    2. 同步：连续的执行，中间不可插入其他任务
    3. 回调函数callback => 多重嵌套，多个异步形成强耦合 => 回调函数地狱 callback hell
    4. Promise => Promise的写法只是回调函数的改进，但是冗余
3. Generator函数
    1. 协程：多个线程相互协作，完成异步任务
    2. `yield`命令是异步两个阶段的分界线
    3. Generator函数是协程在ES6的实现，特点：可以交出函数的执行权（暂停执行）
    4. Generator可以暂停执行和恢复执行，是它能封装异步任务的根本原因
    5. Generator还有两个特性可以保证它作为异步编程的完整解决方案：
        1. 函数体内外的数据交换：
            1. 向外输出数据：`next`返回的value属性
            2. 向函数体内输入数据：`next`方法可以接受参数
        2. 错误处理机制：
            1. 可以在Generator函数内部部署错误处理代码，不过函数体外跑出的错误 => try...catch
4. Thunk函数(略)
    1. Thunk函数是自动执行Generator函数的一种方法
    2. 求值策略
        1. 传值调用：在进入函数体前，就计算好参数表达式的值，在将该值传入函数体
        2. 传名调用：直接将需要传入的参数表达式传入函数体内，用到的时候，在计算该参数表达式的值
    3. 含义：将参数放到一个临时函数中，在将该临时函数传入函数体，这个临时函数就是Thunk函数
5. co模块(略)
    1. 用于Generator函数的自动执行

#### 9 Generator
1. 基本
    1. ES6提供的一种异步编程解决方案
    2. 状态机，封装了多个内部状态
    3. 执行Generator函数会返回一个遍历器对象
    4. 特征
        1. `function`关键词与函数名之间有一个星号
        2. 函数体内部使用`yield`表达式，定义不同的内部状态
2. next方法的参数
    1. 可以在Generator函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为
    2. 第一次使用next方法时，传递参数是无效的
3. for...of
    1. `for...of`可以自动遍历Generator函数运行时生成的Iterator对象，且不再需要调用`next`方法
    2. 一旦返回对象的`done`为`true`，循环就会中止
4. Generator.prototype.throw()
    1. `throw`方法抛出的错误要被内部捕获，前提：至少执行过一次`next`方法
    2. `throw`方法被捕获以后，会附带执行下一条`yield`表达式
5. Generator.prototype.return()
    1. 返回给定的值，并且终结遍历Generator函数
    2. 调用`return`时，不提供参数，返回值的`value`属性为`undefined`
    3. `try...finally`遇到`return`时，会从`try`立即进入`finally`,并执行完`finally`
6. next(),throw(),return()
    1. 让`Generator`函数恢复窒息感，并且使用不同的语句替换`yield`表达式
7. yield* 表达式
    1. 用来在一个Generator函数里执行另一个Generator函数
8. 作为对象属性的Generator函数
9.  Generator函数的this
    1.  Generator函数 返回一个遍历器，ES6规定这个遍历器是Generator函数的实例，也继承了Generator函数的`prototype`对象上的方法
    2.  Generator函数不能与`new`命令一起用
10. 含义和作用
    1.  状态机
    2.  协程
    3.  上下文

#### 8 Iterator和for...of循环
1. 基本
    1. 概念：Iterator = 遍历器
    2. 过程
        1. 创建一个指针对象，指向当前数据结构的起始位置
        2. 第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员
        3. 第二次调用next，指针指向第二个
        4. 不断地调用next，直到它指向数据结构的结束位置
    3. 作用
        1. 为各种数据结构(Array,Object,Map,Set)，提供一个统一且简便的访问接口
        2. 使数据结构的成员按照某种次序排列
        3. ES6创建了一种新的遍历命令for...of
    4. 基本
        1. 遍历器与它所遍历的数据结构是分开的
2. 默认Iterator接口
    1. 一种数据结构只要部署了Iterator接口，则称该数据结构是 可遍历的
    2. ES6规定，默认的Iterator接口部署在数据结构的`Symbol.iterator`属性
    3. 原生具备Iterator接口的数据结构有：Array,Map,Set,String,TypedArray,函数的arguments对象，NodeList对象
3. 调用场合
    1. 解构赋值
    2. 扩展运算符
    3. yield*
4. 字符串的Iterator接口
    1. 

#### 6 Reflect
1. 基本
    1. 从Reflect对象上可以拿到语言内部的方法
    2. 修改某些`Object`方法的返回结果
    3. 让`Object`操作都变成函数行为
        ``` javascript
        'assign' in Object
        Reflect.has(Object,'assign')

        delete obj[name]
        Reflect.deleteProperty(obj,name)
        ```
    4. `Reflect`对象的方法与`Proxy`对象的方法一一对应
        ``` javascript
        Function.prototype.apply.call(Math.floor,undefined,[1.75])
        Reflect.apply(Math.floor,undefined,[1.75])
        ```
2. 静态方法
    1. 与Proxy对象的方法一一对应
3. 使用Proxy实现观察者模式
    ``` javascript
    const queuedObservers = new Set();

    const observe = fn => queuedObservers.add(fn);
    const observable = obj => new Proxy(obj, { set });

    function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    queuedObservers.forEach(observer => observer());
    return result;
    }

    const person = observable({
    name: '张三',
    age: 20
    });

    function print() {
    console.log(`${person.name}, ${person.age}`)
    }

    observe(print);
    person.name = '李四';
    person.age = 33;
    ```

#### 5 Proxy
1. 基本
2. 实例方法
    1. get()
    2. set()
    3. apply()
    4. has()
    5. construct()
    6. deleteProperty()
    7. defineProperty() 
        + 拦截Object.defineProperty
    8. getOwnPropertyDescriptor()
    9. getPrototypeOf()
        + 拦截以下操作：
            1. Object.prototype._proto_
            2. Object.prototype.isPrototypeOf()
            3. Object.getPrototypeOf()
            4. Reflect.getPrototypeOf()
            5. instanceof
    10. isExtensible()
    11. ownKeys()
        + 拦截对象自身属性的读取操作
            1. Object.getOwnPropertyNames()
            2. Object.getOwnPropertySymbols()
            3. Object.keys()
            4. for...in
#### 4 Set和Map
1. Set
    1. 新的数据结构。类似数组，但每个成员的值唯一
        ``` javascript
        const s = new Set()
        s.add(3)
        ```
    1. 向Set加入值时，不会发生类型转换
    1. `Array.from`可以将Set结构转为数组
    1. 属性
        + `Set.prototype.contructor`
        + `Set.prototype.size`  返回Set实例的成员总数
    1. 方法
        + `Set.prototype.add(value)`  返回Set结构本身
        + `Set.prototype.delete(value)`  返回一个布尔值
        + `Set.prototype.has(value)`  返回一个布尔值，表示value是否为Set的成员
        + `Set.prototype.clear()`  清除所有成员，没有返回值
    1. Set的遍历顺序就是插入顺
    1. 遍历操作
        + `Set.prototype.keys()`  返回键名的遍历器
        + `Set.prototype.values()`  返回键值的遍历器
        + `Set.prototype.entries`  返回键值对的遍历器
        + `Set.prototype.forEach()`  返回回调函数遍历每个成员 => 对每个成员执行某种操
        
1. WeakSet
    1. 与Set的区别
        + WeakSet的成员只能是对象
        + WeakSet的对象都是弱引用，会随时消失 => WeakSet里的引用，不计入垃圾回收机制
        + WeakSet不可遍历
    1. 方法
        + `WeakSet.prototype.add(value)` 
        + `WeakSet.prototype.delete(value)`
        + `WeakSet.prototype.has(value)`
    1. 用处
        + 存储DOM节点，防止内存泄漏
1. Map
    1. 值-值
    1. 
1. WeakMap
    1. 基本
        + 只接受对象作为键名
        + 键名所指向的对象，不计入垃圾回收机制
        + 可防止内存泄漏
    1. 与Map在API上的区别
        + 没有遍历操作: `keys()`,`values()`,`entries()`
        + 没有`size`属性

#### 3 Symbol
1. 基础
    + 原始数据类型，表示独一无二的值
    + 第7种数据类型 前六个：undefined,null,布尔值Boolean，字符串String，数值Number，对象Object
    + Symbol函数不需要new
        ``` javascript
        let s = Symbol()
        typeof s // "symbol"
        ```
1. Symbol.prototype.description
1. 作为属性名的Symbol
1. Symbol.for()
1. Symbol.keyFor()
1. mmm
1. mmm
1. mmm

#### 7 Promise对象
1. 基础
    1. 异步编程的一种解决方案：将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数callback hell
    1. 是一个容器，保存着某个未来才会结束的事件的结果
    1. 缺点：
        1. 无法取消`Promise` - 一旦建立，就要执行，不死不休
        1. 不设置回调函数，`Promise`内部抛出的错误，不会反应到外部
        1. 处于`pending`状态时，无法判断目前的进展 - 0%-50%-100%
    1. 特点：
        1. 对象的状态不受外界影响
        1. 状态改变后不可逆
            + 从`pending`变成`fulfilled`(`resolved`)
            + 从`pending`变为`rejected`
1. 用法
    1. `Promise`对象是一个构造函数，生成`Promise`实例
        ``` javascript
        const promise = new Promise(function(resolve, reject) {
          // ... some code
          if (/* 异步操作成功 */){
            resolve(value);
          } else {
            reject(error);
          }
        });
        ```
    1. `Promise`构造函数接受一个函数作为参数，该函数的参数分别是`resolve`和`reject`。这两个函数，由Javascript引擎提供。
    1. `resolve`函数：将状态从`pending`变为`resolved`，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
    1. `reject`函数：将状态从`pending`变为`rejected`，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去
    1. `Promise`实例生成以后，可以用`then`方法分别指定`resolved`和`rejected`状态的回调函数
    1. `then`方法接受两个回调函数作为参数
        + 第一个回调函数是`Promise`对象的状态为`resolved`时调用
        + 第二个回调函数是`Promise`对象的状态为`rejected`时调用 - 非必选
    1. `Promise`新建后就会立即执行
        ``` javascript
        let promise = new Promise(function(resolve, reject) {
          console.log('Promise');
          resolve();
        });

        promise.then(function() {
          console.log('resolved.');
        });

        console.log('Hi!');

        // Promise
        // Hi!
        // resolved
        ```
    1. `p2`返回的是另一个Promise，导致`p2`自己的状态无效，由`p1`的状态决定`p2`的状态。
        ``` javascript
        const p1 = new Promise(function (resolve, reject) {
          setTimeout(() => reject(new Error('fail')), 3000)
        })

        const p2 = new Promise(function (resolve, reject) {
          setTimeout(() => resolve(p1), 1000)
        })

        p2
          .then(result => console.log(result))
          .catch(error => console.log(error))
        // Error: fail
        ```
    1. 调用`resolve`或`reject`不会终结Promise的参数函数的执行
        ``` javascript
        // 不推荐写法
        new Promise((resolve, reject) => {
          resolve(1);
          console.log(2);
        }).then(r => {
          console.log(r);
        });
        // 2
        // 1
           
        // 推荐写法
        new Promise((resolve, reject) => {
          return resolve(1);
          // 后面的语句不会执行
          console.log(2);
        })
        ```         
1. prototype
    1. Promise.prototype.then()
        + `then`方法返回的是一个新的Promise实例
        + 链式的`then`，可以指定一组按照次序调用的回调函数
            + 前一个回调函数，有可能返回的是一个Promise对象，这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用
        ``` javascript
        getJSON("/post/1.json").then(
          post => getJSON(post.commentURL)
        ).then(
          comments => console.log("resolved: ", comments),
          err => console.log("rejected: ", err)
        );
        ```
    1. Promise.prototype.catch()
        + Promise.prototype.then(null, rejection)或Promise.prototype.then(undefined, rejection)
        + Promise对象的错误具有"冒泡"性质，会一直向后传递，直到被捕获为止 == 错误总是会被下一个`catch`语句捕获
        ``` javascript
        // ???? 一共有三个 Promise 对象：一个由getJSON产生，两个由then产生。它们之中任何一个抛出的错误，都会被最后一个catch捕获
        getJSON('/post/1.json').then(function(post) {
          return getJSON(post.commentURL);
        }).then(function(comments) {
          // some code
        }).catch(function(error) {
          // 处理前面三个Promise产生的错误
        });
        
        // 建议：使用catch捕获前面then产生的问题
        // 不推荐写法
        promise
          .then(function(data) {
            // success
          }, function(err) {
            // error
          });

        // 推荐写法
        promise
          .then(function(data) { //cb
            // success
          })
          .catch(function(err) {
            // error
          });
        ```
        + 如果不使用`catch`方法指定错误处理的回调函数，Promise对象抛出的错误不会传递到外层代码 = Promise对象不会报错
    1. Promise.prototype.finally()
1. 静态
    1. Promise.all()
    1. Promise.race()
    1. Promise.resolve()
    1. Promise.reject()
    1. Promise.try()
1. 应用

#### 2 变量的解构赋值
1. 数组的解构赋值
    + 按次序排列，变量的取值由位置决定
      ``` javascript
        // 模式匹配
        let [a,b,c] = [1,2,3]
      ```
    + 解构不成功时，变量的值等于undefined
    + 只有当一个数组成员严格等于undefined，默认值才会生效（ES6内部使用严格相等运算符===）
        ``` javascript
        let [x=1] = [null]; // x为null
        let [x=1] = [undefined]; // x为1
        let [foo=true] = []; // foo为true
        ```
    + 默认值为一个表达式，表达式为惰性求值
1. 对象的解构赋值
    + 对象的属性没有次序，变量必须与属性同名
        ``` javascript
        let { bar, foo, barz } = { foo: 'aaa', bar: 'bbb' };
        foo // "aaa"
        bar // "bbb"
        barz // undefined
        ```
    + 将现有对象的方法，赋值到某个变量
        ``` javascript
        const { log } = console;
        log('javascript') //javascript
        ```
    + 变量名与属性名不一致 - foo是匹配的模式，baz才是变量
        ``` javascript
        let { foo:baz } = {foo:'aaa',bar:'bbb'}
        baz // "aaa
        ```
    + 解构嵌套结构的对象
        ``` javascript
        let obj = {
            p: [
                'hello',
                { y: 'world' }
            ]
        };
        let { p, p: [x, { y }] } = obj;
        x // "hello"
        y // "world"
        p // ["hello",{y: "world"}]
        ```
    + 默认值
        ``` javascript
        var {x: y = 3} = {}
        y // 3
        var {x: y = 3} = {x: 5}
        y // 5
        var {x = 3} = {x: null}
        x // null
        ```
    + 注意
        ``` javascript
        let x;
        {x} = {x: 1}; // 报错

        let x;
        ({x} = {x: 1}); // 正确
        ```
1.  字符串的解构赋值
    ``` javascript
    const [a,b,c,d] = 'hello'
    a // 'h'
    b // 'e'
    c // 'l'
    d // 'l'

    let {length : len} = 'hello'
    len // 5
    ```
1.  数值和布尔值的解构赋值
    ``` javascript
    let {toString: s} = 123;
    s === Number.prototype.toString // true
    let {toString: s} = true;
    s === Boolean.prototype.toString // true
    ```
1.  函数参数的解构赋值
    ``` javascript
    [1, undefined, 3].map((x = 'yes') => x);
    // [ 1, 'yes', 3 ]
    ```
1.  其他
    + 不能使用圆括号的情况
        - 变量声明语句
        - 函数参数
        - 赋值语句的模式
    + 赋值语句的非模式部分，可以使用圆括号
    + 用途
        - 交换变量的值
        - 从函数返回多个值
        - 函数参数的定义
        - 提取JSON数据
        - 函数参数的默认值
        - 遍历Map结构
        - 输入模块的指定方法

#### 1 let和const
1. let 
    + 不存在变量提升：声明的变量一定要在声明这个动作后发生，否则报错
    + 存在暂时性死区
    + 不允许重复声明
1. 块级作用域
    + ES5只有全局作用域和函数作用域
    + ES6允许块级作用域的任意嵌套
        ``` javascript
        {{{
          {console.log('test)}
          let ad = 'aaaaa'
        }}}
        ```
    + 必须有大括号
1. const
    + 一旦声明变量，就必须立即初始化（赋值），否则就算报错
    + 只在声明所在的块级作用域内有效
    + 变量不提升
    + 存在暂时性死区
    + 不允许重复声明
    + const保证变量指向的那个内存地址所保存的数据不得改动（简单类型和复合类型有区别）
1. globalThis对象
1. 其他
    + for循环：设置循环变量的部分是一个父作用域，而循环体内部是一个单独的子作用域
    + Object.freeze：冻结对象
    + ES5只有两种声明变量的方法：var和function
    + ES6有6中声明变量的方法：var,function,let,const,import,class
    + 浏览器的顶层对象是window对象，Node的顶层对象是global对象
    + ES5中，顶层对象的属性赋值与全局变量的赋值，是同一件事儿
    + ES6中，var和function声明的全局变量，依旧是顶层对象的属性；let,const,class声明的全局变量，不属于顶层对象的属性
        ``` javascript
        var a = 1;
        window.a;

        let b = 1;
        window.b;
        ```
