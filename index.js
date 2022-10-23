require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.get('/hello', (req, res, next) => {
  req.body = { ad: 'hello' }
  next()
}, (req, res, next) => {
  req.uwu = "hello"
  next()
}, (req, res) => {
  console.log(req.body, req.uwu, res.uww)
  res.send('hello wolrd')
})

mongoose.connect(process.env.DB, () => console.log('Connected to db...'))
app.listen(process.env.PORT, () => console.log('Listen on port 3001...'))

