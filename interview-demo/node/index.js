var express = require('express')

var app = express()
console.log(__dirname)
app.use(express.static(__dirname))
app.listen(8090)

// 修改响应头
var app2 = express()
app2.get("/", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*")
  res.send("你好")
})
app2.listen(8091)

// jsonp：通过herf，src请求的js脚本或者css文件或者图片视频文件不存在跨域问题
var app3 = express()
app3.get("/", function(req, res) {
  var funcname = req.query.callback;
  res.send(funcname + '("你好")')
})
app3.listen(8092)