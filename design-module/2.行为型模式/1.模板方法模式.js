// 定义一个算法的操作框架，将一些步骤延迟到子类中，使得子类不改变算法的结构就可以重定义算法的某些特定步骤
class Frideg {
  put(thing) {
    this._open()
    this._putIn(thing)
    this._close()
  }
}

class Geli extends Frideg {
  static name = '格力'
  _open() {
    console.log('打开冰箱' + Geli.name)
  }
  _putIn(thing) {
    console.log('放入' + thing)
  }
  _close() {
    console.log('关闭冰箱' + Geli.name)
  }
}

class Haier extends Frideg {
  static name = '海尔'
  _open() {
    console.log('打开冰箱' + Haier.name)
  }
  _putIn(thing) {
    console.log('放入' + thing)
  }
  _close() {
    console.log('关闭冰箱' + Haier.name)
  }
}

const geli = new Geli()
const haier = new Haier()

geli.put('大象')
haier.put('大象')