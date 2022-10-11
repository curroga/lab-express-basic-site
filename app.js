const express = require('express')
const app = express()
const port = 3000

app.use( express.static("public"))

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/views/works.html")
} )

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html")
})

app.get("/fotos", (req, res) => {
  res.sendFile(__dirname + "/views/foto-galeries.html")
})





app.get("*", (req, res) => {
  res.send("No existe la página")
})

app.listen(port, () => {
  console.log("funciona")
})


