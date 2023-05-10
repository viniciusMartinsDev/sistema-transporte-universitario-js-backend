const express = require('express')

const app = express()
const userRoute = require('./routes/UserRoute')

app.use(express.json())

app.use(userRoute)

app.listen(3000)
console.log('Servidor iniciado')
