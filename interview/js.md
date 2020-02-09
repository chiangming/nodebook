# 用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
> 描述：这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：  
(a) 生成一个长度为5的空数组arr。  
(b) 生成一个（2－32）之间的随机整数rand。   
(c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]    
(d) 最终输出一个长度为5，且内容不重复的数组arr。
```js
function buildArray(arr, length, min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(num)) { arr.push(num); }
    return arr.length === length ? arr : buildArray(arr, length, min, max);
}
var result = buildArray([], 5, 2, 32);
console.table(result);
```

# 写一个方法去掉字符串中的空格
```js
var trim = function(str){
return str.replace(/\s*/g,"");
}
str.replace(/\s*/g,""); //去除字符串内所有的空格
str.replace(/^\s*|\s*$/g,""); //去除字符串内两头的空格
str.replace(/^\s*/,""); //去除字符串内左侧的空格
str.replace(/(\s*$)/g,""); //去除字符串内右侧的空格
```
# 写一个方法把下划线命名转成大驼峰命名
function toCamelCase(str) {
  if (typeof str !== 'string') {
    return str;
  }
  return str
    .split('_')
    .map(item => item.charAt(0).toUpperCase() + item.substr(1, item.length))
    .join('');
}

#  写一个把字符串大小写切换的方法
function caseConvertEasy(str) {
  return str.split('').map(s => {
    if (s.charCodeAt() <= 90) {
      return s.toLowerCase()
    }
    return s.toUpperCase()
  }).join('')
}

# JavaScript跨域总结与解决办法
https://www.cnblogs.com/rainman/archive/2011/02/20/1959325.html#m3

