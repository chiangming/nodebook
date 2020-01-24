var numbers = [5, 458, 120, -215];
Math.max.apply(Math, numbers); //458    
Math.max.call(Math, 5, 458, 120, -215); //458

// ES6
Math.max.call(Math, ...numbers); // 458
console.log(Math.max(...numbers))

// Math.max.apply(Math, "abc")

Function.prototype.apply2 = function(context, args) {
  context = context ? Object(context) : window;
  context.fn = this; // 1. foo.fn = bar

  if (!args) {
    throw new TypeError('CreateListFromArrayLike called on non-object')
  }
  let result = context.fn(...args); // 2. foo.fn(...args)

  delete context.fn // 3. delete foo.fn()
  return result;
}

Math.max.apply2(Math, "abc")