var express = require('express')

var app = express()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")

  console.log("url:", req.method, req.url)
  console.log("query:", req.query)
  console.log("headers", req.headers)
  console.log("body", req.body)
  res.json({ code: 0, content: "OK" })
})

app.listen(8099)