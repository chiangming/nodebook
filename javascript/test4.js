var colors = ["red", "blue", "green"]; // 创建一个包含 3 个字符串的数组
console.log(typeof(colors.toString()) == 'string'); // red,blue,green 
console.log(colors.valueOf() instanceof Array); // red,blue,green 
console.log(colors); // red,blue,green 
console.log(colors.join(",")); //red,green,blue 
console.log(colors.join("||")); //red||green||blue