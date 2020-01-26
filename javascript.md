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
1. 标记清除 （从根部（在JS中就是全局对象）出发定时扫描内存中的对象，凡是能从根部到达的对象，保留。那些从根部出发无法触及到的对象被标记为不再使用，稍后进行回收。）
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
   * call()  arg[0]:运行函数的作用域 arg[1~n]:参数1~n
   * apply() arg[0]:运行函数的作用域 arg[1]:参数数组
   

### 数据类型
* 简单类型：undefined null boolean number string 
* 复杂类型：object
### typeof
* undefined
* boolean 
* number 
* string 
* object -> 对象或null

### Boolean
| type | true | false |
| --- | --- | --- |
| Number | 任何大于0的数 | 0和NaN |
| String | 任何非空字符串 | "" |
| Object | 任何对象，包括{},[] | null |
| undefined | | undefined |
### Number
* Infinity
* NaN 
  * NaN不等于任何数 包括自身
  * parseInt(" ",10);
  * parseFloat(" ") ;
### String 
* num.toString(10);
* String(num); String('111') === '111'
* slice() substr() substring()  start end 截取
* concat() 
* charAt() charCodeAt()
* indexOf() lastIndexOf()
* search() 第一次出现位置 replace() match() 返回数组
* split()
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
*  reverse() 转置 sort()  return<0 a在前
* concat() 连接 slice() 起始 和 结束位置 不包括结束位置 splice()  删除起始位置 长度 替换
* indexOf() lasetIndexOf()
* every()  全为true 返回true some() 任一为true 返回true  forEach() filter() 所有ture 组成数组 map() 返回数组
* reduce() reduceRight()
### Date
### Function
* 函数内部属性
  * arguments.callee 指向拥有该arguments的函数
  * this 引用的是函数执行的环境对象
  * caller 当前函数的函数的引用
* 函数属性和方法
  * length 参数个数
  * prototype  ----------------见后续
  * apply(),call()
  * bind() 会创建函数实例

# 词法作用域（静态作用域）
函数的作用域在 **函数定义** 的时候就决定了。（除了this引用）
```js
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();    // foo中value的作用域为全局EC而不是bar的函数EC
}

bar(); // 结果是1 不是2
```
### 作用域 （编译）
上下文中声明的 变量和声明的作用范围
* 全局作用域 不带有声明关键字的变量，JS 会默认帮你声明一个全局变量
* 块级作用域 用let声明 const （es6） 是必须有一个 { } 包裹：

```
for(let i = 0; i < 5; i++) {
    setTimeout(function() {
      console.log(i);
    }, 200);
};
//for (let x...)的循环在每次迭代时都为x创建新的绑定 相当于下面的例子
var a = [];
{ var k;
    for (k = 0; k < 10; k++) {
      let i = k; //注意这里，每次循环都会创建一个新的i变量
      a[i] = function () {
        console.log(i);
      };
    }
}
```
上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域

# 执行上下文和执行栈
全局代码初始化时首先ECS压入一个全局EC
遇到函数执行时，创建一个函数EC。

* ECStack管理EC的压栈和出栈。
* 每个EC对应一个作用域链Scope，VO|AO（AO，VO只能有一个），this。
* 函数EC中的Scope在进入函数EC时创建，用来有序访问该EC对象AO中的变量和函数。
* 函数EC中的AO在进入函数EC时，确定了Arguments对象的属性；在执行函数EC时，其它变量属性具体化。
* 函数的[[scope]]属性在函数创建时就已经确定，并保持不变

## 执行上下文 （执行）
 1. 全局EC： window（浏览器）、exports（node）
 2. 函数EC： 函数每次被调用时创建
 3. ~~evalEC： 不常见~~

## 执行栈
  存储代码执行期间创建的所有EC
  ![ES](img/js1-ec.jpg)

  EC分为两个阶段，进入执行上下文和执行代码。
  #### 代码执行过程:
