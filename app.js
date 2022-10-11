const express = require('express')
const app = express()
const port = 3000

app.use( express.static("public"))

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.listen(port, () => {
  console.log("funciona")
})
