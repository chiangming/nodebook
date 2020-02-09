// 手机 用来打电话，玩游戏，看电影，且都是同一个手机
// 懒汉式
class Phone {
  static isInstance = false

  constructor() {
    this.call = function() { console.log("打电话"); }
    this.playGame = function() { console.log("玩游戏"); }
    this.watchMovie = function call() { console.log("看电影"); }
    if (!Phone.isInstance) {
      throw new Error("Please use Phone.getInstance() to get the object.");
    }
  }

  static getInstance() {
    Phone.isInstance = true
    const proto = this.prototype
    if (!proto.singleton) {
      proto.singleton = new Phone()
    }
    Phone.isInstance = false
    return proto.singleton
  }
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