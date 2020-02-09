/**
 * Created by prettyRain on 2018/11/27.
 * name: 设置 cookie 中，保存 session 的字段名称，默认为 connect.sid 。 
 store: session 的存储方式，默认存放在内存中，也可以使用 redis，mongodb 等。express 生态中都有相应模块的支持。 
 secret: 通过设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改。 
 请注意，secure:true是一个推荐的选项，但是这个选项必须采用HTTPS协议。如果启用了secure，但是是用HTTP进行的访问，
 那么cookie不会发送给客户端，如果nodejs前是有反向代理服务器的，那么需要开启trust proxy。
 cookie: 设置存放 session id 的 cookie 的相关选项，默认为 
 (default: { path: ‘/’, httpOnly: true, secure: false, maxAge: null }) 
 genid: 产生一个新的 session_id 时，所使用的函数， 默认使用 uid2 这个 npm 包。 
 rolling: 每个请求都重新设置一个 cookie，默认为 false。 
 resave: 即使 session 没有被修改，也保存 session 值，默认为 true。
 */

var express = require('express');
var app = express();
var cookie = require('cookie-parser');
var session = require('express-session');

app.use(cookie());
app.set('trust proxy', 1)
app.use(session({
  secret: '12345',
  name: 'testapp', //这里的name值得是cookie的name，默认cookie的name是：connect.sid
  cookie: { maxAge: 80000 }, //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
  resave: false,
  saveUninitialized: true
}));

app.get("/login/:name", function(req, res, next) {
  var name = req.param('name');
  if (!name) {
    next();
    return;
  }
  req.session.login = '1';
  req.session.username = name;
  res.send("");
})
app.get('/', function(req, res) {
  res.send(req.session.username);
})
app.listen(3000);