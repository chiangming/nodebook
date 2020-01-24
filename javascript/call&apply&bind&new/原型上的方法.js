function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}
isArray([1, 2, 3]);
// true

console.log(Object.prototype.toString.call(123))