* 创建 全局上下文 (global EC)
* 全局执行上下文 (caller) 逐行 自上而下 执行。遇到函数时，函数执行上下文 (callee) 被* push到执行栈顶层
* 函数执行上下文被激活，成为 active EC, 开始执行函数中的代码，caller 被挂起
* 函数执行完后，callee 被pop移除出执行栈，控制权交还全局上下文 (caller)，继续执行
* 执行到最后，执行环境栈中只有全局执行上下文，等到应用程序结束才会销毁


## EC的创建阶段与执行阶段
 
#### 伪代码
```js
ExecutionContext = {
  ThisBinding = <this value>  //1. 确认this
  VO = {...}                  //2. 与EC相关的数据作用域，存储了EC中定义的变量和函数声明。
  ScopeChain = {...}          //3. 作用域链
}
```
全局上下文中的变量对象就是全局对象window（浏览器）、moudle（node）
（全局对象是由 Object 构造函数实例化的一个对象）

### 创建

####  1. this Binding (确认this)
this: 指代函数当前的运行环境    
![ThisBinding](img/js1-thisBinding.jpg)
说人话就是，谁调用了函数。例如:
* 隐式绑定obj.fn()，便是 obj 调用了函数，既函数中的 this === obj
* 默认绑定fn()，这里可以看成 window.fn()，因此 this === window

* 显示绑定:
    * call: fn.call(target, 1, 2)
    * apply: fn.apply(target, [1, 2])
    * bind: fn.bind(target)(1,2) 返回新函数 其中this指向target
    * target 绑定null或者undefined时this为默认绑定
* new运算过程绑定
    * 生成新对象
    * 链接到原型 新对象.`_proto_` = 对象.prototype 
    * 绑定this 指向新对象
    * 返回新对象 

* => 绑定：根据外层（函数或者全局）作用域（词法作用域）来决定this。箭头函数的this无法通过bind，call，apply来直接修改
####  2. VO
VO = {
  arguments: {        // 全局EC没有
        0: 形参值,
        length: 1
  },
  形参名：形参值，
  变量名：undefined     // 变量声明
  函数名：<ref to func> // 函数声明
}

全局EC 拥有一个全局对象（window）及关联的方法属性（例数组方法）、用户自定义全局变量（a、b、c）创建时let、const变量未初始化（无变量提升，使用会报ReferenceError）var变量undefined（变量提升）

函数EC的VO初始化只包括 Arguments 对象

js引擎 单线程顺序 ~~y一行一行~~ 一段一段执行
当执行一段代码的时候，会进行一个“准备工作”  
同一EC下：
1. [变量提升](javascript/执行上下文栈和变量对象/变量提升.js) 

    （变量声明提升到函数顶部 例：var a = 2中 var a提升到顶部）  

2. [函数提升](javascript/执行上下文栈和变量对象/函数提升.js) 

    (function a(){} 的< a func >提升到顶部，后的同名声明覆盖前声明)
3. [优先级：函数 > 变量](javascript/执行上下文栈和变量对象/声明优先级函数大于变量.js)  
    （function a（）{}的< a function> 优先与var a = function(){}的 var a）

#### Scope Chain
执行上下文中包含作用域链Scope。指向变量对象VO|AO的指针列表
当代码在**一个环境中**执行时，会创建变量对象的**一个作用域链**，VO激活了变成AO
    
Scope = [AO].concat([[Scope]]);   
* Scope ：作用域链
* AO: 当前活动对象
* [[Scope]]：指向父级变量对象和父级EC作用域链

当访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去（词法环境的）父作用域找，一直找到全局上下文的变量对象，也就是全局对象。
### 执行
#### VO
顺序执行代码，根据代码，修改VO的值

# 执行上下文栈和变量对象


执行上下文栈ECS根据函数执行顺序对全局EC和函数EC依次入出栈




# 内存空间
当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；

     当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。

![1](img/js-mem.png)

# 闭包
闭包:

闭包的定义可以理解为: 父函数被销毁 的情况下，返回出的子函数的[[scope]]中仍然保留着父级EC的变量对象和作用域链，因此可以继续访问到父级的变量对象，**除了this和arguments**这样的函数称为闭包。

