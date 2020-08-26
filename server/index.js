const express = require('express')
const cors = require('cors')
const data = require("./data/mock")
const app = express()
const port = 3000

app.use(cors())
app.get('/', (req, res) => {
  res.send(data.days)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})