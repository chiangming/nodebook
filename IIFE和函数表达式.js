/***
 * 带函数名的函数表达式（var）
 */
console.log(a) // undefined

var a = function b() {
  console.log("变量名:", a) // 函数名: [Function: b]
  console.log("函数名:", b) // 函数名: [Function: b]
}

a()

/***
 * 带函数名的函数表达式（let）
 */
console.log(a) // ReferenceError: Cannot access 'a' before initialization

let a = function b() {
  console.log("变量名:", a) //  变量名: [Function: b]
  console.log("函数名:", b) //  函数名: [Function: b]
  a = 10
  b = 100
  console.log("变量名:", a) //  10
  console.log("函数名:", b) //  函数名: [Function: b]
}

a()

/***
 * 带函数名的IIFE
 */

let a = (function b() {
  // console.log("变量名:", a) //  ReferenceError: Cannot access 'a' before initialization
  console.log("函数名:", b) //  函数名: [Function: b]
    // a = 10                  // ReferenceError: Cannot access 'a' before initialization
  b = 100
    // console.log("变量名:", a) //  ReferenceError: Cannot access 'a' before initialization
  console.log("函数名:", b) //  函数名: [Function: b]
})()