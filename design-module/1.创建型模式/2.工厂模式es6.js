// 根据参数决定去实例汽车还是摩托车

// 定义接口
class Vehicle {
  run() {
    console.log(this.name + '跑...');
  }
}

//汽车类
class Car extends Vehicle {
  constructor() {
    super()
    this.name = "汽车";
  }
}

//摩托车类
class Moto extends Vehicle {
  constructor() {
    super()
    this.name = "摩托车";
  }
}

// 车库
class Garage {
  static chooseVehicle(constructor) {
    return new constructor();
  }
};

Object.freeze(Garage);

var car = Garage.chooseVehicle(Car);
var moto = Garage.chooseVehicle(Moto);
car.run();