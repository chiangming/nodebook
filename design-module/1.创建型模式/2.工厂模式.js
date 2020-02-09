// 根据参数决定去实例汽车还是摩托车

// 定义接口
const Vehicle = {
  run() {
    console.log(this.name + '跑...');
  }
}

//汽车类
function Car() {
  this.name = "汽车";
}
Car.prototype = Object.assign(Vehicle); // 前拷贝 继承

//摩托车类
function Moto() {
  this.name = "摩托车";
}
Moto.prototype = Object.assign(Vehicle);

// 车库
const Garage = {
  chooseVehicle(constructor) {
    return new constructor();
  }
};
// Object.freeze() 方法可以冻结一个对象。
// 一个被冻结的对象再也不能被修改；
// 冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，
// 不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
// 此外，冻结一个对象后该对象的原型也不能被修改。
// freeze() 返回和传入的参数相同的对象。
Object.freeze(Garage);

var car = Garage.chooseVehicle(Car);
var moto = Garage.chooseVehicle(Moto);
car.run();