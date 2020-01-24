// function fun(n, o) {
//   console.log(o)
//   return {
//     fun: function(m) {
//       return fun(m, n);
//     }
//   };
// }
// var a = fun(0);
// a.fun(1);
// a.fun(2);
// a.fun(3); //undefined,0,0,0
// var b = fun(0).fun(1).fun(2).fun(3); //undefined,0,1,2
// var c = fun(0).fun(1);
// c.fun(2);
// c.fun(3); //undefined,0,1,1
// //问:三行a,b,c的输出分别是什么？

// // 参考：https://www.cnblogs.com/xxcanghai/p/4991870.html

function add(a) {
  function s(b) {
    a = a + b;
    return s;
  }
  s.toString = function() { return a; }
  return s;
}
console.log(add(1)(2)(3)(4));