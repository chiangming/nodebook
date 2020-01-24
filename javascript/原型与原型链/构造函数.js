function parent2(age) {
  this.age = age;
}
var p2 = parent2(50);
// undefined

// console.log(p2.constructor) // Cannot read property 'constructor' of undefined

// 普通函数
function parent3(age) {
  return "abc"
}
var p3 = parent3(50);
p3.constructor === Object; // true
console.log(p3.constructor === String)

/*****
 * 构造函数只读？
 */

// function Foo() {
//   this.value = 42;
// }
// Foo.prototype = {
//   method: function() {}
// };

// function Bar() {}

// // 设置 Bar 的 prototype 属性为 Foo 的实例对象
// Bar.prototype = new Foo();
// Bar.prototype.foo = 'Hello World';

// // Bar.prototype.constructor === Object;
// // true

// // 修正 Bar.prototype.constructor 为 Bar 本身
// Bar.prototype.constructor = Bar;

// var test = new Bar() // 创建 Bar 的一个新实例
// console.log(test);

function Type() {};
var types = [1, "muyiy", true, Symbol(123), { name: "1" }];

for (var i = 0; i < types.length; i++) {
  types[i].__proto__ = Type.prototype;
  // types[i].constructor = Type;
  // types[i].constructor.prototype = Type.prototype;
  types[i] = [types[i].constructor, types[i] instanceof Type, typeof types[i], types[i].toString()];
};

console.log(types.join("\n"));
// function Number() { [native code] }, false, 1
// function String() { [native code] }, false, muyiy
// function Boolean() { [native code] }, false, true
// function Symbol() { [native code] }, false, Symbol(123)