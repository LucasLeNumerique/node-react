const express = require('express')
const port = 3000
const db = require('./config/db')
const people = require('./routes/people')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

db()

app.use('/api/people', people)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})