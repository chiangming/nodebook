XMLHTTPRequest -> Jquery $.ajax 默认form表单形式Post
XMLHTTPRequest -> axios 默认json形式Post

fetch

浏览器中地址栏输入```data:text/html,<h1>hello</h1>```可以直接使用html标签生成页面

```data:text/html,<script src="https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js"></script>```

header[url(query),method,header]
body[a=b&c=d] form类型
body[{a:"b"}] json类型

# ajax
```js
$.ajax({
    url:"http://localhost:8099",
    success:function(data){console.log(data)}
})
```

响应结果
```js
url: GET /
query: {}
headers {
  host: 'localhost:8099',
  connection: 'keep-alive',
  accept: '*/*',
  origin: 'null',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'cors',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9'
}
body {}
```
POST 方法默认'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
```js
$.ajax({
    method:"POST",
    data:{a:10},
    url:"http://localhost:8099",
    success:function(data){console.log(data)}
})
```
```js
url: POST /
query: {}
headers {
  host: 'localhost:8099',
  connection: 'keep-alive',
  'content-length': '4',
  accept: '*/*',
  origin: 'null',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'cors',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9'
}
body [Object: null prototype] { a: '10' }
```
GET方法data放在url的query中
```js
$.ajax({
    method:"GET",
    data:{a:10},
    url:"http://localhost:8099",
    success:function(data){console.log(data)}
})
```
```js
url: GET /?a=10
query: { a: '10' }
headers {
  host: 'localhost:8099',
  connection: 'keep-alive',
  accept: '*/*',
  origin: 'null',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'cors',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9'
}
body {}
```
修改POST的'content-type':'application/json'
```js
$.ajax({
    method:"POST",
    headers:{'content-type':'application/json'},
    data:JSON.stringify({a:10}),
    url:"http://localhost:8099",
    success:function(data){console.log(data)}
})
```
```js
url: POST /
query: {}
headers {
  host: 'localhost:8099',
  connection: 'keep-alive',
  'content-length': '8',
  accept: '*/*',
  origin: 'null',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
  'content-type': 'application/json',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'cors',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9'
}
body { a: 10 }
```
# fetch
浏览器自带
```js
fetch('http://localhost:8099').then(res=>res.json()).then(d=>console.log(d))
```
```js
url: GET /
query: {}
headers {
  host: 'localhost:8099',
  connection: 'keep-alive',
  origin: 'null',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
  accept: '*/*',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'cors',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9'
}
body {}
```
```js
fetch('http://localhost:8099',{
  method:"POST",
  headers:{'content-type': 'application/x-www-form-urlencoded'},
  body:"a=12&b=23"
}).then(res=>res.json()).then(d=>console.log(d))
```
```js
url: POST /
query: {}
headers {
  host: 'localhost:8099',
  connection: 'keep-alive',
  'content-length': '9',
  origin: 'null',
  'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36',
  'content-type': 'application/x-www-form-urlencoded',
  accept: '*/*',
  'sec-fetch-site': 'cross-site',
  'sec-fetch-mode': 'cors',
  'accept-encoding': 'gzip, deflate, br',
  'accept-language': 'zh-CN,zh;q=0.9'
}
body [Object: null prototype] { a: '12', b: '23' }
```
# axios(前后端均可使用)
```js
axios({
    method:"POST",
    data:{a:12},
    url:"http://localhost:8099",
}).then(res=>{console.log(res.data)})
```
```js
axios({
    method:"POST",
    headers:{'content-type':'application/x-www-form-urlencoded'},
    data:"a=123&b=abc",
    url:"http://localhost:8099",
})
```
