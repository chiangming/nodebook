# 页面导入样式时，使用link和@import有什么区别？
```html
<link rel="stylesheet" href="****.css" type="text/css">
<style type="text/css">
@import "***.css"
</style>
```

1. link是HTML标签，@import是css提供的。
2. link引入的样式页面加载时同时加载，@import引入的样式需等页面加载完成后再加载。
3. link没有兼容性问题，@import不兼容ie5以下。
4. link可以通过js操作DOM动态引入样式表改变样式，而@import不可以。

# html的元素有哪些（包含H5）？
行内元素
a
b
span
i
em
strong
block
input
button
select
form  
块级元素
div
p
ul
ol
li
h1~h6
textarea    
H5新增
header
section
asize
footer
nav
article

# HTML5的文件离线储存怎么使用，工作原理是什么？
## 1、cookie
（1）本身用于客户端和服务端通信
（2）但是它有本地存储的功能，于是就被“借用”
（3）document.cookie = …获取和修改即可
（4）cookie用于存储的缺点
①存储量太小，只有4kb
②所有http请求都带着，会影响获取资源的效率
③api简单，需要封装才能用document.cookie
## 2、localStorage,sesseionStorage
（1）html5专门为存储而设计，最大容量5M  
（2）api简单易用  
（3）lcoalStorage.setItem(key, value);localStorage.getItem(key);  
（4）ios safari隐藏模式下:localStorage.getItem会报错，建议统一使用try-catch封装 
## 3、sessionStorage
用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。

## LocalForage
Mozilla 开发了一个叫 localForage 的库 ，使得离线数据存储在任何浏览器都是一项容易的任务。localForage 是一个使用非常简单的 JavaScript 库的，提供了 get，set，remove，clear 和 length 等等 API，还具有以下特点：
支持回调的异步 API；
支持 IndexedDB，WebSQL 和 localStorage 三种存储模式；
支持 BLOB 和任意类型的数据，让您可以存储图片，文件等。
支持 ES6 Promises

<table>
<tr>
  <th></th><th>cookie</th><th>localstorage</th><th>sessionstorage</th><th>session</th>
</tr>
<tr>
  <td></td><td colspan="4" style="text-align:center">k-v存储 同域名可用</td>
</tr>
<tr>
  <td>存储位置</td><td colspan="3" style="text-align:center">客户端</td><td style="text-align:center">服务端</td>
</tr>
<tr>
  <td>特点</td><td style="text-align:center">随请求头每次提交</td><td style="text-align:center">不随头提交 可长时保存</td><td style="text-align:center">不随头提交页面关闭即失效</td><td style="text-align:center">安全</td>
</tr>
<tr>
  <td>跨页</td><td style="text-align:center" colspan="2">可跨页，不可跨域</td><td style="text-align:center">不可跨页，不可跨域</td><td style="text-align:center">可跨页，不可跨域</td>
</tr>
</table>


# 简述超链接target属性的取值和作用 
`<a>` 标签的 target 属性规定在何处打开链接文档。

语法：`<a target="value">`
属性值：
|值 |描述|
|--|--|
|_blank|在新窗口中打开被链接文档。|
|_self|默认。在相同的框架中打开被链接文档。|
|_parent|在父框架集中打开被链接文档。|
|_top|在整个窗口中打开被链接文档。|
|framename|在指定的框架中打开被链接文档。|

