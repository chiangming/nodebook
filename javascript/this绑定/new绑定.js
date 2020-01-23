function create() {
  // 创建一个空的对象
  var obj = new Object(),
    // 获得构造函数，arguments中去除第一个参数
    Con = [].shift.call(arguments);
  // 链接到原型，obj 可以访问到构造函数原型中的属性
  obj.__proto__ = Con.prototype;
  // 绑定 this 实现继承，obj 可以访问到构造函数中的属性
  var ret = Con.apply(obj, arguments);
  // 优先返回构造函数返回的对象
  return ret instanceof Object ? ret : obj;
};

function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 使用内置函数new
var person = new Person("matt", 25);

// 使用手写的new，即create
var person2 = create(Person, "matt", 25)
console.log(person2 instanceof Person)