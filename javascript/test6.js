function Car(age, color) {
  this.age = age
  this.color = color
  console.log(color)
  arguments[1] = 'blue'
  console.log(arguments[1])
  this.showColor = function() {
    console.log(this.color)
  }
}
let color = 'red'
let car = new Car(1, color)
car.showColor();
console.log(color)