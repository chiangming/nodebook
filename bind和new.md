# bind()
bind() 方法会 **1. 创建一个新函数** ，当这个新函数被调用时，它 **2. 指定this值** 是传递给 bind() 的第一个参数，传入bind方法的第二个以及以后的 **3. 传入参数** 加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数。 **4. 可以用来柯里化**  
bind返回的绑定函数也能使用 new 操作符创建对象：这种行为就像把原函数当成构造器，提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

# bind模拟
```js
Function.prototype.bind2 = function(context) {
  context = context ? Object(context) : window;
  context.fn = this                                                       // 2. 指定this值
  let args = [...arguments].slice(1);                                     // 3. 传入参数

  let func = function() {                                                 // 1. 创建一个新函数
    args = args.concat([...arguments])                                    // 4. 柯里化（补充参数）
    return this instanceof func ? this.fn(...args) : context.fn(...args)  // 5.实现函数构造化的new值绑定
  }

  func.prototype = this.prototype                                         // 5. 修改返回函数的原型

  return func
}
```
完整模拟见[bind](./javascript/call&apply&bind/bind.js)


# new
 new 创建的实例:
1. 访问到构造函数里的属性
2. 访问到原型里的属性

```js
function create() {
	// 创建一个空的对象
    var obj = new Object(),
	// 获得构造函数，arguments中去除第一个参数
    Con = [].shift.call(arguments);
	// 链接到原型，obj 可以访问到构造函数原型中的属性
    obj.__proto__ = Con.prototype;
	// 绑定 this 实现继承，obj 可以访问到构造函数中的属性
    Con.apply(obj, arguments);
	// 返回对象
    return obj;
};
```