// 手机 用来打电话，玩游戏，看电影，且都是同一个手机
// 饿汉式
// class Phone {
//   constructor() {
//     this.call = function() { console.log("打电话"); }
//     this.playGame = function() { console.log("玩游戏"); }
//     this.watchMovie = function() { console.log("看电影"); }
//     console.log('con:', this)
//   }

//   static getInstance() {
//     console.log('static:', this)
//     return this.prototype.singleton
//   }
// }

// Phone.prototype.singleton = new Phone()

// 或者

let Phone = {
  call: function() { console.log("打电话"); },
  playGame: function() { console.log("玩游戏"); },
  watchMovie: function() { console.log("看电影"); },
  getInstance: function() { return this }
}


var p1 = Phone.getInstance();
var p2 = Phone.getInstance();
var p3 = Phone.getInstance();
// var p4 = new Phone();
// p4.call();
p1.call();
p2.playGame();
p3.watchMovie();
console.log(p1 === p2 && p2 === p3);