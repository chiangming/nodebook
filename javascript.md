# 复制变量、作用域和垃圾收集
## 赋值变量
1. 复制变量和传参：基本变量完全独立，引用类型的指针指向存储在堆中的同一个对象。
2. typeof 操作符用于检测基本类型值。instanceof 操作符检测一个引用类型值和 Object 构造函数时，instanceof 操作符始终会返回 true。当然，如果使用 instanceof 操作符检测基本类型的值，则该操作符始终会返回 false，因为基本类型不是对象。[test1](javascript/test1.js)

## 作用域
1. EC（执行环境）<————>VO(变量对象)
2. 代码执行时，创建   
Scope Chain： 当前VO ——>外部EC ——> …… ——> 全局EC  
标识符解析： ——————————————————————>
3. var没有块级作用域, let有块级作用域。[test2](javascript/test2.js)
4. 函数内部初始化变量时没有使用 var 声明，该变量会自动被添加到全局环境。在严格模式下，初始化未经声明的变量会导致错误。

## 垃圾回收
1. 标记清除
2. 引用计数（js对象循环引用，IE8的DOM/BOM对象循环引用）-手动null

# 数组类型的常用操作方法
1. 数组的每一项可以保存任何类型的数据
2. 数组大小动态调整
3. 创建方式：
    * new Array() [test3](javascript/test3.js)
    * 使用字面量[]
4. 数组的length可以设置，非只读的，可以通过length添加或者移除数组元素
5. 检测数组
    * value instanceof Array
    * Array.isArray(value)
6. 转换方法
    * toString() [test4](javascript/test4.js)
    * valueOf()
    * join    
7. 变异方法 
    * push() pop()栈方法
    * shift() unshifit() 队列方法
    * reverse() 反转 sort（）字典序排序
    * 带compare函数的sort() 数值排序 [test5](javascript/test5.js)
    * splice() ---- 拼接（起始位置、要删除的项数（0）和要插入的项）
8. 非变异方法
    * concat() 方法 ---- 创建数组副本(有参数的拼在数组末尾)
    * slice() 方法 ---- 截取部分数组    
9. 位置方法indexOf() lastIndexOf()
10. 迭代方法（非变异） 
    * every()：数组中每一项都满足函数条件，则返回 true。
    * filter()：筛选数组中满足函数条件的项组成的数组。
    * forEach()：对数组中的每一项运行给定函数。这个方法没有返回值。
    * map()：对数组中的每一项运行给定函数，返回运行结果组成的新数组。
    * some()：数组中只要有一项满足函数条件，则返回 true。
    ```js
    var someResult = numbers.some(function(item, index, array){ 
      return (item > 2); 
    }); 
    ```
 11. 归并方法（非变异）
    * reduce()方法从数组的第一项开始，逐个遍历到最后。
    * reduceRight()则从数组的最后一项开始，向前遍历到第一项。   
    ```js
    var sum = values.reduceRight(function(prev, cur, index, array){ 
    return prev + cur; 
    }); 
    ```
# 常用引用类型（Object、Array、Function、Date、RegExp）

## Function类型
1. 函数声明： 声明提升
```js
function sum (num1, num2) { 
	return num1 + num2; 
} 
```
2. 函数表达式： 不提升
```js
var sum = function(num1, num2){ 
	return num1 + num2; 
};
```
3. 函数重复声明会覆盖：没有重载
4. 函数可以作为函数参数、可以作为结果返回
5. 函数的属性和方法(函数也是Object，包含属性和方法)   
   1. 特殊对象：arguments和this
    * arguments 对象是类数组（它并不是 Array 的实例）
    * arguments.callee 指向拥有这个 arguments 对象的函数本身
    * (function || arguments.callee).caller 调用当前函数的函数的引用(全局函数的引用)
    * arguments.length 实现-重载
   2. 属性：length和prototype     
    * prototype 是保存函数所有实例方法的真正所在
    * prototype 不可枚举  

6. 扩充作用域apply和call  
   1. 方法（非继承):apply() 和 call()  
   * 在特定的作用域中调用函数,实际上等于设置函数体内 this 对象的值
   * apply() arg[0]:运行函数的作用域 arg[1]:参数数组
   * call()  arg[0]:运行函数的作用域 arg[1~n]:参数1~n
   
### 数据类型
* 简单类型：undefined null boolean number string 
* 复杂类型：object
### typeof
* undefined
* boolean 
* number 
* string 
* object -> 对象或null
### Number
* Infinity
* NaN 
  * NaN不等于任何数 包括自身
  * parseInt(" ",10);
  * parseFloat(" ") ;
### String 
* num.toString(10);
* String(num);
### Object
* constructor  返回构造函数 创建当前对象的函数
* hasOwnProperty() 自己是否有某个属性
* isPrototypeOf() 是否是该对象的原型
* propertyIsEnumerable() 该属性能否用for-in枚举 一定是自身属性且可枚举
### function 参数
* 实际传递参数和声明的参数数量不需要一样
* arguments 可以获得传递的参数数组
  * length 参数数量
  * arguments[0] 调用参数
  * 修改arguments 会同时修改传递的参数
### 区分String对象 string基本数据类型
### for if 语句中声明的变量会添加到当前的执行环境中 注意区分函数
### Array
* isArray() toString() valueOf() join()
* push() pop() shift() unshift()
* reserve() sort()
* concat() slice() splice() 
* indexOf() lasetIndexOf()
* every() some() forEach() filter() map() 
* reduce() reduceRight()
### Date