1. 一个函数（比如，内部函数从父函数中返回）
2. 能访问上级函数作用域中的变量（哪怕上级函数上下文已经销毁）

（函数中访问全局变量也是一种闭包）

 **是闭包中的变量并不保存中栈内存中，而是保存在堆内存中**
即使外部函数已经返回，闭包仍能访问和更新外部函数定义的变量

* 多个子函数的[[scope]]都是同时指向父级，是完全共享的。因此当父级的变量对象被修改时，所有子函数都受到影响。
    * 变量可以通过 函数参数的形式 传入，避免使用默认的[[scope]]向上查找 
        * (function(msg){
            return function(){console.log(msg);}
        })(i)
    * 使用setTimeout包裹，通过第三个参数传入
        * 第三个参数及以后的参数都可以作为func函数的参数
    
    * 使用 块级作用域，让变量成为自己上下文的属性，避免共享
        for(let i;i<3;i++)
```
function setData(){
    var data = [];
    for(var i=0;i<3;i++){
        data[i] = (function(i){
            return function(){
                 console.log(i);
            }
        })(i);             
    }
    return data;
}
var data = setData();
data[1]();
for (var i = 0; i < 3; i++) {
  setTimeout((msg)=>{
    data[msg] = function(){
        console.log(msg);
    }
  },0,i)
}
```

