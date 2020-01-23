foo(); // foo2
function foo() {
  console.log('foo1');
}

foo(); // foo2

function foo() {
  console.log('foo2');
}

foo(); // foo2

/******************
 * GloableEC = {
 *  thisBinding : <module value>
 *  lexiableEnvironment :{
 *    EnvironmentRecord:{
 *      Type: "Object"    // 全局环境 函数 let const
 *      foo： <foo func>  // 声明时foo就指向了‘foo2’所在地址，即后面的函数声明覆盖了前面
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