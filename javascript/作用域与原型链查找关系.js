Object.prototype.a = 1;
Window.prototype.a = 4;

a = 2

var o = {
  a: 3
}

function test() {
  console.log(a);
}

test();
test.call(o);

delete a;
test();
test.call(o);

delete Window.prototype.a;
test();
test.call(o);


// 1. 直接通过标识符访问变量，首先沿着作用域链查找每一个变量对象，直到全局变量对象（window）仍没有，就沿着全局变量对象（window）的原型链查找
// 2. 通过 . 或 [] 访问对象中的标识符，就直接沿着原型链查找