[闭包经典题](https://muyiy.cn/blog/2/2.2.html#%E9%9D%A2%E8%AF%95%E5%BF%85%E5%88%B7%E9%A2%98)
[闭包题2]（https://www.cnblogs.com/xxcanghai/p/4991870.html）


# 匿名函数表达式与具名函数表达式

# Tips
## 柯里化
只传递给函数一部分参数来调用它，让它返回一个新函数去处理剩下的参数。
### 预先设置一些参数
```js
function foo(a, b) {
    console.log( "a:" + a + "，b:" + b );
}

// 使用bind(..)进行柯里化
var bar = foo.bind( null, 2 );
bar( 3 ); // a:2，b:3 
```
### [curry](https://muyiy.cn/blog/6/6.2.html#%E6%9F%AF%E9%87%8C%E5%8C%96)
```js
function currying(fn, length) {
  length = length || fn.length; 	
  return function (...args) {			
    return args.length >= length	
    	? fn.apply(this, args)			
      : currying(fn.bind(this, ...args), length - args.length) 
  }
}
```
注：fn.length: 实参长度
arguments.length:型参长度
```js
const fn = currying(function(a, b, c) {
    console.log([a, b, c]);
});

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]
```

# 深浅拷贝原理
## 浅拷贝
如果属性是基本类型，拷贝的就是基本类型的值，
如果属性是引用类型，拷贝的就是内存地址 
* Object.assigh(目标对象，源对象..) 返回目标对象
    * Object.assign() 方法用于将从一个或多个源对象中的所有可枚举的属性值复制到目标对象
    * 可以用于复制对象的方法
    * 原型链上的属性和不可枚举的属性不能复制  
    * 属性的值为对象 依旧只是引用
* 展开运算符 ...
    * 对象展开运算符让你可以通过展开运算符 (...) , 以更加简洁的形式将一个对象的可枚举属性拷贝至另一个对象
    * 对象字面量的展开操作符能将源对象中的可枚举的属性复制到目标对象上
* slice(0)     // Array.prototype.slice()

## 深拷贝
完全改变source变量之后对 copy 没有任何影响。
* 使用 JSON.parse(JSON.stringify(object)); 
    * 具有循环引用的对象时，报错
    * 当值为函数、undefined、或symbol时，无法拷贝
* 递归进行逐一赋值

## 简单浅拷贝
```js
function cloneShallow(source) {
    var target = {};
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
    return target;
}
```

## 简单深拷贝
```js
function copyObj(obj){
    var copy = {};
    for(key in obj){
        if(typeof obj[key] === 'object'){
           copy[key] = copyObj(obj[key]);
        }
        else{
            copy[key] = obj[key];
        }
    }
    return copy;
}
```
[深拷贝](./深拷贝.js)

## Object.assign [模拟实现](https://muyiy.cn/blog/4/4.2.html#object-assign-%E6%A8%A1%E6%8B%9F%E5%AE%9E%E7%8E%B0) 
### tips
1. 原生情况下挂载在 Object 上的属性是不可枚举的，   
但是直接在 Object 上挂载属性 a 之后是可枚举的  
可以通过Object.defineProperty设置不可枚举属性   
    * enumerable: false,   
    * writable: true,   
    * configurable: true。
2. 检查枚举情况
```js
Object.getOwnPropertyDescriptor(Object, "a");
// {
// 	value: ƒ, 
//  writable: true, 
//  enumerable: true,  // 注意这里是 true
//  configurable: true
// }

Object.propertyIsEnumerable("a");
// true
```

# 原型及原型链

## 对象属性
* 属性
    * 数值属性
        * value  （和writable enumerable configurable）
    * 访问器属性 （没有数值 在调用时用来改变数值属性的值）
        * set get 读取和写入数据时调用的函数 （和enumerable configurable）
    * definePropety(对象名，属性名，{描述符：值})
    * definePropeties(对象名，{ { }})
    * getOwnPropertyDescriptor(对象，属性名)
* hasOwnProperty 实例属性 不向上检查原型链
* for-in 或者propName-in-Obj无论是原型还是实例中的属性都可以遍历


## 创建对象
* 工厂模式
```js
function createPerson(name,age){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.sayName = function(){
        return "hi "+name;
    }
    return o;
}
var jack = createPerson("jack",16);
```
* 构造函数模式
```js
function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayName = function(){
        return "hi "+name;
    }
}
var nire = new Person("nire",22);
```
* 原型模式
```js
var Man = function(){};
Man.prototype.sexule = "man";
Man.prototype.getGirl = function(){
    return null;
}

var nirean = new Man();
```

## 构造函数
* Symbol 作为构造函数来说并不完整，因为不支持语法 new Symbol()，但其原型上拥有 constructor 属性，即 Symbol.prototype.constructor。
* 引用类型的 constructor 可以修改，
* 基本类型
    * number boolean string 的constructor只读的
    * null 和 undefined 没有 constructor。
* __proto__ 是每个实例上都有的属性，prototype 是构造函数的属性，在实例上并不存在，所以这两个并不一样，但 p.__proto__ 和 Parent.prototype 指向同一个对象。
* __proto__ 属性在 ES6 时被标准化，但因为性能问题并不推荐使用，推荐使用 Object.getPrototypeOf()。

## 原型链

* 每个对象拥有一个原型对象，通过 __proto__ 指针指向上一个原型 ，并从中继承方法和属性，同时原型对象也可能拥有原型，这样一层一层，最终指向 null，这就是**原型链**。
* 当访问一个对象的属性 / 方法时，它不仅仅在该对象上查找，还会查找该对象的原型，以及该对象的原型的原型，一层一层向上查找，直到找到一个名字匹配的属性 / 方法或到达原型链的末尾（null）。
* 原型链的构建依赖于 __proto__，一层一层最终链接到 null。
* instanceof 原理就是实例一层一层查找 __proto__，如果和实例的constructor.prototype 相等则返回 true，如果一直没有查找成功则返回 false。

## Object.create() 和 new Object()的区别
new 的模拟实现
```js
function create() {
	// 1、获得构造函数，同时删除 arguments 中第一个参数
    Con = [].shift.call(arguments);
	// 2、创建一个空的对象并链接到原型，obj 可以访问构造函数原型中的属性
    var obj = Object.create(Con.prototype);
	// 3、绑定 this 实现继承，obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
	// 4、优先返回构造函数返回的对象
	return ret instanceof Object ? ret : obj;
};
```
可以看出 Object.create(Con.prototype)与new Con()相比，少了Con.apply(obj, arguments)的过程
let a = Object.create(b): 创建一个空对象a，a.__proto__指向b
let a = new B()，B是一个 constructor，也是一个 function，B身上有着 prototype 的引用，只要随时调用 a = new B()，我就会将 a.__proto__ 指向到B的 prototype 对象。

### object.create()模拟实现
```js
function create(obj){
    function f = function(){}
    f.prototype = obj
    return new f()
}
```
## 继承
* 借用构造函数
    * 并没有改变原型链，只是调用了超类中的语句


## 原型链式继承

a继承b
```js
A.prototype = new B();
// A.prototype.constructor = B 解决constructor被篡改的问题
// 相当于 A.prototype.__proto__ = B.prototype
```

A instanceof B  a是b的实例吗    
A.prototype.isPrototypeOf(B)  a是b的原型吗


## 其他继承方案
* 借用构造函数： 
    * 并没有改变原型链，只是调用了超类中的语句 ```SuperType.call(this)```
* 组合继承:
    * 原型链 继承 原型属性和方法
    * 使用构造函数继承 实例属性
* 原型式继承： 
    * 通过一个已存在的对象创建另一个相似对象，不用写构造函数
    * Object.create()
    * 引用属性会被共享
* 寄生式继承： 
    * 在 **原型式继承** 产生的实例上直接添加属性和方法
* 寄生组合式继承: 
    * 组合继承中的new SuperType（）替换成 Object.create(superType.prototype) 
```js
// 父类
function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

// 子类
function SubType(name, age){
  SuperType.call(this, name); // 借用构造函数传递增强子类实例属性（支持传参和避免篡改）
  this.age = age;
}

var prototype = Object.create(superType.prototype);
// 原型链式继承中 new SuperType（）替换成 Object.create(superType.prototype)，减少一次父类构造函数调用
subType.prototype = prototype;                      // 原型链式继承1
prototype.constructor = subType;                    // 原型链式继承2
```
* 混入式继承： ```Object.assign(MyClass.prototype, OtherSuperClass.prototype);```
* ES6 类继承：extends实现和寄生组合式继承方式一样

![prototypr](./img/js-prototype.jpg)

# 高阶函数map/filter/reduce
const arr1 = [1, 2, 3, 4, 0];
## Array.prototypr.map

const arr2 = arr1.map((item,index,self) => item * 2);// [2,4,6,8,0]

##  Array.prototype.reduce
let sum = arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
},100); // 110

