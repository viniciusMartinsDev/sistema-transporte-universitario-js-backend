const express = require('express')

const app = express()
const userRoute = require('./routes/UserRoute')
const transportRoute = require('./routes/TransportRoute')

app.use(express.json())

app.use(userRoute)
app.use(transportRoute)

app.listen(3000)
console.log('Servidor iniciado')
