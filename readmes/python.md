### Python学习-1
---
> 读[Python教程](https://www.runoob.com/python/python-tutorial.html)


<details>
<summary>导航：</summary>
    
- [Python学习-1](#python-1)
  - [5 循环语句](#5)
  - [4 条件运算符](#4)
  - [3 运算符](#3)
  - [2 变量类型](#2)
  - [1 基础语法](#1)
</details>


#### 5 循环语句
1. while循环
   ``` python
    numbers = [12, 37, 5, 3, 2, 76]
    even = []
    odd = []
    while len(numbers) > 0:
        number = numbers.pop()
        print('number --- > ',number)
        if(number % 2 == 0):
            even.append(number)
        else:
            odd.append(number)
   ```
2. for循环
  1. `for...else`循环
  ``` python
  for num in range(10,20):  # 迭代 10 到 20 之间的数字
   for i in range(2,num): # 根据因子迭代
      if num%i == 0:      # 确定第一个因子
         j=num/i          # 计算第二个因子
         print ('%d 等于 %d * %d' % (num,i,j))
         break            # 跳出当前循环
   else:                  # 循环的 else 部分
      print (num, '是一个质数')

  ```
3. 嵌套循环
4. 循环控制语句
  1. break语句
  2. continue语句
  3. pass语句
#### 4 条件运算符
#### 3 运算符
1. 算术运算符
2. 比较运算符
3. 位运算符 => 把数字看做二进制来进行计算
4. 逻辑运算符
5. 成员运算符
6. 身份运算符
7. 运算符的优先级

#### 2 变量类型
1. 变量赋值不需要类型声明
2. 五个标准的数据类型
  1. Numbers => 数字
    1. int(有符号整型)
    2. long(长整型) => 3.x版本中，该类型被移除，用int替代
    3. float(浮点型)
    4. complex(复数)
  2. String => 字符串 
    1. 加号`+`是字符串连接运算符，星号`*`是重复操作
  3. List => 列表 
    1. 用[]标识，最通用的复合数据类型
    2. 有序的对象集合
    3. 通过偏移存取
    4. 加号`+`是列表连接运算符，星号`*`是重复操作
  4. Tuple => 元组 
    1. 用`()`标识,内部元素用逗号隔开
    2. 不能二次赋值，相当于只读列表
  5. Dictionary => 字典 
    1. 无序的对象集合
    2. 当中的元素是通过键来存取的
    3. 用`{ }`标识
    4. 由索引(key)和它对应的值value组成
3. (略)数据类型转换
   
#### 1 基础语法
1. 交互式编程
  1. 交互式编程 => 在命令行中输入 Python
  2. 脚本式编程 => 在命令行中 python yourpyhton.py
2. 标识符
  1. 所有的标识符可以包括英文，数字及下划线，但不能以数字开头
  2. 大小写敏感
  3. 以单下划线开头 `_foo`=> 不能直接访问的类属性
  4. 以双下划线开头 `__foo` => 类的私有成员
  5. 以双下划线开头和结尾 `__foo__` => Python里特殊方法专用的标识
3. 保留字符
  1. 所有Python的关键字只包含小写字母
4. 用缩进来写模块，严格执行
5. 多行语句
  1. 使用斜杠`\`将一行的语句分为多行显示
  2. 语句中包含 [], {} 或 () 括号就不需要使用多行连接符
