// 升序
function compare(value1, value2) {
  return value1 - value2;
}
var values = [0, 1, 5, 10, 15];
values.sort()
console.log(values)

values.sort(compare)
console.log(values)