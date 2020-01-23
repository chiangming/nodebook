foo; // undefined
console.log(foo);
//foo() // typeError
var foo = function() {
  console.log('foo1');
}

foo(); // foo1，foo赋值

var foo = function() {
  console.log('foo2');
}

foo(); // foo2，foo重新赋值

/******************
 * GloableEC = {
 *  thisBinding : <module value>
 *  lexiableEnvironment :{
 *    EnvironmentRecord:{
 *      Type: "Object"    // 全局环境 函数 let const
 *    }
 *    outer: <null>
 *  }
 *  VirableEnvironment :{
 *    EnvironmentRecord:{
 *      Type: "Object"    // 全局环境 var
 *      foo: undefined -> <'foo1' func> -> <'foo2' func>
 *    }
 *    outer: <null>
 *  }
 * }
 ******************/