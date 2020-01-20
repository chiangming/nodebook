// 创建数组
var colors = new Array();
console.log(colors[0]) // undefined
  // 创建 length 值为 20 的数组
var colors = new Array(20);

// 创建包含 3 个字符串的数组
var colors = new Array("red", "blue", "green");

// 在使用 Array 构造函数时也可以省略 new 操作符
var names = Array("Greg");

// 创建一个包含 3 个字符串的数组
var colors = ["red", "blue", "green"];

// 创建一个空数组
var names = [];

// 不要这样！这样会创建一个包含 2 或 3 项的数组
var values = [1, 2, ];

console.log(values[3])