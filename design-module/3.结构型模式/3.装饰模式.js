// 装饰模式：适用于动态添加功能或者类定义被隐藏的情况
// 通过装饰类包含基本类以及在装饰类中添加装饰方法的方式去装饰基本类

class Coffee {
  make() {
    console.log('泡咖啡')
  }

  getPrice() {
    return 10
  }
}

class CoffeeDecorator {
  constructor(coffee) {
    this.coffee = coffee
  }

  make() {
    this.coffee.make()
  }

  getPrice() {
    return this.coffee.getPrice()
  }
}

class AddIce extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee)
  }

  make() {
    this.coffee.make()
  }

  getPrice() {
    return this.coffee.getPrice() + 1
  }
}