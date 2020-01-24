# call() 和 apply()
扩充作用域apply和call  
   1. 方法（非继承):apply() 和 call()  
   * 在特定的作用域中调用函数,实际上等于设置函数体内 this 对象的值
   * call()  arg[0]:运行函数的作用域 arg[1~n]:参数1~n
   * apply() arg[0]:运行函数的作用域 arg[1]:参数数组

```js
var func = function(arg1, arg2) {
     ...
};

func.call(this, arg1, arg2); // 使用 call，参数列表
func.apply(this, [arg1, arg2]) // 使用 apply，参数数组
```
# 使用场景
## 合并数组
Array.prototype.push.apply(arr1, arr2); 等价于  
arr1.push(...arr2)

## 数组最大值
Math.max.apply(Math, numbers);   等价于
Math.max(...numbers)

## 使用原型上的方法
```js
function isArray(obj){ 
    return Object.prototype.toString.call(obj) === '[object Array]';
}
isArray([1, 2, 3]);           // true

// 直接使用 toString()
[1, 2, 3].toString(); 	// "1,2,3"
"123".toString(); 		// "123"
123.toString(); 		// SyntaxError: Invalid or unexpected token
Number(123).toString(); // "123"
Object(123).toString(); // "123"
```

## 类数组对象（Array-like Object）使用数组方法
```js
var domNodes = document.getElementsByTagName("*");
domNodes.unshift("h1");
// TypeError: domNodes.unshift is not a function

var domNodeArrays = Array.prototype.slice.call(domNodes);
domNodeArrays.unshift("h1"); // 505 不同环境下数据不同
// (505) ["h1", html.gr__hujiang_com, head, meta, ...] 
```

## 调用父构造函数实现继承
```js
function  SuperType(){
    this.color=["red", "green", "blue"];
}
function  SubType(){
    // 核心代码，继承自SuperType
    SuperType.call(this);
}
```

# call的模拟实现
```js
var value = 1;
var args =[1,2,3,4,5]
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); 
bar.apply(foo,args)
```

```js
Function.prototype.call = function (context) {
  context = context ? Object(context) : window; 
  context.fn = this;                              // 1. foo.fn = bar

  let args = [...arguments].slice(1);
  let result = context.fn(...args);               // 2. foo.fn()

  delete context.fn                               // 3. delete foo.fn()
  return result;
}
```

# apply 模拟实现
```js
Function.prototype.apply2 = function (context,args) {
  context = context ? Object(context) : window; 
  context.fn = this;                              // 1. foo.fn = bar

  if (!arr) {
      throw new TypeError('CreateListFromArrayLike called on non-object')
  } 
  let result = context.fn(...args);               // 2. foo.fn(...args)

  delete context.fn                               // 3. delete foo.fn()
  return result;
}
```