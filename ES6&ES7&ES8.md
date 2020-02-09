# 变量的解构赋值
[解构赋值](./解构赋值.md)

# ES7
## Array.prototype.includes()
1.基本用法：

['a', 'b', 'c'].includes('a')     // true
['a', 'b', 'c'].includes('d')     // false
2.接收俩个参数：要搜索的值和搜索的开始索引

['a', 'b', 'c', 'd'].includes('b')         // true
['a', 'b', 'c', 'd'].includes('b', 1)      // true
['a', 'b', 'c', 'd'].includes('b', 2)      // false
3.与ES6中的indexOf()比较

有些时候是等效的


['a', 'b', 'c'].includes('a')          //true
['a', 'b', 'c'].indexOf('a') > -1      //true

## 求幂
3 ** 2  //9
效果同
Math.pow(3, 2) //9

var b = 3;
b **= 2;

# ES8
## Object.entries()
var obj = { foo: 'bar', baz: 42 };
    console.log(Object.keys(obj)) //["foo", "baz"]
    console.log(Object.values(obj)) //["bar", 42]
    console.log(Object.entries(obj)) //[["foo", "bar"], ["baz", 42]]

## 字符串填充
'Vue'.padStart(10)           //'       Vue'
'React'.padStart(10)         //'     React'
'JavaScript'.padStart(10)    //'JavaScript'
'Vue'.padEnd(10, '_*')           //'Vue_*_*_*_'
'React'.padEnd(10, 'Hello')      //'ReactHello'
'JavaScript'.padEnd(10, 'Hi')    //'JavaScript'
'JavaScript'.padEnd(8, 'Hi')     //'JavaScript'

## Object.getOwnPropertyDescriptors()
返回目标对象中所有属性的属性描述符，该属性必须是对象自己定义的，不能是从原型链继承来的。
ES6 的getOwnPropertyDescriptor()返回目标对象可枚举属性的方法
```js
var obj = {
    id: 1,
    name: '霖呆呆',
    get gender() {
        console.log('gender')
    },
    set grad(d) {
        console.log(d)
    }
}
console.log(Object.getOwnPropertyDescriptor(obj, 'id'))
        
//输出结果
 {
  id: {
    configurable: true,
    enumerable: true,
    value: 1,
    writable: true
  }
}
```

## 函数参数支持尾部逗号
## 修饰器Decorator
es6中实现一个装饰器代码
```js
function doSometing(name) {
  console.log('Hello' + name)
}

function myDecorator(fn) {
  return function() {
    console.log('start')
    const res = fn.apply(this, arguments)
    console.log('end')
    return res
  }
}
const wrapped = myDecorator(doSometing)
doSometing('lindaidai')
  //Hellowlindaidai

wrapped('lindaidai')
  //start 
  //Hellowlindaidai
  //end
```

es8装饰器
修饰器不能用于函数
修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。
```js
@addSkill
class Person { }

function addSkill(target) {
    target.say = "hello world";
}
```
```js
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

```js
@looks
class Person { }
function looks(target) {
    console.log('I am handsome')
    target.looks = 'handsome'
}

console.log(Person['looks'])

//I am handsome
//handsome
```
在修饰器@looks中添加一个console.log()语句，却发现它是最早执行的，其次才打印出handsome。

这是因为装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数
[参考](https://www.jianshu.com/p/13c5d002478b)

