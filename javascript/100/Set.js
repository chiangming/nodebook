let set1 = new Set([1, 2, 3])
let set2 = new Set([2, 4, 1])
let sort = new Set([...set2].sort((x, y) => x - y))
let intersect = new Set([...set1].filter(value => set2.has(value)))
let union = new Set([...set1, ...set2])
let difference = new Set([...set1].filter(value => !set2.has(value)))

console.log(sort) // Set{1, 2, 4}
console.log(intersect) // Set {2, 3}
console.log(union) // Set {1, 2, 3, 4}
console.log(difference) // Set {1}

let set = new Set();
let a = NaN;
let b = NaN;
let c = null;
let d = undefined;
set.add(a).add(b).add(c).add(d).add(5).add('5').add(1).add({ a: "abc" })
set.has(1) // true
set.has(3) // false
set.delete(1)
set.has(1) // false

console.log(set.keys()) // [Set Iterator] { NaN, null, undefined, 5, '5' }
for (let item of set.keys()) {
  console.log(item);
} // NaN  null  undefined  5 '5'
console.log(set.values()) //[Set Iterator] { NaN, null, undefined, 5, '5' }
console.log(set.entries())
  // [Set Entries] {
  //   [ NaN, NaN ],
  //   [ null, null ],
  //   [ undefined, undefined ],
  //   [ 5, 5 ],
  //   [ '5', '5' ]
  // }
for (let item of set.entries()) {
  console.log(item);
  console.log(Array.isArray(item)) //true 可以item[0] 不能item.key
}
//   [ NaN, NaN ],
//   [ null, null ],
//   [ undefined, undefined ],
//   [ 5, 5 ],
//   [ '5', '5' ]
console.log(set) // Set { NaN, null, undefined, 5, '5' }

console.log(set.length) // undefined
console.log(set.size) // 5



set.clear();
console.log(set.length) // undefined
console.log(set.size) // 0