var person = {
  name: "matt",
  cell: "1234"
}

// var func = {
//     func1: function() {}
//   }
//   // 获取对象的指定属性的属性描述符
// console.log(Object.getOwnPropertyDescriptor(person, "name"))
//   // { value: 'matt', writable: true, enumerable: true, configurable: true }

//  enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
//  configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性（包括configurable）是否可以被修改。
//  当writable属性设置为false时，该属性被称为“不可写”。它不能被重新分配。严格模式重写会报错

// console.log(Object.getOwnPropertyDescriptor(func, "func1"))
//   // { value: [Function: func1], writable: true, enumerable: true, configurable: true}

// person.name = "nirean"
// console.log("writable:true " + person.name)

// for (let prop in person) {
//   console.log("enumerable:true " + prop)
// }

// delete person.name
// console.log("configurable:true " + person.name)


Object.defineProperty(person, "name", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

person.name = "nirean"
console.log("writable:false " + person.name) // static

for (let prop in person) {
  console.log("enumerable:false " + prop) // 没有name属性
}

delete person.name
console.log("configurable:false " + person.name) // 无法删除

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]