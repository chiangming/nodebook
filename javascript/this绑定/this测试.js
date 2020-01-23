var num = 1;
var myObject = {
  num: 2,
  add: function() {
    this.num = 3;
    (function() {
      console.log(this.num);
      this.num = 4;
    })();
    console.log(this.num);
  },
  sub: function() {
    console.log(this.num)
  }
}

// 浏览器环境下
myObject.add(); // 1 
// 3
console.log(myObject.num); // 3
console.log(num); // 4
var sub = myObject.sub;
sub(); // 4