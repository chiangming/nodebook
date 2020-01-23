foo(); // foo2
var foo = function() {
  console.log('foo1');
}

foo(); // foo1，foo重新赋值

function foo() {
  console.log('foo2');
}

foo(); // foo1

/******************
 * GloableEC = {
 *  thisBinding : <module value>
 *  lexiableEnvironment :{
 *    EnvironmentRecord:{
 *      Type: "Object"    // 全局环境 函数 let const
 *      foo： <foo func>  // 声明时foo赋值变量undefined（变量）后指向了‘foo2’（函数）所在地址，执行时更改了foo的赋值
 *    }
 *    outer: <null>
 *  }
 *  VirableEnvironment :{
 *    EnvironmentRecord:{
 *      Type: "Object"    // 全局环境 var
 *    }
 *    outer: <null>
 *  }
 * }
 ******************/