## Array.prototype.filter
const arr2 = arr1.filter( (element, index, self) => {
    return self.indexOf( element ) === index + 1;
}); // [1, 2, 3, 4]

## isType
let isString = obj => Object.prototype.toString.call( obj ) === '[object String]';

let isArray = obj => Object.prototype.toString.call( obj ) === '[object Array]';

let isNumber = obj => Object.prototype.toString.call( obj ) === '[object Number]';

[js判断变量是不是数组的方法](https://www.cnblogs.com/zhizhic/p/9988947.html)

## 数组扁平化
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
```js
Array.prototype.flat = function (){
    // return [].concat.(...this.map(item =>(Array.isArray(item)?item.flat():[item])))
    return this.toString().split(',').map(item => item-0 )
}
```
arr.flat()

## 数组去重
```js
Array.prototype.unique = function() {
    return [...new Set(this)]
}
```
## 数组乱序
```js
arr.sort(function () {
    return Math.random() - 0.5;
});
```

# script 引入方式
 * html 静态```<script>```引入
 * js 动态插入```<script>```
 ```js
function loadScript(url){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
}
loadScript('test.js');


function loadJsCode(code){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    //for Chrome Firefox Opera Safari
    script.appendChild(document.createTextNode(code));
    //for IE
    //script.text = code;
    document.body.appendChild(script);
}
loadJsCode('alert(2)');
 ```
 
 * `<script defer>`:异步加载，元素解析完成后执行,但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成
 * `<script async>`: 异步加载，但执行时会阻塞元素渲染  下载完后立即执行
    * 没有这两个标签 浏览器会在遇到js代码就立即执行，“立即”指的是在渲染该 script 标签之下的文档元素之前，也就是说不等待后续载入的文档元素，读到就加载并执行。
    * 两者都会并行下载，不会影响页面的解析 defer会在元素渲染完之后执行 ，async下载完后立即执行

