var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
console.log(typeof s); //string 
console.log(typeof i); //number 
console.log(typeof b); //boolean 
console.log(typeof u); //undefined 
console.log(typeof n); //object 
console.log(typeof o); //object

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1 instanceof Object); // 变量 car1 是 Object 吗？
console.log(null instanceof Object);
// console.log(colors instanceof Array); // 变量 colors 是 Array 吗？
// console.log(pattern instanceof RegExp); // 变量 pattern 是 RegExp 吗？