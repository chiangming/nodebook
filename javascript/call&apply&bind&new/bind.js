// Function.prototype.bind2 = function(context) {
//   var self = this;
//   var args = Array.prototype.slice.call(arguments, 1);

//   var fBound = function() {
//       var bindArgs = Array.prototype.slice.call(arguments);

//       // 注释1
//       return self.apply(
//         this instanceof fBound ? this : context,
//         args.concat(bindArgs)
//       );
//     }
//     // 注释2
//   fBound.prototype = this.prototype;
//   return fBound;
// }

Function.prototype.bind2 = function(context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }
  context = context ? Object(context) : window;
  context.fn = this // 2. 指定this值
  let args = [...arguments].slice(1); // 3. 传入参数

  let func = function() { // 1. 创建一个新函数
    args = args.concat([...arguments]) // 4. 柯里化（补充参数）
    return this instanceof func ? this.fn(...args) : context.fn(...args) // 5.实现函数构造化的new值绑定
  }

  //func.prototype = this.prototype // 5. 修改返回函数的原型
  func.prototype = Object.create(this.prototype); //避免原型修改的问题
  // 等价于
  // var fNOP = function () {};			  // 创建一个空对象
  // fNOP.prototype = this.prototype; 	// 空对象的原型指向绑定函数的原型
  // func.prototype = new fNOP();	

  return func
}

var value = 2;
var foo = {
  value: 1
};

function bar(name, age) {
  this.habit = 'shopping';
  console.log(this.value);
  console.log(name);
  console.log(age);
}
bar.prototype.friend = 'kevin';

new bar('matt', 25)

// var bindFoo = bar.bind(foo, 'Jack');
// var obj = new bindFoo(20);
// // undefined
// // Jack
// // 20

// console.log(obj.habit);
// // shopping

// console.log(obj.friend);
// // kevin