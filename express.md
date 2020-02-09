## express
Express框架建立在node.js内置的http模块上。

Express框架的核心是对http模块的再包装。

Express框架等于在http模块之上，加了一个中间层。

### 中间件
中间件（middleware）就是处理HTTP请求的函数。它最大的特点就是，一个中间件处理完，再传递给下一个中间件。App实例在运行过程中，会调用一系列的中间件。

#### use
use是express注册中间件的方法，它返回一个函数。
```js
var express = require("express");
var http = require("http");
var app = express();
app.use("/home", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the homepage!\n");
});
app.use("/about", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Welcome to the about page!\n");
});
app.use(function(request, response) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.end("404 error!\n");
});
http.createServer(app).listen(1337);
//等同于 app.listen(1337);
```

### all方法和HTTP动词方法

```js
app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});
app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});
```
除了get方法以外，Express还提供post、put、delete方法，即HTTP动词都是Express的方法。

### 配置路由


### 指定静态文件目录
```js
app.use(express.static('public'));
```

### Express.Router
express.Router是一个构造函数，调用后返回一个路由器实例。然后，使用该实例的HTTP动词方法，为不同的访问路径，指定回调函数；最后，挂载到某个路径。
```js
var router = express.Router();
router.get('/', function(req, res) {
  res.send('首页');
});
router.get('/about', function(req, res) {
  res.send('关于');
});
app.use('/', router);
var router = express.Router();
// Router.route(api)
router.route('/api')
	.post(function(req, res) {
		// ...
	})
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err) res.send(err);
			res.json(bears);
		});
	});
app.use('/', router);
```
[参考](http://javascript.ruanyifeng.com/nodejs/express.html)
[api](https://expressjs.com/zh-cn/guide/routing.html)
