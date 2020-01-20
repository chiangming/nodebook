console.log(color1) // undefined
console.log(color2) // 严格模式下报错
if (true) {
  var color1 = "blue";
}
console.log(color1); //"blue" 

if (true) {
  color2 = "blue";
}
console.log(color2); //"blue"

// if (true) {
//   let color = "blue";
// }
// console.log(color); // ReferenceError

// if (true) {
//   let colour = "blue";
// }
// console.log(colour); // ReferenceError