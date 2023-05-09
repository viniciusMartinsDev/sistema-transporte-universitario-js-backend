const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const userRoute = require('./routes/UserRoute')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(userRoute)

app.listen(3000)
console.log('Servidor iniciado')
