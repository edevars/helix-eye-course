import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send("<h1>Hola mundo</h1>")
});

app.listen(6001, () => {
  console.log("http://localhost:6001");
})