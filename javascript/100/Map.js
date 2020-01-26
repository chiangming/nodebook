const reporter = {
  report: function(key, value) {
    console.log("Key: %s, Value: %s", key, value);
  }
};

let map = new Map([
  ['name', 'An'],
  ['des', 'JS']
])
map.forEach(function(value, key, map) {
  this.report(key, value);
}, reporter);

// Map 转 JSON

function mapToJson(map) {
  return JSON.stringify([...map])
}

map = new Map().set('name', 'An').set('des', 'JS')
console.log(mapToJson(map)) // [["name","An"],["des","JS"]]

// JSON 转 Map
function jsonToStrMap(jsonStr) {
  return objToMap(JSON.parse(jsonStr));
}

console.log(jsonToStrMap('{"name": "An", "des": "JS"}')) // Map {"name" => "An", "des" => "JS"}