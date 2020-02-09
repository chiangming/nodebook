// 手机 用来打电话，玩游戏，看电影，且都是同一个手机
// 懒汉式

var Phone = (function() {
  // 规定只能使用 Phone.getInstance 获取实例
  var res = function() {
    throw new Error("Please use Phone.getInstance() to get the object.");
  };
  var has = false;
  var phone = null;
  Object.defineProperty(res, 'getInstance', {
    value: function() {
      if (has) {
        return phone;
      } else {
        has = true;
        // 调用时才创建实例
        phone = {
          call() {
            console.log("打电话");
          },
          playGame() {
            console.log("玩游戏");
          },
          watchMovie() {
            console.log("看电影");
          }
        }
        return phone;
      }
    },
    writable: false,
    configurable: false,
    enumerable: false
  });
  return res;
}());

var p1 = Phone.getInstance();
var p2 = Phone.getInstance();
var p3 = Phone.getInstance();
p1.call();
p2.playGame();
p3.watchMovie();
console.log(p1 === p2 && p2 === p3);